const express = require("express");
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.get("/user", (req, res) => {
    res.send({ name: "Aarushi" });
});

app.post("/user", (req, res) => {
    console.log("Data Saved Successfully:", req.body);
    res.send("Data Saved Successfully");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});