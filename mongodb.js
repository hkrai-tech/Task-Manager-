const mongodb = require('mongodb')
const MongoClient=mongodb.MongoClient

const ConnectionUrl='mongodb://127.0.0.1:27017'
const DatabaseName='task-manager'

MongoClient.connect(ConnectionUrl,{useNewUrlParser: true},(error,client)=>{

    if(error)
    {
       return  console.log('Unable to connect!')
    }

    const db=client.db(DatabaseName)
    
    db.collection('user').insertOne({
        name: 'Hari Kesh Rai',
        age: '27'
    },(error,result)=>{
        if(error)
        {
            return console.log('Unable to connect')
        }

        console.log(result.ops)
    })
})