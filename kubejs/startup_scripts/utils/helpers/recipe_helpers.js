// priority: 1000

/**
 * https://github.com/GregTechCEu/GregTech-Modern/blob/v1.6.4-1.20.1/src/main/java/com/gregtechceu/gtceu/data/recipe/misc/RecyclingRecipes.java#L424
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
 * https://github.com/GregTechCEu/GregTech-Modern/blob/v1.6.4-1.20.1/src/main/java/com/gregtechceu/gtceu/data/recipe/misc/RecyclingRecipes.java#L389
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

// breaks components down into their base materials
global.getComponentTotal = (components) => {
  const componentRecycleCount = global.componentRecycleCount;
  const length = components.length;
  const totalCounts = {
      primCount: 0,
      cableCount: 0,
      secCount: 0,
      tertCount: 0
  }
  const block = { 
      primBlock: false,
      cableBlock: false,
      secBlock: false,
      tertBlock: false
  }

  // adds all sent component ingredients together
  let component; 
  for (let x=0; x<=length; x++) {
      component = componentRecycleCount[components[x]]
      totalCounts.primCount += component.primCount;
      totalCounts.cableCount += component.cableCount;
      totalCounts.secCount += component.secCount;
      totalCounts.tertCount += component.tertCount;
  }

  // checks if the value should be sent in block form
  if (totalCounts.primCount > 64) {
      totalCounts.primCount = Math.trunc(totalCounts.primCount / 9);
      block.primBlock = true;
  }
  if (totalCounts.cableCount > 64) {
      totalCounts.cableCount = Math.trunc(totalCounts.cableCount / 9);
      block.cableBlock = true;
  }
  if (totalCounts.secCount > 64) {
      totalCounts.secCount = Math.trunc(totalCounts.secCount / 9);
      block.secBlock = true;
  }
  if (totalCounts.tertCount > 64) {
      totalCounts.tertCount = Math.trunc(totalCounts.tertCount / 9);
      block.tertBlock = true;
  }
  
  return {
    endCount: totalCounts,
    blockBool: block
  };
}