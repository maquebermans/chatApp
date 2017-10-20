//create server
var app = require('http').createServer(),
    io  = require('socket.io')(app);

//HTTP port setting
 app.listen(2000, function(err,res){
   if(err){
     console.log('error http ' + err);
   }else{
     console.log('server running port 2000');
   }
 });

 //Connect to MongoDB
 
