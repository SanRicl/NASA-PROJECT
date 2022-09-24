const { getAllLaunches, addNewLaunch } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  //returning an array from launches
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.destination
  ) {
    //400 status - Bad Request - something is invalid
    return res.status(400).json({
      error: "Missing required launch property.",
    });
  }

  launch.launchDate = new Date(launch.launchDate);
  //When we set a date, Javascript transform it into a number format. So, if the data passed through the input wasn't a number, it will be a NaN, and if this is true, it won't permit you to save the data and it will throw an error.
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid launch date",
    });
  }
  addNewLaunch(launch);

  //201 - Created
  return res.status(201).json(launch);
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch };
