const http =require('http')
const routes = require("./routes");

const { buffer } = require('stream/consumers');
const server = http.createServer(routes)

let port = 4000;
server.listen(port, ()=>{
    console.log("server is running")
})