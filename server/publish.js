Meteor.publish('Utenti', function() {
	return Utenti.find({}, {sort: {cod: 1}});
});