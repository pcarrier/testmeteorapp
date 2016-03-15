WebApp.connectHandlers.use(function(req, res, next) {
  res.writeHead(302, {Location: 'http://status.meteor.com/'});
  res.end();
});
