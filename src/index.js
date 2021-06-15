const express = require('express')
const app =express()
require('./db/mongoose')
const User=require('./models/user')
const Task=require('./models/task')
const UserRouter=require('./router/user')
const TaskRouter=require('./router/task')

const port=process.env.PORT || 3000

/*app.use((req,res,next)=>{
    if(req.get)
    {
        res.status(503).send('Site under maintenance')
    }
    else{
        next()
    }
})*/

app.use(express.json())
app.use(UserRouter)
app.use(TaskRouter)

app.listen(port,()=>{
    console.log('Server is up on port '+ port)
})