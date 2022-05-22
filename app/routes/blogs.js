const controller = require('../controllers/blog');
const router = require('express').Router();

//get list of each users blog
router
  .get('/', controller.getAll)
//   .get('/:id', controller.getOne)
//   .post('/', controller.createOne)
//   .put('/:id', controller.updateOne)
  .delete('/:id', controller.deleteOne);

module.exports = router;