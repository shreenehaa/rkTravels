const mongoose=require('mongoose');


const PackageSchema = mongoose.Schema({
   email:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   },
   fname:{
      type:String,
      required:true
     },
   lname:{
      type:String,
      required:true
   },
   phone:{
      type:Number,
      required:true
   },
   country:{
      type:String,
      required:true
   }
   

})
module.exports=mongoose.model('user_data',PackageSchema)