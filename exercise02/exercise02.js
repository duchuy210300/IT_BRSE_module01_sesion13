let checkNumber = +prompt("Nhập một số sổ số từ 0 đến 10");
let array = [];
for(let i= 0; i <= 10 ; i++){
    array.push(Math.floor(Math.random() * 10));
};
for(let i = 0; i < array.length ; i++){
    if(checkNumber === array[i]){
        alert("Binggo");
        break;
    }else{
        alert("Chúc bạn may mắn lần sau");
        break;
    }
}