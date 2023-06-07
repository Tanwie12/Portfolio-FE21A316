const mongoose = require('mongoose');

const TodoSchema= new mongoose.Schema({
    id:{
        type:Number, require:true,  default:'me',
    },
    Image:{
        type:String, require:true, default:"hi thisis me"
    },
    title:{ type:String, require:true, default:'lorem epson njsjd sdjjs s ksdddmcacs s hw s wah a w  fvs '},
    github:{ type:String, require:true, default:""},
    demo:{ type:String, require:true, default:""},
   
} )
const model=mongoose.model('portfolio-data',TodoSchema)
module.exports = model