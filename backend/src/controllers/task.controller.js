const TaskService = require('../services/task.service');

module.exports = {
  async index(req, res) {
    const userId = req.userId;
    const tasks = await TaskService.getAll(userId).catch(err => res.status(500).send({error: err.errors.status.message}));
    res.status(200).send(tasks);
  },

  async store(req, res) {
    const userId = req.userId;
    let taskInfo = req.body;

    const task = await TaskService.create({
      ...taskInfo, 
      userId: userId
    }).catch(err => res.status(500).send({error: err.errors.status.message}));

    res.status(200).send(task); 
  },

  async delete(req, res) {
    let { id } = req.params;

    console.log(id);

    const response = await TaskService.delete(id).catch(err => res.status(500).send({error: err}));

    res.status(200).send(response);
  }
}