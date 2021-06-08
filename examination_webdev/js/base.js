
/*https://www.w3schools.com/js/js_htmldom_html.asp*/
function changeText(){    
    document.getElementById("changeable").innerHTML ="The text is now gone, you killed it";
    document.getElementById("changeable").style.color="black";
}

function whyClick(){
    document.getElementById("rainbow").innerHTML="why you click?";
    document.getElementById("changeable").style.color="lime";
    document.getElementById("changeable").innerHTML="Now the text become shrek, good job";
}

function feedMonke(){
    document.getElementById("monkeText").innerHTML="Monke happy"
    document.getElementById("image").src= "https://www.freepnglogos.com/uploads/monkey-png/monkey-png-transparent-images-png-only-6.png";
}