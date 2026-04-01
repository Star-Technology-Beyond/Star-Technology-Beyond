ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.assembly_line(id('component_part_assembly'))
        .itemInputs('gtceu:zpm_assembler','8x gtceu:zpm_robot_arm','8x gtceu:zpm_conveyor_module',
            '8x gtceu:zpm_electric_pump', '4x #gtceu:circuits/uv', '6x #gtceu:circuits/zpm', '8x #gtceu:circuits/luv')
        .inputFluids('gtceu:soldering_alloy 12528', 'gtceu:lubricant 2500')
        .itemOutputs('gtceu:component_part_assembly')
        .duration(1800)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:zpm_assembler'))
                .EUt(GTValues.VHA[GTValues.ZPM])
                .CWUt(16)
            )
        .EUt(GTValues.VHA[GTValues.ZPM]);
    
});