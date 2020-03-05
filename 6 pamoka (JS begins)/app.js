let _Login = prompt ('Įveskite prisijungimo vardą:');
let _Passw = prompt ('Įveskite slaptažodį');
if ((_Login == 'admin') && (_Passw == 'master') || (_Login != 'admin') && (_Passw == `${_Login}11`)) alert(`Sveiki ${_Login}`);
else {alert ('Viso gero');}