const mongoose=require('mongoose');


const AdminSchema = mongoose.Schema({
    userid:String,
    password:String

})
module.exports=mongoose.model('admin_login',AdminSchema)