var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Company = require('../models/sysUserRoles.js');

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


/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  Company.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  Company.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/',/*upload.single('productImage'),*/ function(req, res, next) {
  console.log(req.file);
  Company.create(req.body, function (err, post) {
    if (err) return next(err);
    else res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Company.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    else res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Company.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;