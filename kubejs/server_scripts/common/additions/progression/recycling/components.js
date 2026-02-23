// global.not_hardmode(() => {
//     ServerEvents.recipes(event => {
//         const TIERS = [
//             "luv", "zpm", "uv", "uhv", "uev", "uiv"
//         ]
        
//         const COMPONENTS = [
//             "sensor", "emitter", "field_generator", "robot_arm", "electric_piston", "conveyor_module", "fluid_regulator", "electric_pump", 
//             "electric_motor"
//         ];

//         function getComponentOutputs(tier, component) {
//             let finalOutputs = [];
//             if (tier == "luv" || tier == "zpm" || tier == "uv") {
//                 const {
//                     primCount,
//                     cableCount,
//                     wireCount,
//                     foilCount
//                 } = global.LUVToUVComponentRecycleCounts[component];
//                 const {
//                     primMaterial,
//                     cableMaterial,
//                     wireMaterial,
//                     foilMaterial
//                 } = global.componentRecycleMaterials[tier];

//                 let position = 0;
//                 if (primCount != 0) { finalOutputs[position] = `${primCount}x ${primMaterial}`; position++; }
//                 if (cableCount != 0) { finalOutputs[position] = `${cableCount}x ${cableMaterial}`; position++; }
//                 if (wireCount != 0) { finalOutputs[position] = `${wireCount}x ${wireMaterial}`; position++; }
//                 if (foilCount != 0) { finalOutputs[position] = `${foilCount}x ${foilMaterial}`; position++; }
//                 for (let x = position; x < position + 4; x++) { //fake block bools
//                     finalOutputs[x] = false;
//                 }
//             }
//             else {
//                 const {
//                     primCount,
//                     cableCount,
//                     secCount,
//                     tertCount
//                 } = global.UHVPlusComponentRecycleCounts[component];

//                 const {
//                     primMaterial,
//                     cableMaterial,
//                     secMaterial,
//                     tertMaterial
//                 } = global.componentRecycleMaterials[tier];

//                 let position = 0;
//                 if (primCount != 0) { finalOutputs[position] = `${primCount}x ${primMaterial}`; position++; }
//                 if (cableCount != 0) { finalOutputs[position] = `${cableCount}x ${cableMaterial}`; position++; }
//                 if (secCount != 0) { finalOutputs[position] = `${secCount}x ${secMaterial}`; position++; }
//                 if (tertCount != 0) { finalOutputs[position] = `${tertCount}x ${tertMaterial}`; position++; }
//                 for (let x = position; x < position + 4; x++) { //fake block bools
//                     finalOutputs[x] = false;
//                 }
//             }
//             return finalOutputs;
//         }

//         const arcRecipe = (tier, component) => {
//             const id = global.id;
//             const calculateDuration = global.calculateRecyclingDuration;
//             const getFinalOutputs = global.getFinalRecycleOutputs;
            
//             //old recipe removals
//             event.remove({ input: `gtceu:${tier}_${component}`, type: `gtceu:arc_furnace` });

//             const outputs = getFinalOutputs(getComponentOutputs(tier, component), false, false);
            
//             event.recipes.gtceu.arc_furnace(id(`arc_${tier}_${component}`))
//                 .itemInputs(`gtceu:${tier}_${component}`)
//                 .itemOutputs(outputs)
//                 .duration(calculateDuration(outputs))
//                 .EUt(GTValues.VA[GTValues.LV])
//                 .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);
//         }

//         const macRecipe = (tier, component) => {
//             const id = global.id;           
//             const calculateDuration = global.calculateRecyclingDuration;
//             const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;
//             const getFinalOutputs = global.getFinalRecycleOutputs;

//             //old recipe removals
//             event.remove({ input: `gtceu:${tier}_${component}`, type: `gtceu:macerator` });

//             const outputs = getFinalOutputs(getComponentOutputs(tier, component), true, false);

//             event.recipes.gtceu.macerator(id(`macerate_${tier}_${component}`))
//                 .itemInputs(`gtceu:${tier}_${component}`)
//                 .itemOutputs(outputs)
//                 .duration(calculateDuration(outputs))
//                 .EUt(2 * calculateVoltageMultiplier(outputs))
//                 .category(GTRecipeCategories.MACERATOR_RECYCLING);
//         }

//         TIERS.forEach(tier => {
//             COMPONENTS.forEach(component => {
//                 arcRecipe(tier, component);
//                 macRecipe(tier, component);
//             })
//         })
//     })
// })