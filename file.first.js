// writeFile ------> create a new file and & write // matlab file bana ti bhi hai or use ke andar lika bhi sakte hai


const http=require("http");
const fs=require('fs');
const port =5665;

http.createServer((req,res)=>{
    //file directriy ----                data                   callbackfunction
    fs.writeFile(`file.txt`,"server create file create by arun",function(err,data){
        if (err){
            console.log(`facing error${err.message}`);
        }
        else{
            console.log(data);
            res.end(`created new file and written in a file successfully ${data}`);
        }
    });
})
.listen(port,function(){
    console.log(`server listening on http://localhost:${port}`);
});