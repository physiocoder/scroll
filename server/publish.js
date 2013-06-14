Meteor.publish('Utenti', function(limit) {
	return Utenti.find({}, {sort: {cod: 1}, limit: limit});
});