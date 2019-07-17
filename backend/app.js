const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Accueil');
})

app.get('/api/users', function (req, res){
    res.setHeader('Content-Type', 'text/plain');
    res.send('users');
    console.log(res);
})

app.listen(5000, function(){
    console.log('5000 port on listen');
})


// Connection to the DB
const neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://192.168.99.100:7687", neo4j.auth.basic("neo4j", "julaurai"));

// QUERY EXAMPLE
var session = driver.session();
session.run("MATCH (n:Person) DELETE n");
session.close();



