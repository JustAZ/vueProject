//serve端入口文件

const express = require("express")

const app = express()
//跨域处理
app.use(require('cors')())
//中间件,对post请求解析
app.use(express.json())

//传入一个app实例给admin
require('./routes/admin')(app)
require('./plugins/db')(app)

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})