//counter code
var btn=document.getElementById('counter');
//var counter=0;
//submit name

var submit=document.getElementById('submitbtn')
btn.onclick=function(){
    
   //create request object
    var request=new XMLHttpRequest();
    //capture the response and store in a variable
    request.onreadystatechange =function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
                //incrementing counter
               //var counter= request.responseText;
              // var spn=document.getElementById('count');   
//spn.innerHTML=counter.toString();
  //capture a list of names and render it as a list
    var names=request.responseText;
    names=JSON.parse(names);//convert from string to object
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list += '<li>'+ names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;

            }
        }
        //not done yet
        
        
    };
    var nameinput=document.getElementById('txt');
var name=nameinput.value;
        //rende the variable in the corect span
       // counter =counter+1;
      //first make a request to the counter end point
    request.open('GET','http://deekshamoily.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
//}
//while uing counter
//submit name
//var nameinput=document.getElementById('txt');
//var name=nameinput.value;
//var submit=document.getElementById('submitbtn')

//submit.onclick=function(){
    //make the request to the server and send the name
    
    //while using counter
    //capture a list of names and render it as a list
   // var names=['name1','name2','name3','name4'];
    //var list='';
  //  for(var i=0;i<names.length;i++)
  //  {
  //      list += '<li>'+ names[i]+'</li>';
  //  }
//var ul=document.getElementById('namelist');
  //  ul.innerHTML=list;
};
