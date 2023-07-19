
var ojbName = {};
document.write(typeof ojbName);

var objCar = {
    width: "3m",
    height: "2m",
    cc: "2000cc",
    energy: 100,
    speed: function(power){
        return this.energy * power;
    }
};

document.write(objCar.width + "<br>");
document.write(objCar.height + "<br>");
document.write(objCar.cc + "<br>");
document.write(objCar.energy + "<br>");
document.write(objCar.speed(100) + "<br>");

objCar.width = "8m";
document.write(objCar.width + "<br>");
// document.write(objCar.["width"] + "<br>");


var print = "";
for(var key in objCar) {

    // if(typeof objCar[key] == "function") continue;
    print += key + " : " + objCar[key] + "\n";
}

console.log(print);


//-----------------------------------------------------------------
/*
    객체에 속성 추가 및 삭제
*/

var objName = {
    name : "Lee sun sin",
    nation : "Korea",
    gender : "men",
    character : "good"
};

var print = "";
for(var key in objName) {
    print += key + " : " + objName[key] + "\n"
}
console.log(print);

// 속성 추가
objName.talent = "fencing";
print = "";
for(var key in objName) {
    print += key + " : " + objName[key] + "\n"
}
console.log(print);

// 속성 삭제
delete(objName.talent);
// delete objName.talent;
print = "";
for(var key in objName) {
    print += key + " : " + objName[key] + "\n"
}
console.log(print);

/*
    in, with 키워드
*/

// in 키워드
console.log("nation" in objName);       // true
console.log("age" in objName);          // false

// with 키워드
with(objName) {
    console.log("name : " + name);
    console.log("nation : " + nation);
    console.log("gender : " + gender);
    console.log("character : " + character);
}


//-----------------------------------------------------------------
// 객체를 생성
// 1. Object() 생성자 사용

var person = new Object();  // person = {};

person.name = "홍길동";
person.age = 35;

// 2. 객체 리터럴 활용 방버
var objPerson = {
    name : "홍길동",
    age : 35,
    getAge: function() {
        return this.age;
    }
}

// 3. 생성자 함수를 이용 하는 방법
// 함수에서도 기본적으로 this를 쓸수 있음 = 자바 스크립트에서는 함수가 객체이기 때문
// 함수가 만들어 질때 => 객체로 만들기 위해서 2가지를 심어줌
// 그 두가지는 this와 arguments

function Airplane(name, color, speed) {
    //arguments;
    //this; var Airplane = {}

    this.name = name;
    this.color = color;
    this.speed = speed;
    this.fly = function() {
        return this.speed + " fly!!"
    }
}

var plane1 = new Airplane("보라매","레드",100);
document.write(plane1.fly());

var plane2 = new Airplane("보라매","레드",100);
document.write(plane2.fly()+ "<br>");


//
function Grade(name,kor,eng,math){
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.math = math;
    var avg = (this.kor + this.eng + this.math) / 3
    this.getAvg = function() {
        return this.name + "의 평균은 " + avg + "입니다." + "<br>"
    }
    this.getGrade = function() {
        var grade = "가";
        if (avg  >= 90) {
            grade = "수"
        } else if (avg >= 80) {
            grade = "우"
        } else if (avg >= 70) {
            grade = "미"
        } else if (avg >= 60) {
            grade = "양"
        } else {
            grade = "가"
        }
        return this.name + "의 성적은 " + grade + " 입니다." + "<br>"
        
    }

}

var hong = new Grade("홍길동",100,70,80);

document.write(hong.getAvg());    //홍길동의 평균은 76.797 입니다.
document.write(hong.getGrade());  //홍길동의 성적은 미 입니다.





document.write(person + "<br>");



//////////////////////////////////////////////////