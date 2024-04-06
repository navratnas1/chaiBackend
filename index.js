require('dotenv').config()
const express = require("express");

const app = express();
//app is a variable with multiple functionality using app.__ just like Math.__

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/twitter',(req,res)=>{
    res.send("nuvrtn")
})

app.get('/login', (req,res)=>{
    res.send('<h1>please login at chai aur code')
})

app.get('/youtube',(req,res)=>{
  res.send('Navratna.com')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
