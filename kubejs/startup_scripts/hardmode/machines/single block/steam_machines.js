// packmode: hard

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_blaster', 'steam')
    .definition((tier, builder) =>{
    builder
        .recipeType('gt_blasting')
        .workableCasingModel('gtceu:block/casings/steam/bricked_steel/side', 'gtceu:block/machines/blasting_single');
    });

});