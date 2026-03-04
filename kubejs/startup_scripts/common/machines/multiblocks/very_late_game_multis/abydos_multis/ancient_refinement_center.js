GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('aqueous_void_excavation')
        .category('resource_production')
        .setMaxIOSize(0, 0, 1, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER);

    event.create('bulk_rock_filtrator')
        .category('resource_production')
        .setMaxIOSize(2, 9, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR);

    event.create('bulk_void_excavation')
        .category('resource_production')
        .setMaxIOSize(0, 6, 1, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('ancient_refinement_center', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['industrial_barrel_aqueous', 'bulk_rock_filtrator', 'large_sieve', 'bulk_void_excavation', 'aqueous_void_excavation'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, $StarTRecipeModifiers.BULK_PROCESSING, GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' BB     BB ', ' BB     BB ', ' BB     BB ', '           ', '           ', '           ', ' BB     BB ', ' BB     BB ', ' BB     BB ', '           ', '           ', '           ', '           ', '           ', '           ') 
            .aisle('BCCC   CCCB', 'BBBCCCCCBBB', 'BBB     BBB', ' D       D ', ' D       D ', ' D       D ', 'BBB     BBB', 'BCCCCCCCCCB', 'BBB     BBB', '           ', '           ', '           ', '           ', '           ', '           ') 
            .aisle('BCCCEEECCCB', 'BBCCCFCCCBB', 'BB  CGC  BB', '    CGC    ', '   DCGCD   ', '    CGC    ', 'BB  CGC  BB', 'BCCCCFCCCCB', 'BB   D   BB', '           ', '           ', '           ', '           ', '           ', '           ') 
            .aisle(' CCCCCCCCC ', ' CCHHFHHCC ', '   I J I   ', '   FFJFF   ', '  DC J CD  ', '   FFJFF   ', '   I J I   ', ' CCHHFHHCC ', '   DDDDD   ', '     D     ', '           ', '           ', '           ', '           ', '           ') 
            .aisle('  ECCCCCE  ', ' CCHJFJHCC ', '  C     C  ', '  CF   FC  ', '  C     C  ', '  CF   FC  ', '  C     C  ', ' CCHJFJHCC ', '   DJHJD   ', '    DHD    ', '     D     ', '     D     ', '           ', '           ', '           ') 
            .aisle('  ECCFCCE  ', ' CFFFFFFFC ', '  GJ   JG  ', '  GJ   JG  ', '  GJ   JG  ', '  GJ   JG  ', '  GJ   JG  ', ' CFFFFFFFC ', '  DDHFHDD  ', '   DHFHD   ', '    DFD    ', '    DFD    ', '     D     ', '     D     ', '     D     ') 
            .aisle('  ECCCCCE  ', ' CCHJFJHCC ', '  C     C  ', '  CF   FC  ', '  C     C  ', '  CF   FC  ', '  C     C  ', ' CCHJFJHCC ', '   DJHJD   ', '    DHD    ', '     D     ', '     D     ', '           ', '           ', '           ') 
            .aisle(' CCCCCCCCC ', ' CCHHFHHCC ', '   I J I   ', '   FFJFF   ', '  DC J CD  ', '   FFJFF   ', '   I J I   ', ' CCHHFHHCC ', '   DDDDD   ', '     D     ', '           ', '           ', '           ', '           ', '           ') 
            .aisle('BCCCEEECCCB', 'BBCCCFCCCBB', 'BB  CGC  BB', '    CGC    ', '   DCGCD   ', '    CGC    ', 'BB  CGC  BB', 'BCCCCFCCCCB', 'BB   D   BB', '           ', '           ', '           ', '           ', '           ', '           ') 
            .aisle('BCCC   CCCB', 'BBBCC@CCBBB', 'BBB     BBB', ' D       D ', ' D       D ', ' D       D ', 'BBB     BBB', 'BCCCCCCCCCB', 'BBB     BBB', '           ', '           ', '           ', '           ', '           ', '           ') 
            .aisle(' BB     BB ', ' BB     BB ', ' BB     BB ', '           ', '           ', '           ', ' BB     BB ', ' BB     BB ', ' BB     BB ', '           ', '           ', '           ', '           ', '           ', '           ') 
            .where('B', Predicates.blocks('gtceu:sturdy_machine_casing'))
            .where(' ', Predicates.any())
            .where('C', Predicates.blocks('kubejs:enriched_naquadah_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(6).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(6).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where('D', Predicates.blocks('gtceu:enriched_naquadah_frame'))
            .where('E', Predicates.blocks('kubejs:enriched_naquadah_firebox_casing'))
            .where('F', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
            .where('G', Predicates.blocks('gtceu:fusion_glass'))
            .where('H', Predicates.blocks('kubejs:enriched_naquadah_gearbox'))
            .where('I', Predicates.blocks('kubejs:enriched_naquadah_engine_intake_casing'))
            .where('J', Predicates.blocks('kubejs:zalloy_coil_block'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('kubejs:block/casings/naquadah/casing',
            'gtceu:block/multiblock/large_miner');

});