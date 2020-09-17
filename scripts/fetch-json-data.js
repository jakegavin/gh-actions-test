const fetch = require("node-fetch");
const fs = require("fs");

const waqiToken = process.env.WAQI_TOKEN;

if (!waqiToken) {
  throw Error("Missing WAQI token.");
}

fetch(`https://api.waqi.info/feed/seattle/?token=${waqiToken}`)
  .then((response) => response.json())
  .then((data) => {
    const json = JSON.stringify(data, null, "\t");
    fs.writeFileSync("./data/seattle-aqi.json", json);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

fetch(`https://api.waqi.info/feed/corvallis/?token=${waqiToken}`)
  .then((response) => response.json())
  .then((data) => {
    const json = JSON.stringify(data, null, "\t");
    fs.writeFileSync("./data/corvallis-aqi.json", json);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
