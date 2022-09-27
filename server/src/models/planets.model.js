const path = require("path");
const { parse } = require("csv-parse");
const fs = require("fs");

const planets = require("./planets.mongo");

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", async (data) => {
        if (isHabitablePlanet(data)) {
          savePlantet(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", async () => {
        const countPlanetFounds = (await getAllPlanets()).length;
        console.log(`${countPlanetFounds} habitable planets founds`);
        resolve();
      });
  });
}

async function getAllPlanets() {
  //it will find all the planets inside the document
  return await planets.find({});
}

async function savePlantet(planet) {
  try {
    await planets.updateOne(
      {
        // insert + update = upsert
        //first case - finding all the planets that matches the current planet
        keplerName: planet.kepler_name,
      },
      {
        //second case - if does exists, wont change nothing
        keplerName: planet.kepler_name,
      },
      {
        //third case - if exists, add the new planet
        upsert: true,
      }
    );
  } catch (error) {
    console.error(`Could not save planet ${planet}`);
  }
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
};
