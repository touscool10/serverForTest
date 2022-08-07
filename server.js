const express = require('express');
const bodyParser = require('body-parser');
const User = require('./db/user');
const Teacher = require('./db/teacher');
const Student = require('./db/student');
const Domain = require('./db/domain');
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
const StudentRepo = new Student();
const TeacherRepo = new Teacher();
const DomainRepo = new Domain();

//Students

app.get('/', (req, res) => {
  res.status(200).send(JSON.stringify({name:"ok"}));
})

app.get('/aprendeai/student/name/:name', (req, res) => {
  const name = req.params.name;
  res.status(200).send(JSON.stringify({data: StudentRepo.findByName(name), error: ""}));
})
app.get('/aprendeai/student/email/:email', (req, res) => {
  const email = req.params.email;
  res.status(200).send(JSON.stringify({data: StudentRepo.findByEmail(email), error: ""}));
})

app.get('/aprendeai/students/class/:classId', (req, res) => {
  const classId = parseInt(req.params.classId);
  res.status(200).send(JSON.stringify({data: StudentRepo.findByClass(classId), error: ""}));
})

app.post('/aprendeai/students/createOne', (req, res) => {
  StudentRepo.create(req.body);
  res.status(200).send(JSON.stringify({data: StudentRepo.findAll(), error: ""}));
})

app.post('/aprendeai/students/createMany', (req, res) => {
  StudentRepo.createMany(req.body);
  res.status(200).send(JSON.stringify({data: StudentRepo.findAll(), error: ""}));
})

app.put('/aprendeai/students/update/:id', (req, res) => {
  res.status(200).send(JSON.stringify({data: StudentRepo.update( parseInt(req.params.id), req.body ), error: ""}) );
})

app.delete('/aprendeai/student/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  StudentRepo.delete(id);
  res.status(200).send(JSON.stringify({data: StudentRepo.findAll(), error: ""}));
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



app.get('/aprendeai/teachers/school/:schooId', (req, res) => {
  const schooId = parseInt(req.params.schooId);
  res.status(200).send(JSON.stringify({ data: TeacherRepo.findBySchool(schooId), error: ""}));
})
app.get('/aprendeai/teachers/unit/:unitId', (req, res) => {
  const unitId = parseInt(req.params.unitId);
  res.status(200).send(JSON.stringify({ data: TeacherRepo.findByUnit(unitId), error: ""}));
})
app.get('/aprendeai/teachers/class/:classId', (req, res) => {
  const classId = parseInt(req.params.classId);
  res.status(200).send(JSON.stringify({ data: TeacherRepo.findByClass(classId), error: ""}));
})
app.get('/aprendeai/teacher/name/:name', (req, res) => {
  const name = req.params.name;
  res.status(200).send(JSON.stringify({ data: TeacherRepo.findByName(name), error: ""}));
})
app.get('/aprendeai/teacher/email/:email', (req, res) => {
  const email = req.params.email;
  res.status(200).send(JSON.stringify({ data: TeacherRepo.findByEmail(email), error: ""}));
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



//Domains
app.post('/aprendeai/domain/create', (req, res) => {
  DomainRepo.create(req.body);
  res.status(200).send(JSON.stringify({ data: DomainRepo.findAll(), error: ""}));
})

app.get('/aprendeai/domain/name/:name', (req, res) => {
  const name = req.params.name;
  res.status(200).send(JSON.stringify({ data: DomainRepo.findByDomain(name), error: ""}));
})

app.get('/aprendeai/domains', (req, res) => {
  res.status(200).send(JSON.stringify({ data: DomainRepo.findAll(), error: ""}));
  //res.status(200).send(JSON.stringify( DomainRepo.findAll() ) );
})

app.delete('/aprendeai/domain/:id', (req, res) => {
  const id = parseInt(req.params.id);
  DomainRepo.delete(id);
  res.status(200).send(JSON.stringify({ data: DomainRepo.findAll(), error: ""}));
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})