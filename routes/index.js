const routes = require('express').Router();

routes.use('/contacts-generate', require('./contacts-generate'))
routes.use('/contacts', require('./contacts'))
routes.use('/', require('./home'))

module.exports = routes;
