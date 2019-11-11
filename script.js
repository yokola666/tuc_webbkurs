console.log("hello world");

var getH1 = document.getElementById("test")
getH1.addEventListener("click", function(){
    if (getH1.innerHTML == "Hello world")
        getH1.innerHTML = "korv"
    else
        getH1.innerHTML = "Hello world" 
});