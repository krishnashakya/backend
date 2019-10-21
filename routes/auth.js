        const express = require('express')
        const router= express.Router();
        const User = require('../model/User');
        const Founder = require('../model/Founder');

        // const {registerValidation, loginValidation} = require('../validation');
        const bcrypt = require('bcryptjs');
        const jwt = require('jsonwebtoken');


       


        //Adding issue 
    router.post('/issueadded', async (req, res) => {

    // const {error} = registerValidation(req.body);
    // if(error) return res.status(400).send(error.details[0].message);

    //Checking if the user is already in the database
    // const emailExist = await User.findOne({email: req.body.email});
    // if(emailExist) return res.status(400).send('Email already exists');
    
    // //Hash the password using bcrypt
    // const salt = await bcrypt.genSalt(10);
    // const hashPassword = await bcrypt.hash(req.body.password, salt);


    //Create a new issue
    const user = new User({
        nameoftheDog : req.body.nameoftheDog,
        age : req.body.age,
        location : req.body.location,
        description : req.body.description,
        imageUrl : req.body.imageUrl
        
    });
    try{
        const savePost = await user.save();
        res.send({user: user._id});
    }
    catch(err)  {
        res.status(400).send(err);
    }
    });

    
    
    // getting all the issues from the database
    router.get('/register', async (req, res) => {
        try{
            
            const post = await User.find();
            res.json(post);
        }
        catch(err){
            res.json({message:err});
        }
       
    });

    // //specific data from database
    // router.get('/:id', async (req, res) => {
    //     User.findById(req.params.id)
    //         .then((user => res.json(user)))
    //         .catch(err => res.status(400).json('Error: '+err));
       
    // });


    //removing the issues
    router.delete('/issue/:id', async (req, res) => {
        User.findByIdAndDelete(req.params.id)
        .then(() => res.json('Issue deleted.'))
        .catch(err => res.status(400).json('Error:' +err))
    });

    // updating the stored data
    router.route('/update/:id').post((req, res) => {
        User.findById(req.params.id)
        console.log(req.params.id)
            .then(user => {
                user.nameoftheDog = req.body.nameoftheDog,
                user.age = req.body.age,
                user.location = req.body.location,
                user.description = req.body.description,
                user.imageUrl = req.body.imageUrl

                user.save()
                .then(() => res.json("updated the issue"))
                .catch(err => res.status(400).json('Error:' +err));
            })
            .catch(err => res.status(400).json('Error:' +err));
    });









    //getting all the founder 
    router.get('/found', async (req, res) => {
        try{
            
            const posts = await Founder.find();
            res.json(posts);
        }
        catch(err){
            res.json({message:err});
        }
       
    });


    //adding a new founder
    router.post('/founder', async (req, res) => {

    
    const founder = new Founder({
        founderName : req.body.founderName,
        foundLocation : req.body.foundLocation,
        founderContact : req.body.founderContact,
        founderEmail : req.body.founderEmail,
        urlImage: req.body.urlImage
        
    });
    try{
        const savePost = await founder.save();
        res.send(savePost);
    }
    catch(err)  {
        res.status(400).send(err);
    }

    });

    router.delete('/founder/:id', async (req, res) => {
        Founder.findByIdAndDelete(req.params.id)
        .then(() => res.json('Issue deleted.'))
        .catch(err => res.status(400).json('Error:' +err))
    });


    
    //updating the stored data
    // router.patch('/:id', async (req, res) => {
    //     try{
    //     const updatePost = await Founder.updateOne(
            
    //         { $set: {founderName: req.body.founderName}},
    //         { $set: {foundLocation: req.body.foundLocation}},
    //         { $set: {founderContact: req.body.founderContact}},
    //         { $set: {founderEmail: req.body.founderEmail}}
    //         );
    //         res.json(updatePost);
    //     }
    //     catch (err){
    //         res.json({message: err});
    
    //     }
    // });

    
    //Login
    //  router.post('/login', async (req,res) =>{

    //             //lets validate the data before a user is created
    //             const { error } = loginValidation(req.body);
    //             if(error) return res.status(400).send(error.details[0].message);

    //             //checking if the user is already in the database
    //             const user = await User.findOne({email: req.body.email});
    //             if(!user) return res.status(400).send('Email not found');


    //              //Password is correct
    //             const validpass = await bcrypt.compare(req.body.password, user.password);
    //             if(!validpass) return res.status(400).send('Invalid Password');
        
    //              //create and assign a token
    //             const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    //             res.header('auth-token', token).send(token);



    //                 res.send("logged in");


    //     });


            module.exports = router;
