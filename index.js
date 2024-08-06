const express=require ('express');// determinando a utilização do epress
const app=express();
const path=require('path'); // endereço de cada rota
const router=express.Router(); // trabalha com as rotas
    router.get('/', function(req,res){ 
        res.sendFile(path.join(__dirname+'/index.html'));
    })
    router.get('/about', function(req,res){
        res.sendFile(path.join(__dirname+'/about.html'));
    })
    
    app.use('/', router);
    app.use('/about', router);
    app.listen(process.env.port||3000);
    console.log("servidor rodando")