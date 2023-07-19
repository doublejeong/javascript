window.onload = function(){
    var tag = document.createElement("p");
    var text = document.createTextNode("javascript & node.js");

    tag.appendChild(text);      //<p>자바 스크립트</p>
    document.body.appendChild(tag);

}

window.onload = function(){
    var imgNode = document.createElement("img");
    imgNode.setAttribute("src","./img/logo.png");
    imgNode.setAttribute("width",170);
    imgNode.setAttribute("height",67);
    imgNode.setAttribute("tempData","logoImg");

    document.body.appendChild(imgNode);


    
}

window.onload = function(){
    document.body.innerHTML = "<p>안녕하세요</p>"

    var str = " ";

    for(var i =1; i <=5; i++){
        str = str + "<p>안녕하세요</p>"
    }
    document.body.innerHTML = str;

} 


// -----------------------------------시계

// 타이머 = setInterval
// 날짜를 표현하는 객체
// 디스플레이를 위한 document 객체 = document.body.innerHTML

window.onload = function(){
    function setClock(){
        var date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        document.body.innerHTML = hour + ":" + min + ":" + sec;
    }
    setInterval(setClock, 1000)
}

// -----------------------------------javascript를 이용해서 문서만들기


window.onload = function(){
    var str = "";
    str += "<p id='jsTitle'> javascript & node.js </p>";
    str += "<img id='logoImg', src='./img/logo.png',";
    str += "width='170', height='67', tempData='logoImg'>";
    
    document.body.innerHTML = str;
    
    /////////// id속성값을 이용해서 객체 선택하기 : document.getElementById(“id속성값”);
    // var titleNode = document.getElementById("jsTitle");
    // titleNode.innerHTML = "안녕하세요";
    
    // var logoNode = document.getElementById("logoImg");
    // logoNode.setAttribute("src", "./img/arm_mbed.png");
    // logoNode.setAttribute("width", 297);
    // logoNode.setAttribute("height", 124);


    ////// 삭제
    ////// 부모객체를 찾은 다음 부모객체에서 자식객체를 삭제한다.
    // var titleNode = document.getElementById("jsTitle");
    // titleNode.parentNode.removeChild(titleNode);

    // var titleNode = document.getElementById("logoImg");
    // titleNode.parentNode.removeChild(logoNode);


    ////// 스타일 주기
    ////// style속성을 이용한 CSS적용
    var titleNode = document.getElementById("jsTitle");
    titleNode.style.fontSize = "1.2em";
    titleNode.style.border = "1px solid #ff0000";

    var logoNode = document.getElementById("logoImg");
    logoNode.style.width = "170px";
    logoNode.style.heigth = "67px";
}