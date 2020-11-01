var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
//const url='mongodb+srv://Sanjeet:Sanjeet@cluster0-5et2v.mongodb.net/test?retryWrites=true&w=majority';
var Item = require('../models/items');
/* GET users listing. */

router.route('/')

.get((req,res)=>{
      Item.find({})
      .then((item)=>{
      console.log(item)
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(item);
    },err=>console.log(err))
    .catch(err=>console.log(err));
})

module.exports = router;
