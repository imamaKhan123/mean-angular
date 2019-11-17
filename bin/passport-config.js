var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
var User = require('./../models/users');
passport.use('local',new LocalStrategy({
    usernameField:'email',
    passwordField:'password'
},
    function (username, password, done) {
        console.log(username);
        console.log(password);
        User.findOne({ email: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!User.isValid(password,user)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

 /*
passport.use(
    new localStrategy({ usernameField: 'email' },
        (username, password, done) => {
            User.findOne({ email: username },
                (err, user) => {
                    if (err)
                        return done(err);
                    // unknown user
                    else if (!user)
                        return done(null, false, { message: 'Email is not registered' });
                    // wrong password
                    else if (!User.isValid(password,user))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, user);
                });
        })
)
*/
passport.serializeUser(function(user, done) {
    done(null, user._id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });