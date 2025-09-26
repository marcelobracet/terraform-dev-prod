import express from "express" ;
import dotnenv from "dotenv" ;

dotnenv.config() ;

const app = express() 

app.get("/", (req, res) => {
    res.send("Hello, World!") ;
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`) ;
})