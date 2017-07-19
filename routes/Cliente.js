var express = require('express');
var router = express.Router();
var Cliente=require('../models/Cliente');



router.get('/:id?',function(req,res,next){
 
  if(req.params.id){
   
    Cliente.getClienteById(req.params.id,function(err,rows){
     
      if(err)
      {
        res.json(err);
      }
      else{
        res.json(rows);
      }
    });
  }
  else{
   
    Cliente.getAllClientes(function(err,rows){
     
      if(err)
      {
        res.json(err);
      }
      else
      {
    res.json(rows);
       // res.json({"Error" : false, "Message" : "Success", "Users" : rows}); 
      }
      
    });
  }
});








router.post('/',function(req,res,next){
 
  Cliente.addCliente(req.body,function(err,count){
    if(err)
    {
      res.json(err);
    }
    else{
  res.json(req.body);//or return count for 1 &amp;amp;amp; 0
}
});
});




router.delete('/:id',function(req,res,next){
 
  Cliente.deleteCliente(req.params.id,function(err,count){
   
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(count);
    }
    
  });
});
router.put('/:id',function(req,res,next){
 
  Cliente.updateCliente(req.params.id,req.body,function(err,rows){
   
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(rows);
    }
  });
});
module.exports=router;