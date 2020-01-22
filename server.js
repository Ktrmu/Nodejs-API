JsonData = {
    "name":"STEVEN",
    "age": "30",
    "sex": "Male",
}
var express= require ("express");
var connection= require ("./model/index");
var connection= require ("./controller/index")
var app = express();

app. listen(3000, function()
{
console.log ("server running on pot 3000");
});
 
app.get('/', function (req,res) {
    res.sendfile(__dirname+"/index.html");
});
app.get('/data',function(req,res){
    res.json(JsonData);
});





