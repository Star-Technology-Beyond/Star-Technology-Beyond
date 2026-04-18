ServerEvents.recipes(event => {

    const id = global.id;


    // Runic Convergence Infusion Production

    /*
        *Nr*(SO₄)₃(OH)₂ - Netherite Trisulfate Complex
        [*Nr*(NH₃)₆]SO₄ - Netherite Hexammine Sulfate
        *Nr*₂N₃O₄ - Voidic Nitride
        *Nr*(OH)₄ - Netherite Tetrahydroxide
        *Nr*FSi₂O₄ - Astral Fluorosilicate
        *Nr*₃N₃Si₂BO8F - Primordial Nitrosilicate
        2Mg₃N₂ - Magnesium Nitride
        *Nr*₃Mg₆N₇Si₂BO8F - Runic Convergence Infusion
    */

    const lcr = event.recipes.gtceu.large_chemical_reactor;
    const vcr = event.recipes.gtceu.vacuum_chemical_reaction_chamber;

    lcr(id('netherite_trisulfate_complex'))
        .itemInputs('gtceu:pure_netherite_dust')
        .inputFluids('gtceu:sulfuric_acid 3000', 'minecraft:water 2000')
        .outputFluids('gtceu:netherite_trisulfate_complex 1000', 'gtceu:hydrogen 8000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);
    
    lcr(id('netherite_hexammine_sulfate'))
        .inputFluids('gtceu:netherite_trisulfate_complex 1000', 'gtceu:ammonia 6000', 'gtceu:hydrogen 6000')
        .itemOutputs('30x gtceu:netherite_hexammine_sulfate_dust')
        .outputFluids('gtceu:sulfuric_acid 2000', 'minecraft:water 2000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);
    
    lcr(id('voidic_nitride'))
        .itemInputs('30x gtceu:netherite_hexammine_sulfate_dust')
        .inputFluids('gtceu:nitrobenzene 8000', 'gtceu:hydrogen 16000')
        .outputFluids('gtceu:voidic_nitride 1000', 'gtceu:ammonia 8000', 'gtceu:phenol 6000', 'gtceu:sulfuric_acid 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    lcr(id('netherite_tetrahydroxide'))
        .itemInputs('15x gtceu:calcium_hydroxide_dust')
        .inputFluids('gtceu:netherite_trisulfate_complex 1000', 'gtceu:hydrogen 4000')
        .itemOutputs('9x gtceu:netherite_tetrahydroxide_dust', '18x gtceu:calcium_sulfate_dust')  // * 6
        .outputFluids('minecraft:water 4000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    lcr(id('astral_fluorosilicate'))
        .itemInputs('9x gtceu:netherite_tetrahydroxide_dust', '2x gtceu:silicon_dioxide_dust')
        .inputFluids('gtceu:hydrofluoric_acid 4000')
        .outputFluids('gtceu:astral_fluorosilicate 1000', 'minecraft:water 4000', 'gtceu:hydrofluoric_acid 3000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.mixer(id('primordial_nitrosilicate'))
        .inputFluids('gtceu:voidic_nitride 1000', 'gtceu:astral_fluorosilicate 1000')
        .outputFluids('gtceu:primordial_nitrosilicate 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    lcr(id('magnesium_nitride'))
        .itemInputs('3x gtceu:magnesium_dust')
        .inputFluids('gtceu:nitrogen 2000')
        .outputFluids('gtceu:magnesium_nitride 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    vcr(id('runic_convergence_infusion'))
        .notConsumable('7x gtceu:ancient_runicalium_bolt')
        .inputFluids('gtceu:primordial_nitrosilicate 1000', 'gtceu:magnesium_nitride 1000')
        .outputFluids('gtceu:runic_convergence_infusion 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM])
        .vacuumLevel(80);

});