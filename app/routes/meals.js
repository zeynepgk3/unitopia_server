const controller = require('../controllers/meal');
const router = require('express').Router();

router
.post('/createWeek', controller.createWeek);
  // .get('/getAll', controller.getAll)
  // .get('/getOne/:id', controller.getOne)
  // .get('logout', controller.logout)
  // .post('/create', controller.signUp)
  // .post('/login',controller.login)
  // .put('/update/:id', controller.updateOne)
  // .delete('/delete/:id', controller.deleteOne)
  // .get('/getOneWeek/:date', controller.getOneWeek)
  // .put('/updateWeek/:date', controller.updateWeek)
  // .delete('/deleteWeek/:date', controller.deleteWeek);
module.exports = router;