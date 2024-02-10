
// unlink removed files from the  filesystem and remove them from the filesystem itself

const http=require("http");
const fs=require("fs");
const filename="lala.txt";
const port=4564;
http.createServer((req,res)=>{
fs.unlink(`${filename}`,(error,data)=>{
     if(error){
        res.end(`error file deleted ${error}` );
     }
     else
     {
        res.end(`file deleted successfully ${data}`);
     }
});
})
.listen(port,console.log(`server listening on ${port} http://localhost:${port}`));