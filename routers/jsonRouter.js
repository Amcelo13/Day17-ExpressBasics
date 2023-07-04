const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.json({
    id: 12,
    name: "Bhavdeep",
    place: "CHD",
  });
});

// Params concept
router.get("/json1/:id/:name", function (req, res) {
  const id = req.params.id;
  const name = req.params.name;

  try {
    if (id === "3") {
      return res.status(200).send(`All good with id ${id} and name ${name}`);
    }
    throw err;
  } catch (err) {
    res.statusMessage = "Not a valid ID searched";
    return res.status(204).end();
  }
});
module.exports = router;
