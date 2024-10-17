const express = require ('express')
const router= express.Router()

router.get('/', (req,res)=>{
    res.send('You are in users!')
})

router.get('/rudy', (req,res)=>{
    res.send('You are in rudy home page!')
})

module.exports = router 