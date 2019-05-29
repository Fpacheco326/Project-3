const router = require("express").Router();
const memberRoutes = require("./members");

router.use("/member", memberRoutes);

module.exports = router;
