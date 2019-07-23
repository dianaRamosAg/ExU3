let _fanpage;

//Crear Fanpage

const createFanpage= (req, res) => {
    const fanpage = req.body;
    _fanpage.create(fanpage)
        .then((data)=> {
            res.status(200);
            res.json({msg:"FanPage creada", data: data});
        })
        .catch((err)=> {
            res.status(400);
            res.json({msg:"Error no se creo FanPage", err:err});
        })
}

//Buscar por Keyword
const findByKeyword = (req, res) => {
    const fanpage = req.body;
    _fanpage.find({keyword:req.query.keyword},fanpage)
        .then((data) =>{
            res.status(200);
            res.json({msg:"Encontrado por palabra clave",data:data});
        })
        .catch((err) =>{
            res.status(400);
            res.json({msg:"Error No se encontro",err:err})
        });
}
//Insertar Keyword
const InsertarKeyword = (req,res) =>{
    const {id} = req.params;
    const fanpage = req.body;
    const params = {
        _id:id
    }
    _fanpage.findByIdAndUpdate(params,{$set:{keyword:fanpage.keyword}},{new:true})
        .then((data)=>{
            res.status(200);
            res.json({msg:"Keyword agregado",data:data});
        })
        .catch((err)=>{
            res.status(400);
            res.json({msg:"Error, documento no actualizado",err:err});
        })
}
// Calificación Global
const CalificacionGlobal = (req, res) => {
    const {id,calf}=req.params;
    const params = {
        _id:id
    };
    _fanpage.findById(params)
        .then((data) =>{
            var n=0;
           // res.status(200);
           const c=data.calf.length;
           for (var i = 0; i < c; i++) {
            n=n+data.calf[i];
            console.log(n);
         }
           console.log("calificacion : "+c+" - "+n);
           res.json({msg:" Calificación global",data:(n/c)});
        })
        .catch((err) =>{
            res.status(400);
            res.json({msg:"Error, No se encontro",err:err})
        });
}



module.exports = (FanPage) => {
    _fanpage = FanPage;
    return({
        createFanpage,
        findByKeyword,
        InsertarKeyword,
        CalificacionGlobal


    });
}