console.log("page loaded...");

function any(element){
    var element = document.getElementById('username');
    element.textContent = "Any Other Name, still smells as sweet"
}



function request_removal_todd(element){
    var element = document.getElementById('todd');
    element.parentNode.removeChild(element);
}

function request_removal_phil(element){
    var element = document.getElementById('phil');
    element.parentNode.removeChild(element);
}

