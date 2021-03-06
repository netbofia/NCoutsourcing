/**
 * Created by Bruno Costa on 12-09-2017.
 */


//This is the configuration file that has all the credentials
var config = require('../../.././.config_res');
var { Sequelize, DataTypes } = require('sequelize');
var glob = require('glob');
var path = require('path');
//DB credentials
const db = {
    sequelize: new Sequelize(
        config.sql.database,
        config.sql.username,
        config.sql.password,
        config.sql
    )
};


//db tables  //Do this for all Keys in Object require(dir that start with capital letters)

//Get all file names in this directory that start with a capital letter and have a Java script extension.
//This may be bad for performance
var tables=glob.sync(__dirname+'/'+'!([a-z]*.js|*.[^j][^s]*|.gitignore)')
for( index in tables){
    var table=path.basename(tables[index],'.js');
    db[table]=require('./'+table)(db.sequelize,DataTypes);
}

//Foreign key association
Object.keys(db).forEach(function(modelName) {
//TODO associate
    if ('classMethods' in db[modelName].options) {
        db[modelName].options.classMethods.associate(db);
    }

});


module.exports = db;