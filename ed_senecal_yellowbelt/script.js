



function remove_popup(element){
    console.log("this button is working");
    var element = document.getElementById("cookies");
    element.parentNode.removeChild(element);
}
function empty_cart(){
    alert("your Cart is empty!");
}

var succulentImg = document.querySelector("#succulent-1");

function hover_over(){

    succulentImg.src = "./assets/succulents-2.jpg";

}
function hover_off(){
    succulentImg.src= "./assets/succulents-1.jpg";
}