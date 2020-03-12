// 1. Parašykite funkciją, kuri grąžina skaičiaus kvadratą. Skaičius perduodamas kaip parametras.
let input1 = parseInt(prompt('Skaičius, keliamas kvadratu:'));
function sqrt (num){return num ** 2;}
document.write(`SQRT(${input1}) = ${sqrt(input1)}<hr>`);

// 2. Parašykite funkciją, kuri grąžina dviejų skaičių sumą. Skaičiai perduodami funkcijos parametrus.
let input2A = parseInt(prompt('Dviejų skaitmenų suma, pirmasis dėmuo:'));
let input2B = parseInt(prompt('Dviejų skaitmenų suma, antrasis dėmuo:'));
function res2(pa,pb){return (pa + pb);}
document.write(`${input2A} + ${input2B} = ${res2(input2A,input2B)}<hr>`);

// 3. Parašykite funkciją, kuri iš antro parametro atima pirmą ir padalija iš trečio.
let input3A = parseInt(prompt('(B-A)/C ; įveskite A:'));
let input3B = parseInt(prompt('(B-A)/C ; įveskite B:'));
let input3C = parseInt(prompt('(B-A)/C ; įveskite C:'));
function res3 (pa,pb,pc){return ((pb-pa)/pc);}
document.write(`(${input3B} - ${input3A}) / ${input3C} = ${res3(input3A,input3B,input3C)}<hr>`);

// 4. Parašykite funkciją, kuri priima kaip parametrą skaičių nuo 1 iki 7, o grąžina savaitės dieną lietuvių kalba.
let inputWeekDay = parseInt(prompt('Įveskite savaitės dieną (1-7):'));
function weekDayLT (input){
    let arr_weekDayWord = [
        'Pirmadienis',
        'Antradienis',
        'Trečiadienis',
        'Ketvirtadienis',
        'Penktadienis',
        'Šeštadienis',
        'Sekmadienis'
    ];
        if (input<1||input>7||input == null||isNaN(input))
            {return 'Neteisinga įvestis.'}
        return arr_weekDayWord[input-1];
}
document.write(`${inputWeekDay} = ${weekDayLT(inputWeekDay)}<hr>`);