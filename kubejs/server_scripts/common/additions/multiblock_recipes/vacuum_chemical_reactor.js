ServerEvents.recipes(event => {
    
    const id = global.id;
    
    const pumpBlockTiers = (tier, rotor, casing) => {

        let pumpRecipe = event.shaped(`start_core:${tier}_vacuum_pump` , [
            'ABA',
            'CDC',
            'ABA'
        ], {

            A: `gtceu:double_${casing}_plate`,
            B: `gtceu:${rotor}_rotor`,
            C: `gtceu:${tier}_electric_pump`,
            D: `gtceu:${tier}_rotor_holder`

        }).id(`gtceu:${tier}_vacuum_pump_block`);
    };

    pumpBlockTiers('zpm', 'dragonsteel', 'enriched_naquadah');
    pumpBlockTiers('uv', 'prismalium', 'darmstadtium');
    pumpBlockTiers('uhv', 'stellarium', 'neutronium');
    pumpBlockTiers('uev', 'ancient_runicalium', 'mythrolic_alloy');    
    pumpBlockTiers('uiv', 'draco_abyssal', 'chaotixic_alloy');

    event.recipes.gtceu.assembly_line(id('vacuum_chemical_reaction_chamber_controller'))
       .itemInputs( '8x gtceu:enriched_naquadah_frame', 'gtceu:extreme_chemical_reactor', '4x #gtceu:circuits/zpm', '4x gtceu:zpm_electric_pump', '4x gtceu:enriched_naquadah_quadruple_fluid_pipe', 
           '4x gtceu:polycarbonate_huge_fluid_pipe', '4x gtceu:polycarbonate_large_fluid_pipe')
        .inputFluids('gtceu:polycarbonate 1152', 'gtceu:indium_tin_lead_cadmium_soldering_alloy 2304')
        .itemOutputs('gtceu:vacuum_chemical_reaction_chamber')
        .duration(2000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
        .researchStack(Item.of('gtceu:zpm_gas_collector'))
        .EUt(GTValues.VHA[GTValues.ZPM])
        .CWUt(2424))
       .EUt(GTValues.VHA[GTValues.ZPM]);
        
});