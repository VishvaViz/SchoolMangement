const mongoose=require('mongoose')

const data=new mongoose.Schema({
    value:Object
})

const dataSchema=new mongoose.model("data",data)

module.exports=dataSchema