const router = require('express').Router();
const verify = require('./verifyToken');



router.get('/', verify, (req, res) => {
    res.json({
        posts: 
        {title:"post posted in post",
        description: 'random text'}
    });

});
module.exports = router;