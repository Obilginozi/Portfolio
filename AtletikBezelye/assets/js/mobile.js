// Mobile Enhancement Script for Portfolio
(function() {
    'use strict';
    
    
    // Mobile Detection and Enhancement
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    
    // Add mobile classes to body
    if (isMobile) {
        document.body.classList.add('mobile-device');
        console.log('📱 Portfolio: Mobile device detected - optimizations enabled');
    }
    if (isTouchDevice) {
        document.body.classList.add('touch-device');
        console.log('👆 Portfolio: Touch device detected - touch optimizations enabled');
    }
    
    // Mobile-specific optimizations
    function initMobileOptimizations() {
        // Prevent zoom on input focus (iOS)
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                if (isMobile) {
                    const viewport = document.querySelector('meta[name="viewport"]');
                    viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
                }
            });
            
            input.addEventListener('blur', function() {
                if (isMobile) {
                    const viewport = document.querySelector('meta[name="viewport"]');
                    viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes');
                }
            });
        });
        
        // Smooth scrolling for mobile
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Mobile-friendly image lazy loading
        const images = document.querySelectorAll('img[data-src]');
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }
        
        // Mobile navigation enhancement
        const navToggle = document.querySelector('.nav-toggle, .menu-toggle');
        const navMenu = document.querySelector('.nav-menu, .navigation');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                document.body.classList.toggle('nav-open');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    navMenu.classList.remove('active');
                    document.body.classList.remove('nav-open');
                }
            });
        }
        
        // Mobile-friendly project cards
        const projectCards = document.querySelectorAll('.project-card, .certificate-card');
        projectCards.forEach(card => {
            card.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            card.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('touch-active');
                }, 150);
            });
        });
        
        // Mobile scroll performance optimization
        let ticking = false;
        function updateScrollPosition() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            document.body.classList.toggle('scrolled', scrollTop > 50);
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateScrollPosition);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestTick, { passive: true });
        
        // Mobile orientation change handling
        window.addEventListener('orientationchange', function() {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);
        });
        
        // Mobile-friendly animations
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        if ('IntersectionObserver' in window) {
            const animationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            }, { threshold: 0.1 });
            
            animatedElements.forEach(el => animationObserver.observe(el));
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initMobileOptimizations();
        });
    } else {
        initMobileOptimizations();
    }
    
    // Mobile-specific CSS additions
    const mobileStyles = `
        <style>
        /* Mobile-specific styles */
        .mobile-device .touch-active {
            transform: scale(0.98);
            transition: transform 0.1s ease;
        }
        
        .mobile-device .scrolled .navbar {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .mobile-device .nav-open {
            overflow: hidden;
        }
        
        .mobile-device .nav-menu.active {
            transform: translateX(0);
        }
        
        .mobile-device .lazy {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .mobile-device .lazy.loaded {
            opacity: 1;
        }
        
        .mobile-device .animate-on-scroll {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }
        
        .mobile-device .animate-on-scroll.animated {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Touch feedback */
        .touch-device button:active,
        .touch-device .btn:active,
        .touch-device a:active {
            transform: scale(0.95);
            transition: transform 0.1s ease;
        }
        
        /* Mobile-friendly focus states */
        .mobile-device button:focus,
        .mobile-device .btn:focus,
        .mobile-device a:focus {
            outline: 2px solid #007bff;
            outline-offset: 2px;
        }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', mobileStyles);
    
    
        // Fix malformed image URLs before they cause issues
        function fixImageUrls() {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                if (img.src) {
                    let correctedSrc = img.src;
                    let wasFixed = false;
                    
                    // Handle all possible malformed patterns
                    if (correctedSrc.includes('/images//assets/images/')) {
                        correctedSrc = correctedSrc.replace('/images//assets/images/', '/assets/images/');
                        wasFixed = true;
                    } else if (correctedSrc.includes('/images/assets/images/')) {
                        correctedSrc = correctedSrc.replace('/images/assets/images/', '/assets/images/');
                        wasFixed = true;
                    } else if (correctedSrc.includes('/Developer/images//assets/images/')) {
                        correctedSrc = correctedSrc.replace('/Developer/images//assets/images/', '/assets/images/');
                        wasFixed = true;
                    } else if (correctedSrc.includes('/Developer/images/assets/images/')) {
                        correctedSrc = correctedSrc.replace('/Developer/images/assets/images/', '/assets/images/');
                        wasFixed = true;
                    } else if (correctedSrc.includes('/IvyMontgomery/images//assets/images/')) {
                        correctedSrc = correctedSrc.replace('/IvyMontgomery/images//assets/images/', '/assets/images/');
                        wasFixed = true;
                    } else if (correctedSrc.includes('/IvyMontgomery/images/assets/images/')) {
                        correctedSrc = correctedSrc.replace('/IvyMontgomery/images/assets/images/', '/assets/images/');
                        wasFixed = true;
                    } else if (correctedSrc.includes('/AtletikBezelye/images//assets/images/')) {
                        correctedSrc = correctedSrc.replace('/AtletikBezelye/images//assets/images/', '/assets/images/');
                        wasFixed = true;
                    } else if (correctedSrc.includes('/AtletikBezelye/images/assets/images/')) {
                        correctedSrc = correctedSrc.replace('/AtletikBezelye/images/assets/images/', '/assets/images/');
                        wasFixed = true;
                    }
                    
                    if (wasFixed) {
                        img.src = correctedSrc;
                    }
                }
            });
        }
    
    // Run URL fix immediately and on DOM changes
    fixImageUrls();
    
    // Watch for dynamically added images
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        if (node.tagName === 'IMG') {
                            fixImageUrls();
                        } else if (node.querySelectorAll) {
                            const images = node.querySelectorAll('img');
                            if (images.length > 0) {
                                fixImageUrls();
                            }
                        }
                    }
                });
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Easter eggs for curious developers! 🥚
    setTimeout(() => {
        console.log('%c🎉 Hey there, curious developer!', 'color: #ff6b6b; font-size: 16px; font-weight: bold;');
        console.log('%c👋 Thanks for checking out my portfolio!', 'color: #4ecdc4; font-size: 14px;');
        console.log('%c💡 Fun fact: This portfolio is built with React and deployed on GitHub Pages!', 'color: #45b7d1; font-size: 12px;');
            console.log('%c🚀 Want to see the code? Check out: https://github.com/Obilginozi/Portfolio', 'color: #96ceb4; font-size: 12px;');
        console.log('%c📧 Got questions? Drop me a line: oguzhanbilgin@outlook.com', 'color: #feca57; font-size: 12px;');
        console.log('%c🎯 P.S. - The service worker is caching everything for offline use! Pretty cool, right?', 'color: #ff9ff3; font-size: 12px;');
    }, 2000);
    
})();
