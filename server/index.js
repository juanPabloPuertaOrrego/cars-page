const express = require('express');
const app = express()
app.use(express.json())

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

//home
app.get('/', (req, res)=>{
    res.send('<h1>hello world!</h1>')
})

//obteniendo todos los carros
app.get('/api/cars', (req,res)=>{
    res.json(cars)
})

//obteniendo un dato
app.get('/api/cars/:id', (req,res)=>{
    const id= Number(req.params.id)
    const car = cars.find(car=>car.id===id)
    if (car) {
       res.json(car) 
    }else{
        res.status(404).end()
    }
    
})

//eliminando un dato
app.delete('/api/cars/:id', (req,res)=>{
    const id = Number(req.params.id)
    cars = cars.filter(car=>car.id !==id)
    res.status(204).end()
})

//Recibiendo información
app.post('/api/cars',(req,res)=>{
    const car= req.body
    console.log(car)
    res.json(car)
})

const PORT = 3001
app.listen(PORT)
console.log(`server running on port ${PORT}`)