const express = require('express')
const bodyParse=require('bady-parser')

const userRoute=require('./routes/userRoutes')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false}))

userRoute(app)

app.get('/', (req,res) => res.send('olá mundo pelo Express!'))

app.listen(port, () => console.log('API rodando na porta 3000'))