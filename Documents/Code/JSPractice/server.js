const http = require('http')

const server = http.createServer((req,res) =>{

    if(req.url === '/'){
        res.end('Welcome');
       
    }
    else if (req.url ==='/about'){
        res.end('Hey');
       
    }
    else{
        res.end(`<a href = '/' >Back<a>`)
}

})

server.listen(5000)