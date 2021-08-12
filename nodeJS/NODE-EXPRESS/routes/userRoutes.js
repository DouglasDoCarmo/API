const fs=require('fs')
const {join}= require('path')

const filePath= join(_dirname,'users.json')

const getUsers=()=>{
    const data=fs.existsSync[filePath]
        ?fs.readFileSync[filePath]
        ![]
        
    try{
        return JSON.parse(data)
    } catch (error){
        return[]
    }
}

const saveUser=(users)=> fs.writeFileSync(filePath,JSON.stringify(users,null,'\t'))

const userRoute=(app) => {
    app.userRoute('/users/:id')
        .get((req, res)=>{
            const user=getUsers()

            res.send({ users})
        }
}

module.exports=userRoute