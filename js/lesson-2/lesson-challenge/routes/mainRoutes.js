const express = require('express');
const router = express.Router();
const greetUser = require('../modulePractice');

router.get('/', (req, res) => {
    res.send('Welcome to the Homepage!');
});

router.get('/about', (req, res) => {
    res.send('About Page');
});

router.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

router.get('/greet/:username', (req, res) => {
    const username = req.params.username;
    const message = greetUser(username);
    res.send(message);
});

module.exports = router;
