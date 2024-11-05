module.exports = (sequelize, Sequelize) => {
	const Cuenta = sequelize.define('cuenta', {	
	  idcuenta: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
	  nocuenta: {
			type: Sequelize.STRING
	},
	  tipocuenta: {
			type: Sequelize.STRING
    },
	nombrecompleto: {
			type: Sequelize.STRING
    },
	fechaingreso: {
		type: Sequelize.STRING
	},
	fechanacimiento: {
		type: Sequelize.STRING
	},
	genero: {
		type: Sequelize.STRING
	},
	saldoinicial: {
		type: Sequelize.STRING
	},

    default: {
      type: Sequelize.STRING,
      defaultValue: 'Cuenta'
    }
	});
	
	return Cuenta;
}