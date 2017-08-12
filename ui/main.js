console.log('Loaded!');
//change the text of the div element
var elt=document.getElementById('main-element');
elt.innerHTML='welcome to javascript'


//to move the image

var img=document.getElementById('img');
var marginLeft=0; //declaring marginLeft variable
//function moveRight
function moveRight()
{
    marginLeft=marginLeft+10;  //increment by 10
    img.style.marginLeft=marginLeft+'px';   //merge the 10 with string 
    
}
img.onclick=function(){
    var interval=setInterval(moveRight,200);
//img.style.marginLeft='100px';    
};