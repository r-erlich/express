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




 const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
    let result = shoes
    if (req.query["min-price"]) {
    result =    result.filter(shoe => shoe.price > req.query["min-price"])
            }
            if (req.query["max-price"]) {
                result =    result.filter(shoe => shoe.price < req.query["max-price"])
                        }

                        if (req.query["type"]) {
                            result =    result.filter(shoe => shoe.type === req.query["type"])
                                    }
            res.send(result);
})
 app.listen(3000, () => {
    console.log('Listening on port 3000')   
});

