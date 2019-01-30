const model = require('cassandra-driver');
var bodyParser = require('body-parser');
 const connectionString = { // config for cassandra
     keyspace: 'keyspace_1',
     contact: '127.0.0.1',
     port: '9042',
 };
const port = 3000;
 const client = new model.Client({
     contactPoints: [connectionString.contact],
     protocolOptions: { port: connectionString.port },
     keyspace: connectionString.keyspace,
     localDataCenter: 'datacenter1'
 });
 var express = require('express');
 var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
 app.get('/',(req,res)=>{
     //res.send("hey prakhar");
      const query = `SELECT * FROM user;`;
       return client.execute(query, (err, results) => {
          if (!err) {
              console.log("!error result:",results)
          res.send(results.rows);
          }
          else{
              console.log("error occured:",err);
          }

         });
});
app.post('/', (req, res) => {
    //res.send("hey prakhar");
    // const query = `INSERT INTO user(id,name,city) values('${domainName.toLowerCase()}');`;
    // return client.execute(query, (err, results) => {
    //     if (!err) {
    //         console.log("!error result:", results)
    //         res.send(results.rows);
    //     }
    //     else {
    //         console.log("error occured:", err);
    //     }

    // });
    console.log("app.post method hit")
    console.log("req.body post method--->",req.body);
    const query = `INSERT INTO user(id,name,city) values(${req.body.id},'${req.body.name}','${req.body.city}');`;
    console.log("post query made-->",query);
    return client.execute(query, (err, results) => {
        if (!err) {
            //console.log("!error result:", results)
            res.send(req.body);
        }
        else {
            console.log("error occured:", err);
        }

    });
});

app.listen(port,()=>{console.log("server started at port",port);})