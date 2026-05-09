ServerEvents.recipes(event => {
    const id = global.id;
    /*
        1b Bisphenol A + 2 Sodium hydroxide dust = 2b Water + 1b Diphenoxide
        1b Carbon Monoxide + 2b Chlorine + Activated carbon (NC) = 1b Phosgene
        1b Phosgene + 1b Diphenoxide = 2 Salt + 1b Polycarbonate
    */
    const lcr = event.recipes.gtceu.large_chemical_reactor;

    lcr(id(`sodium_diphenoxide_dust`))
        .itemInputs(`2x gtceu:sodium_hydroxide_dust`)
        .inputFluids(`gtceu:bisphenol_a 1000`)
        .itemOutputs(`1x gtceu:sodium_diphenoxide_dust`)
        .outputFluids(`minecraft:water 2000`)
        .duration(300)
        .circuit(2)
        .EUt(GTValues.VA[GTValues.LuV]);

    lcr(id(`phosgene`))
        .notConsumable(`gtceu:activated_carbon_dust`)
        .inputFluids(`gtceu:carbon_monoxide 1000`, `gtceu:chlorine 2000`)
        .outputFluids(`gtceu:phosgene 1000`)
        .duration(100)
        .EUt(GTValues.VHA[GTValues.IV]);

    lcr(id(`polycarbonate`))
        .itemInputs(`1x gtceu:sodium_diphenoxide_dust`)
        .inputFluids(`gtceu:phosgene 1000`)
        .itemOutputs(`2x gtceu:salt_dust`)
        .outputFluids(`gtceu:polycarbonate 1000`)
        .duration(600)
        .EUt(GTValues.VA[GTValues.ZPM]);
})