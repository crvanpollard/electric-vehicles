const layers = {
  countyOutline: {
    id: "county-outline",
    type: "line",
    source: "census",
    "source-layer": "county",
    paint: {
      "line-width": 2.5,
      "line-color": "#505a5e",
    },
    filter: ["==", "DVRPC", "Yes"],
  },
  muniOutline: {
    id: "municipality-outline",
    type: "line",
    source: "census",
    "source-layer": "municipalities",
    paint: {
      "line-width": 0.5,
      "line-color": "#4a5c64",
    },
    filter: ["==", "DVRPC", "Yes"],
  },
  // add default layers here
};

export default layers;
