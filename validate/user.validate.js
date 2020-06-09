module.exports.postCreate = function(req, res, next){
    var errors = [];
    if(!req.body.name){
      errors.push('Name is require!');
    }else if(req.body.name.length > 30){
      errors.push('Please enter your name < 30 letters!');
    }
    if(!req.body.phone){
      errors.push('Phone is require!')
    }
    
    if(errors.length > 0){
      res.render('/app/views/users/create', {
        errors: errors
      });
      return;
    }
    next();
}