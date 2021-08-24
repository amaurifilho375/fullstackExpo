const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,  //minhiatura em ingles
    company: String,
    price: Number,
    techs: [String],
    user: {
       type: mongoose.Schema.Types.ObjectId,  //esse treco de cod pega o id do objeto. spot de user
       ref: 'User'


    }

}, {
  toJSON: { //todo vez q um spot foi passado como json ele ira calcular o virtual ativos
      virtuals: true,
  },

});

SpotSchema.virtual('thumbnail_url').get(function(){ //criando campo virtual no node
       return `http://192.168.0.182:3336/files/${this.thumbnail}`


});



module.exports = mongoose.model('Spot',SpotSchema );