const controller = require('../controllers/announcement');
const router = require('express').Router();

//get list of each users blog
router
  .get('/getAll', controller.getAll)
  .get('/getOne/:id', controller.getOne)
  .get('/getAll/author/:id', controller.getAllByUser)
  .post('/create', controller.createOne)
  .put('/update/:id', controller.updateOne)
  .delete('/delete/:id', controller.deleteOne);

module.exports = router;