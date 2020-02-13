const { Router } = require('express');
const AuthenticationController = require('./controllers/authentication.controller');
const TaskController = require('./controllers/task.controller');

const routes = Router();

routes.post('/login', AuthenticationController.login);
routes.post('/register', AuthenticationController.register);
routes.get('/tasks', AuthenticationController.verifyToken, TaskController.index);
routes.post('/tasks', AuthenticationController.verifyToken, TaskController.store);
routes.delete('/tasks/:id', AuthenticationController.verifyToken, TaskController.delete);

module.exports = routes
