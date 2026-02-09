global.not_hardmode(() => {
    ServerEvents.recipes(event => {
        const TIERS = [
            `uhv`, `uev`, `uiv`
        ]
        const SINGLEBLOCKS = [
            `electric_furnace`, `electric_blast_furnace`, `electric_smoker`, `alloy_smelter`, `arc_furnace`, `electrolyzer`, `polarizer`, 
            `turbo_charger`, `assembler`, `autoclave`, `bender`, `brewery`, `canner`, `centrifuge`, `chemical_bath`, `chemical_reactor`,
            `compressor`, `cutter`, `distillery`, `electromagnetic_separator`, `extractor`, `extruder`, `fermenter`, `fluid_heater`,
            `fluid_solidifier`, `forge_hammer`, `lathe`, `scanner`, `mixer`, `ore_washer`, `packer`, `laser_engraver`, `sifter`, 
            `thermal_centrifuge`, `wiremill`, `circuit_assembler`, `macerator`, `gas_collector`, `rock_crusher`
        ]

        function getSingleblockRecycleOutputs(singleblock, tier) {
            const singleComponents = global.componentMaterials;
            const componentRecycles = global.componentRecycles;
            const materials = {
                casing: ``,
                compPrim: ``,
                cable: ``,
                compSec: ``,
                compTert: ``,
                wire: ``,
                electrolyzWire: ``
            }

            switch(tier) {
                case `uhv`:
                    const CRuhv = componentRecycles.uhv;
                    materials.casing = `gtceu:neutronium`,
                    materials.compPrim = CRuhv.primMaterial,
                    materials.cable = CRuhv.cable,
                    materials.compSec = CRuhv.secMaterial,
                    materials.compTert = CRuhv.tertMaterial,
                    materials.wire = `gtceu:${singleComponents.uhv.materials.wire}`,
                    materials.electrolyzWire = `gtceu:${singleComponents.uhv.materials.electrolyzWire}`
                    break;
                case `uev`:
                    const CRuev = componentRecycles.uev;
                    materials.casing = `gtceu:mythrolic_alloy`,
                    materials.compPrim = CRuev.primMaterial,
                    materials.cable = CRuev.cable,
                    materials.compSec = CRuev.secMaterial,
                    materials.compTert = CRuev.tertMaterial
                    materials.wire = `gtceu:${singleComponents.uev.materials.wire}`,
                    materials.electrolyzWire = `gtceu:${singleComponents.uev.materials.electrolyzWire}`
                    break;
                case `uiv`:
                    const CRuiv = componentRecycles.uev;
                    materials.casing = `gtceu:chaotixic_alloy`,
                    materials.compPrim = CRuiv.primMaterial,
                    materials.cable = CRuiv.cable,
                    materials.compSec = CRuiv.secMaterial,
                    materials.compTert = CRuiv.tertMaterial
                    materials.wire = `gtceu:${singleComponents.uiv.materials.wire}`,
                    materials.electrolyzWire = `gtceu:${singleComponents.uiv.materials.electrolyzWire}`
                    break;
            }

            let blockBools = {
                primBlock: false,
                cableBlock: false,
                secBlock: false,
                tertBlock: false
            }
            let casingCount = 8;
            switch(singleblock) {
                case "electric_furnace": {
                    return [`${casingCount}x ${materials.casing}`, `2x ${materials.cable}`, `4x ${materials.wire}`, " ", " ", " "];
                }
                case "electric_blast_furnace": {
                    casingCount += 2;
                    return [`${casingCount}x ${materials.casing}`, `2x ${materials.cable}`, `4x ${materials.wire}`, " ", " ", " "];
                }
                case "electric_smoker": {
                    return [`${casingCount}x ${materials.casing}`, `2x ${materials.cable}`, `6x ${materials.wire}`, " ", " ", " "];
                }
                case "alloy_smelter": {
                    return [`${casingCount}x ${materials.casing}`, `2x ${materials.cable}`, `8x ${materials.wire}`, " ", " ", " "];
                }
                case "arc_furnace": {
                    casingCount += 3;
                    return [`${casingCount}x ${materials.casing}`, `5x ${materials.cable}`, `gtceu:graphite_dust`, " ", " ", " "];
                }
                case "electrolyzer": {
                    return [`${casingCount}x ${materials.casing}`, `1x ${materials.cable}`, `2x ${materials.electrolyzWire}`, " ", " ", " "];
                }
                case "polarizer": {
                    return [`${casingCount}x ${materials.casing}`, `18x ${materials.cable}`, " ", " ", " ", " "];
                }
                case "turbo_charger": {
                    return [`${casingCount}x ${materials.casing}`, `2x ${materials.cable}`, `8x ${materials.wire}`, " ", " ", " "];
                }
                case "assembler": {
                    let totals = global.getComponentTotal(["robot_arm", "robot_arm", "conveyor_module", "conveyor_module"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "autoclave": {
                    casingCount += 4;
                    let totals = global.getComponentTotal(["electric_pump"]);
                    totals.cableCount += 1;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "bender": {
                    casingCount += 1;
                    let totals = global.getComponentTotal(["electric_piston", "electric_piston", "electric_motor", "electric_motor"]);
                    totals.cableCount += 1;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "brewery": {
                    let totals = global.getComponentTotal(["electric_pump"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "canner": {
                    let totals = global.getComponentTotal(["electric_pump"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "centrifuge": {
                    let totals = global.getComponentTotal(["electric_motor", "electric_motor"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "chemical_bath": {
                    let totals = global.getComponentTotal(["conveyor_module", "conveyor_module", "electric_pump"]);
                    totals.cableCount += 1;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "chemical_reactor": {
                    casingCount += 4;
                    let totals = global.getComponentTotal(["electric_motor"]);
                    totals.cableCount += 1;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "compressor": {
                    let totals = global.getComponentTotal(["electric_piston", "electric_piston"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "cutter": {
                    let totals = global.getComponentTotal(["electric_motor", "conveyor_module"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "distillery": {
                    let totals = global.getComponentTotal(["electric_pump"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "electromagnetic_separator": {
                    let totals = global.getComponentTotal(["conveyor_module"]);
                    totals.cableCount += 10;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "extractor": {
                    let totals = global.getComponentTotal(["electric_piston", "electric_pump"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "extruder": {
                    let totals = global.getComponentTotal(["electric_piston"]);
                    totals.cableCount += 1;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "fermenter": {
                    let totals = global.getComponentTotal(["electric_pump"]);
                    totals.cableCount += 3;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "fluid_heater": {
                    let totals = global.getComponentTotal(["electric_pump", "electric_pump"]);
                    totals.cableCount += 1;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "fluid_solidifier": {
                    let totals = global.getComponentTotal(["electric_pump", "electric_pump"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "forge_hammer": {
                    let totals = global.getComponentTotal(["electric_piston"]);
                    totals.cableCount += 3;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "lathe": {
                    let totals = global.getComponentTotal(["electric_motor", "electric_piston"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "scanner": {
                    let totals = global.getComponentTotal(["emitter", "sensor"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "mixer": {
                    casingCount += 4; // note that this would be the previous casing tier for ev and below
                    let totals = global.getComponentTotal(["electric_motor"]);
                    totals.cableCount += 1;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "ore_washer": {
                    casingCount += 8; // same as mixer here (seems to be anything using rotors)
                    let totals = global.getComponentTotal(["electric_motor"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "packer": {
                    let totals = global.getComponentTotal(["robot_arm", "conveyor_module"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "laser_engraver": {
                    let totals = global.getComponentTotal(["electric_piston", "electric_piston", "emitter"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "sifter": { 
                    let totals = global.getComponentTotal(["electric_piston", "electric_piston"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "thermal_centrifuge": {
                    let totals = global.getComponentTotal(["electric_motor", "electric_motor"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "wiremill": {
                    let totals = global.getComponentTotal(["electric_motor", "electric_motor", "electric_motor", "electric_motor"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "circuit_assembler": {
                    let totals = global.getComponentTotal(["conveyor_module", "conveyor_module", "robot_arm"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "macerator": {
                    let totals = global.getComponentTotal(["electric_motor", "electric_piston"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "gas_collector": {
                    let totals = global.getComponentTotal(["electric_pump", "electric_pump"]);
                    totals.cableCount += 1;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
                case "rock_crusher": {
                    let totals = global.getComponentTotal(["electric_motor", "electric_piston"]);
                    totals.cableCount += 2;
                    let tempObj = global.checkComponentCount(totals);
                    totals = tempObj.values;
                    blockBools = tempObj.blocksBools;
                    break;
                }
            }
            return [`${casingCount}x ${materials.casing}`, `${totals.cableCount}x ${materials.cable}`, `${totals.primCount}x ${materials.compPrim}`, 
                    `${totals.secCount}x ${materials.compSec}`, `${totals.tertCount}x ${materials.compTert}`, blockBools];
        }

        function getFinalOutputs(outputs, macBool) {
            let finalOutputs = [];
            const blockBools = outputs[5];

            if (macBool) {
                if (blockBools == " ") {
                    for (let x = 0; x < 5; x++) {
                        if (outputs[x] != " ") {
                            finalOutputs[x] = `${outputs[x]}_dust`;
                        }
                    }
                }
                else {
                    finalOutputs[0] = `${outputs[0]}_dust`;
                    for (let x = 0; x < 4; x++) {
                        if (blockBools[x]) {
                            if (outputs[x+1] != " ") {
                                finalOutputs[x+1] = `${outputs[x+1]}_dust_block`;
                            }
                        }
                        else {
                            if (outputs[x+1] != " ") {
                                finalOutputs[x+1] = `${outputs[x+1]}_dust`;
                            }
                        }
                    }
                }
            }
            else {
                if (blockBools == " ") {
                    for (let x = 0; x < 5; x++) {
                        if (outputs[x] != " ") {
                            finalOutputs[x] = `${outputs[x]}_ingot`;
                        }
                    }
                }
                else {
                    finalOutputs[0] = `${outputs[0]}_ingot`;
                    for (let x = 0; x < 4; x++) {
                        if (blockBools[x]) {
                            if (outputs[x+1] != " ") {
                                finalOutputs[x+1] = `${outputs[x+1]}_block`;
                            }
                        }
                        else {
                            if (outputs[x+1] != " ") {
                                finalOutputs[x+1] = `${outputs[x+1]}_ingot`;
                            }
                        }
                    }
                }
            }

            return finalOutputs;
        }  

        const arcRecipe = (singleblock, tiers) => {
            const calculateDuration = global.calculateRecyclingDuration;
            const id = global.id;
            let outputs;

            tiers.forEach(tier => {
                outputs = getFinalOutputs(getSingleblockRecycleOutputs(singleblock, tier), false);
                event.recipes.gtceu.arc_furnace(id(`arc_${tier}_${singleblock}`))
                    .itemInputs(`gtceu:${tier}_${singleblock}`)
                    .itemOutputs(outputs)
                    .duration(calculateDuration(outputs))
                    .EUt(GTValues.VA[GTValues.LV])
                    .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);
            });
        }

        const macRecipe = (singleblock, tiers) => {
            const calculateDuration = global.calculateRecyclingDuration;
            const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;
            const id = global.id;
            let outputs;

            tiers.forEach(tier => {
                outputs = getFinalOutputs(getSingleblockRecycleOutputs(singleblock, tier), true);
                event.recipes.gtceu.macerator(id(`macerate_${tier}_${singleblock}`))
                    .itemInputs(`gtceu:${tier}_${singleblock}`)
                    .itemOutputs(outputs)
                    .duration(calculateDuration(outputs))
                    .EUt(2 * calculateVoltageMultiplier(outputs))
                    .category(GTRecipeCategories.MACERATOR_RECYCLING);
            });
        }

        SINGLEBLOCKS.forEach(singleblock => {
            arcRecipe(singleblock, TIERS);
            macRecipe(singleblock, TIERS);
        });
        
    })
})