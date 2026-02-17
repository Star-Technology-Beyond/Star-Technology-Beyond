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
            forming_press: {
                name: "forming_press",
                specialSingle: false,
                components: ["electric_piston", "electric_piston"],
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

        function getSingleblockRecycleOutputs(arcBool, singleblock, specialSingleBool, tier, components /*not read if special*/, extraCasings /*0 if special*/, extraCables /*0 if special*/) {
            const singleComponents = global.componentMaterials;
            const componentRecycles = global.componentRecycleMaterials;
            const materials = {
                casing: "",
                compPrim: "",
                cable: "",
                compSec: "",
                compTert: "",
                wire: "",
                elctrlyzWire: ""
            }
            const graphite = arcBool ? "7x gtceu:tiny_ash_dust" : "gtceu:graphite_dust";
            
            switch(tier) {
                case "uhv": {
                    const CRuhv = componentRecycles.uhv;
                    materials.casing = "gtceu:neutronium",
                    materials.compPrim = CRuhv.primMaterial,
                    materials.cable = CRuhv.cableMaterial,
                    materials.compSec = CRuhv.secMaterial,
                    materials.compTert = CRuhv.tertMaterial,
                    materials.wire = `gtceu:${singleComponents.uhv.materials.wire}`,
                    materials.elctrlyzWire = `gtceu:${singleComponents.uhv.materials.elctrlyzWire}`
                    break;
                }
                case "uev": {
                    const CRuev = componentRecycles.uev;
                    materials.casing = "gtceu:mythrolic_alloy",
                    materials.compPrim = CRuev.primMaterial,
                    materials.cable = CRuev.cableMaterial,
                    materials.compSec = CRuev.secMaterial,
                    materials.compTert = CRuev.tertMaterial
                    materials.wire = `gtceu:${singleComponents.uev.materials.wire}`,
                    materials.elctrlyzWire = `gtceu:${singleComponents.uev.materials.elctrlyzWire}`
                    break;
                }
                case "uiv": {
                    const CRuiv = componentRecycles.uiv;
                    materials.casing = "gtceu:chaotixic_alloy",
                    materials.compPrim = CRuiv.primMaterial,
                    materials.cable = CRuiv.cableMaterial,
                    materials.compSec = CRuiv.secMaterial,
                    materials.compTert = CRuiv.tertMaterial
                    materials.wire = `gtceu:${singleComponents.uiv.materials.wire}`,
                    materials.elctrlyzWire = `gtceu:${singleComponents.uiv.materials.elctrlyzWire}`
                    break;
                }
            }

            const specialSingleOutputs = {
                electric_furnace: [`8x ${materials.casing}`, `2x ${materials.cable}`, `4x ${materials.wire}`, " ", " ", " "],
                electric_blast_furnace: [`10x ${materials.casing}`, `2x ${materials.cable}`, `4x ${materials.wire}`, " ", " ", " "],
                electric_smoker: [`8x ${materials.casing}`, `2x ${materials.cable}`, `6x ${materials.wire}`, " ", " ", " "],
                alloy_smelter: [`8x ${materials.casing}`, `2x ${materials.cable}`, `6x ${materials.wire}`, " ", " ", " "],
                arc_furnace: [`11x ${materials.casing}`, `5x ${materials.cable}`, `${graphite}`, " ", " ", " "],
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
                const tempTotals = global.getUHVPlusComponentTotal(components);
                tempTotals.cableCount += extraCables;
                if (tier == "uhv") {
                    const tempObj = global.checkComponentCount(tempTotals);
                    const {
                        blockBools: {
                            primBlock,
                            cableBlock,
                            secBlock,
                            tertBlock
                        },
                        totals: {
                            primCount,
                            cableCount,
                            secCount,
                            tertCount
                        }
                    } = tempObj;
                    
                    let position = 0;
                
                    recycleOutputs[position] = `${casingCount}x ${materials.casing}`; position++;
                    if (primCount != 0) {recycleOutputs[position] = `${primCount}x ${materials.compPrim}`; position++;}
                    if (cableCount != 0) {recycleOutputs[position] = `${cableCount}x ${materials.cable}`; position++;}
                    if (secCount != 0) {recycleOutputs[position] = `${secCount}x ${materials.compSec}`; position++;}
                    if (tertCount != 0) {recycleOutputs[position] = `${tertCount}x ${materials.compTert}`; position++;}
                    recycleOutputs[position] = primBlock; position++;
                    recycleOutputs[position] = cableBlock; position++;
                    recycleOutputs[position] = secBlock; position++;
                    recycleOutputs[position] = tertBlock; position++;
                }
                else { //assuming all future tiers also have the tert material as the casing material
                    tempTotals.tertCount += casingCount;

                    const tempObj = global.checkComponentCount(tempTotals);
                    if (!tempObj) return;
                    const {
                        blockBools: {
                            primBlock,
                            cableBlock,
                            secBlock,
                            tertBlock
                        },
                        totals: {
                            primCount,
                            cableCount,
                            secCount,
                            tertCount
                        }
                    } = tempObj;
                    
                    let position = 0;
                
                    if (primCount != 0) {recycleOutputs[position] = `${primCount}x ${materials.compPrim}`; position++;}
                    if (cableCount != 0) {recycleOutputs[position] = `${cableCount}x ${materials.cable}`; position++;}
                    if (secCount != 0) {recycleOutputs[position] = `${secCount}x ${materials.compSec}`; position++;}
                    if (tertCount != 0) {recycleOutputs[position] = `${tertCount}x ${materials.compTert}`; position++;}
                    recycleOutputs[position] = primBlock; position++;
                    recycleOutputs[position] = cableBlock; position++;
                    recycleOutputs[position] = secBlock; position++;
                    recycleOutputs[position] = tertBlock; position++;
                }
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
                outputs = getFinalOutputs(getSingleblockRecycleOutputs(true, singleblock, specialSingleBool, tier, components, extraCasings, extraCables), tier, false, specialSingleBool);
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
                outputs = getFinalOutputs(getSingleblockRecycleOutputs(false, singleblock, specialSingleBool, tier, components, extraCasings, extraCables), tier, true, specialSingleBool);
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