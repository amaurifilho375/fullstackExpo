const multer = require('multer');

const path = require('path');

module.exports = {
   storage: multer.diskStorage({ //vai salvar no disk do onde estar rodando o servidor

     destination: path.resolve(__dirname,'..','..','uploads'),  //por que no windons as barras são invertidas
     filename: (req, file,cb) => {
         const ext = path.extname(file.originalname);
         const name = path.basename(file.originalname, ext);
        cb(null, `${name}-${Date.now()}${ext}`);
     },//isso por que o node dar nomes aleatorios a imagens
   }),

}