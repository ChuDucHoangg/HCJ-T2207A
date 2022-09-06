var f = false;
var v = 0;
var a = 0;

function quaycanhquat() {
    if(f == true){
        var canhquat = document.getElementById("canhquat");
        canhquat.style.transform = "rotate("+v+"deg)";
        v+=a;
    }

}
setInterval(quaycanhquat,10);

function Off(){
    f=false;
    v=0;
    a=0;
}
function f1(){
    if(f==false){
        f=true;
    }
    v=0;
    a=5;
}
function f2(){
    if (f==false){
        f=true;
    }
v=0;
a=10;
}
function f3(){
    if (f==false){
        f=true;
    }
    v=0;
    a=30;

}