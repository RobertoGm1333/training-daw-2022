'use strict'

const assert = require('assert').strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];

function iterateSimple() {
    for (let pilot of pilots) {
        console.log(pilot);
    }
}

function iterateForEach() {
    pilots.forEach(function (pilot) {
        console.log(pilot);
    });
}

function mapIds() {
    // let ids = []

    // for (let pilot of pilots) {
    //     console.log(pilot);
    //     ids.push(pilot.id);
    // }

    // return ids

    return pilots.map((value) => value.id);
}

function rebels() {
  return pilots
            .filter((value) => value.faction === "Rebels")
            // .map((value) =>value.id)
            // .filter((value) => value > 5)
}

function totalFaction(faction) {
    return pilots
    .filter((value) => value.faction === faction)
    .length
}

function avgYears(faction) {
    let selectedFaction = pilots
    .filter((value) => value.faction === faction)

    return selectedFaction.reduce((pv, cv) => pv + cv.years, 0) / selectedFaction.length
}

iterateSimple();
iterateForEach();

try {
  assert.deepStrictEqual(mapIds(), [2, 8, 40, 66])
  assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]])
  assert.deepStrictEqual(totalFaction('Rebels'), 2)
  assert.deepStrictEqual(avgYears('Rebels'), 22.5)
  assert.deepStrictEqual(avgYears('Empire'), 25)
  console.log("All tests passed!");
} catch (error) {
  console.error(error);
}
