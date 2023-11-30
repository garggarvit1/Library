const express=require("express");
// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose=require("mongoose");
const uri = "mongodb+srv://garggarvit12:garg1234@cluster0.szzytcm.mongodb.net/?retryWrites=true&w=majority";

const ConnectToDb=()=>{  mongoose.connect(uri,{
    useNewUrlparser: true,
    useUnifiedTopology: true
})
.then(()=>{console.log("database connect")})
.catch(()=>{
    console.log("not connect")
})
}

exports.ConnectToDb=ConnectToDb;
