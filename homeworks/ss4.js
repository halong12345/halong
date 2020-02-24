// // Bài 1.Nhập vào 1 năm, kiểm tra xem năm đó phải năm đó có bao nhiêu ngày?
// let year = parseInt(prompt("nhập năm "));
// console.log(year);
// if ((year % 4 === 0 && year % 100 !== 0)|| (year % 100 === 0 && year % 400 === 0))
// {
//     console.log("Năm có 366 ngày");

// }
// else {
//     console.log(" Năm có 365 ngày");
// }

// // Bài 2.Nhập vào 1 tháng trong năm, in ra màn hình số ngày của tháng đó (Yêu cầu kiểm tra cả năm nhuận).
// let month = parseInt(prompt(" Nhập tháng "));
// if( month === 1 || month === 3 ||
//     month === 5 || month === 7  ||
//    month === 8 || month === 10 ||
//    month === 12 ) {
//        console.log(" tháng có 31 ngày");
//        }
// if (month === 4 || month === 6 ||
//     month === 9 || month === 11) {
//         console.log(" tháng có 30 ngày");
//          }
// if (month === 2) {
//     console.log(" tháng có 28 hoặc 29 ngày");
//     }
// else  
// {
//     console.log("nhập tháng sai");
// }

// // Bài 3.Nhập vào 1 tháng trong năm, in ra mùa của tháng đó.
// let month = parseInt(prompt("Nhập tháng"));
// if ( month >= 2  && month <= 4) {
//   console.log(" Mùa xuân");
//     } 
// if ( month >= 5 && month <= 7 ) {
// console.log("Mùa hạ");
// }
// if ( month >= 8 && month <= 10) {
//     console.log("Mùa thu");
//     }  
// if ( month === 11 || month ===12 || month === 1) {
//     console.log(" mùa đông")
// }
// else {
//     console.log("nhập sai")
// }
// anh xem bài này giúp em.

// // Bài 4.Nhập vào 3 số a, b, c. In ra theo thứ tự tăng dần.
// let a = prompt("nhập a");
// let b = prompt("nhập b");
// let c = prompt("nhập c");
// if (a < b && b < c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);   
// }
// if(a < c && c < b) {
//     console.log(a);
//     console.log(c);
//     console.log(b); 
// }
// if(b < a && a < c ){
//     console.log(b);
//     console.log(a);
//     console.log(c); 
// }
// if(b < c && c < a ){
//     console.log(b);
//     console.log(c);
//     console.log(a);
// }
// if(c < b && b < a){
//     console.log(c);
//     console.log(b);
//     console.log(a);
// }
// else {
//     console.log(c);
//     console.log(a);
//     console.log(b);   
// }

// // Bài 5. Nhập vào 3  số a, b, c. Kiểm tra xem 3 số đó có lập được
// // thành tam giác không. Nếu có, kiểm tra xem tam giác có vuông, cân hay đều k?

// let a = Number(prompt(" nhập a "));
// let b = Number(prompt(" nhập b "));
// let c = Number(prompt(" nhập c "));
// if (((a + b) > c) && ((a + c) > b) && ((b + c) > a)) {
//     console.log("là 3 cạnh của tam giác"); {
//         if (((a ** 2 + b ** 2) === c ** 2) || ((a ** 2 + c ** 2) === b ** 2) || ((b ** 2 + c ** 2) === a ** 2)) {
//             console.log("tam giác vuông");
//         }
//         if ((a === b && b !== c) || (b === c && c !== a) || (a === c && c !== b)) {
//             console.log("tam giác cân");

//         }
//         if (a === b && b === c) {
//             console.log("tam giác đều");

//         }


//     }

// } else {
//     console.log(" ko phải 3 cạnh tam giác");
//     console.log(a);
//     console.log(b);
//     console.log(c);




// }
// anh sửa bài này giúp em .

// Bài 6 :Cho thông tin bảng giá điện sau. Nhập vào số điện sử dụng của 1 hộ trong tháng. 
// In ra chi tiết số tiền từng bậc và tổng số tiền phải trả.
// let x = parseInt(prompt("nhập số điện"));
// let a = x * 1.678;
// let b = (x - 50)* 1.734;
// let c = (x - 100)* 2.014;
// let d = (x - 200)* 2.536;
// let e = (x - 300)* 2.834;
// let f = (x - 400)* 2.927;
// let a1 = 50 * 1.678;
// let b1 = 50 * 1.734;
// let c1 = 100* 2.014;
// let d1 = 100* 2.536;
// let e1 = 100* 2.834;
// if ( x > 0 && x <= 50 ) {
//     console.log(`tiền bậc 1 và tổng số tiền là  ${a }`);   
// }
// if ( x > 50 && x <= 100 ){
//     console.log(`tiền bậc 1 là ${a1}`);
//     console.log(` tiền bậc 2 là ${b}`);
//     console.log(`tổng tiền là ${a1 +$b});   
// }
// if ( x > 100 && x <= 200){
//     console.log(` tiền bậc 1 là ${a1}`);
//     console.log(` tiền bậc 2 là ${b1}`);
//     console.log(` tiền bậc 3 là ${c}`);
//     console.log(` tổng tiền là ${a1 + $b1 + $c}`);
// }
// if ( x > 200 && x<= 300){
//     console.log(` tiền bậc 1 là ${a1}`);
//     console.log(" tiền bậc 2 là ",$b1);
//     console.log(" tiền bậc 3 là ",$c1);
//     console.log(" tiền bậc 4 là ",$d);
//     console.log(" tổng tiền là ",$a1 + $b1 + $c1 + $d);
// }
// if ( x > 300 && x <=400){
//     console.log(" tiền bậc 1 là ",$a1);
//     console.log(" tiền bậc 2 là ",$b1);
//     console.log(" tiền bậc 3 là ",$c1);
//     console.log(" tiền bậc 4 là ",$d1);
//     console.log(" tiền bậc 5 là ",$e);
//     console.log(" tổng tiền là ",$a1 + $b1 + $c1 + $d1 + $e);
// }
// if ( x > 400 ){
//     console.log(" tiền bậc 1 là ",$a1);
//     console.log(" tiền bậc 2 là ",$b1);
//     console.log(" tiền bậc 3 là ",$c1);
//     console.log(" tiền bậc 4 là ",$d1);
//     console.log(" tiền bậc 5 là ",$e1);
//     console.log(" tiền bậc 6 là ",$f);
//     console.log(" tổng tiền là ",$a1 + $b1 + $c1 + $d1 + $e1 + $f);
// }
// anh sửa giúp em bài này

// Bài 7 Cho người dùng nhập vào chiều cao, cân nặng.
// Tính chỉ số BMI, in ra tình trạng hiện tại của người dùng theo cấp độ của chỉ số BMI.
// let height = prompt ("nhập chiều cao ");
// let weight = prompt ("nhập cân nặng");
// let BMI = weight/(height**2);
// if( BMI < 18.5){
//     console.log("thể trạng gầy"); 
// }
// if ( BMI >= 18.5 && BMI <= 24.9 ){         // else if(BMI <= 24.9)
//     console.log(" thể trạng bình thường");
// }
// if ( BMI >=25 && BMI <= 29.9){
//     console.log("thể trạng hơi béo");
// }
// if ( BMI >=30 && BMI <= 34.9 ){
//     console.log(" thể trạng béo phì cấp 1");
// }
// if ( BMI >= 35 && BMI <= 39.9 ){
//     console.log("thể trạng béo phì cấp 2");
// }
// if ( BMI >=40){
//     console.log("thể trạng béo phì cấp 3");

// }


// bài 8 .Nhập vào 1 số, kiểm tra xem có phải số chính phương không? có phải số nguyên tố không? 
//có phải hợp số k? Nếu là hợp số, in ra các ước số của nó. 
//(chú thích: số chính phương là bình phương của 1 số tự nhiên nào đó,
// ví dụ: 25 là số chính phương. Số nguyên tố là số chỉ chia hết có 1 và chính nó,
 // ví dụ: số 11. Hợp số là số chia hết cho các số ngoài 1 và chính nó.
  // B được gọi là ước số của A nếu A chia hết cho B).