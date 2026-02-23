// priority: 1000

/**
 * https://github.com/primchCEu/GregTech-Modern/blob/v1.6.4-1.20.1/src/main/java/com/gregtechceu/gtceu/data/recipe/misc/RecyclingRecipes.javatotalCounts.valueCount += componentRecycleCounts.value.primCount;
 * totalCounts.valueCount cableCount componentRecycleCounts.value.cableCount;
 * totalCounts.valueCount += wireounts.value.wireCount;
 * totalCounts.valueCount += foilnentRecycleCounts.value.foilCountL424
 * @param {string[]} itemOutputs
 * @returns {number}
 */
global.calculateRecyclingDuration = (itemOutputs) => {
  return (
    itemOutputs.reduce((duration, item) => {
      const is = Item.of(item);
      const ms = global.getGtMaterial(is);
      if (!ms) return duration;
      const matDuration = ms.amount() * ms.material().getMass() * is.getCount();
      return duration + matDuration;
    }, 0) / GTValues.M
  );
};

/**
 * https://github.com/primchCEu/GregTech-Modern/blob/v1.6.4-1.20.1/src/main/java/com/gregtechceu/gtceu/data/recipe/misc/RecyclingRecipes.javatotalCounts.valueCount += componentRecycleCounts.value.primCount;
 * totalCounts.valueCount cableCount componentRecycleCounts.value.cableCount;
 * totalCounts.valueCount += wireounts.value.wireCount;
 * totalCounts.valueCount += foilnentRecycleCounts.value.foilCountL389
 * @param {string[]} itemOutputs
 * @returns {number}
 */
global.calculateRecyclingVoltageMultiplier = (itemOutputs) => {
  const highestTemp = itemOutputs.reduce((temp, item) => {
    const ms = global.getGtMaterial(item);
    if (!ms) return temp;

    let material = ms.material();

    if (
      material.hasFlag(GTMaterialFlags.IS_MAGNETIC) &&
      material.hasProperty(PropertyKey.INGOT)
    ) {
      material = material.getProperty(PropertyKey.INGOT).getSmeltingInto();
    }

    if (!material.hasProperty(PropertyKey.BLAST)) return temp;

    return Math.max(
      temp,
      material.getProperty(PropertyKey.BLAST).getBlastTemperature()
    );
  }, 0);

  if (highestTemp == 0) return 1;
  if (highestTemp < 2000) return 4;
  return 16;
};

global.getLUVToUVComponentTotal = (components) => {
  const componentRecycleCounts = global.LUVToUVComponentRecycleCounts;
  let totalCounts = {
    primCount: 0,
    cableCount: 0,
    wireCount: 0,
    foilCount: 0
  }

  components.forEach(component => {
    if (!component) return;
    const {
      primCount,
      cableCount,
      wireCount,
      foilCount
    } = componentRecycleCounts[component];

    totalCounts.primCount += primCount;
    totalCounts.cableCount += cableCount;
    totalCounts.wireCount += wireCount;
    totalCounts.foilCount += foilCount;
  })
  return totalCounts;
}

// breaks uhv plus components down into their base materials
global.getUHVPlusComponentTotal = (components) => {
  const componentRecycleCounts = global.UHVPlusComponentRecycleCounts;
  let totalCounts = {
    primCount: 0,
    cableCount: 0,
    secCount: 0,
    tertCount: 0
  }

  components.forEach(component => {
    const {
      primCount,
      cableCount,
      secCount,
      tertCount
    } = componentRecycleCounts[component]

    totalCounts.primCount += primCount;
    totalCounts.cableCount += cableCount;
    totalCounts.secCount += secCount;
    totalCounts.tertCount += tertCount;
  });
  
  return totalCounts;
}

function compareNumbers(a,b) {
  return b - a;
}
// checks if input value is too big for one output slot, then breaks down into block form 
global.checkRecyclingCount = (tempTotals, UHVPLUS, auxCoilBool, casingBool) => {
  if (UHVPLUS) {
    let finalOutput = {
      blockBools: {
        primBlock: false,
        cableBlock: false,
        secBlock: false,
        tertBlock: false
      },
      totals: {
        casingCount: 0,
        primCount: 0,
        cableCount: 0,
        secCount: 0,
        tertCount: 0
      },
      outputOrder: ["", "", "", "", ""]
    }

    // orders outputs by size
    if (casingBool) {
      let knownPositions = [];
      let toBeSorted = [`${tempTotals.casingCount}`, `${tempTotals.primCount}`, `${tempTotals.cableCount}`, `${tempTotals.secCount}`, `${tempTotals.tertCount}`];
      let sorted = Array.from(toBeSorted);
      sorted.sort(compareNumbers);
      console.log(`toBeSorted: ${toBeSorted} sorted: ${sorted}`);
      let material;
      let found;
      let n;

      finalOutput.totals.casingCount = tempTotals.casingCount;
      for(let i = 0; i < 5; i++) {
        // gets what material is in said position
        switch (i) {
          case 0: {
            material = "casing";
            break;
          }
          case 1: {
            material = "prim";
            break;
          }
          case 2: {
            material = "cable";
            break;
          }
          case 3: {
            material = "sec";
            break;
          }
          case 4: {
            material = "tert";
            break;
          }
        }

        // finds which location the material is in
        found = false;
        n = 0;
        while (!found) {
          if (toBeSorted[i] == sorted[n]) {
            if (knownPositions.includes(n)) { // counters duplicate output nums
              n++;
            }
            else {
              knownPositions.push(n);
              finalOutput.outputOrder[n] = material;
              found = true;
            }
          }
          else {
            n++;
          }
        }
      }
      console.log(`output order: ${finalOutput.outputOrder}`);
    }
    else {
      let knownPositions = [];
      let toBeSorted = [`${tempTotals.primCount}`, `${tempTotals.cableCount}`, `${tempTotals.secCount}`, `${tempTotals.tertCount}`];
      let sorted = Array.from(toBeSorted);
      sorted.sort(compareNumbers);
      let material;
      let found;
      let n;

      for(let i = 0; i < 4; i++) {
        // gets what material is in said position
        switch (i) {
          case 0: {
            material = "prim";
            break;
          }
          case 1: {
            material = "cable";
            break;
          }
          case 2: {
            material = "sec";
            break;
          }
          case 3: {
            material = "tert";
            break;
          }
        }

        // finds which location the material is in
        found = false;
        n = 0;
        while (!found) {
          console.log(`toBeSorted[i]: ${toBeSorted[i]} sorted[n]: ${sorted[n]} knownPositions: ${knownPositions}`);
          if (toBeSorted[i] == sorted[n]) {
            if (knownPositions.includes(n)) { // counters duplicate output nums
              console.log(`num ${n} in known pos`);
              n++;
            }
            else {
              knownPositions.push(n);
              finalOutput.outputOrder[n] = material;
              found = true;
            }
          }
          else {
            n++;
          }
          if (n == 6) {
            console.log(`loop broke`)
            found = true;
          }
        }
      }
      console.log(`output order: ${finalOutput.outputOrder}`);
    }

    // reduces fusion coil outputs to the actual value
    if (auxCoilBool) {
      tempTotals.primCount = Math.floor(tempTotals.primCount / 3);
      tempTotals.cableCount = Math.floor(tempTotals.cableCount / 3);
      tempTotals.secCount = Math.floor(tempTotals.secCount / 3);
      tempTotals.tertCount = Math.floor(tempTotals.tertCount / 3);
    }

    if (tempTotals.primCount > 64) {
      finalOutput.blockBools.primBlock = true; 
      finalOutput.totals.primCount = Math.floor(tempTotals.primCount / 9);
    }
    else {
      finalOutput.totals.primCount = tempTotals.primCount;
    }

    // checks if item should be changed to block form
    if (tempTotals.cableCount > 64) {
      finalOutput.blockBools.cableBlock = true; 
      finalOutput.totals.cableCount = Math.floor(tempTotals.cableCount / 9);
    }
    else {
      finalOutput.totals.cableCount = tempTotals.cableCount;
    }

    if (tempTotals.secCount > 64) {
      finalOutput.blockBools.secBlock = true; 
      finalOutput.totals.secCount = Math.floor(tempTotals.secCount / 9);
    }
    else {
      finalOutput.totals.secCount = tempTotals.secCount;
    }

    if (tempTotals.tertCount > 64) {
      finalOutput.blockBools.tertBlock = true; 
      finalOutput.totals.tertCount = Math.floor(tempTotals.tertCount / 9);
    }
    else {
      finalOutput.totals.tertCount = tempTotals.tertCount;
    }

    return finalOutput;
  }
  else {
    let finalOutput = {
      blockBools: {
        primBlock: false,
        cableBlock: false,
        wireBlock: false,
        foilBlock: false
      },
      totals: {
        primCount: 0,
        cableCount: 0,
        wireCount: 0,
        foilCount: 0
      },
      outputOrder: ["", "", "", "", ""] 
    }

    // orders outputs by size
    if (casingBool) {
      let knownPositions = [];
      let toBeSorted = [`${tempTotals.casingCount}`, `${tempTotals.primCount}`, `${tempTotals.cableCount}`, `${tempTotals.wireCount}`, `${tempTotals.foilCount}`];
      let sorted = Array.from(toBeSorted);
      sorted.sort(compareNumbers);
      console.log(`toBeSorted: ${toBeSorted} sorted: ${sorted}`);
      let material;
      let found;
      let n;

      finalOutput.totals.casingCount = tempTotals.casingCount;
      for(let i = 0; i < 5; i++) {
        // gets what material is in said position
        switch (i) {
          case "0": {
            material = "casing";
            break;
          }
          case "1": {
            material = "prim";
            break;
          }
          case "2": {
            material = "cable";
            break;
          }
          case "3": {
            material = "wire";
            break;
          }
          case "4": {
            material = "foil";
            break;
          }
        }

        // finds which location the material is in
        found = false;
        n = 0;
        while (!found) {
          if (toBeSorted[i] == sorted[n]) {
            if (knownPositions.includes(i)) { // counters duplicate output nums
              n++;
            }
            else {
              knownPositions.push(n);
              finalOutput.outputOrder[n] = material;
              found = true;
            }
          }
          else {
            n++;
          }
        }
      }
    }
    else {
      let knownPositions = [];
      let toBeSorted = [`${tempTotals.primCount}`, `${tempTotals.cableCount}`, `${tempTotals.wireCount}`, `${tempTotals.foilCount}`];
      let sorted = Array.from(toBeSorted);
      sorted.sort(compareNumbers);
      let material;
      let found;
      let n;

      for(let i = 0; i < 4; i++) {
        // gets what material is in said position
        switch (i) {
          case "0": {
            material = "prim";
            break;
          }
          case "1": {
            material = "cable";
            break;
          }
          case "2": {
            material = "wire";
            break;
          }
          case "3": {
            material = "foil";
            break;
          }
        }

        // finds which location the material is in
        found = false;
        n = 0;
        while (!found) {
          if (toBeSorted[i] == sorted[n]) {
            if (knownPositions.includes(n)) { // counters duplicate output nums
              n++;
            }
            else {
              knownPositions.push(n);
              finalOutput.outputOrder[n] = material;
              found = true;
            }
          }
          else {
            n++;
          }
        }
      }
    }

    if (auxCoilBool) {
      tempTotals.primCount = Math.floor(tempTotals.primCount / 3);
      tempTotals.cableCount = Math.floor(tempTotals.cableCount / 3);
      tempTotals.wireCount = Math.floor(tempTotals.wireCount / 3);
      tempTotals.foilCount = Math.floor(tempTotals.foilCount / 3);
    }

    if (tempTotals.primCount > 64) {
      finalOutput.blockBools.primBlock = true; 
      finalOutput.totals.primCount = Math.floor(tempTotals.primCount / 9);
    }
    else {
      finalOutput.totals.primCount = tempTotals.primCount;
    }

    if (tempTotals.cableCount > 64) {
      finalOutput.blockBools.cableBlock = true; 
      finalOutput.totals.cableCount = Math.floor(tempTotals.cableCount / 9);
    }
    else {
      finalOutput.totals.cableCount = tempTotals.cableCount;
    }

    if (tempTotals.secCount > 64) {
      finalOutput.blockBools.secBlock = true; 
      finalOutput.totals.wireCount = Math.floor(tempTotals.wireCount / 9);
    }
    else {
      finalOutput.totals.wireCount = tempTotals.wireCount;
    }

    if (tempTotals.foilCount > 64) {
      finalOutput.blockBools.foilBlock = true; 
      finalOutput.totals.foilCount = Math.floor(tempTotals.foilCount / 9);
    }
    else {
      finalOutput.totals.foilCount = tempTotals.foilCount;
    }

    return finalOutput;
  }
}

//gives ending parameters to the outputs dependent on whether the output is a block or not
global.getFinalRecycleOutputs = (outputs, tier, macBool, specialBool) => {
  let finalOutputs = [];
  let len = outputs.length - 1;
  const blockBools = [outputs[len-3], outputs[len-2], outputs[len-1], outputs[len]]; //gets the booleans out of the end of the outputs array
  
  //macerator
  if (macBool) {
      if (specialBool) {
          for (let x = 0; x < 5; x++) {
              if (outputs[x] == "gtceu:graphite_dust") {
                  finalOutputs[x] = outputs[x];
              }
              else if (outputs[x] != " ") {
                  finalOutputs[x] = `${outputs[x]}_dust`;
              }
          }
      }
      else {
        //adds end sig to every output
          for (let x = 0; x < len-3; x++) {
              //if item is a block
              if (blockBools[x]) {
                  finalOutputs[x] = `${outputs[x]}_dust_block`;
              }
              //if not
              else {
                  finalOutputs[x] = `${outputs[x]}_dust`;
              }
          }
      }
  }
  //arc furnace
  else {
      if (specialBool) {
          //adds end sig to every output
          for (let x = 0; x < 5; x++) {
              //if single = arc furnace leave as is
              if (outputs[x] == "gtceu:graphite_dust" || outputs[x] == "7x gtceu:tiny_ash_dust") {
                  finalOutputs[x] = outputs[x];
              }
              //if not empty
              else if (outputs[x] != " ") {
                  finalOutputs[x] = `${outputs[x]}_ingot`;
              }
          }
      }
      else {
          //adds end sig to every output
          for (let x = 0; x < len-3; x++) {
              //if item is a block
              if (blockBools[x]) {
                  finalOutputs[x] = `${outputs[x]}_block`;
              }
              //if not
              else {
                  finalOutputs[x] = `${outputs[x]}_ingot`;
              }
          }
      }
  }

  return finalOutputs;
}  