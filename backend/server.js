const express= require("express");
const app= express();
const cors=require("cors");
const { mongoose } = require('mongoose');
const bookRoute=require('./Routes/booksRoutes')
// const db=require("./Middleware/Db");
// db.ConnectToDb;
const uri = "mongodb+srv://garggarvit12:garg1234@cluster0.7bembvg.mongodb.net/Book-Store?retryWrites=true&w=majority";

mongoose.connect(uri)
.then(()=>{console.log("Database connect")})
.catch(()=>{
    console.log("not connect");
})              
app.use(cors());                                         
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hello");
});
app.use('/api/v1',bookRoute);

app.listen(1000,()=>{
    console.log("Server Started Successfully");
});

