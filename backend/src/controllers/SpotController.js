const Spot = require('../models/Spot');
const User = require('../models/User');
module.exports = {
   
    async index (req, res){
        const {tech} = req.query ;
        
        const spots = await Spot.find({techs: tech});
        return res.json(spots);   

    },
   
   
    async store(req, res){
      //console.log(req.body);
      //console.log(req.file);  //Multipart form pois tem suporte a imagem e é uma nova strutura alem do json
                                //pois o json não tem suport a imagem 
      
      const {filename} = req.file;
      const{company, techs, price} = req.body;
      const {user_id} = req.headers;  //outra forma de pega info da req e eh usado tbem na autenticação
      
      const user = await User.findById(user_id); //sem {} pois eh um ID

      if(!user){
         return res.status(400).json({error: 'User does  not exists'}); 
      }

      const spot = await Spot.create({
           user: user_id,
           thumbnail: filename,
           company,
           techs: techs.split(',').map(tech => tech.trim()),
           price

      });
      
      res.json(spot);

   } 


}