const router = require("express").Router();

module.exports = (wagner) => {
    const fanpageCtrl = wagner.invoke((FanPage) => 
    require("../controllers/fanpage.controller")(FanPage));

    router.post('/insertar/', (req, res) =>
    fanpageCtrl.createFanpage(req, res));

    router.get('/buscKey/:keyword',(req, res)=>
    fanpageCtrl.findByKeyword(req,res))
    
    router.put('/:id', (req, res) =>
    fanpageCtrl.InsertarKeyword(req,res))
    
    router.get('/:id',(req, res)=>
        fanpageCtrl.CalificacionGlobal(req,res))


    return router;
}