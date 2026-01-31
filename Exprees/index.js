const express = require("express");
const app = express();

app.use("/about",(req,res)=>{
    res.send({"name":"/about","age":20,"money":"happiness"});
}) 
app.use("/contact",(req,res)=>{
    res.send("Call me Aarushi Mandloi");
})

app.get("/colou?r", (req, res) => {
    res.send("Matched colour or color");
});
app.get("/deta+ls", (req, res) => {
    res.send("Matched deta+ls route");
});
app.get("/ab*c", (req, res) => {
    res.send("Matched ab*c route");
});
app.get("/user/*", (req, res) => {
    res.send("Matched any user path");
});
app.get(/^\/details\/[0-9]+$/, (req, res) => {
    res.send("Matched /details/<number>");
});


app.use("/",(req,res)=>{
    res.send({"name":"/","age":20,"money":"happiness"});
}) 

app.listen(4000,()=>{
  console.log("I'm listening");
})



