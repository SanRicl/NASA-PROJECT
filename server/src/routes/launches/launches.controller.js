const { getAllLaunches, addNewLaunch } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  //returning an array from launches
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;

  launch.launchDate = new Date(launch.launchDate);

  addNewLaunch(launch);
  //201 - Created
  return res.status(201).json(launch);
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch };
