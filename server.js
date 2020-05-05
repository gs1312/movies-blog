const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to DataBase
connectDB();

//Route Files
const MoviesBlog = require("./router/MoviesBlog");
const User = require("./router/User");

const app = express();
app.use(cors());
//Body Parser
app.use(express.json());

//Midleware
app.use(morgan("dev"));

//Mount Routers
app.use("/", MoviesBlog);
app.use("/", User);

app.get("/ok", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server Running on port : ${PORT}`);
});

//Handle Unhandled Promise Rejection
process.on("unhandledRejection", (err, Promise) => {
  console.log(`Error:${err.message}`);
  //Close Server and Exit process
  server.close(() => process.exit(1));
});
