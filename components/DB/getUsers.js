let db=require('./sqldb');

module.exports = function() {
    return db['User'].findAll().then(model=>{
        model.forEach(row=>{
            delete row.dataValues["hash"]
        })
        return model
    })
}