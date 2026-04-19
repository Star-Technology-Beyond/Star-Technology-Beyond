StartupEvents.registry('item', event => {

    // === Gate Rods ===

    let stargateRod = [
        'raw','activated','infernally_reforged','awakened_inferno','abyssally_reforged','awakened_abyss',
        'prismaticly_infused','faetic','kaleidoscopicly_infused','riftic','primordicly_infused','temporic'
    ]
    
    stargateRod.forEach(rod => {

        event.create(`${rod}_stargate_rod`)
            .tooltip(Text.translate(`item.kubejs.${rod}_stargate_rod.tooltip`))
            // .texture(`kubejs:item/stargate/gate_items/components/${rod}_stargate_rod`);
            .textureJson({ //temp
                layer0: `kubejs:item/stargate/gate_items/components/rods/rod`,
                layer1: `kubejs:item/stargate/gate_items/components/rods/${rod}`
            })

    });

    // === Tiered Components ===

    ['csg','asg','dsg'].forEach(tier => {

        event.create(`${tier}_field_stabilizer`)
            .tooltip(Text.translate(`item.kubejs.${tier}_field_stabilizer.tooltip`))
            // .texture(`kubejs:item/stargate/gate_items/components/${tier}_field_stabilizer`);
            .textureJson({ //temp
                layer0: `kubejs:item/stargate/gate_items/components/field_stabilizer`,
                layer1: `kubejs:item/stargate/gate_items/components/${tier}`
            })

        event.create(`${tier}_energy_modulator`)
            .tooltip(Text.translate(`item.kubejs.${tier}_energy_modulator.tooltip`))
            // .texture(`kubejs:item/stargate/gate_items/components/${tier}_energy_modulator`);
            .textureJson({ //temp
                layer0: `kubejs:item/stargate/gate_items/components/energy_modulator`,
                layer1: `kubejs:item/stargate/gate_items/components/${tier}`
            })

        event.create(`${tier}_stellar_dialer`)
            .tooltip(Text.translate(`item.kubejs.${tier}_stellar_dialer.tooltip`))
            // .texture(`kubejs:item/stargate/gate_items/components/${tier}_stellar_dialer`);
            .textureJson({ //temp
                layer0: `kubejs:item/stargate/gate_items/components/stellar_dialer`,
                layer1: `kubejs:item/stargate/gate_items/components/${tier}`
            })
            
        event.create(`${tier}_dpu`)
            .tooltip(Text.translate(`item.kubejs.${tier}_dpu.tooltip`))
            .textureJson({
                layer0: `kubejs:item/stargate/gate_items/components/${tier}/dpu_backing`,
                layer1: `kubejs:item/stargate/gate_items/components/${tier}/dpu_overlay`
            });
            
        event.create(`${tier}_computational_matrix`)
            .tooltip(Text.translate(`item.kubejs.${tier}_computational_matrix.tooltip`))
            // .texture(`kubejs:item/stargate/gate_items/components/${tier}_computational_matrix`);
            .textureJson({ //temp
                layer0: `kubejs:item/stargate/gate_items/components/computational_matrix`,
                layer1: `kubejs:item/stargate/gate_items/components/${tier}`
            })

        event.create(`${tier}_stellar_access_point`)
            .tooltip(Text.translate(`item.kubejs.${tier}_stellar_access_point.tooltip`))
            // .texture(`kubejs:item/stargate/gate_items/components/${tier}_stellar_access_point`);
            .textureJson({ //temp
                layer0: `kubejs:item/stargate/gate_items/components/stellar_access_point`,
                layer1: `kubejs:item/stargate/gate_items/components/${tier}`
            })
            
        event.create(`${tier}_chevron`)
            .tooltip(Text.translate(`item.kubejs.${tier}_chevron.tooltip`))
            // .texture(`kubejs:item/stargate/gate_items/components/${tier}_chevron`);
            .textureJson({ //temp
                layer0: `kubejs:item/stargate/gate_items/components/chevron`,
                layer1: `kubejs:item/stargate/gate_items/components/${tier}`
            })
            
        event.create(`${tier}_dimensional_supercomputer`)
            .tooltip(Text.translate(`item.kubejs.${tier}_dimensional_supercomputer.tooltip`))
            // .texture(`kubejs:item/stargate/gate_items/components/${tier}_dimensional_supercomputer`);
            .textureJson({ //temp
                layer0: `kubejs:item/stargate/gate_items/components/dimensional_supercomputer`,
                layer1: `kubejs:item/stargate/gate_items/components/${tier}`
            })

        event.create(`${tier}_reinforced_plating`)
            .tooltip(Text.translate(`item.kubejs.${tier}_reinforced_plating.tooltip`))
            // .texture(`kubejs:item/stargate/gate_items/components/${tier}_dimensional_supercomputer`);
            .textureJson({ //temp
                layer0: `kubejs:item/stargate/gate_items/components/reinforced_plating`,
                layer1: `kubejs:item/stargate/gate_items/components/${tier}`
            })

        event.create(`${tier}_stargate_rod_base`)
            .tooltip(Text.translate(`item.kubejs.${tier}_stargate_rod_base.tooltip`))
            // .texture(`kubejs:item/stargate/gate_items/components/${tier}_dimensional_supercomputer`);
            .textureJson({ //temp
                layer0: `kubejs:item/stargate/gate_items/components/stargate_rod_base`,
                layer1: `kubejs:item/stargate/gate_items/components/${tier}`
            })

        event.create(`${tier}_enscription_plate`)
            .tooltip(Text.translate(`item.kubejs.${tier}_enscription_plate.tooltip`))
            .texture(`kubejs:item/stargate/gate_items/components/${tier}/enscription_plate`);

        event.create(`${tier}_enscription_chip`)
            .tooltip(Text.translate(`item.kubejs.${tier}_enscription_chip.tooltip`))
            .texture(`kubejs:item/stargate/gate_items/components/${tier}/dpu_backing`);
            
    });

// OLD
    /// === CSG ===
    event.create('crude_stargate_rod')
        .tooltip(Text.translate('item.kubejs.crude_stargate_rod.tooltip'))
        .texture('kubejs:item/stargate/gate_items/crude_stargate_rod')
        .rarity('rare');

    // event.create('stargate_rod')
    //     .tooltip(Text.translate('item.kubejs.stargate_rod.tooltip'))
    //     .texture('kubejs:item/stargate/gate_items/stargate_rod')
    //     .rarity('epic');

    event.create('computational_super_matrix')
        .texture('kubejs:item/stargate/gate_items/computation_super_matrix')
        .rarity('rare');

    event.create('classic_stargate_computer_core')
        .rarity('uncommon')
        .texture('kubejs:item/stargate/gate_items/classic_computational_core');

    event.create('classic_chevron_disk')
        .rarity('rare')
        .texture('kubejs:item/stargate/gate_items/classic_chevron_disk');

   event.create('runic_wave_generator')
        .texture('kubejs:item/stargate/gate_items/runic_wave_generator')
        .rarity('epic');

    // === ASG ===
    event.create('untreated_infernal_stargate_rod')
        .tooltip(Text.translate('item.kubejs.untreated_infernal_stargate_rod.tooltip'))
        .texture('kubejs:item/stargate/gate_items/untreated_infernal_stargate_rod');

    event.create('infernal_stargate_rod')
        .tooltip(Text.translate('item.kubejs.infernal_stargate_rod.tooltip'))
        .texture('kubejs:item/stargate/gate_items/infernal_stargate_rod');

    event.create('untreated_abyssal_stargate_rod')
        .tooltip(Text.translate('item.kubejs.untreated_abyssal_stargate_rod.tooltip'))
        .texture('kubejs:item/stargate/gate_items/untreated_abyssal_stargate_rod');

    event.create('abyssal_stargate_rod')
        .tooltip(Text.translate('item.kubejs.abyssal_stargate_rod.tooltip'))
        .texture('kubejs:item/stargate/gate_items/abyssal_stargate_rod');

    event.create('ancient_stargate_computer_core')
        .rarity('uncommon')
        .texture('kubejs:item/stargate/gate_items/ancient_stargate_computer_core');

    event.create('ancient_chevron_disk')
        .rarity('rare')
        .texture('kubejs:item/stargate/gate_items/ancient_chevron_disk');

    event.create('classic_chevron_assembly')
        .rarity('rare')
        .texture('kubejs:item/stargate/gate_items/classic_chevron_assembly');
    
});