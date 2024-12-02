//npm init -y
//npm i express cors

const express = require("express")
const app =express()
const animalsRouter = require("./routes/animals")

app.get("/",(req,res)=>
    {res.json({"message":"Minden OK"})})

app.use("/animals", animalsRouter)

app.use(
    (err,req,res, next) =>{
    console.log(err.message, err.stack)
    res.status(err.statusCode || 500).json({"message":err.message})
    return
}

)
app.listen(3000, ()=>console.log("A szerver fut a 3000-es porton!"))