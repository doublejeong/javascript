// window.onload = function(){
//     var ce = document.getElementById("inputText");

//     // ce.onclick = function(){
//     //     ce.style.backgroundColor = "blue";
//     // }

//     var changeBlue = function(event){
//         console.log(event);
//         this.style.backgroundColor = "blue";

//         for(var key in event){
//             console.log(key + " : " + event[key]);
//         }
//     };
//     ce.addEventListener("click",changeBlue);

//     // ce.ondblclick = function(){
//     //     ce.style.backgroundColor = "red";
//     // }

//     var changeRed = function(event){
//         console.log(event);
//         this.style.backgroundColor = "red";
//     }
//     ce.addEventListener("dblclick",changeRed);
// }


window.onload = function(){
    var it = document.getElementById("inputText");
    var op = document.getElementById("output");

    it.onkeydown = function(e){
        op.innerHTML = e.keyCode;
    }
}