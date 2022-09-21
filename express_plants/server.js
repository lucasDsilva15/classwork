//load express
const express = require('express')

//create the app
const app = express()
const port = 3000


const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"];
// Dfine routes (when ready)
//more specific routes should go on top, if we placed app.get plants under index it would not work

app.get('/plants', (req /*request*/, res/*response*/) => {
    res.send(plants)
})

app.get('/:index', (req, res) => {
   if (plants[req.params.index]) {
    res.send(plants[req.params.index])
   } else {
    res.send('Item not found')
   }
})
// example with multiple params
// app.get('/hello/:firstname/:lastname', (req, res) => {
//     console.log(req.params)
//     res.send('hello ' + req.params.firstname + '' + req.params.lastname)
// })

//Example with req.query
app.get('/howdy/:firstname/', (req, res) =>{
    console.log(req.params, ': parameters')
    console.log(req.query, ': queries')
    res.send('hello ' + req.query.title + ' ' + req.params.firstname);
})

//Listen to port 3000
app.listen(port, () => {
    console.log('listening on port', port)
})