'use strict'


function getTimeFromMinutes(num) {
    // let h, m;
    // h= Math.floor(num / 60);
    // m= num % 60;
    // if (h === 1){
    //     return(`Это ${h} час и ${m} минут`);
    // } else if(h >=2 && h <= 4){
    //     return(`Это ${h} часа и ${m} минут`);
    // } else if(h<0 || typeof h === "string"){
    //     return(`Ошибка, проверьте данные`);
    // }else{
    //     return(`Это ${h} часов и ${m} минут`);
    // }
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;

}
getTimeFromMinutes(-150);

function findMaxNumber(a, b, c, d) {
    if(typeof a ==='string' || typeof b ==='string' || typeof c ==='string' || typeof d ==='string'){
        return 0;
    }else{
        return Math.max(a, b, c, d)
    }
    
}

console.log(findMaxNumber(1, "5" ,3 ,4));

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

console.log(fib(4))

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '2 month'
    },
    showAgeAndLangs(plan){
        let a =plan.age;
        let arrChar = plan.skills.languages;
        num = arrChar.length;
        let arrStr ='';
        // const {peterSkills} = plan.skills.languages;
        for(let i =0; i < num; i++){
            arrStr+= `${arrChar[i]}`;
            if (i != num-1){
                arrStr+=' '
            }else{break}
        }
        return `Мне ${a} и я владею языками: ${arrStr.toUpperCase()}`
    },
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter))

// function showProgrammingLangs(plan) {
//         let str = ''
//         const {programmingLangs} = plan.skills
//         for(let k in programmingLangs){
//             str += `Язык ${k} изучен на ${programmingLangs[k]}\n`;
//         }
//         return str
// }
// console.log(showProgrammingLangs(personalPlanPeter))


for(let k in personalPlanPeter.skills.programmingLangs){
    console.log(personalPlanPeter.skills.programmingLangs[k]);
    console.log(k)
}
   