// 함수 반환(리턴) 함수
// 함수는또다른함수를반환할수있다.

function funName() {
    return function(dan) {
        for(var i = 1; i < 10; i++){
            document.write(dan * i + "<br>");
        }
    }   
}
var reFun = funName();

reFun(4);
reFun(5);
reFun(6);

// 클로저
// 반환된 함수의 life-cycle가 종료될 때까지 호출된 함수의 life-cycle이 유지되는 것
function funName(x){
    var varName = ":: 요청한 " + x + "에 대한 구구단::"

    return function() {
        document.write(varName);
        for(var i = 1; i < 10; i++){
            document.write(x + " * " + i + " = " + (x * i) + "<br>");
        }
    }
}
var returnFun = funName(5);
returnFun();

//함수안에 또다른 함수

function outFun(width, height) {
    console.log("triangle : " + triangle());
    console.log("quadrangle : " + quadrangle());

    // 삼각형 면적 계산
    function triangle() {
        return (width * height) / 2 ;
    }

    // 사각형 면적 계산
    function quadrangle() {
        return width * height;
    }
}
outFun(3, 5);


// ---------------------------------------------------------------
// 콜백함수
// 매개변수로 함수를 전달하고, 전달된 매개변수가 특정 시점에 호출되는 것

function add(x,y){
    return x + y;
}

function sub(x,y){
    return x - y;
}

function mul(x,y){
    return x * y;
}

// 파라미터 함수 = 콜백함수
function printResult(x,y,callback){
    var result = callback(x,y);
    document.write(result + "<br>");
}

printResult(2,3,add);
printResult(2,3,sub);
printResult(2,3,mul);

var fun = add;
document.write(fun(3,5) + "<br>");

// document.write(add(10,20));