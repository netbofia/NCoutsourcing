const db=require('../DB/sqldb')


module.exports=function(){
    return db["Employee"].findAll({
        include:[{
            model: db['User'],
            as: 'User_data',
            attributes:{
                exclude:["hash"]
            }
        }]
    })
}

