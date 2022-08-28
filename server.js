const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000

// Load environment variables from .env files.
require('dotenv').config()

// Middlewares
app.use(cors())
app.use(express.static('public'))

// Air Conditioning Manufacturers
let manufacturers = {
    'american standard': {
        'name': 'American Standard',
        'brands': ['American Standard'],
        'founded': '1929',
        'headquarters': 'Piscataway, New Jersey, U.S.',
        'keyPeople': ['Frederic M. Poses'],
        'website': 'https://www.americanstandardair.com'
    },
    'carrier':{
        'name': 'Carrier Corporation',
        'brands': ['Carrier', 'Bryant'],
        'founded': '1915',
        'headquarters': 'Syracuse, New York, U.S.',
        'keyPeople': ['Dave Gitlin'],
        'website': 'https://carrier.com'
    },
    'goodman':{
        'name': 'Goodman Manufacturing',
        'brands': ['Amana', 'Goodman'],
        'founded': '1975',
        'headquarters': 'Houston, Texas, U.S.',
        'keyPeople': ['Takeshi Ebisu'],
        'website': 'https://www.goodmanmfg.com/'
    },
    'ingersol rand':{
        'name': 'Ingersol Rand',
        'brands': ['Ameristar', 'Oxbox'],
        'founded': '1859',
        'headquarters': 'Davidson, North Carolina, U.S.',
        'keyPeople': ['Robert W. Gardner'],
        'website': 'irco.com'
    },
    'international comfort products':{
        'name': 'International Comfort Products',
        'brands': ['Airquest', 'Arcoaire', 'Comfortmaker', 'Day & Night', 'Tempstar', 'Heil'],
        'founded': '1979',
        'headquarters': 'Lewisburg, Tennessee, U.S.',
        'keyPeople': ['J.T. Holtschlag'],
        'website': 'www.icpusa.com'
    },
    'lennox':{
        'name': 'Lennox International',
        'brands': ['Lennox', 'Armstrong', 'Ducane', 'Aire-flo'],
        'founded': '1895',
        'headquarters': 'Richardson, Texas, U.S.',
        'keyPeople': ['Dave Lennox'],
        'website': 'http://www.lennoxinternational.com'
    },
    'nortek':{
        'name': 'Nortek Global',
        'brands': ['Maytag', 'Frigidaire', 'Gibson', 'Nutone', 'Broan', 'Mammoth'],
        'founded': '1919',
        'headquarters': 'O\'Fallon, Missouri, U.S.',
        'keyPeople': ['Dave LaGrand'],
        'website': 'https://www.nortekhvac.com'
    },
    'rheem':{
        'name': 'Rheem Manufacturing',
        'brands': ['Rheem', 'Ruud', 'Weatherking'],
        'founded': '1925',
        'headquarters': 'Atlanta, Georgia, U.S.',
        'keyPeople': ['Richard Rheem', 'Donald Rheem'],
        'website': 'https://www.rheem.com'
    },
    'trane':{
        'name': 'Trane Technologies',
        'brands': ['Trane'],
        'founded': '1871',
        'headquarters': 'Swords, Ireland',
        'keyPeople': ['Simon Ingersoll'],
        'website': 'https://www.tranetechnologies.com'
    },
    'york':{
        'name': 'York',
        'brands': ['York','Coleman', 'Luxaire'],
        'founded': '1874',
        'headquarters': 'York, Pennsylvania, U.S.',
        'keyPeople': ['Stephen Morgan Smith', 'Jacob Loucks', 'Henry LaMotte', 'Oliver Bollinger', 'George Buck', 'Robert Shetter'],
        'website': 'https://www.york.com'
    },
    'unknown':{
        'name': 'unknown',
        'brands': [],
        'founded': 'unknown',
        'headquarters': 'unknown',
        'keyPeople': 'unknown',
        'website': 'unknown'
    }
}

// @desc    Respond with the index.html file
// @route   GET /
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// @desc    Respond with data of all companies
// @route   GET /api
app.get('/api', (req, res) => {
    res.json(manufacturers)
})

// @desc    Respond with data of a random company
// @route   GET /api/random
app.get('/api/random', (req, res) => {
    const keys = Object.keys(manufacturers)
    res.json(manufacturers[keys[Math.floor(Math.random() * keys.length)]])
})

// @desc    Respond with data of the specific company
// @route   GET /api/:name
app.get('/api/:name', (req, res) => {
    const companyName = req.params.name.toLowerCase()
    if(manufacturers[companyName]){
        res.json(manufacturers[companyName])
    }else{
        res.json(manufacturers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})