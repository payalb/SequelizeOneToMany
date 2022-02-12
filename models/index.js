'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.User.hasMany(db.Passport,{allowNull: false});//User has association with Passport, but cannot fetch user based on passport
db.Passport.belongsTo(db.User) //Passport will have userid column
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync({force: true}).then(async()=>{

 var user = db.User.build({ "firstname": "payal", "lastname": "bansal","email": "bansal@gmail.com", "password": "payal123"})
   user.save(). then((data)=> {
 /* var p1= db.Passport.create({"issuedate": '10-02-2022', "expirydate": "10-07-2028", "location": "Ghaziabad", "name": "payal bansal"});
   var p2=  db.Passport.create({"issuedate": '10-02-2029', "expirydate": "10-07-2038", "location": "Ghaziabad", "name": "payal bansal"});
    Promise.all([p1, p2]).then( (p)=>{
   data.addPassports(p).then((d)=> {
     console.log(JSON.stringify(d));
   }).catch((e)=> {
     console.log(e);
   })
    });*/
    /*user.createPassport({"issuedate": '10-02-2022', "expirydate": "10-07-2028", "location": "Ghaziabad", "name": "payal bansal"}).then((d)=> {
     console.log(JSON.stringify(d));
   })
   user.createPassport({"issuedate": '10-02-2029', "expirydate": "10-07-2038", "location": "Ghaziabad", "name": "payal bansal"}).then((d)=> {
    console.log(JSON.stringify(d));
  })*/
 db.Passport.create({"issuedate": '10-02-2022', "expirydate": "10-07-2028", "location": "Ghaziabad", "name": "payal bansal", "UserId": data.id});
  db.Passport.create({"issuedate": '10-02-2029', "expirydate": "10-07-2038", "location": "Ghaziabad", "name": "payal bansal", "UserId": data.id});
   
    module.exports = db;
   }).catch((e)=>{
    console.log(e);
  });
 
});