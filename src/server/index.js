const dotenv = require('dotenv');
dotenv.config({ path: 'evaluate-news-nlp/.env'});

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')

// start up app
const app = express()

//cors
const cors = require('cors');

app.use(cors());;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Initialize the main project folder
app.use(express.static('dist'))

console.log(__dirname)

//API
const apiKey = process.env.API_KEY
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
console.log(`Your API key is ${process.env.API_KEY}`);
let userInput = []




app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//Post route
app.post('/api', async function(req, res) {
    userInput = req.body.url;
    console.log(`You entered: ${userInput}`);
    const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`

    const response = await fetch(apiURL)
    const mcData = await response.json()
    console.log(mcData)
    res.send(mcData)
    const projectData = {
        agreement : mcData.agreement
    }

    res.send(projectData);

})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})