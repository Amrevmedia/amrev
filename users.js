var express = require('express');
var router = express.Router();
var name = require('./formsz.js');
var postsfeed = require('./postfeedSchema.js')
router.post('/register',function(req,res,next){
  name.create(req.body, function(err,data){
    if(err){
      console.log(err);
    }else{
      res.json({
        data:data,
        status:200
      })
    }
  })
})
router.post('/signin',function(req,res,next){
  name.find({email:req.body.email,password:req.body.password},function(err,data){
    if(err){
      console.log(err);
    }else{
      console.log(data);
      if(data.length>0){
        res.json({
          data:data,
          status:200


      })
    }
    }
  })
})
router.post('/postfeed',function(req,res,next){
  postsfeed.create(req.body, function(err,data){
    if(err){
      console.log(err);
    }else{
      res.json({
        data:data,
        status:200
      })
    }
  })
})
module.exports = router;
