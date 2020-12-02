require("dotenv").config();
const app = require("./app");
const { PORT } = require("./config");

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}.`)
);
