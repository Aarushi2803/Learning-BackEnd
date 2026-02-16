const express = require("express");
const app = express();
const {auth} = require("./middleware/auth")
app.use(express.json()); // ✅ This must come first

// CRUD: 
// Database :: array

const foodmenu=[
    {id:1,food:"Dosa",category:"veg",price:20},
    {id:2,food:"idli",category:"veg",price:60},
    {id:3,food:"poha",category:"veg",price:10},
    {id:4,food:"kaju-curry",category:"veg",price:500},
    {id:5,food:"Khichdi",category:"veg",price:350},
    {id:6,food:"momos",category:"veg",price:150},
    {id:7,food:"dry-manchuriyan",category:"veg",price:90},
    {id:8,food:"sandwich",category:"veg",price:40},
    {id:9,food:"bhindi",category:"veg",price:120},
    {id:10,food:"dal-tadka",category:"veg",price:300},
    {id:11,food:"samosa-jalebi",category:"veg",price:100},
    {id:12,food:"pani-puri",category:"veg",price:30},
]

// user will add food here
const AddToCart = [];

app.get("/food",(req,res)=>{
    res.status(200).send(foodmenu);
})

// Authentication 
// app.use("/admin",auth)

app.post("/admin",auth,(req,res)=>{
      foodmenu.push(req.body)
      res.status(201).send("Item added succesfully");
}) 


app.delete("/admin/:id",auth,(req,res)=>{

    const id = parseInt(req.params.id);
    const index = foodmenu.findIndex(item=>item.id===id);

    if(index===-1){
       res.send("Item Doesn't Exist")
    } 
    else{
       foodmenu.splice(index,1);
       res.send("Succesfully Deleted");
    }
})


app.patch("/admin",auth,(req,res)=>{ 
   
      const id=req.body.id;
      const foodData = foodmenu.find(item=>item.id===id);

      if(foodData){
        if(req.body.food){
          foodData.food=req.body.food;
        }
        if(req.body.category){
            foodData.category = req.body.category;
        }
        if(req.body.price){
            foodData.price = req.body.price;
        }
        res.send("Item updated successfully")
      }
      else{
        res.send("Item not exist")
      }
})

app.listen(2000,()=>{
    console.log("server is listening at port no. 2000");
});