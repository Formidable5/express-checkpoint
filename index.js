const express =require("express")

const workingHoursMiddleware = require("./middelware/workinghours")

const app = express()

const port = 4001;

app.set("view engine", "ejs")

app.set("views","./views")

app.use(express.static("public"));

app.use(workingHoursMiddleware)

app.get('/',(req,res) =>{
    res.render("home",{title:"Home"})
});

app.get('/services',(req,res) =>{
    res.render("services",{title:"Our Services"})
});

app.get('/contact',(req,res) =>{
    res.render("contact",{title:"Contact Us"})
})



app.listen(port,()=> {
    console.log(`server running at http://localhost:${port}`)
})