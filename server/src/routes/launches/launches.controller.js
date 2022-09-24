const { launches } = require("../../models/launches.model");

function getAllLaunches(req, res) {
  //returning an array from launches
  return res.status(200).json(Array.from(launches.values()));
}

module.exports = getAllLaunches;
