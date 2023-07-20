window.onload = function(){

    function inputHandler (event){
        console.log(event.key);     //A
        console.log(event.keyCode); //

        if(event.key != 'Enter' && event.key != 'Shift'){
            document.getElementById('output').innerText = event.key.charCodeAt();
        }
    }

    var input = document.getElementById("inputText");
    input.addEventListener("keydown", inputHandler);
}


// window.onload = function(){
//     var it = document.getElementById("inputText");
//     var op = document.getElementById("output");

//     it.onkeydown = function(e){
//         op.innerHTML = e.keyCode;
//     }
// }
