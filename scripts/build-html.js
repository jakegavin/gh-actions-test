const fs = require("fs");
const path = require("path");

const seattleData = require(path.join(__dirname, "../data/seattle-aqi.json"))
  .data;
const corvallisData = require(path.join(
  __dirname,
  "../data/corvallis-aqi.json"
)).data;

const html = `
<html>
  <body>
    <h3>Air Quality</h3>
    <div>Seattle: ${seattleData.aqi}</div>
    <div>
      Attributions: ${seattleData.attributions
        .map((source) => `<a href="${source.url}">${source.name}</a>`)
        .join(", ")}
    </div>
    <br/>
    <div>Corvallis: ${corvallisData.aqi}</div>
    <div>
      Attributions: ${corvallisData.attributions
        .map((source) => `<a href="${source.url}">${source.name}</a>`)
        .join(", ")}
    </div>
  </body>
</html>
`;

fs.writeFileSync(path.join(__dirname, "../docs/index.html"), html);
