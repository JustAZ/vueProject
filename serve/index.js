//serve端入口文件

const express = require("express")

const app = express()
//跨域处理
app.use(require('cors')())
//中间件,对post请求解析
app.use(express.json())

//静态文件托管,表示upload下面的文件都是静态文件
app.use('/upload', express.static(__dirname + '/upload'))

//传入一个app实例给admin
require('./routes/admin')(app)
require('./plugins/db')(app)

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})