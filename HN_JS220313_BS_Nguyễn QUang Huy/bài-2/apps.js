// Bài 2 : Viết 1 chương trình chuẩn hóa một câu: loại bỏ các khoảng trắng (space) ở đầu và cuối
// câu, các từ cách nhau 1 khoảng trắng(space), ký tự đầu ở mỗi từ viết hoa, các ký tự khác
// trong từ viết thường [30 điểm]
// ● Đầu vào: Câu là một chuỗi các ký tự
// ● Đầu ra: In ra chuỗi đã được chuẩn hóa.
// ● Ví dụ
// ○ Cho " this is A tEst "; In ra "This Is A Test"
// ○ Cho "heLlo riKkei academy"; In ra "Hello Rikkei Academy”
let str = "this iheLlo riKkei academys A tEst"
let strArr = str.split(" ")
let box = ""
for (let i = 0; i < strArr.length; i++) {
    box += strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1).toLocaleLowerCase;
}
console.log(box);