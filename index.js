const express = require('express')
const path = require('path')

const server = express();
const port = process.env.PORT || 8082;
server.use('/assets', express.static(path.resolve(__dirname, './assets')))
server.use('/dist', express.static(path.resolve(__dirname, './dist')))

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
})

server.listen(port, () => {
  console.log(`server started at ${port}`)
})
