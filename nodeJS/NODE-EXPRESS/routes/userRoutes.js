const fs = require('fs')
const {join} = require('path')

const filePath = join(_dirname,'users.json')

const getUsers = () => {
    const data = fs.existsSync(filePath)
        ?fs.readFileSync(filePath)
        :[]
        
    try {
        return JSON.parse(data)
    } catch (error){
        return[]
    }
}

const saveUser=(users)=> fs.writeFileSync(filePath,JSON.stringify(users,null,'\t'))

const userRoute =(app) => {
    app.route('/users/:id?')
        .get((req,res)=>{
            const users = getUsers()

            res.send({ users})
        })        
        .post((req,res) => {
            const user = getUsers()

            users.push(req.body)
            serveUeser(users)

            res.status(201).send('OK')
        })
}

module.exports=userRoute