const controller = require('../controllers/user');
const router = require('express').Router();

/**
 * @swagger
 * tags:
 *  name: MainData
 *  description: This is bla
 * /users/getAll:
 *  get:
 *    tags:[Main Data]
 *    parameters:
 *      - email: aaaa
 *        default: 1
 *        schema:
 *          type: string
 * 
 */

router
  .get('/getAll', controller.getAll)
  .get('/getOne/:id', controller.getOne)
  .get('logout', controller.logout)
  .post('/signup', controller.signUp)
  .post('/login',controller.login)
  .put('/update/:id', controller.updateOne)
  .delete('/delete/:id', controller.deleteOne);

module.exports = router;