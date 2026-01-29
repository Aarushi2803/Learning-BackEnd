const http = require("http");
const server = http.createServer((req,res)=>{
    // res.end("Hello...");

    if(req.url==="/"){
        res.end("hello / ");
    }
    else if(req.url==="/contact"){
        res.end("hello contact page");
    }
     else if(req.url==="/about"){
        res.end("hello about page");
    }
     else {
        res.end("Error: Page not Found");
    }
});

server.listen(4000,()=>{
   console.log("I'm listening at port number...");
}); 
