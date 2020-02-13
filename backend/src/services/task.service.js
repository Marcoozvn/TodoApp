const Task = require('../models/task.model');

module.exports = {
  async create(task) {
    return Task.create(task);
  },

  async getAll(userId) {
    return Task.find({userId: userId});
  },

  async delete(taskId) {
    return Task.deleteOne({_id: taskId});
  }
}