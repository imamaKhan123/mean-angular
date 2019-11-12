var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users.js');

const multer = require("multer");


const storage = multer.diskStorage(
  {
    destination :function(req, file, cb){
      cb(null, './uploads/');
    },
    filename: function(req,res,cb){
      cb(null,res.originalname);
    }
  }
);
const fileFilter =(req, file,cb)=> {
  if(file.mimeType=== 'image/jpeg' ||file.mimeType==='image/png'){
    cb(null,true);
  }else{
    cb(null, false);
  }
};

const upload =multer(
  {
    storage:storage ,
     limits: {
  fileSize: 1024*1024*5
      },
      fileFilter:fileFilter
    });


/* GET ALL USER */
router.get('/usersList', function(req, res, next) {
  User.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE USER BY ID */
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* GET SINGLE USER BY ID 
router.get('/email/:id', function(req, res, next) {
  User.
  findOne({email: new RegExp(req.params.id, 'i')})
  .select('email')
    .exec(function (err, docs) {
     if (err) return next(err);
    res.json(docs);
  
});
});*/

router.route('/email/:email').get(function (req, res) {
  let email = req.params.email;
  User.find({email: email})
  .select('email')
    .exec(function (err, docs) {
     if (err) return next(err);
    res.json(docs);
  });
  });

/* SAVE USER */
router.post('/',/*upload.single('productImage'),*/ function(req, res, next) {
  console.log(req.file);
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    else res.json(post);
  });
});

/* UPDATE USER */
router.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    else res.json(post);
  });
});

/* DELETE USER */
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;