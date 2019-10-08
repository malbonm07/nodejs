const https = require('https');
const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233';

const request = https.request(url, (response) => {
    const data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('error', error)
})