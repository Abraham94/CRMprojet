var express =require('express');
var app = express();
var bodyParser = require('body-parser');

function connectDb(){
    
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'projetangular'
    });

connection.connect();
return connection;
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.get('/getInterationByClient/:id', function(req, res){
    console.log(req.params);
    var id = req.params.id;
    console.log(id);
    var link = connectDb();
    link.query("SELECT id, date, objet, description, id_client FROM interaction WHERE id_client ="+id, function(err, rows, fields){
        res.json(rows);
    });
    
    link.end();
})

app.post('/addClient', function(req, res){
    
    var nom = req.body.nom;
    var prenom = req.body.prenom;
    var age = req.body.age;
    
    console.log(req.body);
    console.log(age, nom, prenom);
    
    var link =  connectDb();
    link.query("INSERT INTO client(nom, prenom, age) VALUE('"+nom+"','"+prenom+"','"+age+"')", function(err, rows, fields) {
    
    });
    link.end();
    
    
    res.json('salut');
})

app.post('/delete', function(req, res){
    
    var id = req.body.id;
    console.log(id);
    
    var link = connectDb();
    link.query("DELETE FROM client WHERE id ="+id, function(err, rows, fields){
        
    });
    link.end();
    res.json('ok');
})

app.get('/clients', function(req, res){
 
    var resultat = null;
    var link =  connectDb();
    link.query('SELECT id, nom, prenom, age FROM client', function(err, rows, fields) {
    if (err) throw err;
    //console.log('The solution is: ', rows[0]);
    res.json(rows);
    var resultat = rows; 
    });
    
    link.end();
    //res.json(resultat);
    
})

app.listen(8080, function(){
    console.log("ecoute sur 8080");
})

