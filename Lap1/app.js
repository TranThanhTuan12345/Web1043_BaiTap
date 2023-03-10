// Nhập 2 số nguyên a và b 
let a =  prompt("Nhập số nguyên a: ");
let b = prompt("Nhập số nguyên b: ");
// Chuyển a và b từ kiểu chuổi sang kiểu số
var a1 = parseInt(a);
var b1 = parseInt(b);

// Tính tổng c của a và b 
var c = a1 + b1;

// In ra kết quả đồng thời bằng 2 cách
document.write("Kết quả tính tổng của a và b là: " + c + "<br>");
console.log("Kết quả tính tổng của a và b là: " + c);

// Nhập vào 1 số nguyên d từ bàn phím
let d = prompt("Nhập số nguyên d: ");
var d1 = parseInt(d);

// Tính tổng result của c và d (result = c + d)
var result = c + d1;

// In ra kết quả đồng thời bằng 2 cách
alert("Kết quả tính tổng của c và d là: " + result);
console.log("Kết quả tính tổng của c và d là: " + result);