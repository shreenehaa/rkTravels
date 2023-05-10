const mongoose=require('mongoose');


const PackageSchema = mongoose.Schema({
    imgurl:String,
    title:String,
    days:String,
    place:String,
    location:String,
    desc:String

})
module.exports=mongoose.model('package',PackageSchema)