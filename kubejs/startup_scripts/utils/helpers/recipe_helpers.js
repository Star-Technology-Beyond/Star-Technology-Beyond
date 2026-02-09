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

  // adds all sent component ingredients together
  for (let x=0; x<=length; x++) {
      var component = componentRecycleCount[components[x]]
      totalCounts.primCount += component.primCount;
      totalCounts.cableCount += component.cableCount;
      totalCounts.secCount += component.secCount;
      totalCounts.tertCount += component.tertCount;
  }
  
  return totalCounts;
}

// checks if input value is too big for one output slot, then breaks down into block form (built for component recycling) 
global.checkComponentCount = (values) => {
  const blocksBools = {
    primBlock: false,
    cableBlock: false,
    secBlock: false,
    tertBlock: false
  }
  if (values.primCount > 64) {blocksBools.primBlock = true; values.primCount = Math.floor(values.primCount/9);};
  if (values.cableCount > 64) {blocksBools.cableBlock = true; values.cableCount = Math.floor(values.cableCount/9);}; 
  if (values.secCount > 64) {blocksBools.secBlock = true; values.secCount = Math.floor(values.secCount/9);};
  if (values.tertCount > 64) {blocksBools.tertBlock = true; values.tertCount = Math.floor(values.tertCount/9);};

  return (blocksBools, values);
}