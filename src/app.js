//express 
const express = require('express')
const app = express()

//path module
const path = require('path')

//hbs module
const hbs = require("hbs")

//port no.
const port = process.env.PORT || 8000

//paths for static website
const static_path = path.join(__dirname, "../public")
const templates_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

//template engine - hbs
app.set('view engine', 'hbs')
app.set('views', templates_path)
hbs.registerPartials(partials_path)


//static web page
app.use(express.static(static_path))




// routing
app.get("/", (req,res)=>{
    res.render("index", {
        text_btn: "Explore"
    })
})

app.get("/weather", (req,res)=>{
    res.render("weather")
})

app.get("/about", (req,res)=>{
    res.render("about", {
        text_btn: "Portfolio"
    })
})

app.get("*", (req,res)=>{
    res.render("error_404")
})


//listening
app.listen(port, ()=>{
 console.log(`listening to the port no. ${port}`)
})