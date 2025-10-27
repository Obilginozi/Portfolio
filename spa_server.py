#!/usr/bin/env python3
import http.server
import socketserver
import os
import mimetypes

class SPAHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Get the requested path without query parameters
        path = self.path.split('?')[0]
        original_path = path
        
        # Route pages to their actual directories
        if path == '/AtletikBezelye':
            # Serve AtletikBezelye/index.html
            self.path = '/AtletikBezelye/index.html'
        elif path == '/IvyMontgomery':
            # Serve IvyMontgomery/index.html
            self.path = '/IvyMontgomery/index.html'
        elif path == '/Developer':
            # Serve index.html for Developer SPA route
            self.path = '/index.html'
        elif path == '/DieterClock_PrivacyPolicy':
            # Serve PrivacyPolicy/Privacy_Policy.html but keep clean URL
            self.path = '/PrivacyPolicy/Privacy_Policy.html'
        
        # Intercept the end_path to customize how URL is displayed
        if original_path == '/DieterClock_PrivacyPolicy':
            # Check if file exists in PrivacyPolicy directory
            if os.path.exists('PrivacyPolicy/Privacy_Policy.html'):
                with open('PrivacyPolicy/Privacy_Policy.html', 'rb') as f:
                    self.send_response(200)
                    self.send_header('Content-type', 'text/html; charset=utf-8')
                    # Add custom headers to prevent URL rewriting
                    self.send_header('Content-Length', str(os.path.getsize('PrivacyPolicy/Privacy_Policy.html')))
                    self.end_headers()
                    self.wfile.write(f.read())
                    return
        
        # For all other requests, serve normally
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

PORT = 8005
Handler = SPAHTTPRequestHandler

print(f"🚀 SPA Server running at http://localhost:{PORT}")
print(f"📱 Mobile: http://192.168.0.209:{PORT}")
print("Press Ctrl+C to stop")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
