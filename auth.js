const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID =
  "377654789293-hqo0ot5pdsje6kecjgts7f3n03cucjd3.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshTOken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser(function(user, done){
    done(null, user);
});

passport.deserializeUser(function(user, done){
    done(null, user);
});
