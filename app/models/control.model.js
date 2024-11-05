module.exports = (sequelize, Sequelize) => {
	const Control = sequelize.define('control', {	
	  idregistro: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
	  idcuenta: {
			type: Sequelize.INTEGER
	},
	  idtipotransaccion: {
			type: Sequelize.INTEGER
    },
	montotransaccioncredito: {
			type: Sequelize.INTEGER
    },
	montotransacciondebito: {
		type: Sequelize.INTEGER
	},
	
    default: {
      type: Sequelize.STRING,
      defaultValue: 'transaccion debito,credito'
    }
	});
	
	return Control;
}