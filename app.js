let express = require('express');
let cors = require('cors');
let bodyParser=require('body-parser');

var app=express();
app.use(bodyParser.json());
app.use(cors());

app.get("/api/timestamp/:date_string",(req,res,next)=>{
    let date_string=req.params.date_string
    console.log(date_string);
    
   // console.log(date);
   // var option={weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"};
    
    if(isNaN(date_string)){
     //var date1=new Intl.DateTimeFormat("en-US",option).format(date);
     let date=new Date(date_string);////turn date_string to the date object
     var unix=date.getTime();
     var utc=date.toUTCString();
     if(date=="Invalid Date"){
         res.json({"error":"Invalid Date"});
     }
    }else {
     var date=parseInt(date_string);
     var unix=date;
     var utc=new Date(date);
    utc=utc.toUTCString();

    }
     res.json({"unix":unix,
         "utc":utc}) 
   
})

app.get('/api/timestamp',(req,res)=>{
    var date=new Date()
    var unix=date.getTime();
    var utc=date.toUTCString();
    res.json({"unix":unix,
         "utc":utc}) 
})


app.listen(3000,function(){
    console.log('Server started on port 3000.')
})