let _Hour = prompt ("Įveskite laiką (valandos):")
if (_Hour < 6) {
    alert('Naktis');
} else if (_Hour < 12) {
    alert('Rytas');
} else if (_Hour < 18) {
    alert('Diena')
} else if (_Hour < 24) {
    alert('Vakaras');
} else if (_Hour > 24) {
    alert('Klaida');
}

let array = [1,2,3,4,5];
let arrayRev = []
for (let i = array.length - 1; i >=0 ; i--) {
    arrayRev.push(array[i]);
}