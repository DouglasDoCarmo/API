const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => res.send('olá mundo pelo Express!'))

app.listen(port, () => console.log('API rodando na prota 3000'))