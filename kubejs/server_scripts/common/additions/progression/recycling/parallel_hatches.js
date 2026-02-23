// global.not_hardmode(() => {
//     ServerEvents.recipes(event => {
//         const TIERS = [
//             "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv"
//         ]
//         let LUVTOUV;
//         let UHVPLUS;

//         function getParallelRecycleOutputs(tier, absoluteBool, LUVToUV, UHVPlus) {
//             let finalOutputs = [];
//             const componentRecycles = global.componentRecycleMaterials;
            
//             const materials = {
//                 casing: "",
//                 compPrim: "",
//                 cable: "",
//                 compSec: "",
//                 compTert: "",
//                 wire: "",
//                 foil: ""
//             }

//             //if LUVToUV
//             if (LUVToUV) {
//                 const getLUVToUVComponentTotal = global.getLUVToUVComponentTotal;
//                 const tempTotals = getLUVToUVComponentTotal(["emitter", "sensor"]);
//                 const {
//                     primCount,
//                     cableCount,
//                     wireCount,
//                     foilCount
//                 } = tempTotals;

//                 switch (tier) {
//                     case "luv": {
//                         const CRluv = componentRecycles.luv;
//                         materials.casing = "gtceu:rhodium_plated_palladium";
//                         materials.compPrim = CRluv.primMaterial;
//                         materials.cable = CRluv.cableMaterial;
//                         materials.wire = CRluv.wireMaterial;
//                         materials.foil = CRluv.foilMaterial;
//                         break;
//                     }
//                     case "zpm": {
//                         const CRzpm = componentRecycles.zpm;
//                         materials.casing = "gtceu:naquadah_alloy";
//                         materials.compPrim = CRzpm.primMaterial;
//                         materials.cable = CRzpm.cableMaterial;
//                         materials.wire = CRzpm.wireMaterial;
//                         materials.foil = CRzpm.foilMaterial;
//                         break;
//                     }
//                     case "uv": {
//                         const CRuv = componentRecycles.uv;
//                         materials.casing = "gtceu:darmstadtium";
//                         materials.compPrim = CRuv.primMaterial;
//                         materials.cable = CRuv.cableMaterial;
//                         materials.wire = CRuv.wireMaterial;
//                         materials.foil = CRuv.foilMaterial;
//                         break;
//                     }
//                 }

//                 cableCount += 3;
//                 finalOutputs[0] = `8x ${materials.casing}`;
//                 finalOutputs[1] = `${primCount}x ${materials.compPrim}`;
//                 finalOutputs[2] = `${cableCount}x ${materials.cable}`;
//                 finalOutputs[3] = `${wireCount}x ${materials.wire}`;
//                 finalOutputs[4] = `${foilCount}x ${materials.foil}`;
//                 for (let x = 5; x < 9; x++) {
//                     finalOutputs[x] = false; //fake blockBools since they're always less than 64
//                 }
                
//             }
//             //if UHVPlus
//             else if (UHVPlus){
//                 let tempTotals;

//                 switch(tier) {
//                     case "uhv": {
//                         const CRuhv = componentRecycles.uhv;
//                         materials.casing = "gtceu:neutronium",
//                         materials.compPrim = CRuhv.primMaterial,
//                         materials.cable = CRuhv.cableMaterial,
//                         materials.compSec = CRuhv.secMaterial,
//                         materials.compTert = CRuhv.tertMaterial
//                         break;
//                     }
//                     case "uev": {
//                         const CRuev = componentRecycles.uev;
//                         materials.casing = "gtceu:mythrolic_alloy",
//                         materials.compPrim = CRuev.primMaterial,
//                         materials.cable = CRuev.cableMaterial,
//                         materials.compSec = CRuev.secMaterial,
//                         materials.compTert = CRuev.tertMaterial
//                         break;
//                     }
//                     case "uiv": {
//                         const CRuiv = componentRecycles.uiv;
//                         materials.casing = "gtceu:chaotixic_alloy",
//                         materials.compPrim = CRuiv.primMaterial,
//                         materials.cable = CRuiv.cableMaterial,
//                         materials.compSec = CRuiv.secMaterial,
//                         materials.compTert = CRuiv.tertMaterial
//                         break;
//                     }
//                 }

//                 if (absoluteBool) {
//                     tempTotals = global.getUHVPlusComponentTotal(["emitter", "emitter", "emitter", "emitter", "emitter", "sensor", "sensor", "sensor", "sensor", "sensor"]);
//                 }
//                 else {
//                     tempTotals = global.getUHVPlusComponentTotal(["emitter", "sensor"]);
//                 }

//                 tempTotals.cableCount += 3;
//                 if (tier == "uhv") {
//                     const tempObj = global.checkRecyclingCount(tempTotals, true, false, true);
//                     const {
//                         blockBools: {
//                             primBlock,
//                             cableBlock,
//                             secBlock,
//                             tertBlock
//                         },
//                         totals: {
//                             primCount,
//                             cableCount,
//                             secCount,
//                             tertCount
//                         }
//                     } = tempObj;
                    
//                     let position = 0;
                
//                     finalOutputs[position] = `8x ${materials.casing}`; position++;
//                     if (primCount != 0) {finalOutputs[position] = `${primCount}x ${materials.compPrim}`; position++;}
//                     if (cableCount != 0) {finalOutputs[position] = `${cableCount}x ${materials.cable}`; position++;}
//                     if (secCount != 0) {finalOutputs[position] = `${secCount}x ${materials.compSec}`; position++;}
//                     if (tertCount != 0) {finalOutputs[position] = `${tertCount}x ${materials.compTert}`; position++;}
//                     finalOutputs[position] = primBlock; position++;
//                     finalOutputs[position] = cableBlock; position++;
//                     finalOutputs[position] = secBlock; position++;
//                     finalOutputs[position] = tertBlock; position++;
//                 }
//                 else { //assuming all future tiers also have the tert material as the casing material
//                     tempTotals.tertCount += 8;

//                     const tempObj = global.checkRecyclingCount(tempTotals, true, false);
//                     if (!tempObj) return;
//                     const {
//                         blockBools: {
//                             primBlock,
//                             cableBlock,
//                             secBlock,
//                             tertBlock
//                         },
//                         totals: {
//                             primCount,
//                             cableCount,
//                             secCount,
//                             tertCount
//                         }
//                     } = tempObj;
                    
//                     let position = 0;
                
//                     if (primCount != 0) {finalOutputs[position] = `${primCount}x ${materials.compPrim}`; position++;}
//                     if (cableCount != 0) {finalOutputs[position] = `${cableCount}x ${materials.cable}`; position++;}
//                     if (secCount != 0) {finalOutputs[position] = `${secCount}x ${materials.compSec}`; position++;}
//                     if (tertCount != 0) {finalOutputs[position] = `${tertCount}x ${materials.compTert}`; position++;}
//                     finalOutputs[position] = primBlock; position++;
//                     finalOutputs[position] = cableBlock; position++;
//                     finalOutputs[position] = secBlock; position++;
//                     finalOutputs[position] = tertBlock; position++;
//                 }
//             }
//             else {                
//                 finalOutputs = ["12x gtceu:tungsten_steel", "3x gtceu:platinum", "gtceu:tungsten", "2x gtceu:iridium",
//                     /*fake blockBools*/ false, false, false, false];
//             }

//             return finalOutputs;
//         } 

//         const arcRecipe = (tier, LUVToUV, UHVPlus) => {
//             const id = global.id;
//             const calculateDuration = global.calculateRecyclingDuration;
//             const getFinalOutputs = global.getFinalRecycleOutputs;
//             let outputs;

//             if (UHVPlus) {
//                 const absoluteOutputs = getFinalOutputs(getParallelRecycleOutputs(tier, true, LUVToUV, UHVPlus), tier, false, false);
//                 event.recipes.gtceu.arc_furnace(id(`arc_${tier}_absolute_parallel_hatch`))
//                     .itemInputs(`start_core:${tier}_absolute_parallel_hatch`)
//                     .itemOutputs(absoluteOutputs)
//                     .duration(calculateDuration(absoluteOutputs))
//                     .EUt(GTValues.VA[GTValues.LV])
//                     .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);

//                 outputs = getFinalOutputs(getParallelRecycleOutputs(tier, false, LUVToUV, UHVPlus), tier, false, false);
//                 event.recipes.gtceu.arc_furnace(id(`arc_${tier}_parallel_hatch`))
//                     .itemInputs(`start_core:${tier}_parallel_hatch`)
//                     .itemOutputs(outputs)
//                     .duration(calculateDuration(outputs))
//                     .EUt(GTValues.VA[GTValues.LV])
//                     .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);
//             }
//             else{
//                 outputs = getFinalOutputs(getParallelRecycleOutputs(tier, false, LUVToUV, UHVPlus), tier, false, false);
//                 event.recipes.gtceu.arc_furnace(id(`arc_${tier}_parallel_hatch`))
//                     .itemInputs(`gtceu:${tier}_parallel_hatch`)
//                     .itemOutputs(outputs)
//                     .duration(calculateDuration(outputs))
//                     .EUt(GTValues.VA[GTValues.LV])
//                     .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);
//             }
//         }

//         const macRecipe = (tier, LUVToUV, UHVPlus) => {
//             const id = global.id;           
//             const calculateDuration = global.calculateRecyclingDuration;
//             const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;
//             const getFinalOutputs = global.getFinalRecycleOutputs;
//             let outputs;

//             if (UHVPlus) {
//                 const absoluteOutputs = getFinalOutputs(getParallelRecycleOutputs(tier, true, LUVToUV, UHVPlus), tier, true, false);
//                 event.recipes.gtceu.macerator(id(`macerate_${tier}_absolute_parallel_hatch`))
//                     .itemInputs(`start_core:${tier}_absolute_parallel_hatch`)
//                     .itemOutputs(absoluteOutputs)
//                     .duration(calculateDuration(absoluteOutputs))
//                     .EUt(2 * calculateVoltageMultiplier(absoluteOutputs))
//                     .category(GTRecipeCategories.MACERATOR_RECYCLING);

//                 outputs = getFinalOutputs(getParallelRecycleOutputs(tier, false, LUVToUV, UHVPlus), tier, true, false);
//                 event.recipes.gtceu.macerator(id(`macerate_${tier}_parallel_hatch`))
//                     .itemInputs(`start_core:${tier}_parallel_hatch`)
//                     .itemOutputs(outputs)
//                     .duration(calculateDuration(outputs))
//                     .EUt(2 * calculateVoltageMultiplier(outputs))
//                     .category(GTRecipeCategories.MACERATOR_RECYCLING);
//             }
//             else {
//                 outputs = getFinalOutputs(getParallelRecycleOutputs(tier, false, LUVToUV, UHVPlus), tier, true, false);
//                 event.recipes.gtceu.macerator(id(`macerate_${tier}_parallel_hatch`))
//                     .itemInputs(`gtceu:${tier}_parallel_hatch`)
//                     .itemOutputs(outputs)
//                     .duration(calculateDuration(outputs))
//                     .EUt(2 * calculateVoltageMultiplier(outputs))
//                     .category(GTRecipeCategories.MACERATOR_RECYCLING);
//             }
//         }

//         TIERS.forEach(tier => {
//             if (tier == "luv" || tier == "zpm" || tier == "uv") {
//                 LUVTOUV = true;
//                 UHVPLUS = false;
//             }
//             else if (tier == "uhv" || tier == "uev" || tier == "uiv") {
//                 LUVTOUV = false;
//                 UHVPLUS = true;
//             }
//             else {
//                 LUVTOUV = false;
//                 UHVPLUS = false;
//             }

//             macRecipe(tier, LUVTOUV, UHVPLUS);
//             arcRecipe(tier, LUVTOUV, UHVPLUS);
//         })
//     })
// })