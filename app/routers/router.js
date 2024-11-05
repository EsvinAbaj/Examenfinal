
let express = require('express');
let router = express.Router();
 
const customers = require('../controllers/controller.js');
const cuenta = require('../controllers/controller.cuenta.js');
const transaccion = require('../controllers/controller.transaccion.js');
const Control = require('../controllers/controller.control.js');

router.post('/api/customers/create', customers.create);
router.get('/api/customers/all', customers.retrieveAllCustomers);
router.get('/api/customers/onebyid/:id', customers.getCustomerById);
router.get('/api/customers/filteringbyage', customers.filteringByAge);
router.get('/api/customers/pagination', customers.pagination);
router.get('/api/customers/pagefiltersort', customers.pagingfilteringsorting);
router.put('/api/customers/update/:id', customers.updateById);
router.delete('/api/customers/delete/:id', customers.deleteById);

router.post('/api/cuenta/create', cuenta.create);
router.get('/api/cuenta/all', cuenta.retrieveAllCuenta);
router.delete('/api/cuenta/delete/:id', cuenta.deleteById);

router.post('/api/transaccion/create',transaccion.create);
router.get('/api/transaccion/all', transaccion.retrieveAllTransaccion);
router.delete('/api/transaccion/delete/:id', transaccion.deleteById);


router.post('/api/control/create',Control.create);
module.exports = router;