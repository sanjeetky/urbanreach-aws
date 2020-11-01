const { Int32 } = require('mongodb');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const customorderSchema=new Schema({
  
    image:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    mobilenum:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
var CustomOrder=mongoose.model("customorder",customorderSchema);//by default the mongoose will create a collection in targeted database with plural form like here mongo then there willl be mongos in targeted database!!!
module.exports=CustomOrder;