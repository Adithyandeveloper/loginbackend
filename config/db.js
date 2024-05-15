const mongoose = require("mongoose");
const options = { useNewUrlParser: true, useUnifiedTopology: true }
console.log("mongoUrl", process.env.MONNGODB_URL);
const mongoURI = "mongodb+srv://AdithyanDeveloper:@cluster0.a0tb5bq.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONNGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB Connected Successfully");
    })
    .catch((err) => {
        console.error("DB Connection Error: " + err);
    });
//mongoose connection
// mongoose.connect(process.env.MONNGODB_URL, () => {
//     console.log("Connected DB Succesfully")
// })

// //mongoose connection on
// mongoose.connection.on('', function () {
//     console.log("Mongoose connection  is open");
// })

// mongoose.connection.on('error', function (err) {
//     console.log("mogoose connection has occured" + err + "ERROR")
// })

// mongoose.connect.on('disconnected', function () {
//     console.log("mongoURL", process.env.MONGODB_URL);
//     console.log('Mongoose connection is disconnected');

// })

// process.on('SIGINT', function () {
//     mongoose.connection.close(function () {
//         console.log("Mongoose default connection is disconnected due to application termination");
//         process.exit(0)
//     });
// });