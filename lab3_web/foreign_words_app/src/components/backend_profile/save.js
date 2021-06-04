const express = require('express');
const port = process.env.PORT || 8080;
const sqlite = require('sqlite3').verbose();
const application = express();

application.use(express.json())

application.listen(port, () => {
    console.log(`located on ${port} port`);
});

let database = new sqlite.Database('.save.db',sqlite.OPEN_READWRITE, (error) => {
    if (error) {
      return console.error(error.message);
    }
    console.log('Successfull connection to SQlite database.');
  });
//email, password, first_name, last_name, birthday, gender
database.run('CREATE TABLE IF NOT EXISTS user(\
    email VARCHAR(255),\
    password VARCHAR(255),\
    first_name VARCHAR(255),\
    last_name VARCHAR(255)\
    birthday  VARCHAR(10)\
    gender  VARCHAR(10)\
    );');
    
application.get('/user', function (request_, res) {
    res.header("Access-Control-Allow-Origin", "*");
    database = new sqlite.Database('./save.db',sqlite.OPEN_READWRITE, (err) => {
        if (err)
          return console.error(err.message);
        console.log('Successful connection to SQlite database.');
      });
    let user = database.each(`SELECT email, password, first_name, last_name, birthday, gender FROM user 
                        WHERE email='${request_.query.email}' AND password='${request_.query.password}';`, 
            (err, row) => {
                if (err) {
                    res.send(false);
                    throw "NO RESULTS";
                }
                    console.log(row.id + "\t" + row.email + "\t" + row.password + "\t" + row.first_name + "\t" + row.last_name + "\t" + row.birthday + "\t" + row.gender);
                    res.send(true);
            });
    database.close((err) => {
        if (err)
            return console.error(err.message);
            console.log('Disabling database connection.');
        });
});

database.close((err) => {
    if (err)
        return console.error(err.message);
        console.log('Disabling database connection');
    });

application.get('/save-user', function(request_, res){
    res.header("Access-Control-Allow-Origin", "*");
    database = new sqlite.Database('./save.db',sqlite.OPEN_READWRITE, (err) => {
        if (err)
          return console.error(err.message);
        console.log('Successful connection to the SQlite database.');
      });
    let query = 'INSERT INTO user(email, password, first_name, last_name, birthday, gender) VALUES (?, ?, ?, ?);';
    database.run(query, [request_.query.email, request_.query.password, request_.query.first_name, request_.query.last_name, request_.query.birthday, request_.query.gender], 
            (err, row) => {
                if (err)
                    res.send(false);
                else 
                    res.send(true);
                });
    database.close((err) => {
        if (err) {
            return console.error(err.message);
        }
            console.log('Database connection closing.');
    });
});


