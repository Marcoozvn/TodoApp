const AuthenticationService = require('../services/authentication.service');
const jwt = require('jsonwebtoken');

module.exports = {
  async login(req, res) {
    const { username, password } = req.body;

    const token = await AuthenticationService.login(username, password);

    if (!token) {
      res.status(401).send({error: 'Usuário não encontrado!'});
    } else {
      res.status(200).send({token: token});
    }

  },

  async register(req, res) {

    const { username, password } = req.body;

    try {
      const user = await AuthenticationService.register(username, password);
      res.status(200).send({user: user.username});
    } catch (err) {
      res.status(500).send({error: err})
    }
  },

  verifyToken(req, res, next) {
    const { token } = req.headers;

    if (!token) {
      res.status(401).send({error: 'Token não fornecido.'})
      return;
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.status(500).send({error: 'Falha ao autenticar o token.'});
        return;
      }

      req.userId = decoded.id;
      next();
    })
  }  
}