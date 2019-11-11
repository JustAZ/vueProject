module.exports = options => {
    //登陆校验中间件
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const AdminUser = require('../models/AdminUser')
    return async (req, res, next) => {
        const token = String(req.headers.authorization || '').split(" ").pop()
        //判断token是否为空
        assert(token, 401, '请先登陆')

        //校验token
        const { id } = jwt.verify(token, req.app.get('secret'))
        assert(id, 401, '请先登陆')

        //根据id查找用户
        req.user = await AdminUser.findById(id)
        assert(req.user, 401, '请先登陆')
        // console.log(req.user)
        await next()
    }
}