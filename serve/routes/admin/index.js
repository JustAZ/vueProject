//admin 路由
module.exports = app =>{
//导出一个函数,外部可出入一个参数进来
    const express = require('express')
    //router express的子路由
    const router = express.Router()
  
    const Category = require("../../models/category")
    /**
     * 新增分类
     */
    router.post('/categoties',async(req,res)=>{
        //后端路由写得跟前端路由一样然后在里面处理数据就好了
       //创建数据,需要中间件 
        const model = await Category.create(req.body)
        res.send(model)   
    })
    /**
     * 获取分类列表
     */
    router.get('/categoties',async(req,res)=>{
        //Category为mogoda的一个实例
        const model = await Category.find().limit(10);
        res.send(model)
    })
    //挂在子路由,通过路由分配资源
    app.use('/admin/api',router)
}