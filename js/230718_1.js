// alert("내장함수");

console.log("내장함수");

//시간관련함수

var timeOut = setTimeout( function(){
    alert("3초후 실행 한번 실행")
},3000);

// var timeOut = setTimeout(timeFun,3000);

var intervalId = setInterval(function () {
    document.write("2 초 마다 실행" + "<br>");
},2000)

setTimeout(function () {
    document.write("2초 마다 실행 실행 끝" + "<br>")
    clearInterval(intervalId);
},10000)

//eval 함수
// : 문자열에 있는 소스 코드를 실행

var varEval = "console.log('eval함수!')";
eval(varEval)


// ---------------------------------------------------
