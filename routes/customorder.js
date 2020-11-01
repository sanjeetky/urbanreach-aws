var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const CustomOrder=require('../models/customorder')
var multer  = require('multer');
var path=require('path')

router.use(express.static(__dirname+"./public/"));


var Storage=multer.diskStorage({
    destination:'./public/uploads',
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})







var upload=multer({storage:Storage})

router.route('/')
.post(upload.single('image'),(req,res)=>{
   // console.log(req.body.mobilenum)
      const product=new CustomOrder({
       image:req.file.path,
       mobilenum:req.body.mobilenum,
       details:req.body.details
      });
      product.save();
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true, status: 'You are successfully registered!'})
  
})

.get((req,res)=>{
   CustomOrder.find({})
   .then((item)=>{
   console.log(item)
   res.statusCode=200;
   res.setHeader('Content-Type','application/json');
   res.json(item);
 },err=>console.log(err))
 .catch(err=>console.log(err));
})

module.exports = router;
