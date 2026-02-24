global.not_hardmode(() => {
    ServerEvents.recipes(event => {
        const FUSIONCOILS = [
            "fusion_coil", "auxiliary_fusion_coil_mk1", "advanced_fusion_coil" , "auxiliary_fusion_coil_mk2"
        ];
        const FUSIONCOILDETAILS = global.fusionCoilRecycleDetails;

        event.remove({ input: "gtceu:fusion_coil", type: "gtceu:macerator" });
        event.remove({ input: "gtceu:fusion_coil", type: "gtceu:arc_furnace" });

        function getFusionCoilRecycleOutputs(coil) {
            const checkRecyclingCount = global.checkRecyclingCount;
            const componentRecycleMaterials = global.componentRecycleMaterials;
            let getComponentTotal;
            let materials = {};
            let recycleOutputs = [];
            let blockType;
            let counts = {};
            let materialTypes;
            if (!FUSIONCOILDETAILS[coil]) return;
            const {
                components,
                tierComponent,
                plateMaterial,
                plateCount
            } = FUSIONCOILDETAILS[coil];
            let auxCoilBool = (tierComponent == "zpm" || tierComponent == "uhv") ? true : false;

            if (tierComponent == "uhv" || tierComponent == "uev" || tierComponent == "uiv") {    
                getComponentTotal = global.getUHVPlusComponentTotal;
                materialTypes = ["plate", "prim", "cable", "sec", "tert"];
                blockType = "fusion_coil_UHVPLUS";
            }
            else if (tierComponent == "luv" || tierComponent == "zpm" || tierComponent == "uv") {
                getComponentTotal = global.getLUVToUVComponentTotal;
                materialTypes = ["plate", "prim", "cable", "wire", "foil"];
                blockType = "fusion_coil_LUVToUV"; 
            }
            else {
                recycleOutputs = [ "15x gtceu:tungsten_steel", "8x gtceu:samarium_iron_arsenic_oxide", `${plateCount}x ${plateMaterial}`,
                    "3x gtceu:naquadah", false, false, false, false];
                return recycleOutputs;
            }
            // gets final outputs
            let tempTotals = getComponentTotal(components);
            if (!componentRecycleMaterials[tierComponent]) return;
            materialTypes.forEach(type => {
                if (type == "plate") {
                    materials[type + "Material"] = plateMaterial;
                    counts[type + "Count"] = plateCount;
                }
                else {
                    materials[type + "Material"] = componentRecycleMaterials[tierComponent][type + "Material"];
                    counts[type + "Count"] = tempTotals[type + "Count"];
                } 
            });

            // checks final outputs
            let tempObj = checkRecyclingCount(counts, blockType, auxCoilBool, true, false);

            // sorts the final outputs
            let checkCount = 0;
            let position = 0;
            let flag = false;

            while (!flag) {
                if (checkCount == 4) {
                    flag = true;
                }
                if (tempObj.totals[tempObj.outputOrder[position] + "Count"] != 0) {
                    recycleOutputs[position] = `${tempObj.totals[tempObj.outputOrder[position] + "Count"]}x ${materials[tempObj.outputOrder[position] + "Material"]}`;
                    position++;
                }
                
                checkCount++;
            }
            for (let n = 0; n < 4; n++) {
                recycleOutputs[n+5] = tempObj.blockBools[tempObj.outputOrder[n] + "Block"];
            }

            return recycleOutputs;
        }

                        
        const arcRecipe = (coil) => {
            const id = global.id;
            const calculateDuration = global.calculateRecyclingDuration;
            const getFinalOutputs = global.getFinalRecycleOutputs;
            const prefix = FUSIONCOILDETAILS[coil].prefix;
            const outputs = getFinalOutputs(getFusionCoilRecycleOutputs(coil), "fusion_coil", false, false);

            event.recipes.gtceu.arc_furnace(id(`arc_${coil}`))
                .itemInputs(`${ prefix + coil }`)
                .itemOutputs(outputs)
                .duration(calculateDuration(outputs))
                .EUt(GTValues.VA[GTValues.LV])
                .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);
        }

        const macRecipe = (coil) => {
            const id = global.id;           
            const calculateDuration = global.calculateRecyclingDuration;
            const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;
            const getFinalOutputs = global.getFinalRecycleOutputs;
            const prefix = FUSIONCOILDETAILS[coil].prefix;
            const outputs = getFinalOutputs(getFusionCoilRecycleOutputs(coil), "fusion_coil", true, false);

            event.recipes.gtceu.macerator(id(`macerate_${coil}`))
                .itemInputs(`${prefix+coil}`)
                .itemOutputs(outputs)
                .duration(calculateDuration(outputs))
                .EUt(2 * calculateVoltageMultiplier(outputs))
                .category(GTRecipeCategories.MACERATOR_RECYCLING);
        }

        FUSIONCOILS.forEach(coil => {
            arcRecipe(coil);
            macRecipe(coil);
        })
    })
})