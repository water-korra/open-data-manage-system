"use strict";

const action = require("../models/action");

exports.getAllAction = async (req, res) => {
  try {
    const actions = await action.findAll();
    return res.json(actions);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.createAction = async (req, res) => {
  try {
    const actions = await action.create(req.body);

    return res.json(actions);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.getAction = async (req, res) => {
  try {
    const id = req.params.id;
    const actions = await action.findOne({
      where: {
        id,
      },
    });
    return res.json(actions);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.updateAction = async (req, res) => {
  try {
    const id = req.params.id;
    const actions = await action.findOne({
      where: {
        id,
      },
    });
    actions.update(req.body);
    actions.save();
    return res.json(actions);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.deleteAction = async (req, res) => {
  try {
    const id = req.params.id;
    const actions = await action.destroy({
      where: {
        id,
      },
    });
    return res.json(actions);
  } catch (e) {
    return res.json({ message: e.message });
  }
};
