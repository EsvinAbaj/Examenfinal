
let express = require('express');
let router = express.Router();
 
const customers = require('../controllers/controller.js');

const proyectos = require('../controllers/controller.proyecto.js');
const { Proyecto } = require('../config/db.config.js');

router.post('/api/customers/create', customers.create);
router.get('/api/customers/all', customers.retrieveAllCustomers);
router.get('/api/customers/onebyid/:id', customers.getCustomerById);
router.get('/api/customers/filteringbyage', customers.filteringByAge);
router.get('/api/customers/pagination', customers.pagination);
router.get('/api/customers/pagefiltersort', customers.pagingfilteringsorting);
router.put('/api/customers/update/:id', customers.updateById);
router.delete('/api/customers/delete/:id', customers.deleteById);



router.post('/api/proyectos/create', proyectos.create);
router.get('/api/proyectos/all', proyectos.retrieveAllProyectos);
router.delete('/api/proyectos/delete/:id', proyectos.deleteById);
module.exports = router;