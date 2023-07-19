window.onload = function(){
    var ce = document.getElementById("cEvent");
    var divCe = document.getElementById("divEvent")

    // ce.onclick = function(){
    //     ce.style.backgroundColor = "blue";
    // }

    var changeBlue = function(event){
        console.log(event);
        this.style.backgroundColor = "blue";

        for(var key in event){
            console.log(key + " : " + event[key]);
        }
    };
    ce.addEventListener("click",changeBlue);
    divCe.addEventListener("click",changeBlue);

    // ce.ondblclick = function(){
    //     ce.style.backgroundColor = "red";
    // }

    var changeRed = function(event){
        console.log(event);
        this.style.backgroundColor = "red";
    }
    ce.addEventListener("dblclick",changeRed);
    divCe.addEventListener("dblclick",changeRed);
}

// this -> 이벤트가 발생한 객체
// this = 호출하는 놈