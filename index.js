const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
    //request anything that we're asking the server
    //response what we want to have once the server response
    if(res.statusCode === 200){
        res.send("Hello user, nice to see you");
    }
})

app.use((req, res) => {
    res.status(404).send("This is a 404 error. Sorry we don't have that info!")
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})