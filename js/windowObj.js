// var newWindow = window.open("http://google.com","openWindow","width=500, height300")

// //위치 조정
// newWindow.moveTo(50, 50);
// for(var i=0; i<1000; i++) {
//    newWindow.moveBy(1, 1);
// }

// //사이즈 조정
// newWindow.resizeTo(500, 600);
// for(var i=0; i<200; i++) {
//    newWindow.resizeBy(-1, -1);
// }

console.log(window);
window.onload = function(){
    console.log("First!!");
};

/*
Screen객체
*/

function openWin(url, width, height) {

    console.log("screen.width : " + screen.width);
    console.log("screen.height : " + screen.height);
    
    var left = screen.width/2 - width/2;
    var top = screen.height/2 - height/2;
    var opt = "width = " + width + ", height = " + height + ", left = " + left + ", top = " + top;
    
    open(url, "newWin", opt);
    
    }
    
openWin("https://yahoo.com", 800, 500);


window.onload = function() {
    // location.href = "http://www.yahoo.com";

    // location.assign ("http://www.naver.com");
    //history 를 남기지 않음 뒤로가기 안됨.
    // location.replace ("http://www.naver.com");
};
