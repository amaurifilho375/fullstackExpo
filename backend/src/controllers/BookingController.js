const Booking = require('../models/Booking');

module.exports = {
    async store (req, res){
         const {user_id} = req.headers;
         const {spot_id} = req.params;
         const {date} = req.body;
    
        
         const booking = await Booking.create({
             //lembrando que quando eu for usar o populate o id do boock vai ser exibido na frente
             user: user_id,
             spot: spot_id,
             date,

         });
         
         await booking.populate('spot').populate('user').execPopulate(); //outra tecnica para exibir inf relacionadas
         
         return res.json(booking);

    }
    
    

}