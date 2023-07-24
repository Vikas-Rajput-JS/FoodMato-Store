const express = require('express')
const app = express()
const cors = require('cors')
require('./db/Config')
app.use(express.json())
const Food = require('./db/Foods')
const User = require('./db/User')



app.use(cors())

app.post('/Add',(req,res)=>{
    const add = new Food(req.body)
    const save = add.save()
    res.send(add)
})
app.post('/Cart', async(req,res)=>{
    const data = new User(req.body)
    const save = data.save()
    res.send(data)
})

app.get('/Get', async(req,res)=>{
    const data = await Food.find({})
    res.send(data)
})
app.get('/Cartitem', async(req,res)=>{
    const data = await User.find({})
    res.send(data)
})

app.post('',(req,res)=>{
    res.send(Data)
})

app.delete('/Delete', async(req,res)=>{
    const del = await User.deleteOne(req.body)
 res.send(del)

})
app.listen(5000)