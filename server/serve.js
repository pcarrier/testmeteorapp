WebApp.connectHandlers.use(function(req, res, next) {
  res.end(JSON.stringify(process.env));
});
