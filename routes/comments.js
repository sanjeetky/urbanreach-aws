var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const url='mongodb+srv://Sanjeet:Sanjeet@cluster0-5et2v.mongodb.net/test?retryWrites=true&w=majority';
var Comment = require('../models/comment');
/* GET users listing. */

router.route('/')

.post((req, res, next) => {
  Comment.findOne({author:req.body.author,itemid:req.body.itemid})
  .then((user)=>{
   
    if(user)
    {

      req.statusCode=400;
      res.setHeader('Content-Type','application/json');
      res.json({success:false,status:"comments from this username already exist"})
    }
    else
    {
     
      const newComment=new Comment({
        author:req.body.author,
        itemid:req.body.itemid,
        comment:req.body.comment,
        date:req.body.date
      });
      newComment.save();
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true, status: 'Comment has been added'})
    }
  })
})

.get((req,res)=>{
    Comment.find({})
    .then((item)=>{
    console.log(item)
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json(item);
  },err=>console.log(err))
  .catch(err=>console.log(err));
})



module.exports = router;
