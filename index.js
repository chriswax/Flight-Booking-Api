const express = require("express");
const { json } = require("express");

const flight = require("./routes/flightRoute");

const app = express();

app.use(json());

app.use("/flight", flight);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Zuri Training")
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
