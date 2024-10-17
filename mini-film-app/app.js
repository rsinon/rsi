const express= require('express')
const app = express()

const mongoose = require('mongoose')

const filmsRoute = require('./routes/films')

app.use('/films',filmsRoute)

app.get('/', (req,res)=>{
    res.send('Homepage')
})

const MURL ='mongodb+srv://don1sinon:1234@cluster0.aa2o5.mongodb.net/MiniFilms?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(MURL).then(()=>{
    console.log('Your mongoDB connector is on...')
})


app.listen(3001, ()=>{
    console.log('Your server is up and running')

})