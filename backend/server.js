const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    let response_object = {
        "msg": "hello",
        "origin": "server"
    }
    res.send(response_object)
})

app.listen(port, () => {
    console.log(`Digital Assistant Server listening on port ${port}`)
})