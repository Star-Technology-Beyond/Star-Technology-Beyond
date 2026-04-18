// priority -100

ItemEvents.tooltip(event => {
    const addedByStarT = global.addedByStarT;
    const tiers = [
        "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv"
    ];
    const addedByStarTSingles = [
        "electric_blast_furnace", "electric_smoker", "me_assembler"
    ];

    tiers.forEach(tier => {
        addedByStarTSingles.forEach(name => {
            event.add(`gtceu:${tier}_${name}`, Text.translate(`block.kubejs.added_by_StarT.tooltip`));
        });
    });

    let prefix;
    addedByStarT.machines.forEach(machine => {
        prefix = (addedByStarT.isCore.includes(machine)) ? "start_core:" : "gtceu:";

        addedByStarT.modifiers.forEach(modifier => {
            if (addedByStarT[modifier].includes(machine)) {
                event.add(prefix + machine, Text.translate(`block.kubejs.${modifier}.tooltip`));
            }
        });

        event.add(prefix + machine, Text.translate(`block.kubejs.added_by_StarT.tooltip`));
    });

    event.addAdvanced('gtceu:large_chemical_reactor', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.lcr_coil_mechanic.tooltip.2'));
        text.add(3, Text.translate('block.gtceu.lcr_coil_mechanic.tooltip.3'));
        text.add(4, Text.translate('block.gtceu.lcr_coil_mechanic.tooltip.4'));
        text.add(5, Text.translate('block.gtceu.lcr_coil_mechanic.tooltip.5'));
        text.add(6, Text.translate('block.gtceu.lcr_coil_mechanic.tooltip.6'));
        text.add(7, Text.translate('block.gtceu.coil_boosting_subtick.tooltip.1'));
    });

    event.addAdvanced('gtceu:extreme_chemical_reactor', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.lcr_coil_mechanic.tooltip.2'));
        text.add(3, Text.translate('block.gtceu.lcr_coil_mechanic.tooltip.3'));
        text.add(4, Text.translate('block.gtceu.lcr_coil_mechanic.tooltip.4'));
        text.add(5, Text.translate('block.gtceu.lcr_coil_mechanic.tooltip.5'));
        text.add(6, Text.translate('block.gtceu.lcr_coil_mechanic.tooltip.6'));
        text.add(7, Text.translate('block.gtceu.coil_boosting_parallel_subtick.tooltip.1'));
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

    event.addAdvanced('gtceu:large_maceration_tower', (item, advanced, text) => {
        text.remove(2);
        text.add(2, Text.translate('block.gtceu.large_maceration_tower.tooltip.1'));
    });

    //Custom Colossal Chest Tooltips
    const colossalTypes = [`wood`, `copper`, `iron`, `silver`, `gold`, `diamond`, `obsidian`];
    colossalTypes.forEach(type => {
        event.add(`colossalchests:colossal_chest_${type}`, Text.translate(`item.colossalchests.colossal_chest.tooltip`));
    });

    //Theta 2 removals 
    const theta2Removals = ["essence_burner", "mystical_greenhouse", "essence_enchancer", "essence_replicator", "nuclear_reactor"];
    theta2Removals.forEach(name => {
        if (name == "essence_burner" || name == "mystical_greenhouse") {
            tiers.forEach(tier => {
                event.add(`gtceu:${tier}_${name}`, Text.translate(`block.gtceu.theta2Removals.tooltip`));
            });
        }
        else {
            event.add(`gtceu:${name}`, Text.translate(`block.gtceu.theta2Removals.tooltip`));
        }
    });
    
    for (let x=1; x<=8; x++) {
        event.add(`solarflux:sp_${x}`, Text.translate(`block.solarflux.sp.tooltip`));
    }
});