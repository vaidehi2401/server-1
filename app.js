const http =require('http')
const fs = require('fs');
const { buffer } = require('stream/consumers');
const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;
    if(req.url === '/'){
        fs.readFile('formValues.txt', 'utf8', (err, data) => {
            if (err) {
                data = "No data submitted yet!";
            }

            res.setHeader('Content-Type', 'text/html');
            res.end(`
                <h2>${data}</h2>
                <form action="/message" method="POST">
                    <label>Name:</label>
                    <input type="text" name="username">
                    <button type="submit">Submit</button>
                </form>
            `);
        });
    }
    else{
        if(req.url == '/message'){
            res.setHeader('Content-Type', 'text/html');
            let body=[];
            req.on('data', (chunks)=>{
                console.log(chunks);
                body.push(chunks)
            })
            req.on('end', ()=>{
                let buffer = Buffer.concat(body);
                console.log(buffer)
                let formData = buffer.toString();
                console.log(formData)
                const formValues= formData.split('=')[1];
                fs.writeFile('formValues.txt', formValues, (err)=>{
                res.statusCode=302;
                res.setHeader('Location', '/');
                res.end();
                })
            })
        }
    }
})

let port = 3000;
server.listen(port, ()=>{
    console.log("server is running")
})