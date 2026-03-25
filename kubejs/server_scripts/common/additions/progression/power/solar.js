ServerEvents.recipes(event => {
    const id = global.id;
    const getRecipeTier = global.getRecipeTier;

    const assembler = event.recipes.gtceu.assembler;
    const polarizer = event.recipes.gtceu.polarizer;
    const assline = event.recipes.gtceu.assembly_line;

    const getSmdDetails = (smdType) => {
        const count = (smdType == 'living_smd') ? 16 : (smdType == 'advanced_smd') ? 4 : 1;
        const recipeTier = (smdType == 'living_smd') ? 'ZPM' : (smdType == 'advanced_smd') ? 'IV' : 'HV';
        const prefix = (smdType == 'living_smd') ? 'kubejs:' : 'gtceu:';

        const smdDetails = {
            count: count,
            consTier: recipeTier,
            prefix: prefix
        }

        return smdDetails;
    }

    const getEpoxyMultiplier = (tier) => {
        if (tier == 'uhv' || tier == 'uv') {
            return 4;
        }
        else if (tier == 'zpm' || tier == 'luv') {
            return 2;
        }
        else {
            return 1;
        }
    }

    //Photovoltaic Cells and Panels
    let recipe;
    ['ev', 'iv', 'luv', 'zpm', 'uv', 'uhv'].forEach((tier, index, tiers) => {
        
        if (tier == 'ev') {
            //Basic Cores
            ['smd', 'advanced_smd', 'living_smd'].forEach(smdType => {
                const {
                    count,
                    consTier,
                    prefix
                } = getSmdDetails(smdType);

                assembler(id(`ev_energy_core_from_${smdType}`))
                    .itemInputs('3x gtceu:iron_foil', `2x ${prefix + smdType}_diode`, `2x ${prefix + smdType}_capacitor`)
                    .inputFluids('gtceu:glass 288')
                    .itemOutputs(`${count}x kubejs:ev_energy_core`)
                    .duration(400)
                    .EUt(GTValues.VHA[GTValues[consTier]]);

            });
        }
        else {
            //Other Cores
            polarizer(id(`${tier}_energy_core`))
                .itemInputs(`kubejs:${tiers[index - 1]}_energy_core`)
                .itemOutputs(`kubejs:${tier}_energy_core`)
                .duration(1200)
                .EUt(GTValues.VHA[GTValues[getRecipeTier(tiers[index - 1])]]);

        }

        const {
            tierMaterial,
            cable,
            solder,
            superconductor
        } = global.componentMaterials[tier].materials;
        
        //Photovoltaic Cells
        recipe = assembler(id(`${tier}_photovoltaic_cell`));

        if (tier != 'ev') {
            recipe.itemInputs(`kubejs:${tiers[index - 1]}_photovoltaic_cell`);
        }

        recipe
            .itemInputs(
                `gtceu:double_${tierMaterial}_plate`, `kubejs:${tier}_energy_core`, `4x gtceu:fine_${superconductor}_wire`, 
                `#gtceu:circuits/${tier}` 
            )
            .inputFluids(`gtceu:${solder} 576`)
            .itemOutputs(`kubejs:${tier}_photovoltaic_cell`)
            .duration(400)
            .EUt(GTValues.VHA[GTValues[getRecipeTier(tier)]]);

        //Solar Cells
        assembler(id(`${tier}_solar_cell`))
            .itemInputs(
                `2x kubejs:${tier}_photovoltaic_cell`, `gtceu:${tierMaterial}_frame`, `2x gtceu:${cable}_double_cable`, 
                `#gtceu:circuits/${tier}`
            )
            .inputFluids(`gtceu:epoxy ${288 * getEpoxyMultiplier(tier)}`)
            .itemOutputs(Item.of(`2x start_core:${tier}_solar_cell`))
            .duration(600)
            .EUt(GTValues.VHA[GTValues[getRecipeTier(tier)]]);
            
    });

    const getControllerDetails = (tier) => {
        const cableMultiplier = (tier == 'luv' || tier == 'uhv') ? 4 : (tier == 'iv' || tier == 'uv') ? 2 : 1;
        const lubeMultiplier = (tier == 'uhv' || tier == 'uv') ? 8 : (tier == 'luv') ? 4 : (tier == 'iv') ? 2 : 1;
        const pipeMaterial = (tier == 'uhv') ? 'poly_34_ethylenedioxythiophene_polystyrene_sulfate' : 'polyether_ether_ketone';
        const researchItem = (tier == 'uhv') ? 'start_core:uv_solar_array' : 'start_core:luv_solar_panel';
        const waterMultiplier = (tier == 'uhv') ? 4 : 1;
        const cwuT = (tier == 'uhv') ? 160 : 128;

        const controllerDetails = {
            cableMultiplier: cableMultiplier,
            lubeMultiplier: lubeMultiplier,
            pipeMaterial: pipeMaterial,
            researchItem: researchItem,
            waterMultiplier: waterMultiplier,
            cwuT: cwuT
        }

        return controllerDetails;
    }
    
    //Solar Panels and Arrays
    ['ev', 'iv', 'luv', 'uv', 'uhv', 'uev'].forEach((tier, index, tiers) => {
        if (tier == 'uev') return; //in list purely for circuit tier

        const {
            tierMaterial,
            wireMechanical,
            lubricant,
            solder,
            cable,
            battery
        } = global.componentMaterials[tier].materials;

        const {
            cableMultiplier,
            lubeMultiplier,
            pipeMaterial,
            researchItem,
            waterMultiplier,
            cwuT
        } = getControllerDetails(tier);

        //Solar Panels
        if (tier == 'ev' || tier == 'iv' || tier == 'luv') {
            assembler(id(`${tier}_solar_panel`))
                .itemInputs(
                    `4x gtceu:${tierMaterial}_frame`, Item.of(`gtceu:${battery}`), `${8 * cableMultiplier}x gtceu:${cable}_double_cable`,
                    `4x gtceu:${tier}_emitter`, `4x gtceu:${tier}_sensor`, `2x #gtceu:circuits/${tiers[index + 1]}`
                )
                .inputFluids(`gtceu:${lubricant} ${2000 * lubeMultiplier}`)
                .itemOutputs(`start_core:${tier}_solar_panel`)
                .duration(600)
                .EUt(GTValues.VHA[GTValues[getRecipeTier(tier)]]);

        }
        //Solar Arrays
        else {
            assline(id(`${tier}_solar_array`))
                .itemInputs(
                    `4x gtceu:${tierMaterial}_frame`, Item.of(`gtceu:${battery}`), `${8 * cableMultiplier}x gtceu:${cable}_double_cable`,
                    `8x gtceu:${tier}_emitter`, `8x gtceu:${tier}_sensor`, `gtceu:${pipeMaterial}_tiny_fluid_pipe`, 
                    `64x gtceu:fine_${wireMechanical}_wire`, `64x gtceu:fine_${wireMechanical}_wire`, `2x #gtceu:circuits/${tiers[index + 1]}`
                )
                .inputFluids(
                    `gtceu:deionized_water ${25000 * waterMultiplier}`, `gtceu:${lubricant} ${2000 * lubeMultiplier}`, `gtceu:${solder} 3000`
                )
                .itemOutputs(`start_core:${tier}_solar_array`)
                .duration(600)
                .stationResearch(
                    researchRecipeBuilder => researchRecipeBuilder
                        .researchStack(Item.of(researchItem))
                        .EUt(GTValues.VHA[GTValues[getRecipeTier(tier)]])
                        .CWUt(cwuT)
                )
                .EUt(GTValues.VHA[GTValues[getRecipeTier(tier)]]);

        }
    });

    
});