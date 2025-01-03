require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const router = require("./code/router/router");
const connectdb = require("./code/mongodb_server/mongodb");

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);

connectdb().then(() => {
  app.listen(port, () => {
    console.log(`server is running at ${port}`);
  });
});
