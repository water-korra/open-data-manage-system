const express = require("express");
const ActionController = require("../controllers/action");
const ActionRouter = express.Router();

ActionRouter.route("/")
  .get(ActionController.getAction)
  .post(ActionController.createAction);

ActionRouter.route("/:id")
  .get(ActionController.getAction)
  .delete(ActionController.deleteAction)
  .patch(ActionController.updateAction);

module.exports = ActionRouter;
