//counter code
var btn=document.getElementById('counter');
//var counter=0;
btn.onclick=function(){
    
   //create request object
    var request=new XMLHttpRequest();
    //capture the response and store in a variable
    request.onreadystatechange =function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
                
               var counter= request.responseText;
               var spn=document.getElementById('count');   
spn.innerHTML=counter.toString();
            }
        }
        //not done yet
        
        
    };
        //rende the variable in the corect span
       // counter =counter+1;
      //first make a request to the counter end point
    request.open('GET','http://deekshamoily.imad.hasura-app.io/counter',true);
    request.send(null);
}