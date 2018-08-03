function auth(req,res,next){
    console.log(req.user);

    if (!req.user) {
      const err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');                          
      err.status = 401;
      next(err);
    }
    else {
          next();
    }
    
}
module.exports = auth;