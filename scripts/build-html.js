const fs = require("fs");
const path = require("path");
const Hanldebars = require("handlebars");

const seattleData = require(path.join(__dirname, "../data/seattle-aqi.json"))
  .data;
const corvallisData = require(path.join(
  __dirname,
  "../data/corvallis-aqi.json"
)).data;
const dataForTemplate = {
  seattle: {
    aqi: seattleData.aqi,
    attributions: seattleData.attributions,
    updatedAt: seattleData.time.iso,
  },
  corvallis: {
    aqi: corvallisData.aqi,
    attributions: seattleData.attributions,
    updatedAt: seattleData.time.iso,
  },
};

const template = fs.readFileSync(
  path.join(__dirname, "../templates/aqi-hb.html"),
  { encoding: "utf8", flag: "r" }
);

const buildHTML = Hanldebars.compile(template);
const html = buildHTML(dataForTemplate);

fs.writeFileSync(path.join(__dirname, "../docs/index.html"), html);
