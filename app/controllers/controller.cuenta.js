const db = require('../config/db.config.js');
const Cuenta = db.Cuenta;

exports.create = (req, res) => {
    let cuenta = {};

    try{
        // Building Customer object from upoading request's body
        cuenta.nocuenta = req.body.nocuenta;
        cuenta.tipocuenta = req.body.tipocuenta;
        cuenta.nombrecompleto = req.body.nombrecompleto;
        cuenta.fechaingreso = req.body.fechaingreso;
        cuenta.fechanacimiento = req.body.fechanacimiento;
        cuenta.genero = req.body.genero;
        cuenta.saldoinicial = req.body.saldoinicial;
    
        // Save to MySQL database
        Cuenta.create(cuenta).then(result => {    
            // send uploading message to client
            res.status(200).json({
                message: "Cuenta registrada with id = " + result.id,
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

exports.retrieveAllCuenta = (req, res) => {
    // find all Customer information from 
    Cuenta.findAll()
        .then(cuentaInfos => {
            res.status(200).json({
                message: "todas las Cuentas' Infos Successfully!",
                cuenta: cuentaInfos
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
        let cuentaId = req.params.id;
        let cuenta = await Cuenta.findByPk(cuentaId);

        if(!cuenta){
            res.status(404).json({
                message: "Does Not exist a Cuenta with id = " + cuentaId,
                error: "404",
            });
        } else {
            await cuenta.destroy();
            res.status(200).json({
                message: "Delete Successfully a Cuenta with id = " + cuentaId,
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