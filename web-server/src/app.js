const express = require('express');
const path = require('path');

console.log(__dirname)
console.log(__filename)

const pathOfPublicFolder = path.join(__dirname, '../public')

const app = express();

app.use(express.static(pathOfPublicFolder))

// app.get('', (req, res) => {
//     res.send()
// })
// app.get('/help', (req, res) => {
//     res.send("<h1>This is the Help section</h1>")
// })
// app.get('/about', (req, res) => {
//     res.send("<h1>This is the about section</h1>")
// })
app.get('/weather', (req, res) => {
    res.send("<h1>This is the weather section</h1>")
})

app.listen('3000', () => {
    console.log('Server is up on port 3000');
})