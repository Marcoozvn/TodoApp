require('dotenv').config();
const express = require('express');
const cors =  require('cors');
const mongoose = require('mongoose');

const routes =  require('./src/routes');
const app = express();

mongoose.connect('mongodb://localhost:27017/todoApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000);