// Deayed due to new Material Flags not being added to Theta (would only be used minimally in current state to avoid mass disruptions)

// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

//     event.create('titan_forge')
//         .category('ultimate')
//         .setEUIO('in')
//         .setMaxTooltips(4)
//         .setMaxIOSize(6, 1, 2, 0)
//         .setSound(GTSoundEntries.FORGE_HAMMER)
//         .setProgressBar(GuiTextures.PROGRESS_BAR_BENDING, FillDirection.LEFT_TO_RIGHT);

// });

// GTCEuStartupEvents.registry('gtceu:machine', event => {

//     event.create('titan_forge', 'multiblock')
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('titan_forge')
//         .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
//         .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle('ABBBBBAAABBBBBA', 'A BBB     BBB A', 'A             A', 'A             A', 'A             A', 'A             A', 'A BBB     BBB A', 'ABBBBBAAABBBBBA') 
//             .aisle('BCCCCC   CCCCCB', ' CCCCC   CCCCC ', '               ', '               ', '               ', '               ', ' CCCCC   CCCCC ', 'BCCCCC   CCCCCB') 
//             .aisle('BCDDDCBBBCDDDCB', 'BCDDDCBBBCDDDCB', '               ', '               ', '               ', '               ', 'BCDDDCBBBCDDDCB', 'BCDDDCBBBCDDDCB') 
//             .aisle('BCDEDCEEECDEDCB', 'BCDFDCDDDCDFDCB', '   F       F   ', '   F       F   ', '   F       F   ', '   F       F   ', 'BCDFDCDDDCDFDCB', 'BCDEDCCCCCDEDCB') 
//             .aisle('BCDEEEEBEEEEDCB', 'BCDFDCDBDCDFDCB', '   F   B   F   ', '   F       F   ', '   F       F   ', '   F   B   F   ', 'BCDFDCDBDCDFDCB', 'BCDEEEEGEEEEDCB') 
//             .aisle('BCDEDCEEECDEDCB', 'BCDFDCDDDCDFDCB', '   F       F   ', '   F       F   ', '   F       F   ', '   F       F   ', 'BCDFDCDDDCDFDCB', 'BCDEDCCCCCDEDCB') 
//             .aisle('BCDDDCBBBCDDDCB', 'BCDDDCB@BCDDDCB', '               ', '               ', '               ', '               ', 'BCDDDCBBBCDDDCB', 'BCDDDCBBBCDDDCB') 
//             .aisle('BCCCCC   CCCCCB', ' CCCCC   CCCCC ', '               ', '               ', '               ', '               ', ' CCCCC   CCCCC ', 'BCCCCC   CCCCCB') 
//             .aisle('ABBBBBAAABBBBBA', 'A BBB     BBB A', 'A             A', 'A             A', 'A             A', 'A             A', 'A BBB     BBB A', 'ABBBBBAAABBBBBA') 
//             .where('A', Predicates.blocks('gtceu:naquadah_alloy_frame'))
//             .where('B', Predicates.blocks('gtceu:high_temperature_smelting_casing')
//                 .or(Predicates.autoAbilities(definition.getRecipeTypes()))
//                 .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
//                 .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
//             .where(' ', Predicates.any())
//             .where('C', Predicates.blocks('kubejs:titanic_blasting_casing'))
//             .where('D', Predicates.blocks('gtceu:heat_vent'))
//             .where('E', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
//             .where('F', Predicates.blocks('gtceu:naquadah_coil_block'))
//             .where('G', Predicates.abilities(PartAbility.MUFFLER))
//             .where('@', Predicates.controller(Predicates.blocks(definition.get())))
//             .build())
//         .workableCasingModel('gtceu:block/casings/gcym/high_temperature_smelting_casing',
//             'gtceu:block/machines/bender');

// });