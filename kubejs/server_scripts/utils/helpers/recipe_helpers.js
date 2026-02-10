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
  let totalCounts = {
    primCount: 0,
    cableCount: 0,
    secCount: 0,
    tertCount: 0
  }


  // adds all sent component ingredients together
  components.forEach(component => {
    console.log(`component: ${component}`);
    switch (component) {
      case "sensor": {
        console.log(`sensor details: ${componentRecycleCount.sensor.primCount}, ${componentRecycleCount.sensor.cableCount}, ${componentRecycleCount.sensor.secCount}, ${componentRecycleCount.sensor.tertCount}`);
        totalCounts.primCount += componentRecycleCount.sensor.primCount;
        totalCounts.cableCount += componentRecycleCount.sensor.cableCount;
        totalCounts.secCount += componentRecycleCount.sensor.secCount;
        totalCounts.tertCount += componentRecycleCount.sensor.tertCount;
        break;
      }
      case "emitter": {
        console.log(`emitter details: ${componentRecycleCount.emitter.primCount}, ${componentRecycleCount.emitter.cableCount}, ${componentRecycleCount.emitter.secCount}, ${componentRecycleCount.emitter.tertCount}`);
        totalCounts.primCount += componentRecycleCount.emitter.primCount;
        totalCounts.cableCount += componentRecycleCount.emitter.cableCount;
        totalCounts.secCount += componentRecycleCount.emitter.secCount;
        totalCounts.tertCount += componentRecycleCount.emitter.tertCount;
        break;
      }
      case "field_generator": {
        console.log(`field_generator details: ${componentRecycleCount.field_generator.primCount}, ${componentRecycleCount.field_generator.cableCount}, ${componentRecycleCount.field_generator.secCount}, ${componentRecycleCount.field_generator.tertCount}`);
        totalCounts.primCount += componentRecycleCount.field_generator.primCount;
        totalCounts.cableCount += componentRecycleCount.field_generator.cableCount;
        totalCounts.secCount += componentRecycleCount.field_generator.secCount;
        totalCounts.tertCount += componentRecycleCount.field_generator.tertCount;
        break;
      }
      case "robot_arm": {
        console.log(`robot_arm details: ${componentRecycleCount.robot_arm.primCount}, ${componentRecycleCount.robot_arm.cableCount}, ${componentRecycleCount.robot_arm.secCount}, ${componentRecycleCount.robot_arm.tertCount}`);
        totalCounts.primCount += componentRecycleCount.robot_arm.primCount;
        totalCounts.cableCount += componentRecycleCount.robot_arm.cableCount;
        totalCounts.secCount += componentRecycleCount.robot_arm.secCount;
        totalCounts.tertCount += componentRecycleCount.robot_arm.tertCount;
        break;
      }
      case "electric_piston": {
        console.log(`electric_piston details: ${componentRecycleCount.electric_piston.primCount}, ${componentRecycleCount.electric_piston.cableCount}, ${componentRecycleCount.electric_piston.secCount}, ${componentRecycleCount.electric_piston.tertCount}`);
        totalCounts.primCount += componentRecycleCount.electric_piston.primCount;
        totalCounts.cableCount += componentRecycleCount.electric_piston.cableCount;
        totalCounts.secCount += componentRecycleCount.electric_piston.secCount;
        totalCounts.tertCount += componentRecycleCount.electric_piston.tertCount;
        break;
      }
      case "conveyor_module": {
        console.log(`conveyor_module details: ${componentRecycleCount.conveyor_module.primCount}, ${componentRecycleCount.conveyor_module.cableCount}, ${componentRecycleCount.conveyor_module.secCount}, ${componentRecycleCount.conveyor_module.tertCount}`);
        totalCounts.primCount += componentRecycleCount.conveyor_module.primCount;
        totalCounts.cableCount += componentRecycleCount.conveyor_module.cableCount;
        totalCounts.secCount += componentRecycleCount.conveyor_module.secCount;
        totalCounts.tertCount += componentRecycleCount.conveyor_module.tertCount;
        break;
      }
      case "fluid_regulator": {
        console.log(`fluid_regulator details: ${componentRecycleCount.fluid_regulator.primCount}, ${componentRecycleCount.fluid_regulator.cableCount}, ${componentRecycleCount.fluid_regulator.secCount}, ${componentRecycleCount.fluid_regulator.tertCount}`);
        totalCounts.primCount += componentRecycleCount.fluid_regulator.primCount;
        totalCounts.cableCount += componentRecycleCount.fluid_regulator.cableCount;
        totalCounts.secCount += componentRecycleCount.fluid_regulator.secCount;
        totalCounts.tertCount += componentRecycleCount.fluid_regulator.tertCount;
        break;
      }
      case "electric_pump": {
        console.log(`electric_pump details: ${componentRecycleCount.electric_pump.primCount}, ${componentRecycleCount.electric_pump.cableCount}, ${componentRecycleCount.electric_pump.secCount}, ${componentRecycleCount.electric_pump.tertCount}`);
        totalCounts.primCount += componentRecycleCount.electric_pump.primCount;
        totalCounts.cableCount += componentRecycleCount.electric_pump.cableCount;
        totalCounts.secCount += componentRecycleCount.electric_pump.secCount;
        totalCounts.tertCount += componentRecycleCount.electric_pump.tertCount;
        break;
      }
      case "electric_motor": {
        console.log(`electric_motor details: ${componentRecycleCount.electric_motor.primCount}, ${componentRecycleCount.electric_motor.cableCount}, ${componentRecycleCount.electric_motor.secCount}, ${componentRecycleCount.electric_motor.tertCount}`);
        totalCounts.primCount += componentRecycleCount.electric_motor.primCount;
        totalCounts.cableCount += componentRecycleCount.electric_motor.cableCount;
        totalCounts.secCount += componentRecycleCount.electric_motor.secCount;
        totalCounts.tertCount += componentRecycleCount.electric_motor.tertCount;
        break;
      }
    }
    console.log(`total counts: ${totalCounts.primCount}, ${totalCounts.cableCount}, ${totalCounts.secCount}, ${totalCounts.tertCount}`);
  });
  
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

  return [blocksBools, values];
}