const http=require("http");
const fs=require("fs");
const port=4001;
const newfile="newfile.pdf";
http.createServer((req,res)=>{
    fs.readFile(`${newfile}`,function(error,data){
res.end(data);
    });
  
})
.listen(port,()=>{
    console.log(`server listening on ${port} http://localhost:${port}`);
})