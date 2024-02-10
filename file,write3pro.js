const http=require("http");
const fs=require("fs");
const newfile="file3pro.pdf";
http.createServer((req,res)=>{
    fs.writeFile(`${newfile}`,"create file mr arun ji binjana",(err,data)=>{
        if(err){
            res.end(`facing error: ${err.message}`);
        }
        else{
            res.end(`created new file and written in a file successfully${data}`);
        }
    });
}).listen(5656,function(){
    console.log(`server listening on 5656$`)}
    );