// global.not_hardmode(() => {
//     ServerEvents.recipes(event => {
//         const CASINGS = [
//             "fusion_casing", "fusion_casing_mk2", "fusion_casing_mk3", "auxiliary_boosted_fusion_casing_mk1", "fusion_casing_mk4",
//             "auxiliary_boosted_fusion_casing_mk2"
//         ]
//         const CASINGDETAILS = {
//             fusion_casing: {
//                 name: "fusion_casing",
//                 prefix: "gtceu:",
//                 field_generator_tier: "iv",
//                 casing_tier: "luv"
//             },
//             fusion_casing_mk2: {
//                 name: "fusion_casing_mk2",
//                 prefix: "gtceu:",
//                 field_generator_tier: "luv",
//                 casing_tier: "zpm"
//             },
//             fusion_casing_mk3: {
//                 name: "fusion_casing_mk3",
//                 prefix: "gtceu:",
//                 field_generator_tier: "zpm",
//                 casing_tier: "uv"
//             },
//             auxiliary_boosted_fusion_casing_mk1: {
//                 name: "auxiliary_boosted_fusion_casing_mk1",
//                 prefix: "start_core:",
//                 field_generator_tier: "uv",
//                 casing_tier: "uhv"
//             },
//             fusion_casing_mk4: {
//                 name: "fusion_casing_mk4",
//                 prefix: "start_core:",
//                 field_generator_tier: "uhv",
//                 casing_tier: "uev"
//             },
//             auxiliary_boosted_fusion_casing_mk2: {
//                 name: "auxiliary_boosted_fusion_casing_mk2",
//                 prefix: "start_core:",
//                 field_generator_tier: "uev",
//                 casing_tier: "uiv"
//             }
//         }

//         //old recipe removals
//         event.remove({ input: /gtceu:.*fusion_casing.*/, type: "gtceu:macerator" });
//         event.remove({ input: /gtceu:.*fusion_casing.*/, type: "gtceu:arc_furnace" });

//         function getFusionCasingRecycleOutputs(field_generator_tier, casing_tier) {
//             let finalOutputs = [];
//             const componentRecycles = global.componentRecycleMaterials;
//             const materials = {
//                 casing: "",
//                 compPrim: "",
//                 compCable: "",
//                 hullCable: "",
//                 compSec: "",
//                 wire: ""
//             }

//             if (field_generator_tier == "iv") { //iv
//                 finalOutputs = ["8x gtceu:rhodium_plated_palladium", "gtceu:niobium_titanium", "4x gtceu:tungsten_steel", 
//                     "8x gtceu:samarium_iron_arsenic_oxide", /*fake blockBools*/ false, false, false, false];
//             }
//             else if (field_generator_tier == "luv" || field_generator_tier == "zpm" || field_generator_tier == "uv") { //LUVToUV
//                 const counts = global.LUVToUVComponentRecycleCounts.field_generator;
//                 const {
//                     primCount,
//                     cableCount,
//                     wireCount
//                 } = counts;

//                 switch (casing_tier) {
//                     case "zpm": {
//                         const CRluv = componentRecycles.luv;
//                         const CRzpm = componentRecycles.zpm;
//                         materials.casing = "gtceu:naquadah_alloy";
//                         materials.compPrim = CRluv.primMaterial;
//                         materials.compCable = CRluv.cableMaterial;
//                         materials.hullCable = CRzpm.cableMaterial;
//                         materials.wire = CRluv.wireMaterial;
//                         break;
//                     }
//                     case "uv": {
//                         const CRzpm = componentRecycles.zpm;
//                         const CRuv = componentRecycles.uv;
//                         materials.casing = "gtceu:darmstadtium";
//                         materials.compPrim = CRzpm.primMaterial;
//                         materials.compCable = CRzpm.cableMaterial;
//                         materials.hullCable = CRuv.cableMaterial;
//                         materials.wire = CRzpm.wireMaterial;
//                         break;
//                     }
//                     case "uhv": {
//                         const CRuv = componentRecycles.uv;
//                         const CRuhv = componentRecycles.uhv;
//                         materials.casing = "gtceu:neutronium";
//                         materials.compPrim = CRuv.primMaterial;
//                         materials.compCable = CRuv.cableMaterial;
//                         materials.hullCable = CRuhv.cableMaterial;
//                         materials.wire = CRuv.wireMaterial;
//                         break;
//                     }
//                 }

//                 finalOutputs[0] = `8x ${materials.casing}`;
//                 finalOutputs[1] = `${materials.hullCable}`;
//                 finalOutputs[2] = `${primCount}x ${materials.compPrim}`;
//                 finalOutputs[3] = `${cableCount}x ${materials.compCable}`;
//                 finalOutputs[4] = `${wireCount}x ${materials.wire}`;
//                 for (let x = 5; x < 9; x++) {
//                     finalOutputs[x] = false;
//                 }
//             }
//             else { //UHVPlus
//                 const counts = global.UHVPlusComponentRecycleCounts.field_generator;
//                 const {
//                     primCount,
//                     cableCount,
//                     secCount,
//                 } = counts;

//                 switch (casing_tier) {
//                     case "uev": {
//                         const CRuhv = componentRecycles.uhv;
//                         const CRuev = componentRecycles.uev;
//                         materials.casing = "gtceu:mythrolic_alloy";
//                         materials.compPrim = CRuhv.primMaterial;
//                         materials.compCable = CRuhv.cableMaterial;
//                         materials.hullCable = CRuev.cableMaterial;
//                         materials.compSec = CRuhv.secMaterial;
//                         break;
//                     }
//                     case "uiv": {
//                         const CRuev = componentRecycles.uev;
//                         const CRuiv = componentRecycles.uiv;
//                         materials.casing = "gtceu:chaotixic_alloy";
//                         materials.compPrim = CRuev.primMaterial;
//                         materials.compCable = CRuev.cableMaterial;
//                         materials.hullCable = CRuiv.cableMaterial;
//                         materials.compSec = CRuev.secMaterial;
//                         break;
//                     }
//                 }

//                 finalOutputs[0] = `8x ${materials.casing}`;
//                 finalOutputs[1] = `${materials.hullCable}`;
//                 finalOutputs[2] = `${primCount}x ${materials.compPrim}`;
//                 finalOutputs[3] = `${cableCount}x ${materials.compCable}`;
//                 finalOutputs[4] = `${secCount}x ${materials.compSec}`;
//                 for (let x = 5; x < 9; x++) {
//                     finalOutputs[x] = false;
//                 }
//             }

//             return finalOutputs;
//         }

//         const arcRecipe = (name, prefix, field_generator_tier, casing_tier) => {
//             const id = global.id;
//             const calculateDuration = global.calculateRecyclingDuration;
//             const getFinalOutputs = global.getFinalRecycleOutputs;
//             const outputs = getFinalOutputs(getFusionCasingRecycleOutputs(field_generator_tier, casing_tier), false, false);

//             event.recipes.gtceu.arc_furnace(id(`arc_${name}`))
//                 .itemInputs(`${prefix}${name}`)
//                 .itemOutputs(outputs)
//                 .duration(calculateDuration(outputs))
//                 .EUt(GTValues.VA[GTValues.LV])
//                 .category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
//         }

//         const macRecipe = (name, prefix, field_generator_tier, casing_tier) => {
//             const id = global.id;
//             const calculateDuration = global.calculateRecyclingDuration;
//             const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;
//             const getFinalOutputs = global.getFinalRecycleOutputs;
//             const outputs = getFinalOutputs(getFusionCasingRecycleOutputs(field_generator_tier, casing_tier), true, false);

//             event.recipes.gtceu.macerator(id(`macerate_${name}`))
//                 .itemInputs(`${prefix}${name}`)
//                 .itemOutputs(outputs)
//                 .duration(calculateDuration(outputs))
//                 .EUt(2 * calculateVoltageMultiplier(outputs))
//                 .category(GTRecipeCategories.MACERATOR_RECYCLING)
//         }

//         const casingDetails = (casingKey) => {
//             const data = CASINGDETAILS[casingKey];
//             if (!data) return;

//             const {
//                 name,
//                 prefix,
//                 field_generator_tier,
//                 casing_tier
//             } = data

//             arcRecipe(name, prefix, field_generator_tier, casing_tier);
//             macRecipe(name, prefix, field_generator_tier, casing_tier);
//         }

//         CASINGS.forEach(casing => {
//             casingDetails(casing);
//         });
//     })

// })