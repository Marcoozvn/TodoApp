const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Pendente', 'Fazendo', 'Concluída']
  }
})

module.exports = mongoose.model('Task', TaskSchema);