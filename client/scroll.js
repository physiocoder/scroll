Meteor.subscribeWithPagination('Utenti', 10);

Template.utenti.helpers({
  utente: function() {
    return Utenti.find({}, {sort: {cod: 1}});
  }
})

