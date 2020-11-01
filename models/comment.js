const { Int32 } = require('mongodb');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const commentSchema=new Schema({
    comment:{
        type:String,
        required:true
    },
    itemid:{
      type:String,
      required:true,
    },
    author:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    
},{
    timestamps:true
});
var Comment=mongoose.model("comment",commentSchema);//by default the mongoose will create a collection in targeted database with plural form like here mongo then there willl be mongos in targeted database!!!
module.exports=Comment;