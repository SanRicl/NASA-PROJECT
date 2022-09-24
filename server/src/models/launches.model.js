const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explores IS1",
  lauchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  costumers: ["NASA", "ZTM"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

//addNewLauch will receive the data from the client, then will take the latestFlightNumber, that was setted by default "100" and increase +1. This will be the key or the number of the flight that will indetify the actual flight that is beeing added. Than it will be setted with the latestFlightNumber lauches.set() with the informations bellow inside the function. Success, Upcoming and customers values, will always be setted by default. Only it will be added the informations from the input that corresponds to the fields: mission, rocket, launchDate and destination.

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ['Zero to Mastery', 'NASA'],
      flightNumber: latestFlightNumber,
    })
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
