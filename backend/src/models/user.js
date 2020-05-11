import mongoose, { model } from 'mongoose';
import { hashSync, genSaltSync, compareSync } from 'bcrypt-nodejs';
const {Schema} = mongoose;

const userSchema = new Schema({
    email: String,
    password:String,
    firstname: String,
    last_name: String,
    urlimage:String,
    _id:String,
    incluido: {type: Boolean, default: false},
    DateCreation: {type:Date , default: new Date().toISOString()},
    idGrupo:{type:String},
    elegido:{type:Boolean , default:false}
}); 
userSchema.methods.encryptPassword =  (password) => {
    return   hashSync(password, genSaltSync(10))
}
userSchema.methods.comparePassword= function(password) {
   return compareSync(password, this.password)
}

export default model('users', userSchema);



