//counter code
var btn=document.getElementById('counter');
var counter=0;
btn.onclick=function(){
    
    //first make a request to the counter end point
    
    //capture the response and store in a variable
    //rende the variable in the corect span
    counter =counter+1;
 var spn=document.getElementById('count');   
spn.innerHTML=counter.toString();
    
}