const {Band} = require('./Band')
const {Musician} = require('./Musician')
const {Song} = require('./Song')

Band.hasMany(Musician);

Band.belongsToMany(Song, {through: 'bandSongs'});
Song.belongsToMany(Band, {through: 'bandSongs'});

module.exports = {
    Band,
    Musician,
    Song
};
