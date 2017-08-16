var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;

var config={
    user:'deekshamoily',
    database:'deekshmoily',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
    
};



var app = express();
app.use(morgan('combined'));


var articles={
     'article-one':{
    title:'Article one | DEEKSHA J',
    heading:'Article one',
    date:'September 5,2016',
    content:`<p>
            this is my first creation in the html file.
        </p>
         <p>
            this is my first creation in the html file.
        </p>
         <p>
            this is my first creation in the html file.
        </p>`
    
 },
     'article-two':{
    title:'Article two | DEEKSHA J',
    heading:'Article two',
    date:'September 5,2016',
    content:`<p>
            this is my second creation in the html file.
        </p>
         <p>
            this is my second creation in the html file.
        </p>
         <p>
            this is my second creation in the html file.
        </p>`
    
},
     'article-three':{
    title:'Article three | DEEKSHA J',
    heading:'Article three',
    date:'September 5,2016',
    content:`<p>
            this is my third creation in the html file.
        </p>
         <p>
            this is my third creation in the html file.
        </p>
         <p>
            this is my third creation in the html file.
        </p>`
    
},

};

function createtemplate(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;

        var htmltemplate=`
        <html>
            <head>
                <title>${title} </title>
                <meta name="viewport" content="width-device-width,initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet" />    
            </head>
        <BODY>
            <div>
                <a href='/'>Home</a>
                
            </div>
            <hr>
            <h3>${heading} </h3>
            <div>${date}</div>
            <div>
               ${content}
            </div>
        </BODY>
        </html>
        
        `;
        
        return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var pool=new Pool(config);

app.get('/test-db',function(req,res){
 //make a select request
 //return a response with results
     pool.query('SELECT * FROM test',function(err,result){
         if(err)
         {
             res.status(500).send(err.toString());
         }else{
             
            res.send(JSON.stringify(result));
         }
         
     });
});


 var counter=0;
 
app.get('/counter',function(req,res){
counter=counter+1;
res.send(counter.toString());
    
});
//to get information as part of url and sending information back using query parameter

var names=[];
app.get('/submit-name',function(req,res){//URL:/submit-name-name=xxxxx
//get the name from the request
var name=req.query.name;

//JSON -javascript object notation(way of converting javascript object into string)

names.push(name);


res.send(JSON.stringify(names));//coverts array into string
    
});
app.get('/:articleName', function (req, res) {
     //articleName==articleone
     //articles[articleName]=={} content of article one
     
     var articleName=req.params.articleName;
   res.send(createtemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
