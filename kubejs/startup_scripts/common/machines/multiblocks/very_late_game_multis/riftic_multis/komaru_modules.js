GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('magmatic_drill')
        .category('komaru')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 12, 12)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE , FillDirection.LEFT_TO_RIGHT);

    event.create('voidic_refinement')
        .category('komaru')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 18, 6)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE , FillDirection.LEFT_TO_RIGHT);

    event.create('riftic_infusion_assembly')
        .category('komaru')
        .setEUIO('in')
        .setMaxIOSize(16, 6, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE , FillDirection.LEFT_TO_RIGHT);

    event.create('rimula_extraction')
        .category('komaru')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 0, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE , FillDirection.LEFT_TO_RIGHT);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create(`basic_test_module`, 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        // .machine((holder) => new $KomaruModule(holder, basic)) //add a machine type for komaru modules
        .recipeTypes(['magmatic_drill','voidic_refinement','assembly_line'])
        // .recipeModifiers([$StarTRecipeModifiers.KOMARU_MODULE]) //add recipe modifier that adapts to the frame
        .appearanceBlock(() => Block.getBlock('kubejs:draco_ware_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AFA', 'ADA', 'ADA', 'AAA')
            .aisle('ABA', 'CEC', 'CEC', 'CCC')
            .aisle('AAA', 'A@A', 'AAA', 'AAA')
            .where('A', Predicates.blocks('kubejs:draco_ware_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(0).setMaxGlobalLimited(20))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(0).setMaxGlobalLimited(20))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('B', Predicates.blocks('kubejs:superdense_assembly_control_casing'))
            .where('C', Predicates.blocks('kubejs:draco_assembly_grating'))
            .where('D', Predicates.blocks('kubejs:draco_resilient_fusion_glass'))
            .where('E', Predicates.blocks('start_core:advanced_fusion_coil'))
            .where('F', Predicates.abilities(PartAbility.INPUT_ENERGY))
            // .where('F', Predicates.abilities($StarTPartAbility.MODULAR_AUTO_SCALING_NODE_CONDUIT))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('kubejs:block/casings/end_multis/draco_ware_casing',
            'gtceu:block/multiblock/hpca');

    event.create(`advanced_test_module`, 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        // .machine((holder) => new $KomaruModule(holder, advanced)) //add a machine type for komaru modules
        .recipeTypes(['riftic_infusion_assembly','rimula_extraction'])
        // .recipeModifiers([$StarTRecipeModifiers.KOMARU_MODULE]) //add recipe modifier that adapts to the frame
        .appearanceBlock(() => Block.getBlock('kubejs:draco_ware_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'AAA', 'AAA', 'AAA', 'AAA')
            .aisle('CCC', 'DED', 'DED', 'DED', 'AFA')
            .aisle('CCC', 'CBC', 'CBC', 'CBC', 'ABA')
            .aisle('CCC', 'A@A', 'AAA', 'AAA', 'AAA')
            .where('A', Predicates.blocks('kubejs:draco_ware_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(0).setMaxGlobalLimited(20))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(0).setMaxGlobalLimited(20))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(0).setMaxGlobalLimited(20))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('B', Predicates.blocks('kubejs:superdense_assembly_control_casing'))
            .where('C', Predicates.blocks('kubejs:draco_assembly_grating'))
            .where('D', Predicates.blocks('kubejs:draco_resilient_fusion_glass'))
            .where('E', Predicates.blocks('start_core:advanced_fusion_coil'))
            .where('F', Predicates.abilities(PartAbility.INPUT_ENERGY))
            // .where('F', Predicates.abilities($StarTPartAbility.MODULAR_AUTO_SCALING_NODE_CONDUIT))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('kubejs:block/casings/end_multis/draco_ware_casing',
            'gtceu:block/multiblock/hpca');

    // $KomaruFrameMachine.addModule("gtceu:basic_test_module", "basic");
    // $KomaruFrameMachine.addModule("gtceu:advanced_test_module", "advanced");
});