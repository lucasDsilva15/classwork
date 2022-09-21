const express = require('express')

const app = express()

app.get('/greeting/:name', (req, res) => {
    res.send('Whats up ' + req.params.name)
})

app.get('/tip/:total/:tipPerc', (req, res) => {
    total = req.params.total
    perc = req.params.tipPerc
    res.send('The tip you should give is $' + (total*(perc *.01)))

})

app.get('/magic/:question', (req, res) => {
    answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    function randomNum (min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }
    res.send(`<h1> ${answers[randomNum(0, answers.length)]} </h1> <h2> Your question was: ${req.params.question}? </h2>`)
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})