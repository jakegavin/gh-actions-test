const fetch = require("node-fetch");
const fs = require("fs");

fetch("https://swapi.dev/api/people/")
  .then((response) => response.json())
  .then((data) => {
    const json = JSON.stringify(data, null, "\t");
    throw Error("test");
    fs.writeFileSync("./data/swapi.json", json);
    j;
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
