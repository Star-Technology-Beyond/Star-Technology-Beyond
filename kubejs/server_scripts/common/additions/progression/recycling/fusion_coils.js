// global.not_hardmode(() => {
//     ServerEvents.recipes(event => {
//         const FUSIONCOILS = [
//             "fusion_coil", "auxiliary_fusion_coil_mk1", "advanced_fusion_coil" , "auxiliary_fusion_coil_mk2"
//         ];
//         const FUSIONCOILDETAILS = {
//             fusion_coil: {
//                 components: "ignored",
//                 tierComponent: "iv",
//                 plateMaterial: "gtceu:europium",
//                 prefix: "gtceu:",
//                 plateCount: 4
//             },
//             auxiliary_fusion_coil_mk1: {
//                 components: [ "field_generator", "field_generator", "field_generator", "field_generator", "electric_pump", "electric_pump" ],
//                 tierComponent: "zpm",
//                 plateMaterial: "gtceu:zircalloy_4",
//                 prefix: "start_core:",
//                 plateCount: 8
//             },
//             advanced_fusion_coil: {
//                 components: [ "field_generator", "field_generator", "field_generator", "field_generator", "electric_pump", "electric_pump" ],
//                 tierComponent: "uv",
//                 plateMaterial: "gtceu:magmada_alloy",
//                 prefix: "start_core:",
//                 plateCount: 4
//             },
//             auxiliary_fusion_coil_mk2: {
//                 components: [ "field_generator", "field_generator", "field_generator", "field_generator", "electric_pump", "electric_pump" ],
//                 tierComponent: "uhv",
//                 plateMaterial: "gtceu:abyssal_alloy",
//                 prefix: "start_core:",
//                 plateCount: 8
//             }
//         };

//         event.remove({ input: "gtceu:fusion_coil", type: "gtceu:macerator" });
//         event.remove({ input: "gtceu:fusion_coil", type: "gtceu:arc_furnace" });

//         function getFusionCoilRecycleOutputs(coil) {
//             let finalOutputs = [];
//             const checkRecyclingCount = global.checkRecyclingCount;
//             const componentRecycleMaterials = global.componentRecycleMaterials;
//             if (!FUSIONCOILDETAILS[coil]) return;
//             const {
//                 components,
//                 tierComponent,
//                 plateMaterial,
//                 plateCount
//             } = FUSIONCOILDETAILS[coil];

//             finalOutputs[0] = `${plateCount}x ${plateMaterial}`

//             if (tierComponent == "uhv" || tierComponent == "uev" || tierComponent == "uiv") {    
//                 const getUHVPlusComponentTotal = global.getUHVPlusComponentTotal;

//                 if (!componentRecycleMaterials[tierComponent]) return;
//                 const {
//                     primMaterial,
//                     cableMaterial,
//                     secMaterial,
//                     tertMaterial
//                 } = componentRecycleMaterials[tierComponent];

//                 const tempOutputs = checkRecyclingCount(getUHVPlusComponentTotal(components), true, true);

//                 if (!tempOutputs) return;
//                 const {
//                     blockBools: {
//                         primBlock,
//                         cableBlock,
//                         secBlock,
//                         tertBlock
//                     },
//                     totals: {
//                         primCount,
//                         cableCount,
//                         secCount,
//                         tertCount
//                     }
//                 } = tempOutputs;

//                 let position = 1;
//                 if (primCount != 0) { finalOutputs[position] = `${primCount}x ${primMaterial}`; position++; }
//                 if (cableCount != 0) { finalOutputs[position] = `${cableCount}x ${cableMaterial}`; position++; }
//                 if (secCount != 0) { finalOutputs[position] = `${secCount}x ${secMaterial}`; position++; }
//                 if (tertCount != 0) { finalOutputs[position] = `${tertCount}x ${tertMaterial}`; position++; }
//                 finalOutputs[position] = primBlock; position++;
//                 finalOutputs[position] = cableBlock; position++;
//                 finalOutputs[position] = secBlock; position++;
//                 finalOutputs[position] = tertBlock; position++;
//             }
//             else if (tierComponent == "luv" || tierComponent == "zpm" || tierComponent == "uv") {
//                 const getLUVToUVComponentTotal = global.getLUVToUVComponentTotal;

//                 if (!componentRecycleMaterials[tierComponent]) return;
//                 const {
//                     primMaterial,
//                     cableMaterial,
//                     wireMaterial,
//                     foilMaterial
//                 } = componentRecycleMaterials[tierComponent]

//                 const tempOutputs = checkRecyclingCount(getLUVToUVComponentTotal(components), false, true, false);
//                 if (!tempOutputs) return;
//                 const {
//                     blockBools: {
//                         primBlock,
//                         cableBlock,
//                         wireBlock,
//                         foilBlock
//                     },
//                     totals: {
//                         primCount,
//                         cableCount,
//                         wireCount,
//                         foilCount
//                     }
//                 } = tempOutputs;

//                 let position = 1;
//                 if (primCount != 0) { finalOutputs[position] = `${primCount}x ${primMaterial}`; position++; }
//                 if (cableCount != 0) { finalOutputs[position] = `${cableCount}x ${cableMaterial}`; position++; }
//                 if (wireCount != 0) { finalOutputs[position] = `${wireCount}x ${wireMaterial}`; position++; }
//                 if (foilCount != 0) { finalOutputs[position] = `${foilCount}x ${foilMaterial}`; position++; }
//                 finalOutputs[position] = primBlock; position++;
//                 finalOutputs[position] = cableBlock; position++;
//                 finalOutputs[position] = wireBlock; position++;
//                 finalOutputs[position] = foilBlock; position++;
//             }
//             else {
//                 finalOutputs = [`${plateCount}x ${plateMaterial}`, "15x gtceu:tungsten_steel", "8x gtceu:samarium_iron_arsenic_oxide",
//                      "3x gtceu:naquadah", false, false, false, false];
//             }

//             return finalOutputs;
//         }

//         const arcRecipe = (coil) => {
//             const id = global.id;
//             const calculateDuration = global.calculateRecyclingDuration;
//             const getFinalOutputs = global.getFinalRecycleOutputs;
//             const prefix = FUSIONCOILDETAILS[coil].prefix;
//             const outputs = getFinalOutputs(getFusionCoilRecycleOutputs(coil), "uhv" /*fake uhv tier so first slot isn't replaced via block bool*/,
//                 false, false);

//             event.recipes.gtceu.arc_furnace(id(`arc_${coil}`))
//                 .itemInputs(`${ prefix + coil }`)
//                 .itemOutputs(outputs)
//                 .duration(calculateDuration(outputs))
//                 .EUt(GTValues.VA[GTValues.LV])
//                 .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);
//         }

//         const macRecipe = (coil) => {
//             const id = global.id;           
//             const calculateDuration = global.calculateRecyclingDuration;
//             const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;
//             const getFinalOutputs = global.getFinalRecycleOutputs;
//             const prefix = FUSIONCOILDETAILS[coil].prefix;
//             const outputs = getFinalOutputs(getFusionCoilRecycleOutputs(coil), "uhv" /*fake uhv tier so first slot isn't replaced via block bool*/,
//                 true, false);

//             event.recipes.gtceu.macerator(id(`macerate_${coil}`))
//                 .itemInputs(`${prefix+coil}`)
//                 .itemOutputs(outputs)
//                 .duration(calculateDuration(outputs))
//                 .EUt(2 * calculateVoltageMultiplier(outputs))
//                 .category(GTRecipeCategories.MACERATOR_RECYCLING);
//         }

//         FUSIONCOILS.forEach(coil => {
//             arcRecipe(coil);
//             macRecipe(coil);
//         })
//     })
// })