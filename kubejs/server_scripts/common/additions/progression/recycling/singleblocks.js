global.not_hardmode(() => {
    ServerEvents.recipes(event => {
        const TIERS = [
            "uhv", "uev", "uiv"
        ]
        const SINGLEBLOCKS = [
            "electric_furnace", "electric_blast_furnace", "electric_smoker", "alloy_smelter", "arc_furnace", "electrolyzer", "polarizer", 
            "charger_4x", "assembler", "autoclave", "bender", "brewery", "canner", "centrifuge", "chemical_bath", "chemical_reactor",
            "compressor", "cutter", "distillery", "electromagnetic_separator", "extractor", "extruder", "fermenter", "fluid_heater",
            "fluid_solidifier", "forge_hammer", "lathe", "scanner", "mixer", "ore_washer", "packer", "laser_engraver", "sifter", 
            "thermal_centrifuge", "wiremill", "circuit_assembler", "macerator", "gas_collector", "rock_crusher"
        ]
        const SINGLEBLOCKDETAILS = { //if specialSingle = true, the next 3 are blank/unread
            electric_furnace: {
                name: "electric_furnace",
                specialSingle: true,
                components: " ",
                extraCasings: 0, 
                extraCables: 0
            },
            electric_blast_furnace: {
                name: "electric_blast_furnace",
                specialSingle: true,
                components: " ",
                extraCasings: 0, 
                extraCables: 0
            },
            electric_smoker: {
                name: "electric_smoker",
                specialSingle: true,
                components: " ",
                extraCasings: 0, 
                extraCables: 0
            },
            alloy_smelter: {
                name: "alloy_smelter",
                specialSingle: true,
                components: " ",
                extraCasings: 0, 
                extraCables: 0
            },
            arc_furnace: {
                name: "arc_furnace",
                specialSingle: true,
                components: " ",
                extraCasings: 0, 
                extraCables: 0
            },
            electrolyzer: {
                name: "electrolyzer",
                specialSingle: true,
                components: " ",
                extraCasings: 0, 
                extraCables: 0
            },
            polarizer: {
                name: "polarizer",
                specialSingle: true,
                components: " ",
                extraCasings: 0, 
                extraCables: 0
            },
            charger_4x: {
                name: "charger_4x",
                specialSingle: true,
                components: " ",
                extraCasings: 0, 
                extraCables: 0
            },
            assembler: {
                name: "assembler",
                specialSingle: false,
                components: ["robot_arm", "robot_arm", "conveyor_module", "conveyor_module"],
                extraCasings: 0,
                extraCables: 2
            },
            autoclave: {
                name: "autoclave",
                specialSingle: false,
                components: ["electric_pump"],
                extraCasings: 4,
                extraCables: 1
            },
            bender: {
                name: "bender",
                specialSingle: false,
                components: ["electric_piston", "electric_piston", "electric_motor", "electric_motor"],
                extraCasings: 1,
                extraCables: 1
            },
            brewery: {
                name: "brewery",
                specialSingle: false,
                components: ["electric_pump"],
                extraCasings: 0,
                extraCables: 2
            },
            canner: {
                name: "canner",
                specialSingle: false,
                components: ["electric_pump"],
                extraCasings: 0, 
                extraCables: 2
            },
            centrifuge: {
                name: "centrifuge",
                specialSingle: false,
                components: ["electric_motor", "electric_motor"],
                extraCasings: 0, 
                extraCables: 2
            },
            chemical_bath: {
                name: "chemical_bath",
                specialSingle: false,
                components: ["conveyor_module", "conveyor_module", "electric_pump"],
                extraCasings: 0, 
                extraCables: 1
            },
            chemical_reactor: {
                name: "chemical_reactor",
                specialSingle: false,
                components: ["electric_motor"],
                extraCasings: 4, 
                extraCables: 1
            },
            compressor: {
                name: "compressor",
                specialSingle: false,
                components: ["electric_piston", "electric_piston"],
                extraCasings: 0, 
                extraCables: 2
            },
            cutter: {
                name: "cutter",
                specialSingle: false,
                components: ["electric_motor", "conveyor_module"],
                extraCasings: 0, 
                extraCables: 2
            },
            distillery: {
                name: "distillery",
                specialSingle: false,
                components: ["electric_pump"],
                extraCasings: 0, 
                extraCables: 2
            },
            electromagnetic_separator: {
                name: "electromagnetic_separator",
                specialSingle: false,
                components: ["conveyor_module"],
                extraCasings: 0, 
                extraCables: 10
            },
            extractor: {
                name: "extractor",
                specialSingle: false,
                components: ["electric_piston", "electric_pump"],
                extraCasings: 0, 
                extraCables: 2
            },
            extruder: {
                name: "extruder",
                specialSingle: false,
                components: ["electric_piston"],
                extraCasings: 0, 
                extraCables: 1
            },
            fermenter: {
                name: "fermenter",
                specialSingle: false,
                components: ["electric_pump"],
                extraCasings: 0, 
                extraCables: 3
            },
            fluid_heater: {
                name: "fluid_heater",
                specialSingle: false,
                components: ["electric_pump", "electric_pump"],
                extraCasings: 0, 
                extraCables: 1
            },
            fluid_solidifier: {
                name: "fluid_solidifier",
                specialSingle: false,
                components: ["electric_pump", "electric_pump"],
                extraCasings: 0, 
                extraCables: 2
            },
            forge_hammer: {
                name: "forge_hammer",
                specialSingle: false,
                components: ["electric_piston"],
                extraCasings: 0, 
                extraCables: 3
            },
            lathe: {
                name: "lathe",
                specialSingle: false,
                components: ["electric_motor", "electric_piston"],
                extraCasings: 0, 
                extraCables: 2
            },
            scanner: {
                name: "scanner",
                specialSingle: false,
                components: ["emitter", "sensor"],
                extraCasings: 0, 
                extraCables: 2
            },
            mixer: {
                name: "mixer",
                specialSingle: false,
                components: ["electric_motor"],
                extraCasings: 4, // note: this would be the previous casing tier for ev and below
                extraCables: 1
            },
            ore_washer: {
                name: "ore_washer",
                specialSingle: false,
                components: ["electric_motor"],
                extraCasings: 8, // note: this would be the previous casing tier for ev and below
                extraCables: 2
            },
            packer: {
                name: "packer",
                specialSingle: false,
                components: ["robot_arm", "conveyor_module"],
                extraCasings: 0, 
                extraCables: 2
            },
            laser_engraver: {
                name: "laser_engraver",
                specialSingle: false,
                components: ["electric_piston", "electric_piston", "emitter"],
                extraCasings: 0, 
                extraCables: 2
            },
            sifter: {
                name: "sifter",
                specialSingle: false,
                components: ["electric_piston", "electric_piston"],
                extraCasings: 0, 
                extraCables: 2
            },
            thermal_centrifuge: {
                name: "thermal_centrifuge",
                specialSingle: false,
                components: ["electric_motor", "electric_motor"],
                extraCasings: 0, 
                extraCables: 2
            },
            wiremill: {
                name: "wiremill",
                specialSingle: false,
                components: ["electric_motor", "electric_motor", "electric_motor", "electric_motor"],
                extraCasings: 0, 
                extraCables: 2
            },
            circuit_assembler: {
                name: "circuit_assembler",
                specialSingle: false,
                components: ["conveyor_module", "conveyor_module", "robot_arm"],
                extraCasings: 0, 
                extraCables: 2
            },
            macerator: {
                name: "macerator",
                specialSingle: false,
                components: ["electric_motor", "electric_piston"],
                extraCasings: 0, 
                extraCables: 2
            },
            gas_collector: {
                name: "gas_collector",
                specialSingle: false,
                components: ["electric_pump", "electric_pump"],
                extraCasings: 0, 
                extraCables: 1
            },
            rock_crusher: {
                name: "rock_crusher",
                specialSingle: false,
                components: ["electric_motor", "electric_piston"],
                extraCasings: 0, 
                extraCables: 2
            }
        }

        function getSingleblockRecycleOutputs(singleblock, specialSingleBool, tier, components /*not read if special*/, extraCasings /*0 if special*/, extraCables /*0 if special*/) {
            const singleComponents = global.componentMaterials;
            const componentRecycles = global.componentRecycles;
            const materials = {
                casing: "",
                compPrim: "",
                cable: "",
                compSec: "",
                compTert: "",
                wire: "",
                elctrlyzWire: ""
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
                    materials.elctrlyzWire = `gtceu:${singleComponents.uhv.materials.elctrlyzWire}`
                    break;
                case `uev`:
                    const CRuev = componentRecycles.uev;
                    materials.casing = `gtceu:mythrolic_alloy`,
                    materials.compPrim = CRuev.primMaterial,
                    materials.cable = CRuev.cable,
                    materials.compSec = CRuev.secMaterial,
                    materials.compTert = CRuev.tertMaterial
                    materials.wire = `gtceu:${singleComponents.uev.materials.wire}`,
                    materials.elctrlyzWire = `gtceu:${singleComponents.uev.materials.elctrlyzWire}`
                    break;
                case `uiv`:
                    const CRuiv = componentRecycles.uev;
                    materials.casing = `gtceu:chaotixic_alloy`,
                    materials.compPrim = CRuiv.primMaterial,
                    materials.cable = CRuiv.cable,
                    materials.compSec = CRuiv.secMaterial,
                    materials.compTert = CRuiv.tertMaterial
                    materials.wire = `gtceu:${singleComponents.uiv.materials.wire}`,
                    materials.elctrlyzWire = `gtceu:${singleComponents.uiv.materials.elctrlyzWire}`
                    break;
            }

            const specialSingleOutputs = {
                electric_furnace: [`8x ${materials.casing}`, `2x ${materials.cable}`, `4x ${materials.wire}`, " ", " ", " "],
                electric_blast_furnace: [`10x ${materials.casing}`, `2x ${materials.cable}`, `4x ${materials.wire}`, " ", " ", " "],
                electric_smoker: [`8x ${materials.casing}`, `2x ${materials.cable}`, `6x ${materials.wire}`, " ", " ", " "],
                alloy_smelter: [`8x ${materials.casing}`, `2x ${materials.cable}`, `6x ${materials.wire}`, " ", " ", " "],
                arc_furnace: [`11x ${materials.casing}`, `5x ${materials.cable}`, "gtceu:graphite_dust", " ", " ", " "],
                electrolyzer: [`8x ${materials.casing}`, `1x ${materials.cable}`, `2x ${materials.elctrlyzWire}`, " ", " ", " "],
                polarizer: [`8x ${materials.casing}`, `18x ${materials.cable}`, " ", " ", " ", " "],
                charger_4x: [`8x ${materials.casing}`, `2x ${materials.cable}`, `8x ${materials.wire}`, " ", " ", " "]
            }
            let casingCount = 8 + extraCasings;
            let recycleOutputs = [" ", " ", " ", " ", " ", " "];

            if (specialSingleBool) {
                if (singleblock == "electric_furnace") {recycleOutputs = specialSingleOutputs.electric_furnace;}
                else if (singleblock == "electric_blast_furnace") {recycleOutputs = specialSingleOutputs.electric_blast_furnace;}
                else if (singleblock == "electric_smoker") {recycleOutputs = specialSingleOutputs.electric_smoker;}
                else if (singleblock == "alloy_smelter") {recycleOutputs = specialSingleOutputs.alloy_smelter;}
                else if (singleblock == "arc_furnace") {recycleOutputs = specialSingleOutputs.arc_furnace;}
                else if (singleblock == "electrolyzer") {recycleOutputs = specialSingleOutputs.electrolyzer;}
                else if (singleblock == "polarizer") {recycleOutputs = specialSingleOutputs.polarizer;}
                else if (singleblock == "charger_4x") {recycleOutputs = specialSingleOutputs.charger_4x;}
            }
            else {
                const tempTotals = global.getComponentTotal(components);
                 tempTotals.cableCount += extraCables;
                console.log(`counts pre block check: prim:${tempTotals.primCount}, cable: ${tempTotals.cableCount}, sec: ${tempTotals.secCount}, tert: ${tempTotals.tertCount}`);
                const tempArr = global.checkComponentCount(tempTotals);
                const {
                    primBlock,
                    cableBlock,
                    secBlock,
                    tertBlock
                } = tempArr[0];
                const blockBools = [primBlock, cableBlock, secBlock, tertBlock]; //converts obj to array
                const {
                    primCount,
                    cableCount,
                    secCount,
                    tertCount
                } = tempArr[1];
                
                let position = 0;
                if (casingCount != 0) {recycleOutputs[position] = `${casingCount}x ${materials.casing}`; position++;}
                if (primCount != 0) {recycleOutputs[position] = `${primCount}x ${materials.compPrim}`; position++;}
                if (cableCount != 0) {recycleOutputs[position] = `${cableCount}x ${materials.cable}`; position++;}
                if (secCount != 0) {recycleOutputs[position] = `${secCount}x ${materials.compSec}`; position++;}
                if (tertCount != 0) {recycleOutputs[position] = `${tertCount}x ${materials.compTert}`; position++;}
                recycleOutputs.concat(blockBools);
            }
            if (recycleOutputs != undefined) {
                console.log(`recycleOutputs: ${recycleOutputs}`);
                return recycleOutputs;
            }
        }

        function getFinalOutputs(outputs, macBool, specialSingleBool) {
            let finalOutputs = [];
            let i=1;
            let len = outputs.length;
            const blockBools = [outputs[len-3], outputs[len-2], outputs[len-1], outputs[len]]; //gets the booleans out of the end of the outputs array

            if (macBool) {
                if (specialSingleBool) {
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
                    finalOutputs[0] = `${outputs[0]}_dust`;
                    blockBools.forEach(blockBool => {
                        if (blockBool) {
                            if (outputs[i] != " ") {
                                finalOutputs[i] = `${outputs[i]}_dust_block`;
                            }
                        }
                        else {
                            if (outputs[i] != " ") {
                                finalOutputs[i] = `${outputs[i]}_dust`;
                            }
                        }
                        i++;
                    });
                }
            }
            else {
                if (specialSingleBool) {
                    for (let x = 0; x < 5; x++) {
                        if (outputs[x] == "gtceu:graphite_dust") {
                            finalOutputs[x] = outputs[x];
                        }
                        else if (outputs[x] != " ") {
                            finalOutputs[x] = `${outputs[x]}_ingot`;
                        }
                    }
                }
                else {
                    finalOutputs[0] = `${outputs[0]}_ingot`;
                    blockBools.forEach(blockBool => {
                        if (blockBool) {
                            if (outputs[i] != " ") {
                                finalOutputs[i] = `${outputs[i]}_block`;
                            }
                        }
                        else {
                            if (outputs[i] != " ") {
                                finalOutputs[i] = `${outputs[i]}_ingot`;
                            }
                        }
                        i++;
                    });
                }
            }

            return finalOutputs;
        }  

        const arcRecipe = (singleblock, specialSingleBool, tiers, components, extraCasings, extraCables) => {
            const calculateDuration = global.calculateRecyclingDuration;
            const id = global.id;
            let outputs;

            tiers.forEach(tier => {
                outputs = getFinalOutputs(getSingleblockRecycleOutputs(singleblock, specialSingleBool, tier, components, extraCasings, extraCables), false, specialSingleBool);
                console.log (`start:arc_${tier}_${singleblock} outputs: ${outputs}`);
                event.recipes.gtceu.arc_furnace(id(`arc_${tier}_${singleblock}`))
                    .itemInputs(`gtceu:${tier}_${singleblock}`)
                    .itemOutputs(outputs)
                    .duration(calculateDuration(outputs))
                    .EUt(GTValues.VA[GTValues.LV])
                    .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);
            });
        }

        const macRecipe = (singleblock, specialSingleBool, tiers, components, extraCasings, extraCables) => {
            const calculateDuration = global.calculateRecyclingDuration;
            const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;
            const id = global.id;
            let outputs;

            tiers.forEach(tier => {
                outputs = getFinalOutputs(getSingleblockRecycleOutputs(singleblock, specialSingleBool, tier, components, extraCasings, extraCables), true, specialSingleBool);
                console.log (`start:macerate_${tier}_${singleblock} outputs: ${outputs}`);
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
            
            console.log(`arcRecipe: name:${name}, specBool:${specialSingle}, tiers:${TIERS}, comps:${components}, casings: ${extraCasings}, cables: ${extraCables}`);
            arcRecipe(name, specialSingle, TIERS, components, extraCasings, extraCables);
            // console.log(`macRecipe: name:${name}, specBool:${specialSingle}, tiers:${TIERS}, comps:${components}, casings: ${extraCasings}, cables: ${extraCables}`);
            // macRecipe(name, specialSingle, TIERS, components, extraCasings, extraCables);
        } 
        
        SINGLEBLOCKS.forEach(singleblock => {
            singleblockDetails(singleblock);
        });
    })
})