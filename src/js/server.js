const express = require("express");
const app = express();
const actionRouter = require("./routes/Action");
const actionTypeRouter = require("./routes/ActionType");

app.use(express.json());
app.use("/action", actionRouter);
app.use("/actinotype", actionTypeRouter);

module.exports = app;
