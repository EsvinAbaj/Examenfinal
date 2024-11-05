const db = require('../config/db.config.js');
const Control = db.Control;

exports.create = (req, res) => {
    let control = {};

    try{
        // Building Customer object from upoading request's body
        control.idcuenta = req.body.idcuenta;
        control.idtipotransaccion = req.body.idtipotransaccion;
        control.montotransaccioncredito = req.body.montotransaccioncredito; 
        control.montotransacciondebito = req.body.montotransacciondebito;
      
       
    
        // Save to MySQL database
        Control.create(control).then(result => {    
            // send uploading message to client
            res.status(200).json({
                message: "Control registrado with id = " + result.id,
                cuenta: result,
            });
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.retrieveAllControl = (req, res) => {
    // find all Customer information from 
    Control.findAll()
        .then(controlInfos => {
            res.status(200).json({
                message: "todos las transacciones reliazadas' Infos Successfully!",
                control: controlInfos
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
        let controlId = req.params.id;
        let control = await Control.findByPk(controlId);

        if(!control){
            res.status(404).json({
                message: "Does Not exist a Cuenta with id = " + controlId,
                error: "404",
            });
        } else {
            await cuenta.destroy();
            res.status(200).json({
                message: "Delete Successfully a Cuenta with id = " + controlId,
                cuenta: cuenta,
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Can NOT delete a cuenta with id = " + req.params.id,
            error: error.message,
        });
    }
}