const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

const events = []

app.get('/events', (req, res) => {
  res.send(events)
})

app.post('/events', (req, res) => {
  const event = req.body

  events.push(event)

  axios.post('http://posts-clusterip-srv:4000/events', event).catch((err) => {
    console.error(err.message)
  })  
  axios.post('http://comments-clusterip-srv:4001/events', event).catch((err) => {
    console.error(err.message)
  })
  axios.post('http://query-clusterip-srv:4002/events', event).catch((err) => {
    console.error(err.message)
  })
  axios.post('http://moderation-clusterip-srv:4003/events', event).catch((err) => {
    console.error(err.message)
  })

  res.send({ status: 'OK' })
})

app.listen(4005, () => {
  console.log('Listening on 4005')
})