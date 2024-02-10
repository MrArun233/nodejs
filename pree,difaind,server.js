const http=require("http");
const port=9000;
http
.createServer(function(req,res){
    res.end("hello,world !");
})
.listen(port,function(){
    console.log(`server listening on port ${port} http://localhost:${port}`);
});