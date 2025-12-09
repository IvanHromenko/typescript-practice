import { createServer } from 'node:http';
const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, TypeScript with Node.js!\n');
});
server.listen(3000);
