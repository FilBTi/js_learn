'use strict'


function calculateVolumeAndArea(a){
    let str;
    if (a == '' ||  a == null || isNaN(a) == true || typeof a == "string" || (a ^ 0) != a){
        str = 'При вычислении произошла ошибка';
        return str
    }else{
        str = `Объем куба: ${a*a*a}, площадь всей поверхности: ${6*(a*a)}`;
        return str
    }
}

console.log(calculateVolumeAndArea(5));

// function getCoupeNumber(a){
//     let str;
//     if (a === '', a === null, isNaN(a) === true, typeof a == "string", (a ^ 0) != a){
//         str = 'Ошибка. Проверьте правильность введенного номера места';
//         return str;
//     }else if(a == 0){
//         str = "Таких мест в вагоне не существует";
//         return str;
//     }else{
//         return Math.ceil(a/4);
//     }
    
// }

// console.log(getCoupeNumber("hello"));

// console.log(7%4)