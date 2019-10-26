//admin 路由 通用crud接口
module.exports = app => {
    //导出一个函数,外部可出入一个参数进来
    const express = require('express')
    //router express的子路由
    const router = express.Router({
        mergeParams: true//合并参数
    })

    // const Category = require("../../models/Categoty")
    /**
     * 新增分类
     */
    // router.post('/categoties',async(req,res)=>{
    //     //后端路由写得跟前端路由一样然后在里面处理数据就好了
    //    //创建数据,需要中间件 
    //     const model = await Category.create(req.body)
    //     res.send(model)   
    // })
    // /**
    //  * 获取分类列表
    //  */
    // router.get('/categoties',async(req,res)=>{
    //     //Category为mogoda的一个实例,populate获取关联字段数据对象,关联查询
    //     const model = await Category.find().populate('parent').limit(10);
    //     res.send(model)
    // })
    // /**
    //  * 根据id获取分类名称
    //  */
    // router.get('/categoties/:id',async(req,res)=>{
    //     const model = await Category.findById(req.params.id)
    //     res.send(model)
    // })
    // /**
    //  * 修改分类名称
    //  */
    // router.put('/categoties/edit/:id',async(req,res)=>{
    //     const model = await Category.findByIdAndUpdate(req.params.id,req.body)
    //     res.send(model)        
    // })
    // /**
    //  * 删除分类
    //  */
    // router.delete('/categoties/delete/:id',async(req,res)=>{
    //     const model = await Category.findByIdAndDelete(req.params.id)
    //     res.send({
    //         success:true
    //     })
    // })

    router.post('/', async (req, res) => {
        //后端路由写得跟前端路由一样然后在里面处理数据就好了
        //创建数据,需要中间件 
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    /**
     * 获取分类列表
     */
    router.get('/', async (req, res) => {
        // const ModelName = require('inflection').classify(req.params.resource)//转换类名,将小写复数转为大写单数
        // const Model = require(`../../models/${ModelName}`)

        //Category为mogoda的一个实例,populate获取关联字段数据对象,关联查询
        const queryOption = {}
        if (req.Model.modelName === "Categoty") {
            queryOption.populate = 'parent'
        }
        const model = await req.Model.find().setOptions(queryOption).limit(10);
        res.send(model)
    })
    /**
     * 根据id获取分类名称
     */
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })
    /**
     * 修改分类名称
     */
    router.put('/edit/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    /**
     * 删除分类
     */
    router.delete('/delete/:id', async (req, res) => {
        const model = await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            success: true
        })
    })


    /**
     * 共用的crud操作
     */
    //挂在子路由,通过路由分配资源 ,resouce动态参数
    app.use('/admin/api/rest/:resource', async (req, res, next) => {
        //中间件处理
        const ModelName = require('inflection').classify(req.params.resource)//转换类名,将小写复数转为大写单数
        req.Model = require(`../../models/${ModelName}`) //挂在到request上
        next()
    }, router)
    const multer = require("multer")
    //目标位置.上传图片存储位置
    const upload = multer({ dest: __dirname + '/../../upload' })
    app.post('/admin/api/upload',upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/upload/${file.filename}`
        res.send(file);
    })
}