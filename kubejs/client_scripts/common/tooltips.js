ItemEvents.tooltip(event => {

    event.addAdvanced('gtceu:large_chemical_reactor', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.coil_boosting_subtick.tooltip.1'));
    });

    event.addAdvanced('gtceu:extreme_chemical_reactor', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.coil_boosting_parallel_subtick.tooltip.1'));
    });

    event.addAdvanced('gtceu:implosion_compressor', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.subtick.tooltip.1'));
    });

    event.addAdvanced('gtceu:distillation_tower', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.subtick.tooltip.1'));
    });

    event.addAdvanced('gtceu:vacuum_freezer', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.subtick.tooltip.1'));
    });

    event.addAdvanced('gtceu:assembly_line', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.subtick.tooltip.1'));
    });

    event.addAdvanced('gtceu:multi_smelter', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.subtick_coil_parallel.tooltip.1'));
    });

    event.addAdvanced(/gtceu:.*_macerator/, (item, advanced, text) => {
        text.add(1, Text.translate('block.gtceu.macerators.tooltip.1'));
    });

    event.addAdvanced('gtceu:ulv_fluid_input', (item, advanced, text) => {
        text.add(1, Text.translate('block.gtceu.ulv_fluid_input.tooltip.1'));
        text.add(2, Text.translate('block.gtceu.ulv_fluid_input.tooltip.2'));
    });    
    
    event.addAdvanced('gtceu:uhv_stabilization_module', (item, advanced, text) => {
        text.add(1, Text.of('Multiblock Sharing §4Disabled'));
        text.add(2, Text.of('Makes your Multiblocks extremely stable for mass assembly!'));
        text.add(3, Text.of('Level of Stabilization:'));
        text.add(4, Text.of('   §bAbsolute Stabilization'));
    });

    //Custom Colossal Chest Tooltips
    const colossalTypes = [`wood`, `copper`, `iron`, `silver`, `gold`, `diamond`, `obsidian`];
    colossalTypes.forEach(type => {
        event.add(`colossalchests:colossal_chest_${type}`, Text.translate(`item.colossalchests.colossal_chest.tooltip`));
    });

    //Theta 2 removals 
    const techTiers = [`lv`, `mv`, `hv`, `ev`, `iv`, `luv`, `zpm`, `uv`, `uhv`];
    techTiers.forEach(techTier => {
        event.add(`gtceu:${techTier}_essence_burner`, Text.translate(`block.gtceu.essence_burner.tooltip`));
    })
    for (let x=1; x<=8; x++) {
        event.add(`solarflux:sp_${x}`, Text.translate(`block.solarflux.sp.tooltip`));
    }
});