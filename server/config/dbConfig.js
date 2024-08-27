const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://adnusy2023:12345dexdash@dexdash.enxr0.mongodb.net/dexDash")
.then( ()  => console.log("connected to database successfully"))
.catch((err) => console.log("connection error"));

module.exports = mongoose;