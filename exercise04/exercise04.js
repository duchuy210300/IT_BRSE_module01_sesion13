let input = prompt("Nhập dãy số ( phân cách bởi dấu","");
let array = input.split(",");
let newArray =[];
for(let index in array){
   newArray.push(Number(array[index]));
}
let result = Math.max(...newArray);
alert(`Giá trị lớn nhất là ${result}`)