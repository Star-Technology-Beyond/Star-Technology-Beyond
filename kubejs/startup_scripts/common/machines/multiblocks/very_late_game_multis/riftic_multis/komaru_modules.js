GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create(`basic_test_module`, 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        // .machine((holder) => new $KomaruModule(holder, basic)) //add a machine type for komaru modules
        .recipeTypes('dummy')
        // .recipeModifiers([$StarTRecipeModifiers.KOMARU_MODULE]) //add recipe modifier that adapts to the frame
        .appearanceBlock(() => Block.getBlock('kubejs:draco_ware_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AFA','ADA','ADA','AAA')
            .aisle('ABA','CEC','CEC','CCC')
            .aisle('AAA','A@A','AAA','AAA')
            .where('A', Predicates.blocks('kubejs:draco_ware_casing')
                /*.or(io)*/)
            .where('B', Predicates.blocks('kubejs:superdense_assembly_control_casing'))
            .where('C', Predicates.blocks('kubejs:draco_assembly_grating'))
            .where('D', Predicates.blocks('kubejs:draco_resilient_fusion_glass'))
            .where('E', Predicates.blocks('start_core:advanced_fusion_coil'))
            .where('F', Predicates.abilities(PartAbility.INPUT_ENERGY))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('kubejs:block/casings/end_multis/draco_ware_casing', 
            'gtceu:block/multiblock/hpca');

    event.create(`advanced_test_module`, 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        // .machine((holder) => new $KomaruModule(holder, advanced)) //add a machine type for komaru modules
        .recipeTypes('dummy')
        // .recipeModifiers([$StarTRecipeModifiers.KOMARU_MODULE]) //add recipe modifier that adapts to the frame
        .appearanceBlock(() => Block.getBlock('kubejs:draco_ware_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC','AAA','AAA','AAA','AAA')
            .aisle('CCC','DED','DED','DED','AFA')
            .aisle('CCC','CBC','CBC','CBC','ABA')
            .aisle('CCC','A@A','AAA','AAA','AAA')
            .where('A', Predicates.blocks('kubejs:draco_ware_casing')
                /*.or(io)*/)
            .where('B', Predicates.blocks('kubejs:superdense_assembly_control_casing'))
            .where('C', Predicates.blocks('kubejs:draco_assembly_grating'))
            .where('D', Predicates.blocks('kubejs:draco_resilient_fusion_glass'))
            .where('E', Predicates.blocks('start_core:advanced_fusion_coil'))
            .where('F', Predicates.abilities(PartAbility.INPUT_ENERGY))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('kubejs:block/casings/end_multis/draco_ware_casing', 
            'gtceu:block/multiblock/hpca');

});