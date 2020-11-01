var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const url='mongodb+srv://Sanjeet:Sanjeet@cluster0-5et2v.mongodb.net/test?retryWrites=true&w=majority';
var User = require('../models/user');
/* GET users listing. */

router.route('/')

router.post('/signup', (req, res, next) => {
  User.findOne({username:req.body.username})
  .then((user)=>{
   
    if(user)
    {

      req.statusCode=400;
      res.setHeader('Content-Type','application/json');
      res.json({success:false,status:"username already exist"})
    }
    else
    {
      User.findOne({mobilenum:req.body.mobilenum})
      .then((mobilenum)=>{
       
        if(mobilenum)
        {
    
          req.statusCode=400;
          res.setHeader('Content-Type','application/json');
          res.json({success:false,status:"mobile number already exist"})
        }
        else
        {
         const newUser=new User({
        username:req.body.username,
        password:req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        mobilenum:req.body.mobilenum
      });
      newUser.save();
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true, status: 'You are successfully registered!'})
    }
  })
}
  })
})
  

router.post('/login', (req, res) => {
    
    User.findOne({username:req.body.username,password:req.body.password})
    .then((item)=>{
      if(item)
      {
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json({success:true});
      }
      else{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json({success:false});
      }
    },err=>console.log(err))
    .catch(err=>console.log(err));
    
  });

  
router.post('/searchmobile', (req, res) => {
    
  User.findOne({mobilenum:req.body.mobilenum})
  .then((item)=>{
    if(item)
    {
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json({success:true,status:"mobile number found!!"});
    }
    else{
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json({success:false,status:"mobile Number does not exist!!"});
    }
  },err=>console.log(err))
  .catch(err=>console.log(err));
  
});


router.put('/password', (req, res) => {
  
  var query={mobilenum:req.body.mobilenum}
  var newvalues = { $set: { password: req.body.password} };
  User.updateOne(query, newvalues)
  .then(item=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json(item)
    console.log(item)
  },err=>console.log(err))
  .catch(err=>console.log(err));
});



module.exports = router;
