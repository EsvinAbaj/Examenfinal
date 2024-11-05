module.exports = (sequelize, Sequelize) => {
	const Transaccion = sequelize.define('transaccion', {	
	  idtransaccion: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
	tipotransaccion: {
		type: Sequelize.STRING
    },
	  descripcion: {
			type: Sequelize.STRING
	},
	  

    Verificacion: {
      type: Sequelize.STRING,
      defaultValue: 'Backup'
    }
	});
	
	return Transaccion;
}