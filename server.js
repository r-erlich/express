const express = require('express');

const app = express()

app.get('/greetings/:name', (req, res) => {
    res.send(`Greetings ${req.params.name} I hope you evening is good`)
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});