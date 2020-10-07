const express = require('express');
const home = require('./routes/home');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.use(expressLayouts);

// routes
app.use('/', home);

app.listen(process.env.PORT || 3000);
