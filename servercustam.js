const http= require("http");
const {name,sname,address,city}= require('./custam2');
const port=4646;
console.log(name,sname,address,city);
http.createServer(function(req,res){
res.end(`Im ${name} ${sname},im form ${address},${city}`);
})
.listen(port,function(){
    console.log(`server listening on http://localhost:${port}`);
});