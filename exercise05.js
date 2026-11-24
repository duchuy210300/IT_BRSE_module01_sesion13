let array = [];
let sumEven = 0;
let sumOdd = 0;
for(let i = 0; i <= 20; i++ ){
    array.push(Math.floor(Math.random()*100));
};
console.log(array);
for(let index in array){
    if(array[index] % 2 === 0){
       sumEven = sumEven + array[index];
    }else{
        sumOdd = sumOdd + array[index];
    }
};
    console.log("Tổng các số chẵn là:", sumEven);
    console.log("Tổng các số lẻ là:", sumOdd);

