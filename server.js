var  express=require('express');
var bodyParser=require('body-parser');


var {mongoose}=require('./db/mongoose');
var {User}=require('./models/User');
var {Todo}=require('./models/Todo');

/* const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');





newUser.save().then((doc)=>{
    console.log(`Todo Saved:${doc}`)
},(e)=>{
    console.log("unable to save todo");
}); */

var app=express();

app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
    var user= new User({
        FirstName:req.body.name,
        email:req.body.email
    });
    user.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.send("Server unavailable");
    });
});




app.listen(3000,()=>{
    console.log('started on port 3000');
});