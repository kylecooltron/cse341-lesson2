const routes = require('express').Router();


routes.use('/', require('./swagger'));
routes.use('/contacts', require('./contacts'))

// disabling to simplify testing
// routes.use('/contacts-generate', require('./contacts-generate'))
// routes.use('/', require('./home'))

module.exports = routes;
