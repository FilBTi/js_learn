'use strict'

function reverse(str) {
    if(typeof(str) != 'string'){
        return "Ошибка!"
    }
    let arr= str.split('').reverse().join('')
    return arr;
}

reverse('abc');


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY','EUR'];
const EUR = "EUR";
function availableCurr(arr, missingCurr) {
    let str=''
    for(let i = 0; i < arr.length; i++){
        if (arr[i] != missingCurr){
            if( i === (arr.length-1)){
                str+= `${arr[i]} d`;
            }else{str+=arr[i]}
        }else{continue}
        
    }
    return`Доступные валюты:\n${str}`
    // return`Доступные валюты:\n${str}`
}

console.log(availableCurr(additionalCurrencies, EUR))