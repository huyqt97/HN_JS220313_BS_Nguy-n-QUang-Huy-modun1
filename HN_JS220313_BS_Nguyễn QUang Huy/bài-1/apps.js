// Bài 1: Cho 1 mảng các phần tử in ra phần tử lớn nhất trong mảng [10 điểm]
// ● Đầu vào: 1 mảng
// ● Đầu ra: giá trị lớn nhất của mảng
// ● Ví dụ: [3,5,88,99,76,8,4,5,85,63] in ra 99

let arrayNumber = [3,5,88,76,8,4,99,5,85,63]
let max = arrayNumber[0]
let box = 0
for (let i = 1; i < arrayNumber.length; i++) {
    if(max<arrayNumber[i]){
        box = max
        max = arrayNumber[i]
    }
}
console.log(max);