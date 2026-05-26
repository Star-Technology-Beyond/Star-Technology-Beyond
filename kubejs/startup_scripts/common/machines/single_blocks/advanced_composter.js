GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('composting')
        .category('primitive')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);

    event.create('decomposition')
        .category('primitive')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    
    event.create('advanced_composter', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            return builder
                .recipeTypes('composting', 'decomposition')
                .workableCasingModel('minecraft:block/stripped_dark_oak_log', 'gtceu:block/machines/advanced_composter');
        }
    );
});