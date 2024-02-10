const http =require("http");
const name=require('./custam');
const port=9000;
console.log("name",name);
http
.createServer(function(req,res){
    res.end(`hello, world buy ${name} sir`);
})
.listen(port,function(){
    console.log(`server listening on http://localhost${port}`);
});