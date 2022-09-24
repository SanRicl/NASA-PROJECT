const { getAllLaunches } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  //returning an array from launches
  return res.status(200).json(getAllLaunches);
}

module.exports = { httpGetAllLaunches };
