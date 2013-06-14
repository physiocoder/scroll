// Dummy data 
if (Utenti.find().count() === 0) {
  for (var i = 0; i < 3000; i++) {
    Utenti.insert({
      cod: i,
      nome: 'Nome' + i,
      cognome: 'Cognome'+i
    });
  }
}