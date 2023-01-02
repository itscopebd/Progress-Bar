

function move(n){

let width= 1;
let id= setInterval(progress, 10);
    function progress(){

        width++;
        if(width >= n){
            clearInterval(id)
        }
        else{
            
            element=document.getElementsByClassName("skill");
            showParsent=document.querySelector("span");
            showParsent.innerHTML=width + "%";
            element[0].style.width= width + "%";
        }

    }


}