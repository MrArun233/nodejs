/* remDirectory -------> remove the folder (directory) -- ye folder ko hi delete kar deta hai pure ke pure folder ko
OR------------->  agra folder ke andar koi file hai or ham folder ko delet kare ge to nhi deleta  hoga  esliye hame // folder ke andar ki sariy file ko delet kar ke folder ko delete kar na hota hai*/

const http=require("http");
const fs=require("fs");
const port=5844;
let file ="9-march-2022";
http.createServer((request,response)=>{
    fs.readdir(`${file}`,(error,data)=>{
        if(error)
        {
            response.end(`delete error folder${error.message}`);
        }
        else{
            response.end(`delete folder successfully${data}`);
        }
    
    });
})
.listen(port,()=>{
    console.log(`listening on port ${port}  http://localhost:${port}`);
})

