const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

// app.engine('hbs', hbs());
app.engine('hbs', hbs({ extname: 'hbs', layoutsDir: './layouts', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { name: req.params.name });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/info', (req, res) => {
  res.render('info');
});

app.get('/history', (req, res) => {
  res.render('history', { layout: 'dark' });
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
})

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});




// use example

// app.use('/admin', (req, res, next) => {
//     if(isAdmin()) next();
//     else res.send('Go away!');
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/home.html'));
// });

// app.get('/cart', (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/cart.html'));
// });

// app.get('/admin/products', (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/admin/products.html'));
// });

// app.get('/admin/payments', (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/admin/payments.html'));
// });