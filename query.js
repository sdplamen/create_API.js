const mysql = require('mysql'); 
const con = mysql.createConnection({ 
 host: "host", 
 user: "user", 
 password: "pw", 
 database: "db" 
}); 
con.connect(err => { 
 if (err) throw err; 
 con.query("SELECT * FROM customers", (error, result) => { 
  if (error) throw error; 
  console.log(result); 
 }); 
});
