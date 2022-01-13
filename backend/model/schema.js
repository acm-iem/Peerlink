const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { TokenExpiredError } = require('jsonwebtoken');

const defSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    cpassword: {
        type: String,
        required: true,
        trim: true
    },
    tokens:[
        {
           token:{ type: String,
            required: true, 
           } 
        }
    ]
    

})
// for password hashing..

defSchema.pre('save', async function(next){
    if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password,12);
    this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
})

// generate Token with a function and return it for authentication,,,,

defSchema.methods.generateAuthToken = async function(){
    try{
          let token = jwt.sign({_id:this._id},"thisprojectispeerlinkandwearedeveloper")
          this.tokens = this.tokens.concat({token:token});
         await this.save()
         return token;
    }catch(err){
        console.log(err)
    }
}


const User = mongoose.model('user',defSchema);
module.exports = User;