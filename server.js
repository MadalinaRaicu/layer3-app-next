// const { createServer } = require('http');
// const { parse } = require('url');

// const next = require('next');
// const devProxy = {
//   '/api': {
//     target: 'https://layer3.xyz',
//     changeOrigin: true,
//     pathRewrite: { '^/api': '/api' },
//   },
// };

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = createServer((req, res) => {
//     const parsedUrl = parse(req.url, true);
//     const { pathname } = parsedUrl;

//     if (pathname.startsWith('/api')) {
//       createProxyMiddleware(devProxy['/api'])(req, res);
//     } else {
//       handle(req, res, parsedUrl);
//     }
//   });

//   server.listen(3000, (err) => {
//     if (err) throw err;
//     console.log('> Ready on http://localhost:3000');
//   });
// });