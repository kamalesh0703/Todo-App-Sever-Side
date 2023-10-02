var express=require('express');
var mongoose=require('mongoose');
var cors=require('cors');
let bodyParser=require('body-parser');
let dbConfig=require('./Database/database');

const todoRoute=require('./router/Studentrouter');

var app=express()





// mongoose.set('useNewUrlParser',true);
mongoose.connect(dbConfig.db).then(()=>{
    console.log("database succesfully connected!")
},
error=>{
    console.log("Could not connect to database:"+error)
}
)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/todo', todoRoute)


app.listen(5000,()=>{
    console.log("Server started,running port 5000")
})