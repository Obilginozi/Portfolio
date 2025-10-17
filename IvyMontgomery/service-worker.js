// Service Worker for Portfolio
const CACHE_NAME = 'portfolio-v7';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/main.5f76c29b.css',
  '/assets/js/main.2c90698c.js',
  '/assets/css/mobile.css',
  '/assets/js/mobile.js',
  '/assets/images/ProfilePicture.png',
  '/assets/images/LoginBlank.png',
  '/assets/images/LoginBlankA.png',
  '/assets/images/Login.png',
  '/manifest.json',
  '/favicon.ico'
];

// Install event - skip waiting to avoid CRA messages
self.addEventListener('install', function(event) {
  console.log('🚀 Portfolio Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('📦 Portfolio Service Worker: Cache opened successfully');
        return cache.addAll(urlsToCache);
      })
      .then(function() {
        console.log('✅ Portfolio Service Worker: All resources cached successfully');
        // Skip waiting to prevent CRA PWA messages
        return self.skipWaiting();
      })
      .catch(function(error) {
        console.error('❌ Portfolio Service Worker: Cache installation failed:', error);
      })
  );
});

// Listen for messages from the main thread
self.addEventListener('message', function(event) {
  if (event.data && event.data.action === 'skipWaiting') {
    console.log('🔄 Portfolio Service Worker: Skipping waiting and activating immediately');
    self.skipWaiting();
  }
});

// Fetch event with comprehensive path correction
self.addEventListener('fetch', function(event) {
  let requestUrl = event.request.url;
  let correctedUrl = null;
  
  // Fix various path issues silently - handle all possible malformed patterns
  if (requestUrl.includes('/images//assets/images/')) {
    correctedUrl = requestUrl.replace('/images//assets/images/', '/assets/images/');
  } else if (requestUrl.includes('/images/assets/images/')) {
    correctedUrl = requestUrl.replace('/images/assets/images/', '/assets/images/');
  } else if (requestUrl.includes('//assets/images/')) {
    correctedUrl = requestUrl.replace('//assets/images/', '/assets/images/');
  } else if (requestUrl.includes('/Developer/images//assets/images/')) {
    correctedUrl = requestUrl.replace('/Developer/images//assets/images/', '/assets/images/');
  } else if (requestUrl.includes('/Developer/images/assets/images/')) {
    correctedUrl = requestUrl.replace('/Developer/images/assets/images/', '/assets/images/');
  } else if (requestUrl.includes('/IvyMontgomery/images//assets/images/')) {
    correctedUrl = requestUrl.replace('/IvyMontgomery/images//assets/images/', '/assets/images/');
  } else if (requestUrl.includes('/IvyMontgomery/images/assets/images/')) {
    correctedUrl = requestUrl.replace('/IvyMontgomery/images/assets/images/', '/assets/images/');
  } else if (requestUrl.includes('/AtletikBezelye/images//assets/images/')) {
    correctedUrl = requestUrl.replace('/AtletikBezelye/images//assets/images/', '/assets/images/');
  } else if (requestUrl.includes('/AtletikBezelye/images/assets/images/')) {
    correctedUrl = requestUrl.replace('/AtletikBezelye/images/assets/images/', '/assets/images/');
  }
  
  // If URL was corrected, create a new request with the corrected URL
  if (correctedUrl) {
    const correctedRequest = new Request(correctedUrl, {
      method: event.request.method,
      headers: event.request.headers,
      body: event.request.body,
      mode: event.request.mode,
      credentials: event.request.credentials,
      cache: event.request.cache,
      redirect: event.request.redirect,
      referrer: event.request.referrer
    });
    
    event.respondWith(
      caches.match(correctedRequest)
        .then(function(response) {
          if (response) {
            return response;
          }
          return fetch(correctedRequest);
        })
        .catch(function(error) {
          console.error('❌ Portfolio Service Worker: Fetch failed for corrected URL:', correctedUrl, error);
          throw error;
        })
    );
    return;
  }
  
  // Normal fetch handling for uncorrected URLs
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch(function(error) {
        console.error('❌ Portfolio Service Worker: Fetch failed for:', event.request.url, error);
        throw error;
      })
  );
});

// Activate event - claim clients immediately to avoid CRA messages
self.addEventListener('activate', function(event) {
  console.log('🔄 Portfolio Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Portfolio Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      console.log('✅ Portfolio Service Worker: Activation complete');
      // Claim all clients immediately to prevent CRA PWA messages
      return self.clients.claim();
    }).then(function() {
      // Easter eggs for curious developers! 🥚
      setTimeout(() => {
        console.log('%c🎭 Service Worker Easter Egg!', 'color: #e74c3c; font-size: 14px; font-weight: bold;');
        console.log('%c🤖 "I\'m not just caching files, I\'m caching memories!" - Service Worker', 'color: #3498db; font-size: 12px;');
        console.log('%c⚡ Pro tip: This SW handles offline mode like a boss!', 'color: #f39c12; font-size: 12px;');
        console.log('%c🎪 Fun fact: Service Workers are like invisible assistants for your web app!', 'color: #9b59b6; font-size: 12px;');
      }, 3000);
    })
  );
});
