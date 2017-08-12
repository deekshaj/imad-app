console.log('Loaded!');
//change the text of the div element
var elt=document.getElementById('main-element');
elt.innerHTML='welcome to javascript'


//to move the image

var img=document.getElementById('img');
img.onclick=function(){
    
img.style.marginLeft='100px';    
};