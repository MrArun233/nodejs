const http=require('http');
const fs=require("fs");
const port=6565;
const filename="arun.txt";
http.createServer(function(req,res){
    fs.writeFile(`${filename}`,"create by fill mr arun vishwakarma ji",function(err,data){
        console.log("error=",err);
        if(err)
        {
            res.end(`server error${err.message}`);
        }
        else
        {
            res.end(`created new file and written in s file successfully ${data}`);
        }

    })
})
.listen(port,function(){
    console.log(`server listening on http://localhost:${port}`)
})