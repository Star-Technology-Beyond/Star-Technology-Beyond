global.not_hardmode(() => {
    ServerEvents.recipes(event => {
        const TIERS = [
            "uv", "uhv", "uev", "uiv"
        ]
        const DREAMLINKDETAILS = {
            A2: {
                amperage: 2,
                coverCount: 1,
                cableCount: 2
            },
            A4: {
                amperage: 4,
                coverCount: 2,
                cableCount: 4
            },
            A16: {
                amperage: 16,
                coverCount: 8,
                cableCount: 8
            },
            A64: {
                amperage: 64,
                coverCount: 32,
                cableCount: 16
            }
        }

        function doDreamlinkRecycles(materials, amperage, coverCount, cableCount) {

        }

        const arcRecipe = (tier) => {
            const id = global.id;
            const componentRecycles = global.componentRecycles;
            const calculateDuration = global.calculateRecyclingDuration;
            const getFinalOutputs = global.getFinalRecycleOutputs;
            const coverCounts = (tier == "uv") ? global.LUVToUVComponentRecycleCounts.dreamlink_cover : global.UHVPlusComponentRecycleCounts.dreamlink_cover;
            const materials = {
                casing: "",
                compPrim: "",
                cable: "",
                compSec: "",
                compTert: "",
            }
                      
            switch (tier) {
                case "uv": {
                    const CRuv = componentRecycles.uv;
                    materials.casing = "gtceu:darmstadtium";
                    materials.compPrim = CRuv.primMaterial;
                    materials.cable = CRuv.cableMaterial;
                    materials.compSec = CRuv.wireMaterial;
                    materials.compTert = CRuv.foilMaterial;
                    break;
                }
                case "uhv": {
                    const CRuhv = componentRecycles.uhv;
                    materials.casing = "gtceu:neutronium";
                    materials.compPrim = CRuhv.primMaterial;
                    materials.cable = CRuhv.cableMaterial;
                    materials.compSec = CRuhv.secMaterial;
                    materials.compTert = CRuhv.tertMaterial;
                    break;
                }
                case "uev": {
                    const CRuev = componentRecycles.uev;
                    materials.compPrim = CRuev.primMaterial;
                    materials.cable = CRuev.cableMaterial;
                    materials.compSec = CRuev.secMaterial;
                    materials.compTert = CRuev.tertMaterial;
                    break;
                }
                case "uiv": {
                    const CRuiv = componentRecycles.uiv;
                    materials.compPrim = CRuiv.primMaterial;
                    materials.cable = CRuiv.cableMaterial;
                    materials.compSec = CRuiv.secMaterial;
                    materials.compTert = CRuiv.tertMaterial;
                    break;
                }
            }

            const secCount = (tier == "uv") ? coverCounts.wireCount : coverCounts.secCount;
            const tertCount = (tier == "uv") ? coverCounts.foilCount : coverCounts.tertCount;
            const coverOutputs = getFinalOutputs([`${coverCounts.primCount}x ${materials.compPrim}`, `${coverCounts.cableCount}x ${materials.cable}`, 
                `${secCount}x ${materials.compSec}`, `${tertCount}x ${materials.compTert}`, false, false, false, false],
                "dream_cover", false, false);
            
            console.log(`outputs: ${coverOutputs}`);
            event.recipes.gtceu.arc_furnace(id(`arc_${tier}_2a_dream_link_cover_item`))
                .itemInputs(`start_core:${tier}_2a_dream_link_cover_item`)
                .itemOutputs(coverOutputs)
                .duration(calculateDuration(coverOutputs))
                .EUt(GTValues.VA[GTValues.LV])
                .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);

        }

        const macRecipe = (tier) => {
            const id = global.id;
            const componentRecycles = global.componentRecycles;
            const calculateDuration = global.calculateRecyclingDuration;
            const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;
            const getFinalOutputs = global.getFinalRecycleOutputs;
            const coverCounts = (tier == "uv") ? global.LUVToUVComponentRecycleCounts.dreamlink_cover : global.UHVPlusComponentRecycleCounts.dreamlink_cover;
            const materials = {
                casing: "",
                compPrim: "",
                cable: "",
                compSec: "",
                compTert: "",
            }
                      
            switch (tier) {
                case "uv": {
                    const CRuv = componentRecycles.uv;
                    materials.casing = "gtceu:darmstadtium";
                    materials.compPrim = CRuv.primMaterial;
                    materials.cable = CRuv.cableMaterial;
                    materials.compSec = CRuv.wireMaterial;
                    materials.compTert = CRuv.foilMaterial;
                    break;
                }
                case "uhv": {
                    const CRuhv = componentRecycles.uhv;
                    materials.casing = "gtceu:neutronium";
                    materials.compPrim = CRuhv.primMaterial;
                    materials.cable = CRuhv.cableMaterial;
                    materials.compSec = CRuhv.secMaterial;
                    materials.compTert = CRuhv.tertMaterial;
                    break;
                }
                case "uev": {
                    const CRuev = componentRecycles.uev;
                    materials.compPrim = CRuev.primMaterial;
                    materials.cable = CRuev.cableMaterial;
                    materials.compSec = CRuev.secMaterial;
                    materials.compTert = CRuev.tertMaterial;
                    break;
                }
                case "uiv": {
                    const CRuiv = componentRecycles.uiv;
                    materials.compPrim = CRuiv.primMaterial;
                    materials.cable = CRuiv.cableMaterial;
                    materials.compSec = CRuiv.secMaterial;
                    materials.compTert = CRuiv.tertMaterial;
                    break;
                }
            }

            const secCount = (tier == "uv") ? coverCounts.wireCount : coverCounts.secCount;
            const tertCount = (tier == "uv") ? coverCounts.foilCount : coverCounts.tertCount;
            const coverOutputs = getFinalOutputs([`${coverCounts.primCount}x ${materials.compPrim}`, `${coverCounts.cableCount}x ${materials.cable}`, 
                `${secCount}x ${materials.compSec}`, `${tertCount}x ${materials.compTert}`, false, false, false, false],
                "dream_cover", true, false);
            
            console.log(`outputs: ${coverOutputs}`);
            event.recipes.gtceu.macerator(id(`macerate_${tier}_2a_dream_link_cover_item`))
                .itemInputs(`start_core:${tier}_2a_dream_link_cover_item`)
                .itemOutputs(coverOutputs)
                .duration(calculateDuration(coverOutputs))
                .EUt(2 * calculateVoltageMultiplier(coverOutputs))
                .category(GTRecipeCategories.MACERATOR_RECYCLING);
        }
        
        TIERS.forEach(tier => {
            arcRecipe(tier);
            // macRecipe(tier);
        })
    })
})