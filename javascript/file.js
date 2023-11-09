
let firstName = prompt('Scrivi il tuo nome');

let lastName = prompt('Scrivi il tuo cognome');

let favoriteColor = prompt('Scrivi il tuo colore preferito');


let laPasswordPiùInsicura = firstName + lastName + favoriteColor;



document.getElementById('insicurissimaPassword').innerHTML = 'La password meno utilizzabile nella storia del web è ' + laPasswordPiùInsicura + '21';




