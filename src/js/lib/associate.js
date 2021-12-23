const Action = require("../models/Action");
const ActionType = require("../models/ActionType");
const AvailableAction = require("../models/AvailableAction");
const AvailableFor = require("../models/AvailableFor");
const Category = require("../models/Category");
const DataFile = require("../models/DataFile");
const DataSet = require("../models/DataSet");
const Grant = require("../models/Grant");
const MetaDataKey = require("../models/MetaDataKey");
const MetaDataValue = require("../models/MetaDataValue");
const Role = require("../models/Role");
const State = require("../models/State");
const Type = require("../models/Type");
const User = require("../models/User");

const associate = () => {
  Category.hasMany(Category, {
    foreignKey: "category",
    sourceKey: "id",
  });

  Category.belongsTo(Category, {
    foreignKey: "category",
    as: "cat",
    targetKey: "id",
  });
  //
  MetaDataKey.hasMany(MetaDataKey, {
    foreignKey: "metadatakey",
    sourceKey: "id",
  });

  MetaDataKey.belongsTo(MetaDataKey, {
    foreignKey: "metadatakey",
    as: "met",
    targetKey: "id",
  });

  Type.hasMany(AvailableFor, {
    foreignKey: "type",
    sourceKey: "id",
  });

  AvailableFor.belongsTo(Type, {
    foreignKey: "type",
    as: "Type",
    targetKey: "id",
  });

  MetaDataKey.hasMany(AvailableFor, {
    foreignKey: "metadatakey",
    sourceKey: "id",
  });

  AvailableAction.belongsTo(MetaDataKey, {
    foreignKey: "metadatakey",
    as: "metK",
    targetKey: "id",
  });

  Role.hasMany(AvailableAction, {
    foreignKey: "role",
    sourceKey: "id",
  });

  AvailableAction.belongsTo(Role, {
    foreignKey: "role",
    as: "Role",
    targetKey: "id",
  });

  ActionType.hasMany(AvailableAction, {
    foreignKey: "actiontype",
    sourceKey: "id",
  });

  AvailableAction.belongsTo(ActionType, {
    foreignKey: "actiontype",
    as: "AT",
    targetKey: "id",
  });

  Category.hasMany(DataSet, {
    foreignKey: "category",
    sourceKey: "id",
  });

  DataSet.belongsTo(Category, {
    foreignKey: "category",
    as: "cat",
    targetKey: "id",
  });

  User.hasMany(Grant, {
    foreignKey: "user",
    sourceKey: "id",
  });

  Grant.belongsTo(User, {
    foreignKey: "user",
    as: "User",
    targetKey: "id",
  });

  Role.hasMany(Grant, {
    foreignKey: "role",
    sourceKey: "id",
  });

  Grant.belongsTo(Role, {
    foreignKey: "role",
    as: "Role",
    targetKey: "id",
  });

  ActionType.hasMany(Grant, {
    foreignKey: "actiontype",
    sourceKey: "id",
  });

  Grant.belongsTo(ActionType, {
    foreignKey: "actiontype",
    as: "AT",
    targetKey: "id",
  });

  DataSet.hasMany(Grant, {
    foreignKey: "dataset",
    sourceKey: "id",
  });

  Grant.belongsTo(DataSet, {
    foreignKey: "dataset",
    as: "ds",
    targetKey: "id",
  });

  State.hasMany(Action, {
    foreignKey: "state",
    soureKey: "id",
  });

  Action.belongsTo(State, {
    foreignKey: "state",
    as: "State",
    targetKey: "id",
  });

  ActionType.hasMany(Action, {
    foreignKey: "actiontype",
    sourceKey: "id",
  });

  Action.belongsTo(ActionType, {
    foreignKey: "actiontype",
    as: "AT",
    taretKey: "id",
  });

  Grant.hasMany(Action, {
    foreignKey: "grant",
    sourceKey: "id",
  });

  Action.belongsTo(Grant, {
    foreignKey: "grant",
    as: "Gr",
    targetKey: "id",
  });

  DataSet.hasOne(DataFile, {
    foreignKey: "dataset",
    sourceKey: "id",
  });

  DataFile.belongsTo(DataSet, {
    foreignKey: "dataset",
    as: "ds",
    targetKey: "id",
  });
  //
  MetaDataKey.hasMany(MetaDataValue, {
    foreignKey: "metadatakey",
    sourceKey: "id",
  });

  MetaDataValue.belongsTo(MetaDataKey, {
    foreignKey: "metadatakey",
    as: "mk",
    targetKey: "id",
  });

  DataSet.hasMany(MetaDataValue, {
    foreignKey: "dataset",
    sourceKey: "id",
  });

  MetaDataValue.belongsTo(DataSet, {
    foreignKey: "dataset",
    as: "dss",
    targetKey: "id",
  });

  Category.hasMany(MetaDataValue, {
    foreignKey: "category",
    sourceKey: "id",
  });

  MetaDataValue.belongsTo(Category, {
    foreignKey: "category",
    as: "cat",
    targetKey: "id",
  });

  DataFile.hasMany(MetaDataValue, {
    foreignKey: "datafile",
    sourceKey: "id",
  });

  MetaDataValue.belongsTo(DataFile, {
    foreignKey: "datafile",
    as: "df",
    targetKey: "id",
  });
};

module.exports = associate;
