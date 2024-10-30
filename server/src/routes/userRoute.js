const express = require('express');

const router = express.Router();

router.post('/createUser', (req, res) => {
    res.json({ success: true, message: 'User Add successfully' })
})

router.get('/getUser', (req, res) => {
    res.json({
        success: true, message: 'User Get Successfully'
    })
})

router.post('/postUser', (req, res) => {
    res.json({
        success: true, message: 'Data Post Successfully'
    })
})

module.exports = router;