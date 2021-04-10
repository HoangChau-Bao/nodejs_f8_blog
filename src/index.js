const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const { execPath } = require('process');
const app = express()
const port = 3000

//static
app.use(express.static(path.join(__dirname, 'public')));

//middleware 
app.use(express.urlencoded({
  extended: true //body parser được tích học từ express 4.16
}));
app.use(express.json());


//Http logger
//app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//console.log(path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/news', (req, res) => {
  //console.log(req.query.q);
  res.render('news')
});


app.get('/search', (req, res) => {
  res.render('search')
});

app.post('/search', (req, res) => {

  console.log(req.body);

  res.send('')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})