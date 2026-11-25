let array =[];
for(let i = 1; i <= 20; i++){
array.push(Math.floor(Math.random() * 10) + 1);
};
let k = parseInt(prompt("Nhập số cần kiểm tra từ 1 đến 10"));
let count = 0;
for(let i = 0;i < array.length; i++){
    if(array[i] === k){
        count++
    }
};
console.log(array)
if(count === 0){
console.log(`Phần tử ${k} không xuất hiện  trong mảng`);
}else{
console.log(`Phần tử ${k} xuất hiện ${count} lần trong mảng`);
};