const db = require('../config/db.config.js');
const Proyecto = db.Proyecto1;

exports.create = (req, res) => {
    let proyecto = {};

    try{
        // Building Customer object from upoading request's body
        proyecto.titulo = req.body.titulo; 
        proyecto.descripcion = req.body.descripcion; 
        proyecto.completada = req.body.completada; 
        proyecto.fechacreacion = req.body.fechacreacion;
        proyecto.fechavencimiento = req.body.fechavencimiento;
        proyecto.prioridad = req.body.prioridad;
        proyecto.asignado_a=req.body.asignado_a;
        proyecto.categoria = req.body.categoria;
        proyecto.costoproyecto = req.body.costoproyecto;
        proyecto.pagado = req.body.pagado;

    
        // Save to MySQL database
        Proyecto.create(proyecto).then(result => {    
            // send uploading message to client
            res.status(200).json({
                message: "Poryecto Registrado with id = " + result.id,
                proyecto: result,
            });
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.retrieveAllProyectos = (req, res) => {
    // find all Customer information from 
    Proyecto.findAll()
        .then(proyectoInfos => {
            res.status(200).json({
                message: "Get all proyectos' Infos Successfully!",
                proyecto: proyectoInfos
            });
        })
        . catch(error => {
          // log on console
          console.log(error);

          res.status(500).json({
              message: "Error!",
              error: error
          });
        });
}

exports.deleteById = async (req, res) => {
    try{
        let proyectoId = req.params.id;
        let proyecto = await Proyecto.findByPk(proyectoId);

        if(!proyecto){
            res.status(404).json({
                message: "Does Not exist a Customer with id = " + proyectoId,
                error: "404",
            });
        } else {
            await proyecto.destroy();
            res.status(200).json({
                message: "Delete Successfully a Customer with id = " + proyectoId,
                proyecto: proyecto,
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Can NOT delete a customer with id = " + req.params.id,
            error: error.message,
        });
    }
}