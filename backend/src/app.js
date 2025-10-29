const express = require("express");

const { connectDb } = require("../configs/database");
const app = express();

connectDb()
  .then(() => {
    app.listen(4321, () => {
      console.log("Server is running...");
    });
  })
  .catch(() => {
    console.log("Server is not running...");
  });
