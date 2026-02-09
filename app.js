const express = require('express');

const posts = require('./cibo');
const app = express()
const port = 3000

const router = require('./routers/ciboElenco');

app.use(express.static('cibo'));

app.get('/', (req, res) => {
    res.send('welcome to my blog')
})





app.use("/cibo", router)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})