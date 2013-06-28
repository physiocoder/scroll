utentiHandle = Meteor.subscribeWithPagination('Utenti', 10);

Template.lista.helpers({
  utente: function() {
    return Utenti.find({}, {sort: {cod: 1}});
  }
})

Template.lista.events({
	'scroll #flux': function(event) {
		event.preventDefault();
		e = $(event.target);
		if(e.scrollTop() + e.innerHeight()>=e[0].scrollHeight) {
		    
		    if (Utenti.find().count() >= utentiHandle.loaded()) {
		    	utentiHandle.loadNextPage();
		    }
		}
	},
});

Template.lista.rendered = function() {
	console.log("added");
};