const mongoose = require('mongoose');

const db = 'mongodb+srv://{username}:{password}@cluster0.3j0el.mongodb.net/peerlink?retryWrites=true&w=majority'
mongoose.connect(db).then(()=>{
    console.log("connection successfull")
}).catch((err)=>{
    console.log(err)
})
