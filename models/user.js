// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('schema', 'root', 'Chell2014$', { //add name of schema and password
//     host:'localhost',
//     dialect: 'mysql'
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// const Users = connection.define('user', {
//     googleId: Sequelize.INTEGER,
//     displayName: Sequelize.STRING,
    
// }); 

// sequelize.sync()
//   .then(() => User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   }))
//   .then(jane => {
//     console.log(jane.toJSON());
//   });

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    googleId: DataTypes.STRING,
    displayName: DataTypes.STRING,

  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
