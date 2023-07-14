// *
// **
// ***
// ****
// *****
// 별 짓기

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < i; j++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("<hr>");
// *****
// ****
// ***
// **
// *
// 별 짓기

for (let i = 6; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("<hr>");
//     *
//    **
//   ***
//  ****
// *****
// 별 짓기

for (let i = 6; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        document.write("&nbsp");
    }
    for (let j = 6; j > i; j--) {
        document.write("*");
    }
    document.write("<br>");
}

for (var i = 1; i <= 5; i++) {            
    for (var j = i; j < 5; j++) {            
        document.write("&nbsp");
    }
    for (var j = 1; j <= i; j++) {            
        document.write("*");
    }
    document.write("<br>");
}

///////////////////////////////////////////////////////

//크기를 지정하지 않은 배열 객체 생성
var varArr1 = new Array();

//크기를 지정한 배열 객체 생성
var varArr2 = new Array(5);

//배열 생성과 데이터 저장을 동시에
var varArr3 = new Array(123, "abc", true, function fun(){}, {}, undefined);

//배열 생성과 데이터 저장을 동시에
var varArr4 = [123, "abc", true, function fun(){}, {}, undefined];

console.log("varArr1 : " + varArr1);
console.log("varArr2 : " + varArr2);
console.log("varArr3 : " + varArr3);
console.log("varArr4 : " + varArr4);


// "자바스크랍트 : 국영수 입력 받아 짜시오 평균과 총점을 
// 출력하시오"

var kor = Number(prompt("국어점수"));
var eng = Number(prompt("영어점수"));
var math = Number(prompt("수학점수"));

var total = kor + eng + math;
var avg = total / 3.0;

document.write("총점 : " + total + "<br>");
document.write("평균 : " + avg + "<br>");