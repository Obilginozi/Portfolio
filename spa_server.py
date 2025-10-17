#!/usr/bin/env python3
import http.server
import socketserver
import os
import mimetypes

class SPAHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Get the requested path without query parameters
        path = self.path.split('?')[0]
        
        # List of paths that should serve index.html (SPA routes)
        spa_routes = ['/Developer', '/developer', '/IvyMontgomery', '/AtletikBezelye']
        
        # Check if this is a SPA route
        if path in spa_routes:
            # Serve index.html for SPA routes
            self.path = '/index.html'
            return http.server.SimpleHTTPRequestHandler.do_GET(self)
        
        # For all other requests, serve normally
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

PORT = 8003
Handler = SPAHTTPRequestHandler

print(f"🚀 SPA Server running at http://localhost:{PORT}")
print(f"📱 Mobile: http://192.168.0.209:{PORT}")
print("Press Ctrl+C to stop")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
