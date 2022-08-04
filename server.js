const express = require('express');
const bodyParser = require('body-parser');
const User = require('./db/user');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000 ;

const UserRepo = new User();

app.get('/aprendeai/students', (req, res) => {
  res.status(200).send(JSON.stringify(UserRepo.findAll()));
})

app.get('/aprendeai/students/One/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).send(JSON.stringify(UserRepo.find(id)));
})

app.post('/aprendeai/students/createOne', (req, res) => {
  UserRepo.create(req.body);
  res.status(200).send(JSON.stringify(UserRepo.findAll()));
})

app.post('/aprendeai/students/createMany', (req, res) => {
  UserRepo.createMany(req.body);
  res.status(200).send(JSON.stringify(UserRepo.findAll()));
})

app.put('/aprendeai/students/update/:id', (req, res) => {
  res.status(200).send(JSON.stringify( UserRepo.update( parseInt(req.params.id), req.body ) ) );
})

app.delete('/aprendeai/students/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  UserRepo.delete(id);
  res.status(200).send(JSON.stringify(UserRepo.findAll()));
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})