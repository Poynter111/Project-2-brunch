const express                 = require('express');
const app                     = express();
const bodyParser              = require('body-parser');
const methodOverride          = require('method-override');
const morgan                  = require('morgan');
const expressLayouts          = require('express-ejs-layouts');
const mongoose                = require('mongoose');
const flash                   = require('express-flash');
const session                 = require('express-session');
const {port, databaseURI}     = require('./config/environment');
const customResponses         = require('./lib/customResponses');
const routes                  = require('./config/routes');


mongoose.connect(databaseURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));

app.use(morgan('dev'));
app.use(expressLayouts);


app.listen(port, () => console.log(`Running on port${port}`));
