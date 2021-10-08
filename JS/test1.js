// Bai 1: Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích 
// lớn nhất và trả về kết quả của phép nhân 2 số đó.

// let array = [2,3,-5,-2,4];
// let max = 0;
// for(let i=0;i<array.length;i++){
// 	let _max = array[i]*array[i+1];
//   	if(_max > max){
//     	max = _max
//     }
// }
// console.log(max);


//Bai:2 Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, 
// người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
// Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về 
// mảng chưa tổng cân nặng của 2 team.

let input = [60, 40, 55, 75, 64];
let newArr1 = [];
let newArr2 = [];
for(let i in input){
    if (i % 2 == 0){
        newArr1.push(input[i]);
    }
    else {
        newArr2.push(input[i]);
    }
}
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < newArr1.length; i++){
    sum1 += newArr1[i];
}
for (let i = 0; i < newArr2.length; i++){
    sum2 += newArr2[i];
}
let outPut = [];
outPut.push(sum1,sum2);
console.log(outPut);


