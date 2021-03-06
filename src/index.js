const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { execPath } = require('process');
const app = express();
const port = 3000;

//const routes
const route = require('./routes');

//Mongoose
const db = require('./config/db');

//Connect to db
db.connect();

//static
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(
  express.urlencoded({
    extended: true, //body parser được tích học từ express 4.16
  }),
);
app.use(express.json());

//Http logger
app.use(morgan('combined'));

//template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// app.use('/contact', (req, res) => {
//   res.render('contact');
// })

//route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
