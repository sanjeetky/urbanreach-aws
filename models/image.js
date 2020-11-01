const { Int32 } = require('mongodb');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const imageSchema=new Schema({
  
    slider:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
var Image=mongoose.model("image",imageSchema);//by default the mongoose will create a collection in targeted database with plural form like here mongo then there willl be mongos in targeted database!!!
module.exports=Image;