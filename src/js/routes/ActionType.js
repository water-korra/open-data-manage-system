const express = require("express");
const ActionTypeController = require("../controllers/actionType");
const ActionTypeRouter = express.Router();

ActionTypeRouter.route("/")
  .get(ActionTypeController.getAction)
  .post(ActionTypeController.createAction);

ActionTypeRouter.route("/:id")
  .get(ActionTypeController.getAction)
  .delete(ActionTypeController.deleteAction)
  .patch(ActionTypeController.updateAction);

module.exports = ActionTypeRouter;
