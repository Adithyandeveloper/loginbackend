const mongoose = require('mongoose');
const userList = require('../models/userlist');
const { application } = require('express');


class userController {
    constructor() { }

    async createEmp(req, res) {
        try {
            const data = new userList({
                name: req.body.name,
                phonenumber: req.body.phonenumber,
                department: req.body.department,
            })
            await data.save()
            return res.status(200).send({ success: true, message: `${req.body.name} User Created` })
        } catch {
            return res.status(500).send({ success: false, message: 'Something Wrong' })
        }
    }


    async usersList(req, res) {
        try {
            const allUser = await userList.find();
            
            return res.status(200).send({ success: true, data: allUser, message: 'UserList Fetched Success' });
        }
        catch {
            return res.status(500).send({ success: false, message: 'UserList Fetched Unsuccess!!!' });
        }

    }

    async updateUser(req, res) {
        try {
            console.log(req.body._id, "update ID")
            const update = await userList.updateOne(
                { _id: req.body._id },
                {
                    $set: {
                        name: req.body.name,
                        phonenumber: req.body.phonenumber,
                        department: req.body.department,
                    }
                }
            )

            res.status(200).send({ success: true, data: update, message: `${req.body.name} updated Success` })
        }
        catch {
            res.status(500).send({ success: false, message: `${req.body.name} updated Unsuccess` })
        }

    }


    async deleteUser(req, res) {

        try {
            const delData = await userList.findByIdAndDelete(req.params.id)
            if (delData) {
                res.status(200).send({ success: true, message: 'Deleted Successfully' })
            }
            else {
                res.status(500).send({ success: false, message: 'Something Wrong' })
            }

        } catch
        {
            res.status(500).send({ success: true, message, message: 'Something Wrong' })

        }

    }

}

module.exports = userController;