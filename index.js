const express = require('express');
const ejs = require('ejs');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs'); // Set EJS as the view engine

app.get('/', (req, res) => {
  res.render('pages/index');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/nature', (req, res) => {
  res.render('pages/nature');
});
app.get('/the_world', (req, res) => {
  res.render('pages/the_world');
});
app.get('/about', (req, res) => {
  res.render('pages/about');
});
app.get('/contact', (req, res) => {
  res.render('pages/contact');
});
