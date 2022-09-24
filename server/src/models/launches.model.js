const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explores IS1",
  louchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  costumers: ["NASA", "ZTM"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunches,
};
