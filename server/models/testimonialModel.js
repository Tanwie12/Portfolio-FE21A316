const mongoose = require('mongoose');

const TodoSchema= new mongoose.Schema({
    avatar:{
        type:String, require:true,  default:'me',
    },
    name:{
        type:String, require:true, default:"hi thisis me"
    },
    review:{ type:String, require:true, default:'lorem epson njsjd sdjjs s ksdddmcacs s hw s wah a w  fvs '}
   
} )
const model=mongoose.model(' testimonial-data',TodoSchema)
module.exports = model