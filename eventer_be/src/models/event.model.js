var db=require('../db'); //reference of dbconnection.js
 
exports.getAllEvents = function(callback){
  return db.query("Select * from Events", callback);
};
