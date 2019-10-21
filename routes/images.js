var express = require('express');
var ImageRouter= express.Router();
const multer = require('multer');
console.log("here finally")



const uploadDir = __dirname + "/public";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  }
});

//uploading an image to the storage
const upload = multer({
    storage: storage
})


ImageRouter.get('/', (req, res) => res.render('index'));


ImageRouter.post('/uploadmulter', upload.single('photo'), async (req, res) => {
    console.log("inside uploadmulter");
    console.log(req.file,"req.body");
    const host = req.hostname;
      const filePath = `${req.protocol}://${host}:5000/uploads/${req.file.filename}`;
      return res.send({
        url: filePath,
        success: true
      });


    });



    

module.exports= ImageRouter;







