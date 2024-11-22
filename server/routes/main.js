const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>
{
    const locals = 
    {
        title : "NodeJS Blog",
        description : "Simpe NodeJS blog with Express and EJS"
    }
    res.render('index', {locals});
})

router.get('/about', (req, res) =>
{
    res.render('about');
})

module.exports = router;