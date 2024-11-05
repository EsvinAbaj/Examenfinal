const db = require('../config/db.config.js');
const Transaccion = db.Transaccion;

exports.create = (req, res) => {
    let transaccion = {};

    try{
        // Building Customer object from upoading request's body
        transaccion.tipotransaccion = req.body.tipotransaccion; 
        transaccion.descripcion = req.body.descripcion;
    
        // Save to MySQL database
        Transaccion.create(transaccion).then(result => {    
            // send uploading message to client
            res.status(200).json({
                message: "Transaccion Registrada with id = " + result.id,
                transaccion: result,
            });
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.retrieveAllTransaccion = (req, res) => {
    // find all Customer information from 
    Cuenta.findAll()
        .then(transaccionInfos => {
            res.status(200).json({
                message: "todas las Transacciones' Infos Successfully!",
                transaccion: transaccionInfos
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
        let transaccionId = req.params.id;
        let transaccion = await transaccion.findByPk(transaccionId);

        if(!cuenta){
            res.status(404).json({
                message: "Does Not exist a transaccion with id = " + transaccionId,
                error: "404",
            });
        } else {
            await cuenta.destroy();
            res.status(200).json({
                message: "Delete Successfully a transaccion with id = " + transaccionId,
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
