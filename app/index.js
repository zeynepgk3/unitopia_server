const express = require('express');
const sequelize = require('./util/database');
const defaultValue = require('./util/defaultvalues');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const User = require('./models/user');
const bcrypt = require('bcrypt');

const app = express();

// const swaggerUI = require('swagger-ui-express')
// const swaggerJsDoc = require('swagger-jsdoc')
// const options={
//   swaggerDefinition: {
//     openapi:"3.0.1",
//     info:{
//       title:"Unitopia API Documentation",
//       version:"1.0.0",
//       description:"Bütün endpointler burada test edilebilir."
//     },
//     servers:[
//       {
//         url:"http://localhost:3001"
//       }
//     ]
//   },
//   apis:["./routes/*.js"],
// }
// const specs=swaggerJsDoc(options);

//middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
// app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
  next();
})

// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use('/users', require('./routes/users'));
app.use('/blogs', require('./routes/blogs'));
app.use('/announcements', require('./routes/announcements'));
app.use('/studentclubs', require('./routes/student_clubs'));
app.use('/comments', require('./routes/comments'));
app.use('/meals', require('./routes/meals'));


app.get('/set-cookies', (req, res) => {
  res.cookie('newUser', false);
  res.send('cookie kaydettin vay bee');
});
app.get('/read-cookies', (req, res) => {
  const cookies = req.cookies;
  console.log('cookies', cookies);
  console.log(req.cookies);
  res.json(cookies);
});

; (async () => {
  try {
    await sequelize.sync({ force: true });
    app.listen(process.env.EXTERNAL_PORT || 3001);
    defaultValue.addDefaultValues();
  } catch (error) {
    console.error(error);
  }
})()