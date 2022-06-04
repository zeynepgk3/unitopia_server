const controller = require('../controllers/user');
const router = require('express').Router();

router
  .get('/getAll', controller.getAll)
  .get('/getOne/:id', controller.getOne)
  .post('/create', controller.createOne)
  .post('/login',controller.login)
  .put('/update/:id', controller.updateOne)
  .delete('/delete/:id', controller.deleteOne);

module.exports = router;