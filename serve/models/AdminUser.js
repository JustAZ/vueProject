const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    username: { type: String },
    // npm i bcrypt 处理密码进行散列
    password: {
        type: String,
        select:false,//默认不查出来这一字段
        set(val) {
            return require('bcrypt').hashSync(val,10)//10代表安全系数
        }
    }
})
module.exports = mongoose.model("AdminUser", schema)