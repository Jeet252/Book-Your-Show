const {mongoose,Schema}=require('mongoose');

const CinemaSchema=new Schema({
name:String
}) 
const cinema = mongoose.model('Cinemas', CinemaSchema)
module.exports= cinema;