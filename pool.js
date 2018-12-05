"use strict";
const mysql=require('mysql');
var pool=mysql.createpool({
	host:'127.0.0.1',
	port:3306,
	user:'root',
	password:'',
	database:'gw',
	connectionLimit:20
});
Object.freeze(pool);
module.exports=pool;





