const express = require('express');
const app = express()

let cars=[
    {
        id:1,
        categorie:"alfa romero",
        model:"1234",
        image:"car1.png",
        description:"description of alfa romero is here"
        },
    {
        id:2,
        categorie:"mercedez",
        model:"1234",
        image:"car2.png",
        description:"description of mercedez is here"
    },
    {
        id:3,
        categorie:"BMW",
        model:"1234",
        image:"car3.png",
        description:"description of BMW is here"
    }
]

app.get('/', (req, res)=>{
    res.send('<h1>hello world!</h1>')
})

app.get('/api/cars', (req,res)=>{
    res.json(cars)
})

const PORT = 3001
app.listen(PORT)
console.log(`server running on port ${PORT}`)