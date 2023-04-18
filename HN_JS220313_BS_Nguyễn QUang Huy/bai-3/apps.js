// Bài 3 : Viết một chương trình nhập vào tháng và năm và in ra số ngày của tháng đó[30 điểm]
// ● Đầu vào : nhập tháng 8 năm 2023
// ● Đầu ra : số ngày trong tháng đó là 31

let month = Number(prompt("Tháng"))
let year = Number(prompt("Năm"))
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert(`tháng ${month}, năm ${year} có 31 ngày`)
        break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert(`tháng ${month}, năm ${year} có 30 ngày`)
            break
        default:
            break;
    case 2:{
        if(year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
            alert(`tháng ${month}, năm ${year} có 29 ngày`)
        }else{
            alert(`tháng ${month}, năm ${year} có 28 ngày`)
        }
    }
}