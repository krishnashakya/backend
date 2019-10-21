const express = require('express');
const app = express();
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const postRoute = require('./routes/posts');
const cors = require('cors');
const path = require('path')
const ImageRouter = require('./routes/images');
const authRoute = require('./routes/auth');
require('dotenv/config');


//Middleware

app.use(express.static(path.join(__dirname,'./public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
bodyParser.text({type:'text/plain'});
app.use(cors());
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
// app.use('./public/uploads', express.static('uploads'));
app.use('/image', ImageRouter);


//connnect to DB
mongoose.connect(process.env.DB_CONNECT, 
{ useNewUrlParser: true},
() => console.log('connected to db'));


app.listen(5000, () => console.log('server started'));