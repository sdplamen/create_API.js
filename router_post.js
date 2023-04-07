const mysql = require('mysql'); 
const DB_HOST = 'localhost'; 
const DB_USER = 'root'; 
const DB_PASSWORD = 'example_password'; 
const DATABASE = 'example_db'; 
const router = express.Router(); 
const connection = mysql.createConnection({ 
 host: DB_HOST, 
 user: DB_USER, 
 password: DB_PASSWORD, 
 database: DATABASE 
}); 
router.post('/products', (req, res) => { 
 connection.query( 
  'INSERT INTO products VALUES (3,"Potted Plant",9.90)', 
  (error, results) => { 
   if (error) { 
    console.log(error); 
    res.status(500).send('There is an issue with your request.'); 
   } else { 
    res.status(200).json("{'Rows':"+results.affectedRows+"}"); 
   } 
  }); 
});
