var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
const SECRET= 'privatekey';
const multer = require("multer");
var jwt = require('jsonwebtoken');
var passport = require('passport');
const jwtHelper = require('./../bin/jwt-helpers');

const storage = multer.diskStorage(
  {
    destination: function (req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function (req, res, cb) {
      cb(null, res.originalname);
    }
  }
);
const fileFilter = (req, file, cb) => {
  if (file.mimeType === 'image/jpeg' || file.mimeType === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer(
  {
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });


/* GET ALL USER */
router.get('/usersList',verifyToken,function (req, res, next) {
  jwt.verify(req.token, SECRET, (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      User.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
      });
    }
  });
 });

router.get('/userProfile',jwtHelper.verifyJwtToken,function(req,res,next){
  User.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});
/* GET SINGLE USER*/

router.get('/user',function(req,res,next){
  return res.status(200).json(req.user);
});

/* GET SINGLE USER BY ID */
router.get('/:id', function (req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
 /*LOGOUT*/
 router.get('/logout_', function (req, res, next) {
  console.log("one");
  //req.logout();
  res.json("logging out");

  
});

router.route('/email/:email').get(function (req, res) {
  let email = req.params.email;
  User.findOne({ email: email })
    .select('_id')
    .exec(function (err, docs) {
      if (err) return next(err);
      res.json(docs);
    });
});

/* REGISTER USER */
router.post('/register',/*upload.single('productImage'),*/ function (req, res, next) {

  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  // save user to database
  newUser.save(function (err) {
    if (err) throw err;
    else {
      res.send(200,newUser)
    }
  });

});          
/* Authenticate USER */
router.post('/authenticate', function (req, res, next) {
 
  // fetching user and test password verification
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) throw err;
    else {
      if (user===null || user===undefined)  {
        //console.log("user Not Found");
        res.send("user Not Found");
      }
      else {
        if(user.password==null || user.password==undefined){
          res.send("Password Error")
        }
        //console.log(user.password, user.email);
        // test a matching password
        User.comparePassword(req.body.password, user, function (err, isMatch) {
          if (err) res.send(err);
          //console.log(req.body.password, isMatch);
          if (isMatch) {
            const data=user.name;
            console.log("matched");
            //if user log in success, generate a JWT token for the user with a secret key
            jwt.sign({data},SECRET, { expiresIn: '1h' },(err, token) => {
              if(err) { console.log(err) }
              else console.log(user);
              res.json({
                success: true,
                message: 'Authentication successful!',
                token: token
              });
          });
          }
          else{
            res.send({success: false, message: 'Password Not matched.....Try again with correct password'});
          }
        });
      }

    }
  }
  );});


/*LOGIN*/
  router.post('/login',function(req,res,next){
    passport.authenticate('local', function(err, user, info) {
      if (err) { return res.status(501).json(err); }
      if (!user) { return res.status(501).json(info); }
      req.logIn(user, function(err) {
        if (err) { return res.status(501).json(err); }
        else if (user) return res.status(200).json({ "token":jwt.sign({user},SECRET, { expiresIn: '1h' },(err, token)) });
        else return res.status(401).json(info);
      });
    })(req, res, next);
  });
  
 
/* UPDATE USER */
router.put('/:id', function (req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    else res.json(post);
  });
});

/* DELETE USER */
router.delete('/:id', function (req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* CHECK VALIDATION*/
// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }

}
module.exports = router;