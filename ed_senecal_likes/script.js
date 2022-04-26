var user1 = 0;
var user2 = 0;
var user3 = 0;

function likes1(element){
console.log("this button is working");
    if (element.id == 'l1'){
        user1 ++;
        element.innerText= user1 +" likes";

    }
    if (element.id == 'l2'){
        user2 ++; 
        element.innerText= user2 +" likes";

    }
    if (element.id == 'l3'){
        user3++;
        element.innerText= user3 +" likes";
    }
    console.log(user1);

}