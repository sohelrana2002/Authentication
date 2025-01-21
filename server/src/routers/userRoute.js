const express = require("express");
const router = express.Router();
const jwtAuthMiddleware = require("../middlewares/jwtAuthMiddleware");
const authorizedRoles = require("../middlewares/authorizedRoles");

router
  .route("/admin")
  .get(jwtAuthMiddleware, authorizedRoles("admin"), async (req, res) => {
    res.status(201).json({
      message: "Welcome to admin route",
    });
  });

router
  .route("/manager")
  .get(
    jwtAuthMiddleware,
    authorizedRoles("admin", "manager"),
    async (req, res) => {
      res.status(201).json({
        message: "Welcome to manager route",
      });
    }
  );
router
  .route("/user")
  .get(
    jwtAuthMiddleware,
    authorizedRoles("admin", "manager", "user"),
    async (req, res) => {
      res.status(201).json({
        message: "Welcome to user route",
      });
    }
  );

module.exports = router;
