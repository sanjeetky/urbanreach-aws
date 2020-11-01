const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const deliverySchema=new Schema({
    fullname:{
        type:String,
        required:true,
    },
    pincode:{
        type:String,
       
    },
    telnum:{
        type:String,
        required:true
    },
    
     area:{
        type:String,
        required:true
    },
    houseno:{
        type:String,
        required:true
    },
    city:{
        type:String,
       
    },
    item:{
        type:Array,
        required:true
    },
    status:{
        type:String,
        default:"Inprogress"
    },
    date:{
        type:String,
        default:new Date()
    },
    username:{
        type:String,
        required:true
    },
},{
    timestamps:true
});
var Delivery=mongoose.model("delivery",deliverySchema);//by default the mongoose will create a collection in targeted database with plural form like here mongo then there willl be mongos in targeted database!!!
module.exports=Delivery;