//Metodo para llamar nuevas rutas desde express
const {Router}=require('express');
const router=Router();


const cantantes=require('../datos.json');

//Funcion get
router.get('/',(req,res)=>{
  res.json(cantantes);
});

//Funcion post
router.post('/',(req,res)=>{
    const{title,autor,year,view}=req.body;
    if(title && autor && year && view){
        const id=cantantes.length+1;
        const newCantante={...req.body,id};
        cantantes.push(newCantante);
        res.json(cantantes);
    }else{
        res.status(500).jason({error:'Ha ocurrido un error, faltan campos.'});
    }
});

//Funcion put
router.put('/:id',(req,res)=>{
   const {id}=req.params;
   const {title,autor,year,view}=req.body;
   if(title && autor && year && view){
       _.each(cantantes,(cantante,i)=>{
            if(cantante.id==id){
               cantante.title=title;
               cantante.autor=autor;
               cantante.year=year;
               cantante.view=view;
            }
        });
        res.json(cantantes);
    }
    else{
        res.status(500).json({error:'Ha ocurrido un error , faltan datos en el elemento'});
    }
   
});

//Funcion delete
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    _.each(cantantes,(cantante,i)=>{
         if(cantante.id==id){
             cantantes.splice(i,1);
         }
    });
    res.send(cantantes);
});

module.exports=router;