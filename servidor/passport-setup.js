const passport=require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
 done(null, user);
});
passport.deserializeUser(function(user, done) {
 done(null, user);
});

passport.use(new GoogleStrategy({
 clientID: "9137744659-7vpqph6lbe3h335l7p1j5ll1nnn4vdci.apps.googleusercontent.com",
 clientSecret: "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",
 callbackURL: "http://localhost:3000/google/callback"
},
function(accessToken, refreshToken, profile, done) {
return done(null, profile);
}
));