const {Band} = require('./Band')
const {Musician} = require('./Musician')

Band.hasMany(Musician);

module.exports = {
    Band,
    Musician
};
