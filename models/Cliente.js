	var db=require('../dbconnection'); //reference of dbconnection.js
	var db2=require('../dbconnection2'); //reference of dbconnection.js
	

	var Cliente={
	 
	getAllClientes:function(callback){
	  console.log ('  DESDE NODE JS getAllClientes ');
	return db.query("Select * from cliente limit 20",callback);
	 
	},



    getClienteById:function(id,callback){
	 
	return db.query("select * from cliente where Id=?",[id],callback);
	 },

	 addCliente:function(Cliente,callback){
	console.log('Cliente add '+Cliente);

	 return db.query("INSERT INTO reportes.cliente(cliente,ruc,direccion,telefono,email,estado,telefono2,extension,contacto,prioridad)VALUES (?,?,?,?,?,?,?,?,?,?);",
	 	[Cliente.cliente,Cliente.ruc,Cliente.direccion,Cliente.telefono,Cliente.email,Cliente.estado,Cliente.telefono2,Cliente.extension,Cliente.contacto,Cliente.prioridad],callback);
	 },
	 deleteCliente:function(id,callback){
	 	console.log('DELETE  FROM SERVER  '+id);
	  return db.query("delete from cliente where Id=?",[id],callback);
	 },
	 updateCliente:function(id,Cliente,callback){
	 	console.log('UPDATE FROM SERVER  '+Cliente+  '   with ID '+id);
	  return db.query("update cliente set cliente=?,ruc=?,direccion=?,telefono=?,email=?,estado=?,telefono2=?,extension=?,contacto=?,prioridad=? where id=?",[Cliente.cliente,Cliente.ruc,Cliente.direccion,Cliente.telefono,Cliente.email,Cliente.estado,Cliente.telefono2,Cliente.extension,Cliente.contacto,Cliente.prioridad,id],callback);
	 }





	 
	};



module.exports=Cliente;