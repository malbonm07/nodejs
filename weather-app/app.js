const request = require('request');

const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233'

request({url}, (error, response) => {
    console.log(response)
})