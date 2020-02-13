const User = require('../models/user.model');

module.exports = {
  async login(username, password) {
    
    let user = await User.findOne({username});

    if (!user) {
      return null;
    }

    const match = await user.compareHash(password);
    if (!match) {
      return null;
    }

    return user.generateToken();
  },

  async register(username, password) {

    const user = await User.create({
      username, 
      password
    });

    return user;
  }
}