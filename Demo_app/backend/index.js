const express = require("express")
const { connected } = require("./config/db")
 
 


const app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
})


app.listen(3000, async() => {
   try{
     await connected
     console.log("Connected to DB")
     console.log("Server is running on port 3000")
   }
   catch(err){

    console.log(err)
   }
})