module.exports = (sequelize, Sequelize) => {
	const Proyecto = sequelize.define('proyecto', {	
	  id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
	  titulo: {
			type: Sequelize.STRING
	  },
	  
	  descripcion: {
			type: Sequelize.STRING
	  },
	  completada: {
			type: Sequelize.STRING
    },
	fechacreacion: {
			type: Sequelize.STRING
    },
	fechavencimiento: {
		type: Sequelize.STRING
},

	prioridad: {
		type: Sequelize.STRING
	},
	asignado_a: {
		type: Sequelize.STRING
	},
	categoria: {
		type: Sequelize.STRING
	},
	costoproyecto: {
		type: Sequelize.INTEGER
	},
	pagado: {
		type: Sequelize.INTEGER
	},

    fechacreacion: {
      type: Sequelize.STRING,
      defaultValue: 'Todos los derechos reservados'
    }
	});
	
	return Proyecto;
}