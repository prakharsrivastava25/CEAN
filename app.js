var express = require('express');
var app = express();
var birds = require('./birds');
app.use('/birds',birds);
app.get('/',(req,res)=>{res.send("hit /birds for birds homepage");});
app.listen(3000,()=>{console.log('listening at port 3000')});