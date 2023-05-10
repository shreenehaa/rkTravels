const mongoose=require('mongoose');


const BookSchema = mongoose.Schema({
    sno:{
        type:Number,default:-1
    },
    name:{type:String,required:true},
    email:{type:String,required:true},
    mb1:{type:Number,required:true},
    mb2:{type:Number,required:true},
    title:{type:String,required:true},
    from:{type:Date,required:true},
    to:{type:Date,required:true},
    status:{type:String,default:'pending'}

})
module.exports=mongoose.model('book',BookSchema)