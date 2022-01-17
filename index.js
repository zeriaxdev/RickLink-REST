const app = require("express")();

const port = process.env.PORT || 3000;
const rickFile = require("./links.json");

app.get("/", (req, res) => {
  res.json(rickFile.data);

  req.on("error", (err) => {
    console.log(err);
  });
});

app.listen(port, () => {
  console.log(`RickLink is running on port ${port}!`);
});
