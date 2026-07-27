const http= require('http');
const fs=require('fs');
const lo=require('lodash');

const server= http.createServer((req, res)=>{
    let num= lo.random(0,100);
    console.log(num);
    let path='./views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/services':
            path += 'services.html';
            res.statusCode = 200;
            break;
        case '/services-offer':
                    res.statusCode = 301;
                    res.setHeader('Location', '/services');
                    res.end();
                    break;            
        
        default :
        path += '404.html';
        res.statusCode = 404;
        break;       
}
    res.setHeader('response-type', 'text/html');
    // res.setHeader('<head><link rel="stylesheet" href="./views/styles.css"></head>');
    fs.readFile(path,(err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }

    });
       


});

server.listen(3000,'localhost', ()=>{
    console.log('the server is well listening on the port 3000');
});