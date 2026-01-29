GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('pulverizer')
        .category('pulverizer')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('pulverizer', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .definition((tier, builder) => {
            builder
                .recipeType('pulverizer')
                .workableTieredHullModel('gtceu:block/machines/pulverizer')
        });
});