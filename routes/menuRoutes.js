const express = require("express");
const router = express.Router();

const menuController = require("../controllers/menuController");

router.get("/menus", menuController.getAllmenus);

module.exports = router;
