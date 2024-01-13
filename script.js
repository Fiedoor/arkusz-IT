function s() {
  var imie = document.getElementById('imie').value;
  var nazwisko = document.getElementById('nazwisko').value;
  var email = document.getElementById('email').value;
  var usluga = document.getElementById('usluga').value;
  var widomosc = document.getElementById('widomosc');
  document.getElementById('w').innerHTML = imie + ' ' + nazwisko + '<br>' + email.toLowerCase() + '<br>Usługa: ' + usluga;
}
