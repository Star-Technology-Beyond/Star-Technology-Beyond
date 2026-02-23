// global.not_hardmode(() => {
//     ServerEvents.recipes(event => {
//         const COILS = [
//             "naquadah_coil_block", "trinium_coil_block", "tritanium_coil_block", "zalloy_coil_block", "magmada_alloy_coil_block", 
//             "abyssal_alloy_coil_block", "rhenotax_coil"
//         ];

//         const COILRECYCLEDETAILS = {
//             naquadah_coil_block: {
//                 materials: {
//                     frameMaterial: "gtceu:hssg",
//                     wireMaterial: "gtceu:naquadah",
//                     foilMaterial: "gtceu:osmium"
//                 },
//                 counts: {
//                     frameCount: 4,
//                     wireCount: 8,
//                     foilCount: 2
//                 },
//                 prefix: "gtceu:"
//             },
//             trinium_coil_block: {
//                 materials: {
//                     frameMaterial: "gtceu:hsse",
//                     wireMaterial: "gtceu:trinium",
//                     foilMaterial: "gtceu:enriched_naquadah"
//                 },
//                 counts: {
//                     frameCount: 4,
//                     wireCount: 8,
//                     foilCount: 2
//                 },
//                 prefix: "gtceu:"
//             },
//             tritanium_coil_block: {
//                 materials: { 
//                     frameMaterial: "gtceu:trinaquadalloy",
//                     wireMaterial: "gtceu:tritanium",
//                     foilMaterial: "gtceu:naquadria"
//                 },
//                 counts: {
//                     frameCount: 4,
//                     wireCount: 8,
//                     foilCount: 2
//                 },
//                 prefix: "gtceu:"
//             },
//             zalloy_coil_block: {
//                 materials: {
//                     frameMaterial: "gtceu:neutronium",
//                     wireMaterial: "gtceu:zalloy",
//                     foilMaterial: "gtceu:zirconium"
//                 },
//                 counts: {
//                     frameCount: 4,
//                     wireCount: 8,
//                     foilCount: 2
//                 },
//                 prefix: "kubejs:"
//             },
//             magmada_alloy_coil_block: {
//                 materials: {
//                     frameMaterial: "gtceu:ancient_netherite",
//                     wireMaterial: "gtceu:magmada_alloy",
//                     foilMaterial: "gtceu:pure_netherite"
//                 },
//                 counts: {
//                     frameCount: 4,
//                     wireCount: 8,
//                     foilCount: 2
//                 },
//                 prefix: "kubejs:"
//             },
//             abyssal_alloy_coil_block: {
//                 materials: {
//                     frameMaterial: "gtceu:draconyallium",
//                     wireMaterial: "gtceu:abyssal_alloy",
//                     foilMaterial: "gtceu:nyanium"
//                 },
//                 counts: {
//                     frameCount: 4,
//                     wireCount: 8,
//                     foilCount: 2
//                 },
//                 prefix: "kubejs:"
//             },
//             rhenotax_coil: {
//                 materials: {
//                     frameMaterial: "gtceu:astrenalloy_nx",
//                     wireMaterial: "gtceu:rhenate_w",
//                     foilMaterial: "gtceu:tantalum_carbide"
//                 },
//                 counts: {
//                     frameCount: 4,
//                     wireCount: 8,
//                     foilCount: 4
//                 },
//                 prefix: "kubejs:"
//             }
//         };

//         const arcRecipe = (coil) => {
//             const id = global.id;
//             const calculateDuration = global.calculateRecyclingDuration;
//             const getFinalOutputs = global.getFinalRecycleOutputs;

//             if (!COILRECYCLEDETAILS[coil]) return;
//             const {
//                 materials: {
//                     frameMaterial,
//                     wireMaterial,
//                     foilMaterial
//                 },
//                 counts: {
//                     frameCount,
//                     wireCount,
//                     foilCount
//                 },
//                 prefix
//             } = COILRECYCLEDETAILS[coil];

//             event.remove({ input: prefix+coil, type: `gtceu:arc_furnace` });

//             const tempOutputs = [`${frameCount}x ${frameMaterial}`, `${wireCount}x ${wireMaterial}`, `${foilCount}x ${foilMaterial}`, 
//                 false, false, false, false];

//             const outputs = getFinalOutputs(tempOutputs, "coils", false, false);
            
//             event.recipes.gtceu.arc_furnace(id(`arc_${coil}`))
//                 .itemInputs(`${prefix+coil}`)
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

//             if (!COILRECYCLEDETAILS[coil]) return;
//             const {
//                 materials: {
//                     frameMaterial,
//                     wireMaterial,
//                     foilMaterial
//                 },
//                 counts: {
//                     frameCount,
//                     wireCount,
//                     foilCount
//                 },
//                 prefix
//             } = COILRECYCLEDETAILS[coil];

//             event.remove({ input: prefix+coil, type: `gtceu:macerator` });

//             const tempOutputs = [`${frameCount}x ${frameMaterial}`, `${wireCount}x ${wireMaterial}`, `${foilCount}x ${foilMaterial}`, 
//                 false, false, false, false];

//             const outputs = getFinalOutputs(tempOutputs, "coils", true, false);

//             event.recipes.gtceu.macerator(id(`mac_${coil}`))
//                 .itemInputs(`${prefix+coil}`)
//                 .itemOutputs(outputs)
//                 .duration(calculateDuration(outputs))
//                 .EUt(2 * calculateVoltageMultiplier(outputs))
//                 .category(GTRecipeCategories.MACERATOR_RECYCLING);
//         }

//         COILS.forEach(coil => {
//             arcRecipe(coil);
//             macRecipe(coil);
//         })
//     })
// })