const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname);
const contentTypes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
    let requestPath;
    try {
        requestPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    } catch {
        res.writeHead(400);
        res.end('400 - Caminho invalido');
        return;
    }

    if (requestPath === '/') requestPath = '/index.html';
    const filePath = path.resolve(root, `.${requestPath}`);
    if (filePath !== root && !filePath.startsWith(`${root}${path.sep}`)) {
        res.writeHead(403);
        res.end('403 - Acesso negado');
        return;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('404 - Arquivo nao encontrado');
        } else {
            const contentType = contentTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
