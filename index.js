const http = require('http') 

const HOST = 'localhost'
const PORT = '3000'

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('resposta enviada')
}) 

server.listen(PORT, HOST, () => {
    console.log(`Servidor esta rodando em: http://${HOST}:${PORT}`);git remote add origin https://github.com/rguilhermelins/node-api.git
    git branch -M main
    git push -u origin main 
})