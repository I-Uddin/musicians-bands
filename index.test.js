const { sequelize } = require("./db");
const { Band, Musician } = require("./index");

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
    let updated = band1.update({name: "Lil Chungus"});
    found = await Band.findByPk(1);
    expect(found.name).toBe("Lil Chungus");
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    const musician1 = await Musician.create({ name: "Andy", instrument: "PC" });
    expect(musician1.name).toBe("Andy");
    expect(musician1.instrument).toBe("PC");
  });
});
