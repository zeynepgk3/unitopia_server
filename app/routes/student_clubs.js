const controller = require('../controllers/student_club');
const router = require('express').Router();

//get list of each users blog
router
  .get('/getAll', controller.getAll)
  .get('/getOne/:id', controller.getOne)
  .post('/create', controller.createOne)
  .put('/update/:id', controller.updateOne)
  .delete('/delete/:id', controller.deleteOne);

module.exports = router;