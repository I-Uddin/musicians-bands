const {Band} = require('./Band')
const {Musician} = require('./Musician')
const {Song} = require('./Song')

Band.hasMany(Musician);
Band.hasMany(Song);
Song.hasMany(Band);

module.exports = {
    Band,
    Musician,
    Song
};
