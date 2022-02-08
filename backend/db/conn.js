const mongoose = require('mongoose');

const db = 'mongodb+srv://peerlinkdb:peerlinkdb@peerlinkdb.0xdn0.mongodb.net/peerlinkdb?retryWrites=true&w=majority'
mongoose.connect(db).then(()=>{
    console.log("connection successfull")
}).catch((err)=>{
    console.log(err)
})
