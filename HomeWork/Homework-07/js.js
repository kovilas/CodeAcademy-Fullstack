let i; // Kad PhpStorm'as ingnoruotų implicit declaration.
// A.1. Sukurkite masyvą a, b, c. Parodykite masyvą naudodami console.log funkciją.
let arrayA1 = ["a","b","c"];
console.log(arrayA1);

// A.2. Naudodamiesi ankstesnės užduoties masyvu, parodykite pirmojo, antrojo ir trečiojo elementų turinį.
console.log(arrayA1[0]);
console.log(arrayA1[1]);
console.log(arrayA1[2]);

// A.3. Sukurkite masyvą a, b, c, d ir naudodami jį parodykite eilutė a + b, c + d.
let arrayA3 = ["a","b","c","d"];
document.write(`Task A.3.:<br><br>${arrayA3[0]} + ${arrayA3[1]}, ${arrayA3[2]} + ${arrayA3[3]}<hr>`);

// A.4. Sukurkite masyvą su elementais 2, 5, 3, 9. Pirmąjį masyvo elementą padauginkite iš antrojo, o trečiąjį elementą iš ketvirtojo. Sudėkite rezultatus, priskirkite kintamąjam. Parodykite šio kintamojo reikšmę.
let arrayA4 = [2,5,3,9];
let answerA4 = (arrayA4[0]*arrayA4[1])+(arrayA4[2]*arrayA4[3]);
document.write(`Task A.4.:<br><br>(${arrayA4[0]} * ${arrayA4[1]}) + (${arrayA4[2]} * ${arrayA4[3]}) =  ${answerA4}<hr>`);

// A.5. Objektai (asociaciniai masyvai)
// A.6. Sukurkite objektą a = 1, b = 2, c = 3. Parodykite elemento c reikšmę dviem būdais: per skliaustelius ir kaip objekto savybę.
let arrayA6 = {a: 1,b: 2,c: 3};
document.write(`() method: ${arrayA6["c"]}<br>`);
document.write(`. method: ${arrayA6.c}<hr>`);

// A.7. Sukurkite objektą su savaitės dienomis. Raktai jame turėtų būti dienų skaičiai nuo savaitės pradžios (pirmadienis - pirmasis ir t.t.). Parodykite dabartinę savaitės dieną.
let date = new Date();
let weekDayAdress = date.getDay();
if (weekDayAdress===0){weekDayAdress=7}
let weekDayWord = {
    1: "Pirmadienis",
    2: "Antradienis",
    3: "Trečiadienis",
    4: "Ketvirtadienis",
    5: "Penktadienis",
    6: "Šeštadienis",
    7: "Sekmadienis"
};
document.write(`Savaitės diena: ${weekDayWord[weekDayAdress]}<hr>`);

// A.8. Sukurkite kintamjį day kuriame saugomas savaitės dienos numeris. Atspausdinkite savaitės dieną naudojant sita kintamajį.
let dayPrompt = prompt(`Įveskite savaitės dieną (1-7)`);
if (dayPrompt<1 || dayPrompt>7){
    document.write(`Nėra ${dayPrompt}-os savaitės dienos!<hr>`);
} else document.write(`Įvesta savaitės diena: ${weekDayWord[dayPrompt]}<hr>`);

// A.9. Daugialypiai masyvai
// A.10. Yra pateiktas masyvas [[1, 2, 3], [4, 5, 6], [7,8,9]]. Parodykite skaičių 4 iš šio masyvo.
let arrayA10 = [[1,2,3],[4,5,6],[7,8,9]];
document.write(`${arrayA10[1][0]}<hr>`);

// A.11. Duotas objektas {js: ['jQuery', 'Angular'], php: 'hello', css: 'world'}. Parodykite žodį jQuery.
let arrayA11 = {
    js: ["jQuery", 'Angular'],
    php: 'Hello',
    css: 'world'
};
document.write(`${arrayA11.js[0]}<hr>`);

// A.12. Sukurkite dvimatį masyvą. Pirmieji du raktai yra lt ir en. Raktai turi savaitės dienų vardų masyvus lietuviškai ir angliškai. Naudodamiesi šiuo masyvu, pirmadienį parodykite lietuvių kalba, o trečiadienį - anglų kalba.
let WeekDayBilingual = {
    lt: ['pirmadienis','antradienis','trečiadienis','ketvirtadienis','penktadienis','šeštadienis','sekmadienis'],
    en: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday','sunday']
};
document.write(`${WeekDayBilingual.lt[1]}<br>${WeekDayBilingual.en[3]}<hr>`);

// A.13. Sukurkite kintamjį lang (reikšmės lt arba en) ir naudojant lang ir day parodykite dieną (edited)
//
// Placeholder
//

// B.1. Masyvu funkcijos
// B.2. Duoti du masyvai: 1, 2, 3 ir 4, 5, 6. Sujunkite juos.
let arrayFirst = [1,2,3];
let arraySecond = [4,5,6];
let arraysFused = arrayFirst.concat(arraySecond);
console.log(arraysFused);

// B.3. Duotas masyvas 1, 2, 3. Iš jo padarykite masyvą 3, 2, 1.
let arrayB3 = [1,2,3];
let arrayReversed = arrayB3.reverse();
console.log(arrayReversed);

// B.4. Duotas masyvas 1, 2, 3. Pridėkite elementus 4, 5, 6 į galą ir -1, -2, -3 į priekį.
let arrayB4 = [1,2,3];
arrayB4.unshift(-1,-2,-3);
arrayB4.push(4,5,6);
console.log(arrayB4);

// B.5. Duotas masyvas html, css, js. Parodykite pirmąjį ir paskutinį elementus.
let arrayB5 = ['html','css','js'];
let arrayB5end = arrayB5.length-1;
console.log(`Pirmas: ${arrayB5[0]}, paskutinis: ${arrayB5[arrayB5end]}`);

// B.6. Duotas masyvas 3, 4, 1, 2, 7. Surūšiuokite jį.
let arrayB6 = [3,4,1,2,7];
let arraySort = arrayB6.sort();
console.log(arraySort);

// B.7. Duotas masyvas 1, 2, 3, 4, 5. Konvertuokite masyvą į 1, 2, 3.
let arrayB7 = [1,2,3,4,5];
arrayB7=arrayB7.slice(0,3);
console.log(arrayB7);

// B.8. Duotas masyvas [1, 2, 3, 4, 5]. Konvertuokite masyvą į [1, 4, 5].
//
// Placeholder
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
let sumB13 = 0;
for (i=1;i<=100;i++){sumB13 = sumB13 + i;}
document.write(`Naudodami ciklą parodykite sumą nuo 1 iki 100: ${sumB13}<hr>`);

// B.14. For ir masyvai
// B.15. Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite visus masyvo elementus ekrane.
let arrayB15 = [1,2,3,4,5];
document.write(`Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite visus masyvo elementus ekrane:<br>`);
for (i=0;i<=arrayB15.length-1;i++){
    document.write(`Masyvo elementas ${i} yra ${arrayB15[i]}<br> `)}
document.write(`<hr>`);

// B.16. Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite šio masyvo elementų sumą.
let arrayB16 = [1,2,3,4,5];
let sumB16 = 0;
for (i=0;i<=arrayB16.length-1;i++){sumB16 = sumB16 + arrayB16[i]}
document.write(`Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite šio masyvo elementų sumą: ${sumB16}<hr>`);

// B.17. for-in
// B.18. Duotas objektas green: žalia, red: raudona, blue: mėlyna. Parodykite šio objekto raktus ir elementus.
let arrayB18 = {
    green: 'žalia',
    red: 'raudona',
    blue: 'mėlyna'
};
let hB18;
for (hB18 in arrayB18){document.write(`Raktas (${hB18}) yra elementas [${arrayB18[hB18]}]<br>`)}
document.write(`<hr>`);

// B.19. Duotas objektas su raktais Mantas, Paulius, Mindaugas su reikšmėm 200, 300, 300. Parodykite eilutes tokiu formatu: Mantas - 200 EU atlyginimas.
let arrayB19 = {
    Mantas:200,
    Paulius:300,
    Mindaugas:300
};
let hB19;
for (hB19 in arrayB19){document.write(`${hB19} - ${arrayB19[hB19]} EU atlyginimas.<br>`)}
document.write(`<hr>`);

// B.20. Duotas masyvas su elementais 2, 5, 9, 15, 0, 4.
// Naudodami for ir if parodykite masyvo elementus kurie yra daugiau nei 3, bet mažiau nei 10
//
// Placeholder
//

// B.21. Duotas masyvas su skaičiais. Skaičiai gali būti teigiami ir neigiami. Raskite teigiamų masyvo skaičių sumą.
let arrayB21 = [1,-5,6,-8,-9,25,36,24,-5];
let sumB21 = 0;
for (i=0;i<=arrayB21.length-1;i++){
    if (arrayB21[i]>0){sumB21 = sumB21 + arrayB21[i]}
}
document.write(`Teigiamų masyvo skaičių suma: ${sumB21}<hr>`);

// B.22. Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite visus šio masyvo elementus pasinaudoję ciklais for, while
let arrayB22 = [1,2,3,4,5];
document.write(`For method: `);
for (i=0;i<=arrayB22.length-1;i++){
    document.write(`${arrayB22[i]}; `);
}
document.write(`<br>`);
i = 0;
document.write(`While method: `);
while (i<=arrayB22.length-1){
    document.write(`${arrayB22[i]}; `);
    i++;
}
document.write(`<hr>`);

// B.23. Duotas masyvas su elementais [2, 3, 4, 5]. Parodykite šio masyvo elementų produktą (daugyba), naudokite for ciklą.
let arrayB23 = [2,3,4,5];
let product = arrayB23[0];
for (i=1;i<=arrayB23.length-1;i++){
    product = product * arrayB23[i];
}document.write(`Product: ${product}<hr>`);

// B.24. Duotas objektas su raktais Vilnius, Riga, Talinas ir reikšmėm Lietuva, Latvija, Estija. Parodykite eilutes tokiu formatu: Vilnius yra Lietuva naudodami for-in ciklą;
let arrayB24 = {
    Vilnius: 'Lietuva',
    Riga: 'Latvija',
    Talinas: 'Estija'
};
let hB24;
for (hB24 in arrayB24){
    document.write(`${hB24} yra ${arrayB24[hB24]}<br>`);
}
document.write(`<hr>`);
// Svieto pabaiga