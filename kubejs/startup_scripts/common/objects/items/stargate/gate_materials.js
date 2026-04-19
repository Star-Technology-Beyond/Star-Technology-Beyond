StartupEvents.registry('item', event => {
    
    // === Fragments ===

    ['inferno','abyss','prismalic','riftic','primordial'].forEach(fragment => {
        //2x ASG, 3x DSG
    event.create(`${fragment}_fragment`)
        .tooltip(Text.translate(`item.kubejs.${fragment}_fragment.tooltip`))
        // .texture(`kubejs:item/stargate/runes/proto/proto_${rune}_rune`)
        .textureJson({ //temp
                layer0: `kubejs:item/stargate/gate_items/materials/fragment`,
                layer1: `kubejs:item/stargate/gate_items/materials/${fragment}`
            })

    });

    // === Core ===

    ['quantum','helish','voidic','draconic','prismafae_illuminatus','spatium_ruptura','primus_tempus','ascension'].forEach(core => {
        //1x CSG, 3x ASG, 4x DSG
    event.create(`${core}_core`)
        .tooltip(Text.translate(`item.kubejs.${core}_core.tooltip`))
        // .texture(`kubejs:item/stargate/runes/proto/proto_${rune}_rune`)
        .textureJson({ //temp
                layer0: `kubejs:item/stargate/gate_items/materials/core`,
                layer1: `kubejs:item/stargate/gate_items/materials/${core}`
            })

    });

//OLD
    // === Cores and Fragments
    event.create('empty_coordinate_core')
        .texture('kubejs:item/stargate/gate_items/empty_coordinate_core');

    event.create('draconic_coordinate_core')
        .tooltip(Text.translate('item.kubejs.draconic_coordinate_core.tooltip'))
        .texture('kubejs:item/stargate/gate_items/draconic_core');

    // event.create('inferno_fragment')
    //     .texture('kubejs:item/stargate/gate_items/inferno_fragment');

    // event.create('abyss_fragment')
    //     .texture('kubejs:item/stargate/gate_items/abyss_fragment');

    event.create('hell_core')
        .texture('kubejs:item/stargate/gate_items/hell_core');

    event.create('void_core')
        .texture('kubejs:item/stargate/gate_items/void_core');

});