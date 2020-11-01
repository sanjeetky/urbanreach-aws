const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    username:{
        type:String,
        required:true
        
    },
    password:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        
    },
    lastname:{
        type:String,
       
    },
  email:{
        type:String,
       
    },
    mobilenum:{
        type:String,
        required:true
    } 
   
},{
    timestamps:true
});
var User=mongoose.model("user",userSchema);//by default the mongoose will create a collection in targeted database with plural form like here mongo then there willl be mongos in targeted database!!!
module.exports=User;