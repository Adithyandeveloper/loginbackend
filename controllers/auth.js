const mogoose = require('mongoose');
const userModel = require("../models/user");
const { application } = require('express');
const os = require('os')
class AuthController {
    constructor() {
    }

    //Register Function
    async registers(req, res) {
        // app.post('/register', (req, res) => {
        console.log(req, "request Time ", req.body);
        userModel.create(req.body).then((user) => {
            res.json(user)
        })
        // })
    }

    //Login Function
    async login(req, res) {
        // app.post('/login', req, res => {
        console.log(req.body, "reqBody")
        try
        {
            const { name, password } = req.body;
            console.log(req.body, "Login Creditional");
            userModel.findOne({ name: req.body.name }).then((user) => {
                console.log(user, "user")
                if (user.password == password) {
                    console.log(req)
                    const deviceName = os.hostname();
                    // const u = req.user-agent
                    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
                    const ips = requestIp.getClientIp(req); 
                    console.log(ips)
                    // const browser = u.browser
                    // const oss = u.isAndroid ? u.platform : u.os
                    // const platform = u.platform
                    // const version = u.version
              
                    req.session.user = { name: user.name, email: user.password };
                    ip = ip.toString().replace('::ffff:', '');
                    console.log(ip,"IP Address")
                    console.log(req.sessionID, "This is My SessionID")
                    res.json({ status: '200', success: true, sessionID: req.sessionID, message: 'Login Successfull' })
                }
                else {
                    res.json({ status: '401', success: false, message: 'Login Unsuccessfull' })
                }
            })
        }catch{
            
        }

       
        // })


    }

}



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
module.exports = AuthController