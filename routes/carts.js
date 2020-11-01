var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const url='mongodb+srv://Sanjeet:Sanjeet@cluster0-5et2v.mongodb.net/test?retryWrites=true&w=majority';
var Cart = require('../models/cart');
/* GET users listing. */

router.route('/')

.post((req, res, next) => {
  Cart.findOne({username:req.body.username,itemid:req.body.item.itemid})
  .then((user)=>{
    if(user)
    {

      req.statusCode=400;
      res.setHeader('Content-Type','application/json');
      res.json({success:false,status:"already exist"})
    }
    else
    {
     
      const newCart=new Cart({
        username:req.body.username,
        name:req.body.item.name,
        description:req.body.item.description,
        itemid:req.body.item.itemid,
        img:req.body.item.img,
        brand:req.body.item.brand,
        cost:req.body.item.cost,
        weight:req.body.item.weight,
        quantity:req.body.item.quantity,
        category:req.body.item.category

      });
      newCart.save();
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true, status: 'item has been added'})
    }
  })
})


.delete((req,res)=>{
    Cart.deleteMany({username:req.body.username,itemid:req.body.itemid})
    .then((item)=>{
     res.statusCode=200;
     res.setHeader('Content-Type','application/json');
     res.json({success:true});
     console.log("updated");
   },err=>console.log(err))
    .catch(err=>console.log(err));
   })



   router.post('/load', (req, res) => {
  
    Cart.find({username:req.body.username})
    .then((item)=>{
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(item);
    },err=>console.log(err))
    .catch(err=>console.log(err));
    
  });

  router.delete('/empty',(req,res)=>{
    Cart.deleteMany({username:req.body.username})
    .then((item)=>{
     res.statusCode=200;
     res.setHeader('Content-Type','application/json');
     res.json({success:true});
     console.log("updated");
   },err=>console.log(err))
    .catch(err=>console.log(err));
   })

  

module.exports = router;
