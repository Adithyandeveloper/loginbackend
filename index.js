require('dotenv').config({ path: __dirname + '/config/.env' });
require('./config/db');
const cors = require("cors");
const session = require('express-session'); 
const express = require('express');
const useragent = require('express-useragent');
const router = express.Router();

const app = express();
app.use(express.json())
app.use(cors());
app.use(session({
    secret: 'heyhiiamsecuretkeyofsessionid',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));
const port = process.env.PORT || 4000 || 3000
const userModel = require("./models/user");
const authRouter = require('./routers/auth')
const userDetailsRouter = require('./routers/user');



app.use('/auth',authRouter);
app.use('/user',userDetailsRouter);



app.listen(3001, () => {
    console.log("Server is running >>>> ")
})


// app.post('/register', (req, res) => {
//     userModel.create(req.body).then((employee) => res.json(employee))
//         .catch(err => res.json(err));
// })


// app.post('/login', (req, res) => {
//     const { name, password } = req.body
//     userModel.findOne({ email: req.name }).then((user) => {
//         if (user.password == password) {
//             res.json("Login Success")
//         }
//         else {
//             res.json("Enter Valid Name and Password")
//         }
//     })
// })
