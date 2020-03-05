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