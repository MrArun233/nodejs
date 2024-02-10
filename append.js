const http=require("http");
const fs=require("fs");
const port=5778;
const filename="file.txt";
http.createServer(function(req,res){
    fs.appendFile(`${filename}`,"hii mr ",(error,data)=>{
        if(error)
        {
            res.end(`server error: ${error}`);
        }
        else{
            res.end(`server on successfully ${filename}`); 
            }
    });

}).listen(port,function(){
    console.log(`server listening on  ${port} http://localhost:${port}`);
})