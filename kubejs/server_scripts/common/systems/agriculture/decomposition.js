ServerEvents.recipes(event => {

    const id = global.id;

    event.recipes.gtceu.decomposition(id('rich_soil'))
        .itemInputs('farmersdelight:organic_compost')
        .itemOutputs('farmersdelight:rich_soil')
        .duration(1200);

    event.recipes.gtceu.decomposition_factory(id('rich_soil'))
        .itemInputs('farmersdelight:organic_compost')
        .itemOutputs('farmersdelight:rich_soil')
        .duration(600)
        .EUt(GTValues.VA[GTValues.LV]);

})