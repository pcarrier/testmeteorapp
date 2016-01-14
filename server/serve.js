Meteor.startup(function(){Npm.require('https').globalAgent.options.ca=Npm.require('fs').readFileSync('/etc/ssl/certs/ca-certificates.crt').toString('ascii').split('-----END CERTIFICATE-----\n').slice(0,-1).map(function(e){return e+'-----END CERTIFICATE-----')});
WebApp.connectHandlers.use(function(req, res, next) {
  Npm.require("https").get(Npm.require("url").parse("https://run.shareprogress.org/api/v1"),function(res){console.log("status",res.statusCode)}).on("error",function(err){console.log(err)});
  res.end("pong");
});
