const express =require('expess')
const  app=express()
PORT =8080


app.use((req,res)=>{
   res.send('hello world')
})

Server.listen((PORT)=>{
    console.log(`http://localhost${PORT}`)
})
