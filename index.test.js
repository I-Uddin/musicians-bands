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
    await Song.sync( {force: true} );
  });

  afterAll(async () => {
    await sequelize.drop( {force: true} );
  });

  test("can create a Band", async () => {
    // TODO - test creating a band
    let band1 = await Band.create({
      name: "Big Chungus",
      genre: "Memes",
      showCount: 6,
    });
    expect(band1.name).toBe("Big Chungus");
    expect(band1.genre).toBe("Memes");
    expect(band1.showCount).toBe(6);
  });

  test("can delete a band", async () => {
    let band1 = await Band.create({
      name: "Big Chungus",
      genre: "Memes",
      showCount: 6,
    });
    let found = await Band.findByPk(1);
    expect(found.name).toBe(band1.name);
    await band1.destroy();
    found = await Band.findByPk(1);
    expect(found).toBe(null);
  });

  test("can update a band", async () => {
    let band1 = await Band.create({
      name: "Big Chungus",
      genre: "Memes",
      showCount: 6,
    });
    let found = await Band.findByPk(1);
    expect(found.name).toBe("Big Chungus");
    let updated = await band1.update({name: "Lil Chungus"});
    found = await Band.findByPk(1);
    expect(found.name).toBe("Lil Chungus");
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    let musician1 = await Musician.create({ name: "Andy", instrument: "PC" });
    expect(musician1.name).toBe("Andy");
    expect(musician1.instrument).toBe("PC");
  });

  test("can find all Musician's in a Band", async () => {
    let band1 = await Band.create({
      name: "Big Chungus",
      genre: "Memes",
      showCount: 6,
    });
    let musician1 = await Musician.create({ name: "Andy", instrument: "PC" });
    let musician2 = await Musician.create({ name: "Steve", instrument: "Gary" });
    await band1.addMusician(musician1);
    await band1.addMusician(musician2);
    let foundBand = await band1.getMusicians();
    musician1 = await Musician.findByPk(1);
    musician2 = await Musician.findByPk(2);
    expect(foundBand).toEqual([musician1,musician2]);
  });

  test("Song can have many bands", async () => {
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
    let song1 = await Song.create({
      title: "Chicken",
      year: 1325,
    });
    await song1.addBand(band1);
    await song1.addBand(band2);
    let foundBands = await song1.getBands();
    band1 = await Band.findByPk(1);
    band2 = await Band.findByPk(2);
    expect(foundBands).toEqual([band1,band2]);
  });

  test("Band can have many songs", async () => {
    let song1 = await Song.create({
      title: "Chicken",
      year: 1325,
    });
    let song2 = await Song.create({
      title: "Dance",
      year: 1669,
    });
    let band1 = await Band.create({
      name: "Big Chungus",
      genre: "Memes",
      showCount: 6,
    });
    await band1.addSong(song1);
    await band1.addSong(song2);
    let foundSongs = await band1.getSongs();
    song1 = await Song.findByPk(1);
    song2 = await Song.findByPk(2);
    expect(foundSongs).toEqual([song1,song2]);
  });


});
