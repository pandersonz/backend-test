// "use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const useragent = require("express-useragent");
const http = require("http");
const { runQuery } = require("./database/utils.js");
const ProductoRouter = require("./producto/producto.router.js");

const app = express();
const server = http.createServer(app);

app.use(useragent.express());
app.use(helmet());
app.disable("x-powered-by");
app.use(
  cors({
    origin: ["http://localhost:3000", "https://localhost:3000"],
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use("/api/producto", ProductoRouter);

module.exports.start = async () => {
  try {
    server.listen(8930, async () => {
      console.info(`server running at port: ${8930}`);
    });
  } catch (e) {
    console.error(e);
  }
};
