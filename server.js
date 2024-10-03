const express = require('express');

const app = express()

app.get('/greetings/:name', (req, res) => {
    res.send(`Greetings ${req.params.name} I hope you evening is good`)
});

app.get('/roll/:number', (req, res) => {
    const number = parseInt(req.params.number);
    if (isNaN(number)) {
        res.send('Please specify a number');
    } else {
        const rolledNumber = Math.floor(Math.random() * (number + 1));
        res.send(`You rolled a ${rolledNumber}.`);
    }
    });
    

app.listen(3000, () => {
    console.log('Listening on port 3000')
});