ServerEvents.recipes(event => {
    const id = global.id;

    const cpa = 'component_part_assembly';
    const assline = 'assembly_line';
    const lcr = event.recipes.gtceu.large_chemical_reactor;
    const cut = event.recipes.gtceu.cutter;
    const assembler = event.recipes.gtceu.assembler;
    const circAss = event.recipes.gtceu.circuit_assembler;
    const rotor = event.recipes.gtceu.large_rotor_machine;
    const heat = event.recipes.gtceu.heat_chamber;
    const stargateComponent = event.recipes.gtceu.stargate_component_assembly;

    // Classic Gate Components
    const researchBuilder = global.researchBuilder;
    // global.researchBuilder = (machineType, recId, inputsI, inputsF, outputsI, duration, cwuT, totalCWU, euT, researched)

    
//         //KMRU
//         event.recipes.gtceu.component_part_synthesis_forge(id(`despair_and_agony`))
//             .itemInputs('4x gtceu:uiv_circuit_assembler','8x gtceu:dense_nyanium_plate','128x gtceu:red_alloy_single_cable','128x gtceu:lead_single_cable',
//                 '999x komarumod:komaru_powder','999x komarumod:komaru_powder','999x komarumod:komaru_powder','999x komarumod:komaru_powder')
//             .inputFluids('gtceu:maxwellium 4444', 'gtceu:pure_dragon_breath 5000')
//             .itemOutputs(`kubejs:worries_about_it`)
//             .duration(222836420)
//             .stationResearch(
//                 researchRecipeBuilder => researchRecipeBuilder
//                     .researchStack(Item.of(`komarumod:komaru_spawn_egg`))
//                     .EUt(GTValues.VHA[GTValues.UXV])
//                     .CWUt(500)
//             )            
//             .EUt(1)
//             .cleanroom(CleanroomType.getByName('stabilized'));

//         event.recipes.gtceu.research_station(`1_x_komarumod_komaru_spawn_egg`)
//             .itemInputs('start_core:component_data_core')
//             .itemInputs(`komarumod:komaru_spawn_egg`)
//             .itemOutputs(Item.of(`start_core:component_data_core`, `{assembly_line_research:{research_id:"1x_komarumod_komaru_spawn_egg",research_type:"gtceu:component_part_synthesis_forge"}}`))
//             .CWUt(500)
//             .totalCWU(1000000)
//             .EUt(GTValues.VHA[GTValues.UXV]);

//         //Gate Crafting
//         const GateCraft = (gate,fluid1,fluid2,fluid3,eut,sgGate) => {
//             let B = `kubejs:${gate}_stargate_base_block`;
//             let R = `kubejs:${gate}_stargate_ring_block`;
//             let C = `kubejs:${gate}_stargate_chevron_block`;
//         event.recipes.gtceu.gate_assembly(id(`${gate}_gate`))
//             .itemInputs(B,C,R,R,C,R,R,C,R,R,C,R,C,R,C,R,R,C,R,R,C,R,R,C)
//             .perTick(true)
//             .inputFluids(fluid1)
//             .inputFluids(fluid2)
//             .inputFluids(fluid3)
//             .perTick(false)
//             .itemOutputs(`sgjourney:${sgGate}_stargate {BlockEntityTag:{LocalPointOfOrigin:1b}}`)
//             .duration(64000)
//             .EUt(eut);

//             //[--][14][13][12][11][10][--]
//             //[16][15][--][--][--][09][08]
//             //[17][--][--][--][--][--][07]
//             //[18][--][--][OP][--][--][06]
//             //[19][--][--][--][--][--][05]
//             //[20][21][--][--][--][03][04]
//             //[--][22][23][00][01][02][--]
//         }
//         GateCraft('ancient', 'gtceu:naquadria 16', 'gtceu:liquid_nether_air 50', 'gtceu:liquid_ender_air 50', GTValues.VA[GTValues.UEV],'milky_way');

//         // Maxwell Line
//         event.remove({ mod: 'placeablemaxwell' });
//         const Gato = (type, rod1, rod2, dye1, dye2) => {
//             let B = '16x kubejs:runic_energized_transportation_plating';
//             let C = '16x kubejs:runic_energized_pathway_plating';
//             let R = `2x kubejs:${rod1}_stargate_rod`;
//             let D = `2x kubejs:${rod2}_stargate_rod`;
//             let F = '8x gtceu:uiv_field_generator';
//             let A = '8x gtceu:uiv_robot_arm';
//             let H = '64x #forge:cooked_fishes'
//         event.recipes.gtceu.gate_assembly(id(`${type}`))
//             .itemInputs(B,R,A,H,F,D,C,D,F,H,A,R,B,R,A,H,F,D,C,D,F,H,A,R)
//             .inputFluids('gtceu:nyanium 72000', `gtceu:${dye1}_dye 1000000`, `gtceu:${dye2}_dye 200000`)
//             .itemOutputs(`placeablemaxwell:${type}`)
//             .duration(32000)
//             .EUt(GTValues.VA[GTValues.UIV]);
//         };
//         Gato('valenok', 'abyssal', 'abyssal', 'light_gray', 'gray');
//         Gato('mars', 'abyssal', 'infernal', 'white', 'orange');
//         Gato('poomba', 'infernal', 'abyssal', 'brown', 'black');
//         Gato('vasilisa', 'infernal', 'infernal', 'gray', 'white');
//         {
//             let V = '2x placeablemaxwell:valenok'
//             let M = '2x placeablemaxwell:mars'
//             let S = '2x placeablemaxwell:vasilisa'
//             let P = '2x placeablemaxwell:poomba'
//             let W = '16x kubejs:worries_about_it'
//         event.recipes.gtceu.gate_assembly(id(`maxwell`))
//             .itemInputs(V,V,V,W,M,M,M,M,M,W,S,S,S,S,S,W,P,P,P,P,P,W,V,V)
//             .inputFluids('gtceu:maxwellium 444444', `gtceu:black_dye 2500000`, `gtceu:pure_dragon_breath 250000`)
//             .itemOutputs(`placeablemaxwell:maxwell`)
//             .duration(64000)
//             .EUt(GTValues.VA[GTValues.UXV]);
//         };

});