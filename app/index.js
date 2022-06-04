const express = require('express');

const sequelize = require('./util/database');
const cors = require('cors');


const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended:true}));
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET','POST','PUT','DELETE');
  next();
})

// app.use('/announcements', require('./routes/announcements'));
app.use('/users', require('./routes/users'));
app.use('/blogs', require('./routes/blogs'));

(async () =>{
  try {
    await sequelize.sync(
      {force: false}
    );
    console.log("test");
    app.listen(process.env.EXTERNAL_PORT || 3001);
  } catch (error) {
    console.error(error);
  }
})()