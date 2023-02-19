const { sequelize } = require("./db");
const { Band, Musician, Song } = require("./index");

describe("Band and Musician Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  afterEach(async () => {
    await Band.sync({ force: true });
    await Musician.sync({ force: true });
    await Song.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.drop({ force: true });
  });

  // test("can create a Band", async () => {
  //   // TODO - test creating a band
  //   let band1 = await Band.create({
  //     name: "Big Chungus",
  //     genre: "Memes",
  //     showCount: 6,
  //   });
  //   expect(band1.name).toBe("Big Chungus");
  //   expect(band1.genre).toBe("Memes");
  //   expect(band1.showCount).toBe(6);
  // });

  // test("can delete a band", async () => {
  //   let band1 = await Band.create({
  //     name: "Big Chungus",
  //     genre: "Memes",
  //     showCount: 6,
  //   });
  //   let found = await Band.findByPk(1);
  //   expect(found.name).toBe(band1.name);
  //   await band1.destroy();
  //   found = await Band.findByPk(1);
  //   expect(found).toBe(null);
  // });

  // test("can update a band", async () => {
  //   let band1 = await Band.create({
  //     name: "Big Chungus",
  //     genre: "Memes",
  //     showCount: 6,
  //   });
  //   let found = await Band.findByPk(1);
  //   expect(found.name).toBe("Big Chungus");
  //   let updated = await band1.update({name: "Lil Chungus"});
  //   found = await Band.findByPk(1);
  //   expect(found.name).toBe("Lil Chungus");
  // });

  // test("can create a Musician", async () => {
  //   // TODO - test creating a musician
  //   let musician1 = await Musician.create({ name: "Andy", instrument: "PC" });
  //   expect(musician1.name).toBe("Andy");
  //   expect(musician1.instrument).toBe("PC");
  // });

  // test("can find all Musician's in a Band", async () => {
  //   let band1 = await Band.create({
  //     name: "Big Chungus",
  //     genre: "Memes",
  //     showCount: 6,
  //   });
  //   let musician1 = await Musician.create({ name: "Andy", instrument: "PC" });
  //   let musician2 = await Musician.create({ name: "Steve", instrument: "Gary" });
  //   await band1.addMusician(musician1);
  //   await band1.addMusician(musician2);
  //   let foundBand = await band1.getMusicians();
  //   musician1 = await Musician.findByPk(1);
  //   musician2 = await Musician.findByPk(2);
  //   expect(foundBand).toEqual([musician1,musician2]);
  // });

  // test("Song can have many bands", async () => {
  //   let band1 = await Band.create({
  //     name: "Big Chungus",
  //     genre: "Memes",
  //     showCount: 6,
  //   });
  //   let band2 = await Band.create({
  //     name: "Duo",
  //     genre: "Something",
  //     showCount: 2,
  //   });
  //   let song1 = await Song.create({
  //     title: "Chicken",
  //     year: 1325,
  //   });
  //   await song1.addBand(band1);
  //   await song1.addBand(band2);
  //   let foundBands = await song1.getBands();
  //   band1 = await Band.findByPk(1);
  //   band2 = await Band.findByPk(2);
  //   expect(foundBands).toEqual([band1,band2]);
  // });

  // test("Band can have many songs", async () => {
  //   let song1 = await Song.create({
  //     title: "Chicken",
  //     year: 1325,
  //   });
  //   let song2 = await Song.create({
  //     title: "Dance",
  //     year: 1669,
  //   });
  //   let band1 = await Band.create({
  //     name: "Big Chungus",
  //     genre: "Memes",
  //     showCount: 6,
  //   });
  //   await band1.addSong(song1);
  //   await band1.addSong(song2);
  //   let foundSongs = await band1.getSongs();
  //   song1 = await Song.findByPk(1);
  //   song2 = await Song.findByPk(2);
  //   expect(foundSongs).toEqual([song1,song2]);
  // });

  // test("Eager Loading", async () => {
  //   let musician1 = await Musician.create({ name: "Andy", instrument: "PC" });
  //   let musician2 = await Musician.create({ name: "Steve", instrument: "Gary" });
  //   let band1 = await Band.create({
  //     name: "Big Chungus",
  //     genre: "Memes",
  //     showCount: 6,
  //   });
  //   let band2 = await Band.create({
  //     name: "Duo",
  //     genre: "Something",
  //     showCount: 2,
  //   });
  //   let song1 = await Song.create({
  //     title: "Chicken",
  //     year: 1325,
  //   });
  //   let song2 = await Song.create({
  //     title: "Dance",
  //     year: 1669,
  //   });
  //   await band1.addMusician(musician1);
  //   await band1.addMusician(musician2);
  //   await band1.addSong(song1);
  //   await band1.addSong(song2);
  //   await song1.addBand(band1);
  //   await song1.addBand(band2);
  //   let foundMusicians = await Band.findAll( {
  //     include: [
  //       { model: Musician, as: "musicians"}
  //     ]
  //   });
  //   expect(foundMusicians).toBe("no idea lolol");
  // });

  // it("test to add multiple musicians to a band", async () => {
  //   // Band.create() to make some bands. Use the data you’ve added in previous tests you’ve created!
  //   let band1 = await Band.create({
  //     name: "Big Chungus",
  //     genre: "Memes",
  //     showCount: 6,
  //   });
  //   let band2 = await Band.create({
  //     name: "Duo",
  //     genre: "Something",
  //     showCount: 2,
  //   });
  //   // Create at least 2 songs
  //   let song1 = await Song.create({
  //     title: "Chicken",
  //     year: 1325,
  //   });
  //   let song2 = await Song.create({
  //     title: "Dance",
  //     year: 1669,
  //   });
  //   // For one band, add both songs
  //   await band1.addSong(song1);
  //   await band1.addSong(song2);
  //   await band2.addSong(song1);
  //   // For each of the songs, use something like foundBand.getSongs() to check that they have been added correctly!
  //   foundBandSongs = await band1.getSongs();
  //   // console.log(foundBandSongs)
  //   expect(foundBandSongs[0].id).toBe(1);
  //   expect(foundBandSongs[0].title).toBe("Chicken");
  //   expect(foundBandSongs[0].year).toBe(1325);
  //   expect(foundBandSongs[1].id).toBe(2);
  //   expect(foundBandSongs[1].title).toBe("Dance");
  //   expect(foundBandSongs[1].year).toBe(1669);
  //   foundBandSongs = await band2.getSongs();
  //   expect(foundBandSongs[0].id).toBe(1);
  //   expect(foundBandSongs[0].title).toBe("Chicken");
  //   expect(foundBandSongs[0].year).toBe(1325);
  //   // Do the same with the bands
  //   foundSongBands = await song1.getBands();
  //   // console.log(foundSongBands);
  //   expect(foundSongBands[0].id).toBe(1);
  //   expect(foundSongBands[0].name).toBe("Big Chungus");
  //   expect(foundSongBands[0].genre).toBe("Memes");
  //   expect(foundSongBands[1].id).toBe(2);
  //   expect(foundSongBands[1].name).toBe("Duo");
  //   expect(foundSongBands[1].genre).toBe("Something");
  //   foundSongBands = await song2.getBands();
  //   expect(foundSongBands[0].id).toBe(1);
  //   expect(foundSongBands[0].name).toBe("Big Chungus");
  //   expect(foundSongBands[0].genre).toBe("Memes");
  // });

  it("implement eager loading into the Musicians-Bands", async () => {
    // 2. Create test data and associate the models as in previous tests.
    let musician1 = await Musician.create({ name: "Andy", instrument: "PC" });
    let musician2 = await Musician.create({
      name: "Steve",
      instrument: "Gary",
    });
    let band1 = await Band.create({
      name: "Big Chungus",
      genre: "Memes",
      showCount: 6,
    });
    let band2 = await Band.create({
      name: "Duo",
      genre: "Something",
      showCount: 2,
    });
    // Create at least 2 songs
    let song1 = await Song.create({
      title: "Chicken",
      year: 1325,
    });
    let song2 = await Song.create({
      title: "Dance",
      year: 1669,
    });
    await band1.addMusician(musician1);
    await band1.addMusician(musician2);
    await band2.addMusician(musician1);
    // 3. Find all the Bands
    // 4. In the Band.findAll() call, include the Musician model.
    foundBandsMusicians = await Band.findAll({
      include: [{ model: Musician, as: "musicians" }],
    });
    // 5. Do the same again, but this time include the Song model.
    foundBandSongs = await Band.findAll({
      include: [{ model: Song, as: "songs" }],
    });
    foundBandMusiciansSongs = await Band.findAll({
      include: [
        { model: Musician, as: "musicians" },
        { model: Song, as: "songs" },
      ],
    });
    // console.log(foundBandsMusicians);
    // console.log(foundBandSongs);
    // console.log(foundBandMusiciansSongs[1].musicians[0]);
    // 6. Test the output
    expect(foundBandMusiciansSongs[1].musicians[0].name).toBe("Andy");
  });
});

// [
//   band {
//     dataValues: {
//       id: 1,
//       name: 'Big Chungus',
//       genre: 'Memes',
//       showCount: 6,
//       createdAt: 2023-02-19T00:00:40.672Z,
//       updatedAt: 2023-02-19T00:00:40.672Z,
//       bandSongs: [bandSongs]
//     },
//     _previousDataValues: {
//       id: 1,
//       name: 'Big Chungus',
//       genre: 'Memes',
//       showCount: 6,
//       createdAt: 2023-02-19T00:00:40.672Z,
//       updatedAt: 2023-02-19T00:00:40.672Z,
//       bandSongs: [bandSongs]
//     },
//     uniqno: 1,
//     _changed: Set(0) {},
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     bandSongs: bandSongs {
//       dataValues: [Object],
//       _previousDataValues: [Object],
//       uniqno: 1,
//       _changed: Set(0) {},
//       _options: [Object],
//       isNewRecord: false
//     }
//   },
//   band {
//     dataValues: {
//       id: 2,
//       name: 'Duo',
//       genre: 'Something',
//       showCount: 2,
//       createdAt: 2023-02-19T00:00:40.691Z,
//       updatedAt: 2023-02-19T00:00:40.691Z,
//       bandSongs: [bandSongs]
//     },
//     _previousDataValues: {
//       id: 2,
//       name: 'Duo',
//       genre: 'Something',
//       showCount: 2,
//       createdAt: 2023-02-19T00:00:40.691Z,
//       updatedAt: 2023-02-19T00:00:40.691Z,
//       bandSongs: [bandSongs]
//     },
//     uniqno: 1,
//     _changed: Set(0) {},
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     bandSongs: bandSongs {
//       dataValues: [Object],
//       _previousDataValues: [Object],
//       uniqno: 1,
//       _changed: Set(0) {},
//       _options: [Object],
//       isNewRecord: false
//     }
//   }
// ]

// [
//   song {
//     dataValues: {
//       id: 1,
//       title: 'Chicken',
//       year: 1325,
//       createdAt: 2023-02-18T23:54:31.831Z,
//       updatedAt: 2023-02-18T23:54:31.831Z,
//       bandSongs: [bandSongs]
//     },
//     _previousDataValues: {
//       id: 1,
//       title: 'Chicken',
//       year: 1325,
//       createdAt: 2023-02-18T23:54:31.831Z,
//       updatedAt: 2023-02-18T23:54:31.831Z,
//       bandSongs: [bandSongs]
//     },
//     uniqno: 1,
//     _changed: Set(0) {},
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     bandSongs: bandSongs {
//       dataValues: [Object],
//       _previousDataValues: [Object],
//       uniqno: 1,
//       _changed: Set(0) {},
//       _options: [Object],
//       isNewRecord: false
//     }
//   },
//   song {
//     dataValues: {
//       id: 2,
//       title: 'Dance',
//       year: 1669,
//       createdAt: 2023-02-18T23:54:31.840Z,
//       updatedAt: 2023-02-18T23:54:31.840Z,
//       bandSongs: [bandSongs]
//     },
//     _previousDataValues: {
//       id: 2,
//       title: 'Dance',
//       year: 1669,
//       createdAt: 2023-02-18T23:54:31.840Z,
//       updatedAt: 2023-02-18T23:54:31.840Z,
//       bandSongs: [bandSongs]
//     },
//     uniqno: 1,
//     _changed: Set(0) {},
//     _options: {
//       isNewRecord: false,
//       _schema: null,
//       _schemaDelimiter: '',
//       include: [Array],
//       includeNames: [Array],
//       includeMap: [Object],
//       includeValidated: true,
//       attributes: [Array],
//       raw: true
//     },
//     isNewRecord: false,
//     bandSongs: bandSongs {
//       dataValues: [Object],
//       _previousDataValues: [Object],
//       uniqno: 1,
//       _changed: Set(0) {},
//       _options: [Object],
//       isNewRecord: false
//     }
//   }
// ]
