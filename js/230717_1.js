// 뱌열 길이(크기)
var varArr = new Array(0, 1, 2, 3, 4, 5);
document.write("varArr.length : " + varArr.length + "<br>");

varArr = ['사과','오렌지','포도'];

for (let i = 0; i < varArr.length; i++) {
    document.write(varArr[i]);    
}

for (let num in varArr) {
    document.write(num);
}

// shift(), pop();
// var varArrShiftPop = new Array("가", "나", "다", "라", "마");
// console.log("varArrShiftPop.shift() : " + varArrShiftPop.shift());
// console.log("varArrShiftPop : " + varArrShiftPop);

// console.log("varArrShiftPop.pop() : " + varArrShiftPop.Pop());
// console.log("varArrShiftPop : " + varArrShiftPop);


////////////////로또
// 6개 배열 생성후 랜덤 함수 찾아서, 중복제거 된 6새의 번호를 출력하시오.

var lotto = []; //new Array(6);

while(lotto.length < 6) {
    var num = Math.floor(Math.random() * 45 + 1);
    if(lotto.indexOf(num < 0)){     // 중복 제거 -1
        lotto.push(num);
    }
}

document.write("로또번호" + lotto.sort());

///////
// 명시(선언)적 함수 생성
function add(num1 ,num2) {
    return num1 + num2;
}
document.write(add(1,2));
document.write(add("AA","BB") + "<br>");


//익명 함수
var sub = function(num1, num2){
    return num1 - num2;
}
document.write(sub(1,2) + "<br>");


// 함수 (핵심) = this와 argument
// arguments = 자바 스크립트에서 함수가 만들어 질때 생성자 처럼 두개를 넣어줌
// 그게 바로 arguments 와 this 임.
function funArgs() {

    for (let i = 0; i < arguments.length; i++) {
        document.write("내부" + arguments[i] + "<br>")
        
    }

    return arguments;
}

var fun = funArgs(1,2,3,4,5,6,7);

for (var num in fun) {
     document.write(fun[num] + "<br>")
}

document.write(fun + "<br>");
document.write("fun" + fun.length + "<br>");


////////////
// 국영수 입력 받아서

// -getAvg()
// -getGrade()

// 총점과 평균, 학점이 나오도록 하시오

// var kor = Number(prompt("국어점수"));
// var eng = Number(prompt("영어점수"));
// var math = Number(prompt("수학점수"));

// function  getAvg (kor, eng, math) {
//     return (Number(kor) + Number(eng) + Number(math)) / 3.0;
// }

// function  getGrade (avg) {
//     var grade = "가";

//     if (avg >= 90) {
//         return (grade = "수")
//     } else if (avg >= 80) {
//         return (grade = "우")
//     } else if (avg >= 70) {
//         return (grade = "미")
//     } else if (avg >= 60) {
//         return (grade = "양")
//     } else {
//         return (grade = "가")
//     }
//     return grade;
// }

// document.write("평균 : " + getAvg(kor, eng, math) + "<br>");
// document.write("학점 : " + getGrade(getAvg(kor,eng,math)) + "<br>");

// -------------------------------

var arrSub = ["국어", "영어", "수학"];

function  getAvg (arrSubs) {
    var sum = 0;

    for (var i in arrSubs) {
        sum = sum + Number(arrSubs[i]);
    }

    return sum / arrSubs.length;
}

function  getGrade (avg) {
    var grade = "가";

    if (avg >= 90) {
        return (grade = "수")
    } else if (avg >= 80) {
        return (grade = "우")
    } else if (avg >= 70) {
        return (grade = "미")
    } else if (avg >= 60) {
        return (grade = "양")
    } else {
        return (grade = "가")
    }
    return grade;
}

for (var i in arrSub) {
    arrSub[i] = prompt(arrSub[i])
}

document.write("평균 : " + getAvg(arrSub) + "<br>");
document.write("학점 : " + getGrade(getAvg(arrSub)) + "<br>");