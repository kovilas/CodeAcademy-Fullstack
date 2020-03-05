// A.1. Sukurkite masyvą a, b, c. Parodykite masyvą naudodami console.log funkciją.
let _arrayA1 = ["a","b","c"];
console.log(_arrayA1);
// A.2. Naudodamiesi ankstesnės užduoties masyvu, parodykite pirmojo, antrojo ir trečiojo elementų turinį.
console.log(_arrayA1[0]);
console.log(_arrayA1[1]);
console.log(_arrayA1[2]);
// A.3. Sukurkite masyvą a, b, c, d ir naudodami jį parodykite eilutė a + b, c + d.
let _arrayA3 = ["a","b","c","d"];
document.write(`Task A.3.:<br><br>${_arrayA3[0]} + ${_arrayA3[1]}, ${_arrayA3[2]} + ${_arrayA3[3]}<hr>`);
// A.4. Sukurkite masyvą su elementais 2, 5, 3, 9. Pirmąjį masyvo elementą padauginkite iš antrojo, o trečiąjį elementą iš ketvirtojo. Sudėkite rezultatus, priskirkite kintamąjam. Parodykite šio kintamojo reikšmę.
let _arrayA4 = [2,5,3,9];
let _answerA4 = (_arrayA4[0]*_arrayA4[1])+(_arrayA4[2]*_arrayA4[3]);
document.write(`Task A.4.:<br><br>(2 * 5) + (3 * 9) =  ${_answerA4}<hr>`);
// A.5. Objektai (asociaciniai masyvai)
// A.6. Sukurkite objektą a = 1, b = 2, c = 3. Parodykite elemento c reikšmę dviem būdais: per skliaustelius ir kaip objekto savybę.
let _arrayA6 = {a: 1,b: 2,c: 3};
document.write(`() method: ${_arrayA6["c"]}<br>`);
document.write(`. method: ${_arrayA6.c}<hr>`);
// A.7. Sukurkite objektą su savaitės dienomis. Raktai jame turėtų būti dienų skaičiai nuo savaitės pradžios (pirmadienis - pirmasis ir t.t.). Parodykite dabartinę savaitės dieną.
let _date = new Date();
let _WeekDayAdress = _date.getDay();
if (_WeekDayAdress==0){_WeekDayAdress=7}
let _WeekDayWord = {
    1: "Pirmadienis",
    2: "Antradienis",
    3: "Trečiadienis",
    4: "Ketvirtadienis",
    5: "Penktadienis",
    6: "Šeštadienis",
    7: "Sekmadienis"
};
document.write(`Savaitės diena: ${_WeekDayWord[_WeekDayAdress]}<hr>`);
// A.8. Sukurkite kintamjį day kuriame saugomas savaitės dienos numeris. Atspausdinkite savaitės dieną naudojant sita kintamajį.
let _day = prompt(`Įveskite savaitės dieną (1-7)`);
if (_day<1 || _day>7){
    document.write(`Nėra ${_day}-os savaitės dienos!<hr>`);
} else document.write(`Įvesta savaitės diena: ${_WeekDayWord[_WeekDayAdress]}`);
// A.9. Daugialypiai masyvai
// A.10. Yra pateiktas masyvas [[1, 2, 3], [4, 5, 6], [7,8,9]]. Parodykite skaičių 4 iš šio masyvo.
let _arrayA10 = [[1,2,3],[4,5,6],[7,8,9]];
document.write(`${_arrayA10[1][0]}<hr>`);
// A.11. Duotas objektas {js: ['jQuery', 'Angular'], php: 'hello', css: 'world'}. Parodykite žodį jQuery.
let _arrayA11 = {
    js: ["jQuery", 'Angular'],
    php: 'Hello',
    css: 'world'
};
document.write(`${_arrayA11.js[0]}<hr>`);
// A.12. Sukurkite dvimatį masyvą. Pirmieji du raktai yra lt ir en. Raktai turi savaitės dienų vardų masyvus lietuviškai ir angliškai. Naudodamiesi šiuo masyvu, pirmadienį parodykite lietuvių kalba, o trečiadienį - anglų kalba.
let _WeekDayBilingual = {
    lt: ['pirmadienis','antradienis','trečiadienis','ketvirtadienis','penktadienis','šeštadienis','sekmadienis','sekmadienis'],
    en: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday','sunday']
};
document.write(`${_WeekDayBilingual.lt[1]}<br>${_WeekDayBilingual.en[3]}<hr>`);
// A.13. Sukurkite kintamjį lang (reikšmės lt arba en) ir naudojant lang ir day parodykite dieną (edited)
//
// Kažko čia neįkirtau sąlygoje...
//
// B.1. Masyvu funkcijos
// B.2. Duoti du masyvai: 1, 2, 3 ir 4, 5, 6. Sujunkite juos.
let _arrayFirst = [1,2,3];
let _arraySecond = [4,5,6];
let _arraysFused = _arrayFirst.concat(_arraySecond);
console.log(_arraysFused);
// B.3. Duotas masyvas 1, 2, 3. Iš jo padarykite masyvą 3, 2, 1.
let _arrayB3 = [1,2,3];
let _arrayReversed = _arrayB3.reverse();
console.log(_arrayReversed);
// B.4. Duotas masyvas 1, 2, 3. Pridėkite elementus 4, 5, 6 į galą ir -1, -2, -3 į priekį.
let _arrayB4 = [1,2,3];
_arrayB4.unshift(-1,-2,-3);
_arrayB4.push(4,5,6);
console.log(_arrayB4);
// B.5. Duotas masyvas html, css, js. Parodykite pirmąjį ir paskutinį elementus.
let _arrayB5 = ['html','css','js'];
console.log(`Pirmas: ${_arrayB5[0]}, paskutinis: ${_arrayB5[2]}`); // Taip paprasčiau, bet reikėtų padaryt paskutinio elemento radimą.
// B.6. Duotas masyvas 3, 4, 1, 2, 7. Surūšiuokite jį.
let _arrayB6 = [3,4,1,2,7];
let _arraySort = _arrayB6.sort();
console.log(_arraySort);
// B.7. Duotas masyvas 1, 2, 3, 4, 5. Konvertuokite masyvą į 1, 2, 3.
let _arrayB7 = [1,2,3,4,5];
_arrayB7=_arrayB7.slice(0,3);
console.log(_arrayB7);
// B.8. Duotas masyvas [1, 2, 3, 4, 5]. Konvertuokite masyvą į [1, 4, 5].
//
// ...
//
// B.9. For ir While
// B.10. Atspausdinkite skaičių stulpelį nuo 1 iki 100.
for (i=1;i<=100;i++){document.write(`${i}<br>`)}
document.write(`<hr>`);
// B.11. Atspausdinkite skaičių stulpelį nuo 11 iki 33.
for (i=11;i<=33;i++){document.write(`${i}<br>`)}
document.write(`<hr>`);
// B.12. Atspausdinkite stulpelį su lyginiais skaičiais nuo 0 iki 100.
for (i=2;i<=100;i=i+2){document.write(`${i}<br>`)}
document.write(`<hr>`);
// B.13. Naudodami ciklą parodykite sumą nuo 1 iki 100.
let _sumB13 = 0;
for (i=1;i<=100;i++){_sumB13 = _sumB13 + i;}
document.write(`Naudodami ciklą parodykite sumą nuo 1 iki 100: ${_sumB13}<hr>`);
// B.14. For ir masyvai
// B.15. Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite visus masyvo elementus ekrane.
let _arrayB15 = [1,2,3,4,5];
document.write(`Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite visus masyvo elementus ekrane:<br>`);
for (i=0;i<=_arrayB15.length-1;i++){
    document.write(`Masyvo elementas ${i} yra ${_arrayB15[i]}<br> `)}
document.write(`<hr>`);
// B.16. Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite šio masyvo elementų sumą.
let _arrayB16 = [1,2,3,4,5];
let _sumB16 = 0;
for (i=0;i<=_arrayB16.length-1;i++){_sumB16 = _sumB16 + _arrayB16[i]}
document.write(`Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite šio masyvo elementų sumą: ${_sumB16}<hr>`);
// B.17. for-in
// B.18. Duotas objektas green: žalia, red: raudona, blue: mėlyna. Parodykite šio objekto raktus ir elementus.
let _arrayB18 = {
    green: 'žalia',
    red: 'raudona',
    blue: 'mėlyna'
};
let _hB18;
for (_hB18 in _arrayB18){document.write(`Raktas (${_hB18}) yra elementas [${_arrayB18[_hB18]}]<br>`)}
document.write(`<hr>`);
// B.19. Duotas objektas su raktais Mantas, Paulius, Mindaugas su reikšmėm 200, 300, 300. Parodykite eilutes tokiu formatu: Mantas - 200 EU atlyginimas.
let _arrayB19 = {
    Mantas:200,
    Paulius:300,
    Mindaugas:300
};
let _hB19;
for (_hB19 in _arrayB19){document.write(`${_hB19} - ${_arrayB19[_hB19]} EU atlyginimas.<br>`)}
document.write(`<hr>`);
// B.20. Duotas masyvas su elementais 2, 5, 9, 15, 0, 4.
// Naudodami for ir if parodykite masyvo elementus kurie yra daugiau nei 3, bet mažiau nei 10
//
// ...
//
// B.21. Duotas masyvas su skaičiais. Skaičiai gali būti teigiami ir neigiami. Raskite teigiamų masyvo skaičių sumą.
let _arrayB21 = [1,-5,6,-8,-9,25,36,24,-5];
let _sumB21 = 0;
for (i=0;i<=_arrayB21.length-1;i++){
    if (_arrayB21[i]>0){_sumB21 = _sumB21 + _arrayB21[i]}
}
document.write(`Teigiamų masyvo skaičių suma: ${_sumB21}<hr>`);
// B.22. Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite visus šio masyvo elementus pasinaudoję ciklais for, while
let _arrayB22 = [1,2,3,4,5];
document.write(`For method: `);
for (i=0;i<=_arrayB22.length-1;i++){
    document.write(`${_arrayB22[i]}; `);
}
document.write(`<br>`);
i = 0;
document.write(`While method: `);
while (i<=_arrayB22.length-1){
    document.write(`${_arrayB22[i]}; `);
    i++;
}
document.write(`<hr>`);
// B.23. Duotas masyvas su elementais [2, 3, 4, 5]. Parodykite šio masyvo elementų produktą (daugyba), naudokite for ciklą.
let _arrayB23 = [2,3,4,5];
let _product = _arrayB23[0];
for (i=1;i<=_arrayB23.length-1;i++){
    _product = _product * _arrayB23[i];
}document.write(`Product: ${_product}<hr>`);
// B.24. Duotas objektas su raktais Vilnius, Riga, Talinas ir reikšmėm Lietuva, Latvija, Estija. Parodykite eilutes tokiu formatu: Vilnius yra Lietuva naudodami for-in ciklą;
let _arrayB24 = {
    Vilnius: 'Lietuva',
    Riga: 'Latvija',
    Talinas: 'Estija'
};
let _hB24;
for (_hB24 in _arrayB24){
    document.write(`${_hB24} yra ${_arrayB24[_hB24]}<br>`);
}
document.write(`<hr>`);