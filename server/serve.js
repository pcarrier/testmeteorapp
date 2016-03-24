WebApp.connectHandlers.use(function(req, res, next) {
  console.log("ping!");
  res.end(JSON.stringify(process.env));
});
