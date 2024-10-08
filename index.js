import express from 'express'
import userRouter from './router/userRouter.js'
import chatsRouter from './router/chatsRouter.js'
import contactRouter from './router/contactRouter.js'
import msgRouter from './router/msgRouter.js'
import notificationRouter from './router/notificationRouter.js'
import requestRouter from './router/requestRouter.js'

import cors from 'cors'

const app =express()
let port=process.env.PORT || 5009
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next()
})
app.use(express.json())
app.use(express.static('public'))
app.use(cors())

app.use('/users',userRouter)
app.use('/chats',chatsRouter)
app.use('/contacts',contactRouter)
app.use('/msg',msgRouter)
app.use('/notifications',notificationRouter)
app.use('/request',requestRouter)


app.listen(port,()=>{
    console.log("http://localhost:" +port);
})