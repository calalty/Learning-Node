// npm i node-fetch
const fetch = require('node-fetch')

const APPID = '0a5bafe6e75ab5157550efeb53ad8057' // this is problematic

const url = `http://api.openweathermap.org/data/2.5/weather?q=Crewe,uk&appid=${APPID}`

const fs = require('fs')

const getWeather =  async () => {
    let data = await fetch(url)
    let jsonData = await data.json()
    // fs.writeFileSync('data.json', jsonData)
    console.log(await data.json())
}

getWeather()