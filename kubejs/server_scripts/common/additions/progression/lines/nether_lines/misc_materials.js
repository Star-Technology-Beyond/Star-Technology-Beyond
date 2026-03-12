ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.heat_chamber(id('nether_star_concentrate'))
        .itemInputs('4x kubejs:energized_nether_star_shard', '2x gtceu:nether_star_dust')
        .inputFluids('gtceu:energized_blitz 720','gtceu:energized_blizz 720','gtceu:energized_basalz 720','gtceu:energized_blaze 720')
        .outputFluids('gtceu:nether_star_concentrate 576')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.injection_mixer(id('dissipated_helish_concentrate'))
        .itemInputs('2x gtceu:plutonium_dust', '173x gtceu:warped_dust', '1x gtceu:astatine_dust', 
            '5x gtceu:netherite_dust', '3x thermal_extra:soul_sand_dust')
        .inputFluids('gtceu:nether_star_concentrate 144', 'gtceu:infernal_concentrate 250', 'gtceu:enriched_mystical_concentrate 625', 
            'gtceu:flerovium 288', 'gtceu:nether_air 18000')
        .outputFluids('gtceu:dissipated_helish_concentrate 7450')
        .duration(720)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.pressure_heat_chamber(id('helish_concentrate'))
        .itemInputs('3x kubejs:nether_tempered_shard')
        .inputFluids('gtceu:dissipated_helish_concentrate 4625')
        .itemOutputs('7x gtceu:netherrack_dust')
        .outputFluids('gtceu:helish_concentrate 504')
        .duration(560)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.hellforge(id('helish_star'))
        .inputFluids('gtceu:helish_concentrate 432')
        .itemInputs('gtceu:gravi_star')
        .itemOutputs('kubejs:helish_star')
        .outputFluids('start_core:infernal_tar 50')
        .blastFurnaceTemp(1000)
        .duration(240)
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UHV]);

    const WarpedMaceration = (type,size) => {
    event.recipes.gtceu.macerator(id(`warped_dust_nether_from_${type.split(':')[1]}`))
        .itemInputs(type)
        .itemOutputs(`${size}x gtceu:warped_dust`)
        .duration(100 * size)
        .EUt(GTValues.VA[GTValues.LuV]);
    };
    WarpedMaceration('#chipped:warped_roots', 1);
    WarpedMaceration('#chipped:warped_fungus', 1);
    WarpedMaceration('minecraft:warped_wart_block', 9);
    
    //Ancient Netherite
    event.recipes.gtceu.assembler(id('ancient_netherite_reinforced_mesh'))
        .itemInputs('1x kubejs:netherite_reinforced_mesh', '4x gtceu:ancient_netherite_rod', '1x gtceu:ancient_netherite_ingot')
        .inputFluids('gtceu:niobium_nitride 576')
        .itemOutputs('1x kubejs:ancient_netherite_reinforced_mesh')
        .duration(100)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.remove({id: /^blast_ancient_netherite.*/});
    event.recipes.gtceu.electric_blast_furnace(id('hot_ancient_netherite_ingot'))
        .itemInputs('4x minecraft:gold_ingot','4x gtceu:ancient_debris_dust')
        .inputFluids('gtceu:argon 2000')
        .itemOutputs('1x gtceu:hot_ancient_netherite_ingot')
        .blastFurnaceTemp(13300)
        .duration(2500)
        .EUt(GTValues.VHA[GTValues.UHV]*2/3);

    event.recipes.gtceu.macerator(id('ancient_debris_dust'))
        .itemInputs('minecraft:ancient_debris')
        .itemOutputs('4x gtceu:ancient_debris_dust')
        .duration(124)
        .EUt(380644);

    event.recipes.gtceu.autoclave(id('brimstone'))
        .itemInputs('kubejs:brimstone', '64x minecraft:netherrack')
        .inputFluids('gtceu:blaze 500')
        .itemOutputs('kubejs:brimstone')
        .chancedOutput('kubejs:brimstone', 6660, 0)
        .duration(240)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.autoclave(id('cryostone'))
        .itemInputs('kubejs:cryostone', '64x minecraft:netherrack')
        .inputFluids('gtceu:liquid_helium 500')
        .itemOutputs('kubejs:cryostone')
        .chancedOutput('kubejs:cryostone', 6660, 0)
        .duration(240)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.mixer(id('polonium_bismide'))
        .itemInputs('gtceu:polonium_dust', 'gtceu:bismuth_dust')
        .itemOutputs('2x gtceu:polonium_bismide_dust')
        .duration(600)
        .circuit(2)
        .EUt((GTValues.VHA[GTValues.UEV]));

    event.recipes.gtceu.vacuum_chemical_reaction_chamber(id(`oganesson`))
        .inputFluids(`gtceu:oganesson_plasma 500`)
        .outputFluids(`gtceu:oganesson 500`)
        .duration(100)
        .EUt(GTValues.VA[GTValues.UEV])
        .vacuumLevel(90);

});