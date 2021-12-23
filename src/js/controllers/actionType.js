"use strict";

const actionType = require("../models/actionType");

exports.getAllActionTypes = async (req, res) => {
  try {
    const actionTypes = await actionType.findAll();
    return res.json(actionTypes);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.createActionType = async (req, res) => {
  try {
    const actionTypes = await actionType.create(req.body);

    return res.json(actionTypes);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.getActionType = async (req, res) => {
  try {
    const id = req.params.id;
    const actionTypes = await actionType.findOne({
      where: {
        id,
      },
    });
    return res.json(actionTypes);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.updateActionType = async (req, res) => {
  try {
    const id = req.params.id;
    const actionTypes = await actionType.findOne({
      where: {
        id,
      },
    });
    actionTypes.update(req.body);
    actionTypes.save();
    return res.json(actionTypes);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.deleteActionType = async (req, res) => {
  try {
    const id = req.params.id;
    const actionTypes = await actionType.destroy({
      where: {
        id,
      },
    });
    return res.json(actionTypes);
  } catch (e) {
    return res.json({ message: e.message });
  }
};
