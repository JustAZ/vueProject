module.exports = options => {
    return async (req, res, next) => {
        //中间件处理
        const ModelName = require('inflection').classify(req.params.resource)//转换类名,将小写复数转为大写单数
        req.Model = require(`../models/${ModelName}`) //挂在到request上
        next()
    }
}