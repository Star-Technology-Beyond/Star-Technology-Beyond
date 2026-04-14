ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.assembly_line(id('exotic_rock_crusher'))
        .itemInputs('gtceu:large_material_press', '8x gtceu:uv_electric_piston', '4x gtceu:heat_vent', '4x gtceu:silicon_bronze_frame', '4x #gtceu:circuits/uv',
         '2x gtceu:titan_steel_ultradense_plate', '8x gtceu:titanium_carbide_plate', '4x gtceu:hsla_steel_plate' )
        .inputFluids('gtceu:titan_steel 1296', 'gtceu:soldering_alloy 3744')
        .itemOutputs('gtceu:exotic_tectonic_formation_apparatus')
        .duration(2400)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:uv_rock_crusher'))
                .EUt(GTValues.VHA[GTValues.ZPM])
                .CWUt(24)
            )
        .EUt(GTValues.VHA[GTValues.UV]);

});