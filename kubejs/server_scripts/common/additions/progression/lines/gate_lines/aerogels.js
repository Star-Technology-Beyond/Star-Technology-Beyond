ServerEvents.recipes (event => {

    const id = global.id;

    /*  
    LCR 1b Seed oil + 3b Steam = 1b Glycerol + 3b Linoleic acid
    LCR 1 Sodium hydroxide dust + 1b Linoleic acid = Sodium linoleate
    LCR Tiny sodium linoleate + 2b Ethanol + 2b Water = 4b Aerogel solvent mixture (ASM)

    LCR 1 Silicon dust + 4b Chlorine = 1b Silicon tetrachloride (SiCl4)
    LCR 4b Ethanol + 1b Silicon tetrachloride(SiCl4) = 1b Tetraethyl orthosilicate (TEOS)

    LCR 3b ASM + 1b TEOS + 1b HCl = 4b Aerogel precursor solution (APS) + 1b Diluted HCl
    Fluid Solidify(ingot) 1b APS = 1 Wet aerogel ingot 
    VCR 1 Wet Aerogel Ingot = 500mb Water + 500mb Ethanol + 1 Aerogel ingot
    */

    const lcr = event.recipes.gtceu.large_chemical_reactor;
    const fs = event.recipes.gtceu.fluid_solidifier;
    // const vcr = event.recipes.start_core.vacuum_chemical_reaction_chamber;
    
    lcr(id(`linoleic_acid`))
        .inputFluids(`gtceu:seed_oil 1000`, `gtceu:steam 3000`)
        .outputFluids(`gtceu:glycerol 1000`, `gtceu:linoleic_acid 3000`)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    lcr(id(`sodium_linoleate_dust`))
        .itemInputs(`gtceu:sodium_hydroxide_dust`)
        .inputFluids(`gtceu:linoleic_acid 1000`)
        .itemOutputs(`gtceu:sodium_linoleate_dust`)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    lcr(id(`aerogel_solvent_mixture`))
        .itemInputs(`gtceu:tiny_sodium_linoleate_dust`)
        .inputFluids(`gtceu:ethanol 2000`, `minecraft:water 2000`)
        .outputFluids(`gtceu:aerogel_solvent_mixture 4000`)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    lcr(id(`silicon_tetrachloride`))
        .itemInputs(`gtceu:silicon_dust`)
        .inputFluids(`gtceu:chlorine 4000`)
        .outputFluids(`gtceu:silicon_tetrachloride 1000`)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);
    
    lcr(id(`tetraethyl_orthosilicate`))
        .inputFluids(`gtceu:ethanol 4000`, `gtceu:silicon_tetrachloride 1000`)
        .outputFluids(`gtceu:tetraethyl_orthosilicate 1000`)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    lcr(id(`aerogel_precursor_solution`))
        .inputFluids(`gtceu:aerogel_solvent_mixture 3000`, `gtceu:tetraethyl_orthosilicate 1000`, `gtceu:hydrochloric_acid 1000`)
        .outputFluids(`gtceu:aerogel_precursor_solution 1000`, `gtceu:diluted_hydrochloric_acid 1000`)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    fs(id(`wet_aerogel_ingot`))
        .notConsumable(`gtceu:ingot_casting_mold`)
        .inputFluids(`gtceu:aerogel_precursor_solution 1000`)
        .itemOutputs(`gtceu:wet_aerogel_ingot`)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    // vcr(id(`aerogel_ingot`))
    //     .nonConsumable(`gtceu:ingot_casting_mold`)
    //     .inputFluids(`gtceu:aerogel_solvent_mixture 3000`, `gtceu:tetraethyl_orthosilicate 1000`, `gtceu:hydrochloric_acid 1000`)
    //     .outputFluid(`gtceu:aerogel_precursor_solution 1000`)
    //     .duration(200)
    //     .EUt(GTValues.VHA[GTValues.ZPM]);


    //dust removal
    event.remove({output: `gtceu:aerogel_dust`});
    event.remove({output: `gtceu:wet_aerogel_dust`});
    event.remove({output: `gtceu:wet_aerogel_nugget`});
    
})