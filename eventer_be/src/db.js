var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
 user:'foo',
 password:'anandkunj',
 database:'eventer'
});
module.exports=connection;
