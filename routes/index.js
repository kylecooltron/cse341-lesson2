const routes = require('express').Router();
const path = require('path');
const controllers_path = path.join(__dirname, '../controllers');


// Require controller modules.
const home_controller = require(path.join(controllers_path, "homeController"));
const test_controller = require(path.join(controllers_path, "testController"));

// API
const contacts_controller = require(path.join(controllers_path, "contactsController"));

routes.get('/contacts', contacts_controller.getContacts);
routes.get('/contact', contacts_controller.getContact);

routes.get('/', home_controller.index);
routes.get('/test', test_controller.test);

module.exports = routes;
