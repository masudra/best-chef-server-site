const express = require('express')
const app = express()
const port = 5000

const data =require('./Data/Chef-recipi')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/recipi', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})