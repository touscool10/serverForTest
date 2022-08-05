const express = require('express');
const bodyParser = require('body-parser');
const User = require('./db/user');
const Teacher = require('./db/teacher');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-client-key, x-client-token, x-client-secret, Authorization");
  response.header("Access-Control-Allow-Methods", "GET,DELETE,HEAD,OPTIONS,POST,PUT");
  next();
});


const port = 3000 ;

const UserRepo = new User();
const TeacherRepo = new Teacher();

//Students

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

//Teachers

app.post('/aprendeai/teachers/createOne', (req, res) => {
  TeacherRepo.create(req.body);
  res.status(200).send(JSON.stringify({ data: TeacherRepo.findAll(), error: ""}));
})
app.post('/aprendeai/teachers/createMany', (req, res) => {
  TeacherRepo.createMany(req.body);
  res.status(200).send(JSON.stringify({ data: TeacherRepo.findAll(), error: ""}));
})
app.get('/aprendeai/teachers', (req, res) => {
  res.status(200).send(JSON.stringify({ data: TeacherRepo.findAll(), error: ""}));
  //res.status(200).send(JSON.stringify( TeacherRepo.findAll() ) );
})
app.get('/aprendeai/teacher/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).send(JSON.stringify({ data: TeacherRepo.find(id), error: ""}));
})
app.delete('/aprendeai/teacher/:id', (req, res) => {
  const id = parseInt(req.params.id);
  TeacherRepo.delete(id);
  res.status(200).send(JSON.stringify({ data: TeacherRepo.findAll(), error: ""}));
})
app.put('/aprendeai/teacher/:id', (req, res) => {
  res.status(200).send(JSON.stringify({ 
                                  data: TeacherRepo.update( parseInt(req.params.id), req.body ),
                                  error: ""
                                }) );
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})