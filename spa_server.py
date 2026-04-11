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

        # Legacy privacy URLs → canonical document path
        if original_path in ('/DieterClock_PrivacyPolicy', '/DieterClock_PrivacyPolicy.html'):
            self.send_response(301)
            self.send_header('Location', '/DieterClock/Privacy_Policy.html')
            self.send_header('Content-Length', '0')
            self.end_headers()
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
