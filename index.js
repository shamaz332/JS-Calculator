function display(count){
    document.getElementById("display").value+=count;
}
function calculations(){
    document.getElementById("display").value=eval(document.getElementById("display").value);
}
function clr() {
    
        document.getElementById("display").value = "";
    }