//createwritestream from the current working directory and create a new file onliy 


const http=require("http");
const fs=require("fs");
// const filename="createfile.txt"
const port =5665;
// const filename="arun.txt";
http.createServer(function(req,res){
    fs.createWriteStream("createfile.txt",(error,data)=>{
            if(error)
            {
                res.end("Error",error.message);
            }
            else
            {
                res.end(`${data}`);
            }
    });
   
})
.listen(port,function(){
    console.log(`server listening on port ${port} http://localhost:${port}`)
})