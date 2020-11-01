//Definición de variables
const express=require('express');
const app=express();
const morgan=require('morgan');

//settings
//Validacion de puerto
app.set('port',process.env.PORT||3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/cantantes',require('./routes/cantantes'));



//strating server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})