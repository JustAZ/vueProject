//模型
//Mongoose是在node.js异步环境下对mongodb进行便捷操作的对象模型工具
const mongoose = require('mongoose')
//schema是mongoose里会用到的一种数据模式，可以理解为表结构的定义；每个schema会映射到mongodb中的一个collection，它不具备操作数据库的能力
const schema = new mongoose.Schema({
    name:{type:String},
    //特殊类型,关联到自身的模型
    parent:{type:mongoose.SchemaTypes.ObjectId,ref:'Categoty'}
})
module.exports = mongoose.model("Categoty",schema)