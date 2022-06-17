// import modul
const express = require("express");
const bodyParser = require('body-parser');
const cookieParser =  require('cookie-parser');
const app = express();
const port = 8000;

const mahasiswa = require("./routes/mahasiswa");
const dosen = require("./routes/dosen");
const admin = require("./routes/admin");

const authRouter = require("./routes/auth");
const {authenticateToken, checkUser} = require("./middleware/verifyToken");
// const router = require("./routes/index.js");

app.use(express.static('public'));
app.use(express.json()); 
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.get('*', checkUser);

app.use('/auth', authRouter);

app.use('/mahasiswa', mahasiswa)
app.use('/dosen',  dosen)
app.use('/admin', admin)


app.get("/",  authenticateToken, (req, res) => {
    res.render('home')
});

// app.get('/admin', adminAuth,  (req, res) => {
//   model.findAll()
//   .then(results => {
//     res.render("admin", {data: results})
//   });
// });

// app.use('/', (req, res) => {
//     res.send('salah alamat')
// })

//connect dengan port
app.listen(port, () => {
  console.log(`Server berada port  ${port}`);
});


