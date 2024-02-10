const http = require("http");
const fs=require("fs");
const { isUtf8 } = require("buffer");
const filename="readfile.html";
const port=9090;
http.createServer((req,res)=>{
    
    fs.readFile(`${filename}`,/*"utf-8"*/(err,data)=>{  //befor data ko show karne ke liye `utf-8` likna hoga
       console.log("error",err);
       if(err)
       {
        res.end(`facing error: ${err}`);
       }
       else{
        console.log("data",data);
        res.end(`${data}`);
       }
    });
}).listen(port,()=>{
    console.log(`server listening on port ${port} http://localhost${port}`);
});