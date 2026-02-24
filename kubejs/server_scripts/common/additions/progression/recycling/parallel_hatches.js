global.not_hardmode(() => {
    ServerEvents.recipes(event => {
        const TIERS = [
            "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv"
        ]
        let LUVTOUV;
        let UHVPLUS;

        function getParallelRecycleOutputs(tier, absoluteBool, LUVToUV, UHVPlus) {
            const componentRecycles = global.componentRecycleMaterials;
            const casingMaterials = global.casingMaterials;
            const checkRecyclingCount = global.checkRecyclingCount;
            let recycleOutputs = [];
            let materials = {};
            let counts = {};
            let casingBool = (tier == "uev" || tier == "uiv") ? false : true; 
            let tempTotals;
            let materialTypes;
            let blockType;

            //if LUVToUV
            if (LUVToUV) {
                let getLUVToUVComponentTotal = global.getLUVToUVComponentTotal;
                tempTotals = getLUVToUVComponentTotal(["emitter", "sensor"]);
                materialTypes = ["casing", "prim", "cable", "wire", "foil"];
                blockType = "parallel_hatch_LUVToUV";
            }
            //if UHVPlus
            else if (UHVPlus){
                let getUHVPlusComponentTotal = global.getUHVPlusComponentTotal;
                materialTypes = (tier == "uhv") ? ["casing", "prim", "cable", "sec", "tert"] : ["prim", "cable", "sec", "tert"];
                blockType = "parallel_hatch_UHVPLUS";

                if (absoluteBool) {
                    tempTotals = getUHVPlusComponentTotal(["emitter", "emitter", "emitter", "emitter", "emitter", "sensor", "sensor", "sensor", "sensor", "sensor"]);
                }
                else {
                    tempTotals = getUHVPlusComponentTotal(["emitter", "sensor"]);
                }
            }
            else {                
                recycleOutputs = ["12x gtceu:tungsten_steel", "3x gtceu:platinum", "2x gtceu:iridium", "gtceu:tungsten",
                    /*fake blockBools*/ false, false, false, false];
                return recycleOutputs;
            }

            tempTotals.cableCount += 3;
            tempTotals.tertCount += (tier == "uev" || tier == "uiv") ? 8 : 0;
            materialTypes.forEach(type => {
                if (type == "casing") {
                    materials[type + "Material"] = casingMaterials[tier];
                    counts[type + "Count"] = 8;
                }
                else {
                    materials[type + "Material"] = componentRecycles[tier][type + "Material"];
                    counts[type + "Count"] = tempTotals[type + "Count"];
                }
            });

            // checks the final outputs
            let tempObj = checkRecyclingCount(counts, blockType, false, casingBool, false);

            // sorts the final outputs
            let checkCount = 0;
            let position = 0;
            let flag = false;
            let flag2 = (tier == "uev" || tier == "uiv") ? 3 : 4;

            while (!flag) {
                if (checkCount == flag2) {
                    flag = true;
                }
                console.log(`tempObj.totals[${tempObj.outputOrder[position] + "Count"}]: ${tempObj.totals[tempObj.outputOrder[position] + "Count"]}`);
                if (tempObj.totals[tempObj.outputOrder[position] + "Count"] != 0) {
                    recycleOutputs[position] = `${tempObj.totals[tempObj.outputOrder[position] + "Count"]}x ${materials[tempObj.outputOrder[position] + "Material"]}`;
                    console.log(`recycleOutputs[${position}]: ${recycleOutputs[position]}`);
                    position++;
                }
                
                checkCount++;
            }
            let listStart = (tier == "uev" || tier == "uiv") ? 4 : 5;
            for (let n = 0; n < 4; n++) {
                recycleOutputs[n + listStart] = tempObj.blockBools[tempObj.outputOrder[n] + "Block"];
            }

            console.log(`recycleOutputs: ${recycleOutputs}`);
            return recycleOutputs;
        } 

        const arcRecipe = (tier, LUVToUV, UHVPlus) => {
            const id = global.id;
            const calculateDuration = global.calculateRecyclingDuration;
            const getFinalOutputs = global.getFinalRecycleOutputs;
            let outputs;

            if (UHVPlus) {
                const absoluteOutputs = getFinalOutputs(getParallelRecycleOutputs(tier, true, LUVToUV, UHVPlus), "parallel_hatch", false, false);
                event.recipes.gtceu.arc_furnace(id(`arc_${tier}_absolute_parallel_hatch`))
                    .itemInputs(`start_core:${tier}_absolute_parallel_hatch`)
                    .itemOutputs(absoluteOutputs)
                    .duration(calculateDuration(absoluteOutputs))
                    .EUt(GTValues.VA[GTValues.LV])
                    .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);

                outputs = getFinalOutputs(getParallelRecycleOutputs(tier, false, LUVToUV, UHVPlus), "parallel_hatch", false, false);
                event.recipes.gtceu.arc_furnace(id(`arc_${tier}_parallel_hatch`))
                    .itemInputs(`start_core:${tier}_parallel_hatch`)
                    .itemOutputs(outputs)
                    .duration(calculateDuration(outputs))
                    .EUt(GTValues.VA[GTValues.LV])
                    .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);
            }
            else{
                outputs = getFinalOutputs(getParallelRecycleOutputs(tier, false, LUVToUV, UHVPlus), "parallel_hatch", false, false);
                event.recipes.gtceu.arc_furnace(id(`arc_${tier}_parallel_hatch`))
                    .itemInputs(`gtceu:${tier}_parallel_hatch`)
                    .itemOutputs(outputs)
                    .duration(calculateDuration(outputs))
                    .EUt(GTValues.VA[GTValues.LV])
                    .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);
            }
        }

        const macRecipe = (tier, LUVToUV, UHVPlus) => {
            const id = global.id;           
            const calculateDuration = global.calculateRecyclingDuration;
            const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;
            const getFinalOutputs = global.getFinalRecycleOutputs;
            let outputs;

            if (UHVPlus) {
                const absoluteOutputs = getFinalOutputs(getParallelRecycleOutputs(tier, true, LUVToUV, UHVPlus), "parallel_hatch", true, false);
                event.recipes.gtceu.macerator(id(`macerate_${tier}_absolute_parallel_hatch`))
                    .itemInputs(`start_core:${tier}_absolute_parallel_hatch`)
                    .itemOutputs(absoluteOutputs)
                    .duration(calculateDuration(absoluteOutputs))
                    .EUt(2 * calculateVoltageMultiplier(absoluteOutputs))
                    .category(GTRecipeCategories.MACERATOR_RECYCLING);

                outputs = getFinalOutputs(getParallelRecycleOutputs(tier, false, LUVToUV, UHVPlus), "parallel_hatch", true, false);
                event.recipes.gtceu.macerator(id(`macerate_${tier}_parallel_hatch`))
                    .itemInputs(`start_core:${tier}_parallel_hatch`)
                    .itemOutputs(outputs)
                    .duration(calculateDuration(outputs))
                    .EUt(2 * calculateVoltageMultiplier(outputs))
                    .category(GTRecipeCategories.MACERATOR_RECYCLING);
            }
            else {
                outputs = getFinalOutputs(getParallelRecycleOutputs(tier, false, LUVToUV, UHVPlus), "parallel_hatch", true, false);
                event.recipes.gtceu.macerator(id(`macerate_${tier}_parallel_hatch`))
                    .itemInputs(`gtceu:${tier}_parallel_hatch`)
                    .itemOutputs(outputs)
                    .duration(calculateDuration(outputs))
                    .EUt(2 * calculateVoltageMultiplier(outputs))
                    .category(GTRecipeCategories.MACERATOR_RECYCLING);
            }
        }

        TIERS.forEach(tier => {
            if (tier == "luv" || tier == "zpm" || tier == "uv") {
                LUVTOUV = true;
                UHVPLUS = false;
            }
            else if (tier == "uhv" || tier == "uev" || tier == "uiv") {
                LUVTOUV = false;
                UHVPLUS = true;
            }
            else {
                LUVTOUV = false;
                UHVPLUS = false;
            }

            macRecipe(tier, LUVTOUV, UHVPLUS);
            arcRecipe(tier, LUVTOUV, UHVPLUS);
        })
    })
})