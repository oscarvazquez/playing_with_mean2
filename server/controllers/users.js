var mongoose = require('mongoose');
var user = mongoose.model('user');
module.exports = (function() {
	return {
	addUser: function(req, res) {
	  	var new_user = new user({ name: req.body.name });
	  	new_user.save(function (err) {
	  		if(err)
	  		{
	  			console.log(err);
	  		}
	  		else
	  		{
	  			user.findOne({ name: req.body.name }, function(err, oneUser){
	  				if(err)
	  				{
	  					console.log(err)
	  				}
	  				else
	  				{
	  					console.log('added new user');
	  					console.log(oneUser);
	  					res.json(oneUser);
	  				}
	  			})
	  		}
	  	})
	  },
	  getUser: function(req, res) {
	  	user.findOne({_id: req.query.id}, function(err, this_user){
	  		if(err)
	  		{
	  			console.log(err)
	  		}
	  		else
	  		{
	  			console.log('i made it here')
	  			res.json(this_user)
	  		}
	  	})
	  }
 	}
})();