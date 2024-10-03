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
    
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ]
 app.get('/collectibles/:index', (req,res) => {
    const index = parseInt(req.params.index);
    if (isNaN(index) || index < 0 ) {
     res.send("This is not a valid entry, please try again.");
    }
    if (index >= collectibles.length) {
     res.send("This item is not in stock at the moment, please check back soon!");
    } else {
        let item = collectibles[index];
        res.send(`So, you want the ${item.name} ? For ${item.price} dollars it can be yours`);
    }
 });

app.listen(3000, () => {
    console.log('Listening on port 3000')
});