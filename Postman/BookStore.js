const express = require("express");
const app = express();

const BookStore = [
    {id:1,name:"Poerty", author:"Kishna"},
    {id:2,name:"Comedy", author:"HarshGujral"},
    {id:3,name:"Pomedy", author:"RajatDalal"}
]

app.get("/book",(req,res)=>{
   res.send(BookStore);
}) 

app.listen(5000,()=>{
    console.log("listening at Port 5000");  
})

app.get("/book/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const book = BookStore.find(info=>info.id===id);
    res.send(book);
    // res.send("specific id's");
})

app.post("/book",(req,res)=>{
    console.log(req.body); 
    BookStore.push(req.body);
    res.send("Data Saved SuccesFully");
})

