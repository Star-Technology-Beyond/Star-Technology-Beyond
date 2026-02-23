// note: this code is assuming all casing materials from uev+ are the same as the component tertiary material
global.not_hardmode(() => {
    ServerEvents.recipes(event => {
        const TIERS = [
            "uhv", "uev", "uiv"
        ]
        const SINGLEBLOCKS = [
            "electric_furnace", "electric_blast_furnace", "electric_smoker", "alloy_smelter", "arc_furnace", "electrolyzer", "polarizer", 
            "charger_4x", "assembler", "autoclave", "bender", "brewery", "canner", "centrifuge", "chemical_bath", "chemical_reactor",
            "compressor", "cutter", "distillery", "electromagnetic_separator", "extractor", "extruder", "fermenter", "fluid_heater",
            "fluid_solidifier", "forge_hammer", "forming_press", "lathe", "scanner", "mixer", "ore_washer", "packer", "laser_engraver", 
            "sifter", "thermal_centrifuge", "wiremill", "circuit_assembler", "macerator", "gas_collector", "rock_crusher"
        ]
        const SINGLEBLOCKDETAILS = global.singleblockRecyclingDetails;

        function getSingleblockRecycleOutputs(arcBool, singleblock, specialSingleBool, tier, components /*not read if special*/, extraCasings /*0 if special*/, extraCables /*0 if special*/) {
            const singleComponents = global.componentMaterials;
            const componentRecycles = global.componentRecycleMaterials;
            const materials = {
                casingMaterial: "",
                primMaterial: "",
                cableMaterial: "",
                secMaterial: "",
                tertMaterial: "",
                wire: "",
                elctrlyzWire: ""
            }
            const graphite = arcBool ? "7x gtceu:tiny_ash_dust" : "gtceu:graphite_dust";
            
            switch(tier) {
                case "uhv": {
                    materials.casingMaterial = "gtceu:neutronium",
                    materials.primMaterial = componentRecycles.uhv.primMaterial,
                    materials.cableMaterial = componentRecycles.uhv.cableMaterial,
                    materials.secMaterial = componentRecycles.uhv.secMaterial,
                    materials.tertMaterial = componentRecycles.uhv.tertMaterial,
                    materials.wire = `gtceu:${singleComponents.uhv.materials.wire}`,
                    materials.elctrlyzWire = `gtceu:${singleComponents.uhv.materials.elctrlyzWire}`
                    break;
                }
                case "uev": {
                    materials.casingMaterial = "gtceu:mythrolic_alloy",
                    materials.primMaterial = componentRecycles.uev.primMaterial,
                    materials.cableMaterial = componentRecycles.uev.cableMaterial,
                    materials.secMaterial = componentRecycles.uev.secMaterial,
                    materials.tertMaterial = componentRecycles.uev.tertMaterial
                    materials.wire = `gtceu:${singleComponents.uev.materials.wire}`,
                    materials.elctrlyzWire = `gtceu:${singleComponents.uev.materials.elctrlyzWire}`
                    break;
                }
                case "uiv": {
                    materials.casingMaterial = "gtceu:chaotixic_alloy",
                    materials.primMaterial = componentRecycles.uiv.primMaterial,
                    materials.cableMaterial = componentRecycles.uiv.cableMaterial,
                    materials.secMaterial = componentRecycles.uiv.secMaterial,
                    materials.tertMaterial = componentRecycles.uiv.tertMaterial
                    materials.wire = `gtceu:${singleComponents.uiv.materials.wire}`,
                    materials.elctrlyzWire = `gtceu:${singleComponents.uiv.materials.elctrlyzWire}`
                    break;
                }
            }

            const specialSingleOutputs = {
                electric_furnace: [`8x ${materials.casingMaterial}`, `4x ${materials.wire}`, `2x ${materials.cableMaterial}`, " ", " ", " "],
                electric_blast_furnace: [`10x ${materials.casingMaterial}`, `4x ${materials.wire}`, `2x ${materials.cableMaterial}`, " ", " ", " "],
                electric_smoker: [`8x ${materials.casingMaterial}`, `6x ${materials.wire}`, `2x ${materials.cableMaterial}`, " ", " ", " "],
                alloy_smelter: [`8x ${materials.casingMaterial}`, `6x ${materials.wire}`, `2x ${materials.cableMaterial}`, " ", " ", " "],
                arc_furnace: [`11x ${materials.casingMaterial}`, `5x ${materials.cableMaterial}`, `${graphite}`, " ", " ", " "],
                electrolyzer: [`8x ${materials.casingMaterial}`, `2x ${materials.elctrlyzWire}`, `1x ${materials.cableMaterial}`, " ", " ", " "],
                polarizer: [`18x ${materials.cableMaterial}`, `8x ${materials.casingMaterial}`, " ", " ", " ", " "],
                charger_4x: [`8x ${materials.casingMaterial}`, `8x ${materials.wire}`, `2x ${materials.cableMaterial}`, " ", " ", " "]
            }
            let casingCount = 8 + extraCasings;
            let recycleOutputs = [" ", " ", " ", " ", " ", " "];
            let tempTotals;
            let tempObj;

            if (specialSingleBool) {
                if (singleblock == "electric_furnace") { recycleOutputs = specialSingleOutputs.electric_furnace; }
                else if (singleblock == "electric_blast_furnace") { recycleOutputs = specialSingleOutputs.electric_blast_furnace; }
                else if (singleblock == "electric_smoker") { recycleOutputs = specialSingleOutputs.electric_smoker; }
                else if (singleblock == "alloy_smelter") { recycleOutputs = specialSingleOutputs.alloy_smelter; }
                else if (singleblock == "arc_furnace") { recycleOutputs = specialSingleOutputs.arc_furnace; }
                else if (singleblock == "electrolyzer") { recycleOutputs = specialSingleOutputs.electrolyzer; }
                else if (singleblock == "polarizer") { recycleOutputs = specialSingleOutputs.polarizer; }
                else if (singleblock == "charger_4x") { recycleOutputs = specialSingleOutputs.charger_4x; }
            }
            else {
                tempTotals = global.getUHVPlusComponentTotal(components);
                tempTotals.cableCount += extraCables;

                if (tier == "uev" || tier == "uiv") { // if tertiary material is the same as casing material
                    tempTotals.tertCount += casingCount;
                    tempObj = global.checkRecyclingCount(tempTotals, true, false, false);
                }
                else {
                    tempTotals.casingCount = casingCount; 
                    tempObj = global.checkRecyclingCount(tempTotals, true, false, true);
                }
                
                let checkCount = 0;
                let position = 0;
                let flag = false;
                let flag2;
                while (!flag) {
                    flag2 = (tier == "uev" || tier == "uiv") ? 3 : 4;
                    if (checkCount == flag2) {
                        flag = true;
                    }
                    if (tempObj.totals[tempObj.outputOrder[position] + "Count"] != 0) {
                        recycleOutputs[position] = `${tempObj.totals[tempObj.outputOrder[position] + "Count"]}x ${materials[tempObj.outputOrder[position] + "Material"]}`;
                        position++;
                    }
                    
                    checkCount++;
                }
                recycleOutputs[position] = tempObj.blockBools.primBlock; position++;
                recycleOutputs[position] = tempObj.blockBools.cableBlock; position++;
                recycleOutputs[position] = (tier == "uhv" || tier == "uev" || tier == "uiv") ? tempObj.blockBools.secBlock : tempObj.blockBools.wireBlock; 
                position++;
                recycleOutputs[position] = (tier == "uhv" || tier == "uev" || tier == "uiv") ? tempObj.blockBools.tertBlock : tempObj.blockBools.foilBlock; 
                position++;
            }

            if (recycleOutputs != undefined) {
                return recycleOutputs;
            }
        }

        

        const arcRecipe = (singleblock, specialSingleBool, tiers, components, extraCasings, extraCables) => {
            const id = global.id;
            const calculateDuration = global.calculateRecyclingDuration;
            const getFinalOutputs = global.getFinalRecycleOutputs;
            let outputs;
            
            tiers.forEach(tier => {
                outputs = getFinalOutputs(getSingleblockRecycleOutputs(true, singleblock, specialSingleBool, tier, components, extraCasings, extraCables), false, specialSingleBool);
                event.recipes.gtceu.arc_furnace(id(`arc_${tier}_${singleblock}`))
                    .itemInputs(`gtceu:${tier}_${singleblock}`)
                    .itemOutputs(outputs)
                    .duration(calculateDuration(outputs))
                    .EUt(GTValues.VA[GTValues.LV])
                    .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);
            });
        }

        const macRecipe = (singleblock, specialSingleBool, tiers, components, extraCasings, extraCables) => {
            const id = global.id;
            const calculateDuration = global.calculateRecyclingDuration;
            const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;
            const getFinalOutputs = global.getFinalRecycleOutputs;
            let outputs;

            tiers.forEach(tier => {
                outputs = getFinalOutputs(getSingleblockRecycleOutputs(false, singleblock, specialSingleBool, tier, components, extraCasings, extraCables), true, specialSingleBool);
                event.recipes.gtceu.macerator(id(`macerate_${tier}_${singleblock}`))
                    .itemInputs(`gtceu:${tier}_${singleblock}`)
                    .itemOutputs(outputs)
                    .duration(calculateDuration(outputs))
                    .EUt(2 * calculateVoltageMultiplier(outputs))
                    .category(GTRecipeCategories.MACERATOR_RECYCLING);
            });
        }
        const singleblockDetails = (singleblockKey) => {
            const data = SINGLEBLOCKDETAILS[singleblockKey]
            if (!data) return;

            const {
                name,
                specialSingle,
                components,
                extraCasings,
                extraCables
            } = data
            
            arcRecipe(name, specialSingle, TIERS, components, extraCasings, extraCables);
            macRecipe(name, specialSingle, TIERS, components, extraCasings, extraCables);
        } 
        
        SINGLEBLOCKS.forEach(singleblock => {
            singleblockDetails(singleblock);
        });
    })
})