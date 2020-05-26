// const myFirstImport = require('./index')

// const { sayHello } = require('./index')
// sayHello()
// can import single components ^

// myFirstImport.sayBye()
// myFirstImport.sayHello()

const express = require('express') // npm i express
const app = express() // initialising express - to use its features
const fs = require('fs')
// ('./') - local module... ('express') - global module

// react - localhost: 3000 -> we create own localhost

// GET - simply retrieving info that has been requested
// /about.html

/**
 * GET - sendFile - get index.html
 * POST - sending info to wherever
 * PUT - edit/update existing info
 * DELETE
 */
app.get('/', (req, res) => {
    // res.send('Hello World')
    fs.writeFileSync('./myData.txt', 'hello there')
    res.send('Hello World')
    // res.sendFile(__dirname + '/index.html')
}) 

app.listen(3000, () => {
console.log('I am your web server!')
})