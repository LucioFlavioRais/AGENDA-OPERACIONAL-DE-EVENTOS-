{
  "name": "agenda-operacional",
  "version": "1.0.0",
  "scripts": {
    "build": "mkdir -p dist && cp index.html dist/ && cp -r * dist/ || true",
    "start": "serve dist"
  }
}