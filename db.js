const Sequelize = require('sequelize');
const FilmModel = require('./models/films');
const UserModel = require('./models/users');
const sequelize = new Sequelize('apifilms', 'root', null, {
    host: '127.0.0.1',
    dialect: 'mysql'
});

const Film = FilmModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas')
    })

module.exports = {
    Film,
    User
}