let count =1;

function add(){
    count++;
    document.getElementById("add").innerHTML= count;
}
function sub(){
    if (count>=1){
    count--;
    document.getElementById("add").innerHTML= count;}
}
