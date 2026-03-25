ServerEvents.recipes(event => {
    const id = global.id;

    /*
    LCR 1b benzene + 2b ethylene = 1b divinylbenzene
    LCR 10b styrene + 10b oxygen + 1b divinylbenzene = 40 dry ion exchange resin beads
    Chem bath 1b distilled water + 5 dry ion exchange resin beads = 5 ion exchange resin beads

    Cyclonic sifter 40b distilled water + carbon mesh with 50% consume rate -> 20b purified water 
    VCR 10b purified water + 8 ion exchange resin beads -> 10b acidic water + 5 dirty ion exchange resin beads
    Distillation tower (sterile) 10b acidic water ->  0.25b water + 1b purified water + 0.5b distilled water + 8b de-ionised water 
    Chem bath 4 dirty ion exchange resin beads + 1b sulfuric acid = 4 dry ion exchange resin beads
    */

    const lcr = event.recipes.gtceu.large_chemical_reactor;
    const cb = event.recipes.gtceu.chemical_bath;
    const sifter = event.recipes.gtceu.cyclonic_sifter;
    const vcr = event.recipes.gtceu.vacuum_chemical_reaction_chamber;
    const dt = event.recipes.gtceu.distillation_tower;
    const beads = "ion_exchange_resin_beads";

    lcr(id(`divinylbenzene`))
        .inputFluids(`gtceu:benzene 1000`, `gtceu:ethylene 2000`)
        .outputFluids(`gtceu:divinylbenzene 1000`, `gtceu:hydrogen 4000`)
        .duration(80)
        .EUt(GTValues.VA[GTValues.LuV]);

    lcr(id(`dry_${beads}`))
        .inputFluids(`gtceu:styrene 10000`, `gtceu:oxygen 10000`, `gtceu:divinylbenzene 1000`)
        .itemOutputs(`40x kubejs:dry_${beads}`)
        .duration(600)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    cb(id(beads))
        .inputFluids(`gtceu:distilled_water 1000`)
        .itemInputs(`5x kubejs:dry_${beads}`)
        .itemOutputs(`5x kubejs:${beads}`)
        .duration(50)
        .EUt(GTValues.VHA[GTValues.LuV]);

    sifter(id(`purified_water`))
        .chancedInput(`1x gtceu:carbon_fiber_mesh`, 5000, 0)
        .inputFluids(`gtceu:distilled_water 40000`)
        .outputFluids(`gtceu:purified_water 20000`)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UV]);

    vcr(id(`acidic_water`))
        .inputFluids(`gtceu:purified_water 10000`)
        .itemInputs(`8x kubejs:${beads}`)
        .outputFluids(`gtceu:acidic_water 10000`)
        .itemOutputs(`5x kubejs:dirty_${beads}`)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.UV])
        .vacuumLevel(85);

    dt(id(`deionized_water`))
        .inputFluids(`gtceu:acidic_water 10000`)
        .outputFluids(`minecraft:water 250`, `gtceu:purified_water 1000`, `gtceu:distilled_water 500`, `gtceu:deionized_water 8000`)
        .duration(200)
        .disableDistilleryRecipes(true)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VHA[GTValues.UV]);

    cb(id(`dry_${beads}`))
        .inputFluids(`gtceu:sulfuric_acid 1000`)
        .itemInputs(`4x kubejs:dirty_${beads}`)
        .itemOutputs(`4x kubejs:dry_${beads}`)
        .duration(100)
        .EUt(GTValues.VHA[GTValues.LuV]);
    
});