const router = require("express").Router();
const memberController = require("../../controllers/memberController");

// Matches with "/api/member"
router.route("/")
  .get(memberController.findAll)
  .post(memberController.create);

// Matches with "/api/member/:id"
router
  .route("/:id")
  .get(memberController.findById)
  .put(memberController.update)
  .delete(memberController.remove);

module.exports = router;
