// priority: 999

const componentMaterials = global.componentMaterials;
global.componentRecycleMaterials = {
    luv: {
        primMaterial: `gtceu:${componentMaterials.luv.materials.primMaterial}`,
        cableMaterial: `gtceu:${componentMaterials.luv.materials.cable}`,
        wireMaterial: `gtceu:${componentMaterials.luv.materials.wireMechanical}`,
        foilMaterial: `gtceu:${componentMaterials.luv.materials.miscMaterial}`
    },
    zpm: {
        primMaterial: `gtceu:${componentMaterials.zpm.materials.primMaterial}`,
        cableMaterial: `gtceu:${componentMaterials.zpm.materials.cable}`,
        wireMaterial: `gtceu:${componentMaterials.zpm.materials.wireMechanical}`,
        foilMaterial: `gtceu:${componentMaterials.zpm.materials.miscMaterial}`
    },
    uv: {
        primMaterial: `gtceu:${componentMaterials.uv.materials.primMaterial}`,
        cableMaterial: `gtceu:${componentMaterials.uv.materials.cable}`,
        wireMaterial: `gtceu:${componentMaterials.uv.materials.wireMechanical}`,
        foilMaterial: `gtceu:${componentMaterials.uv.materials.miscMaterial}`
    },
    uhv: {
        primMaterial: `gtceu:${componentMaterials.uhv.materials.primMaterial}`,
        cableMaterial: `gtceu:${componentMaterials.uhv.materials.cable}`,
        secMaterial: `gtceu:${componentMaterials.uhv.materials.supMaterial}`,
        tertMaterial: `gtceu:${componentMaterials.uhv.materials.wireMechanical}`
    },
    uev: {
        primMaterial: `gtceu:${componentMaterials.uev.materials.primMaterial}`,
        cableMaterial: `gtceu:${componentMaterials.uev.materials.cable}`,
        secMaterial: `gtceu:${componentMaterials.uev.materials.supMaterial}`,
        tertMaterial: `gtceu:${componentMaterials.uev.materials.tierMaterial}`
    },
    uiv: {
        primMaterial: `gtceu:${componentMaterials.uiv.materials.primMaterial}`,
        cableMaterial: `gtceu:${componentMaterials.uiv.materials.cable}`,
        secMaterial: `gtceu:${componentMaterials.uiv.materials.supMaterial}`,
        tertMaterial: `gtceu:${componentMaterials.uiv.materials.tierMaterial}`
    }
}



global.LUVToUVComponentRecycleCounts = { 
    dreamlink_cover: {
        primCount: 13,
        cableCount: 4,
        wireCount: 1,
        foilCount: 4
    },
    sensor: {
        primCount: 13,
        cableCount: 3,
        wireCount: 8,
        foilCount: 24
    },
    emitter: {
        primCount: 13,
        cableCount: 3,
        wireCount: 8,
        foilCount: 24
    },
    field_generator: {
        primCount: 36,
        cableCount: 8,
        wireCount: 16,
        foilCount: 48
    },
    robot_arm: {
        primCount: 37,
        cableCount: 6,
        wireCount: 24,
        foilCount: 0
    },
    electric_piston: {
        primCount: 16,
        cableCount: 2,
        wireCount: 8,
        foilCount: 0
    },
    conveyor_module: {
        primCount: 15,
        cableCount: 3,
        wireCount: 16,
        foilCount: 0
    },
    fluid_regulator: {
        primCount: 3,
        cableCount: 3,
        wireCount: 0,
        foilCount: 0
    },
    electric_pump: {
        primCount: 3,
        cableCount: 3,
        wireCount: 0,
        foilCount: 0
    },
    electric_motor: {
        primCount: 5,
        cableCount: 1,
        wireCount: 8,
        foilCount: 0
    }
}

global.UHVPlusComponentRecycleCounts = {
    dreamlink_cover: {
        primCount: 18,
        cableCount: 11,
        secCount: 1,
        tertCount: 4
    },
    sensor: {
        primCount: 18,
        cableCount: 10,
        secCount: 1,
        tertCount: 4
    },
    emitter: {
        primCount: 18,
        cableCount: 10,
        secCount: 1,
        tertCount: 4
    },
    field_generator: {
        primCount: 62,
        cableCount: 30,
        secCount: 3,
        tertCount: 4
    },
    robot_arm: {
        primCount: 48,
        cableCount: 24,
        secCount: 9,
        tertCount: 12
    },
    electric_piston: {
        primCount: 27,
        cableCount: 8,
        secCount: 5,
        tertCount: 6
    },
    conveyor_module: {
        primCount: 27,
        cableCount: 12,
        secCount: 4,
        tertCount: 8
    },
    fluid_regulator: {
        primCount: 11,
        cableCount: 4,
        secCount: 8,
        tertCount: 4
    },
    electric_pump: {
        primCount: 11,
        cableCount: 4,
        secCount: 8,
        tertCount: 4
    },
    electric_motor: {
        primCount: 6,
        cableCount: 4,
        secCount: 0,
        tertCount: 4
    }
}

global.singleblockRecyclingDetails = { //if specialSingle = true, the next 3 are blank/unread
    electric_furnace: {
        name: "electric_furnace",
        specialSingle: true,
        components: " ",
        extraCasings: 0, 
        extraCables: 0
    },
    electric_blast_furnace: {
        name: "electric_blast_furnace",
        specialSingle: true,
        components: " ",
        extraCasings: 0, 
        extraCables: 0
    },
    electric_smoker: {
        name: "electric_smoker",
        specialSingle: true,
        components: " ",
        extraCasings: 0, 
        extraCables: 0
    },
    alloy_smelter: {
        name: "alloy_smelter",
        specialSingle: true,
        components: " ",
        extraCasings: 0, 
        extraCables: 0
    },
    arc_furnace: {
        name: "arc_furnace",
        specialSingle: true,
        components: " ",
        extraCasings: 0, 
        extraCables: 0
    },
    electrolyzer: {
        name: "electrolyzer",
        specialSingle: true,
        components: " ",
        extraCasings: 0, 
        extraCables: 0
    },
    polarizer: {
        name: "polarizer",
        specialSingle: true,
        components: " ",
        extraCasings: 0, 
        extraCables: 0
    },
    charger_4x: {
        name: "charger_4x",
        specialSingle: true,
        components: " ",
        extraCasings: 0, 
        extraCables: 0
    },
    assembler: {
        name: "assembler",
        specialSingle: false,
        components: ["robot_arm", "robot_arm", "conveyor_module", "conveyor_module"],
        extraCasings: 0,
        extraCables: 2
    },
    autoclave: {
        name: "autoclave",
        specialSingle: false,
        components: ["electric_pump"],
        extraCasings: 4,
        extraCables: 1
    },
    bender: {
        name: "bender",
        specialSingle: false,
        components: ["electric_piston", "electric_piston", "electric_motor", "electric_motor"],
        extraCasings: 1,
        extraCables: 1
    },
    brewery: {
        name: "brewery",
        specialSingle: false,
        components: ["electric_pump"],
        extraCasings: 0,
        extraCables: 2
    },
    canner: {
        name: "canner",
        specialSingle: false,
        components: ["electric_pump"],
        extraCasings: 0, 
        extraCables: 2
    },
    centrifuge: {
        name: "centrifuge",
        specialSingle: false,
        components: ["electric_motor", "electric_motor"],
        extraCasings: 0, 
        extraCables: 2
    },
    chemical_bath: {
        name: "chemical_bath",
        specialSingle: false,
        components: ["conveyor_module", "conveyor_module", "electric_pump"],
        extraCasings: 0, 
        extraCables: 1
    },
    chemical_reactor: {
        name: "chemical_reactor",
        specialSingle: false,
        components: ["electric_motor"],
        extraCasings: 4, 
        extraCables: 1
    },
    compressor: {
        name: "compressor",
        specialSingle: false,
        components: ["electric_piston", "electric_piston"],
        extraCasings: 0, 
        extraCables: 2
    },
    cutter: {
        name: "cutter",
        specialSingle: false,
        components: ["electric_motor", "conveyor_module"],
        extraCasings: 0, 
        extraCables: 2
    },
    distillery: {
        name: "distillery",
        specialSingle: false,
        components: ["electric_pump"],
        extraCasings: 0, 
        extraCables: 2
    },
    electromagnetic_separator: {
        name: "electromagnetic_separator",
        specialSingle: false,
        components: ["conveyor_module"],
        extraCasings: 0, 
        extraCables: 10
    },
    extractor: {
        name: "extractor",
        specialSingle: false,
        components: ["electric_piston", "electric_pump"],
        extraCasings: 0, 
        extraCables: 2
    },
    extruder: {
        name: "extruder",
        specialSingle: false,
        components: ["electric_piston"],
        extraCasings: 0, 
        extraCables: 1
    },
    fermenter: {
        name: "fermenter",
        specialSingle: false,
        components: ["electric_pump"],
        extraCasings: 0, 
        extraCables: 3
    },
    fluid_heater: {
        name: "fluid_heater",
        specialSingle: false,
        components: ["electric_pump", "electric_pump"],
        extraCasings: 0, 
        extraCables: 1
    },
    fluid_solidifier: {
        name: "fluid_solidifier",
        specialSingle: false,
        components: ["electric_pump", "electric_pump"],
        extraCasings: 0, 
        extraCables: 2
    },
    forge_hammer: {
        name: "forge_hammer",
        specialSingle: false,
        components: ["electric_piston"],
        extraCasings: 0, 
        extraCables: 3
    },
    forming_press: {
        name: "forming_press",
        specialSingle: false,
        components: ["electric_piston", "electric_piston"],
        extraCasings: 0,
        extraCables: 3
    },
    lathe: {
        name: "lathe",
        specialSingle: false,
        components: ["electric_motor", "electric_piston"],
        extraCasings: 0, 
        extraCables: 2
    },
    scanner: {
        name: "scanner",
        specialSingle: false,
        components: ["emitter", "sensor"],
        extraCasings: 0, 
        extraCables: 2
    },
    mixer: {
        name: "mixer",
        specialSingle: false,
        components: ["electric_motor"],
        extraCasings: 4, // note: this would be the previous casing tier for ev and below
        extraCables: 1
    },
    ore_washer: {
        name: "ore_washer",
        specialSingle: false,
        components: ["electric_motor"],
        extraCasings: 8, // note: this would be the previous casing tier for ev and below
        extraCables: 2
    },
    packer: {
        name: "packer",
        specialSingle: false,
        components: ["robot_arm", "conveyor_module"],
        extraCasings: 0, 
        extraCables: 2
    },
    laser_engraver: {
        name: "laser_engraver",
        specialSingle: false,
        components: ["electric_piston", "electric_piston", "emitter"],
        extraCasings: 0, 
        extraCables: 2
    },
    sifter: {
        name: "sifter",
        specialSingle: false,
        components: ["electric_piston", "electric_piston"],
        extraCasings: 0, 
        extraCables: 2
    },
    thermal_centrifuge: {
        name: "thermal_centrifuge",
        specialSingle: false,
        components: ["electric_motor", "electric_motor"],
        extraCasings: 0, 
        extraCables: 2
    },
    wiremill: {
        name: "wiremill",
        specialSingle: false,
        components: ["electric_motor", "electric_motor", "electric_motor", "electric_motor"],
        extraCasings: 0, 
        extraCables: 2
    },
    circuit_assembler: {
        name: "circuit_assembler",
        specialSingle: false,
        components: ["conveyor_module", "conveyor_module", "robot_arm"],
        extraCasings: 0, 
        extraCables: 2
    },
    macerator: {
        name: "macerator",
        specialSingle: false,
        components: ["electric_motor", "electric_piston"],
        extraCasings: 0, 
        extraCables: 2
    },
    gas_collector: {
        name: "gas_collector",
        specialSingle: false,
        components: ["electric_pump", "electric_pump"],
        extraCasings: 0, 
        extraCables: 1
    },
    rock_crusher: {
        name: "rock_crusher",
        specialSingle: false,
        components: ["electric_motor", "electric_piston"],
        extraCasings: 0, 
        extraCables: 2
    }
}

global.coilRecycleDetails = {
    naquadah_coil_block: {
        materials: {
            frameMaterial: "gtceu:hssg",
            wireMaterial: "gtceu:naquadah",
            foilMaterial: "gtceu:osmium"
        },
        counts: {
            frameCount: 4,
            wireCount: 8,
            foilCount: 2
        },
        prefix: "gtceu:"
    },
    trinium_coil_block: {
        materials: {
            frameMaterial: "gtceu:hsse",
            wireMaterial: "gtceu:trinium",
            foilMaterial: "gtceu:enriched_naquadah"
        },
        counts: {
            frameCount: 4,
            wireCount: 8,
            foilCount: 2
        },
        prefix: "gtceu:"
    },
    tritanium_coil_block: {
        materials: { 
            frameMaterial: "gtceu:trinaquadalloy",
            wireMaterial: "gtceu:tritanium",
            foilMaterial: "gtceu:naquadria"
        },
        counts: {
            frameCount: 4,
            wireCount: 8,
            foilCount: 2
        },
        prefix: "gtceu:"
    },
    zalloy_coil_block: {
        materials: {
            frameMaterial: "gtceu:neutronium",
            wireMaterial: "gtceu:zalloy",
            foilMaterial: "gtceu:zirconium"
        },
        counts: {
            frameCount: 4,
            wireCount: 8,
            foilCount: 2
        },
        prefix: "kubejs:"
    },
    magmada_alloy_coil_block: {
        materials: {
            frameMaterial: "gtceu:ancient_netherite",
            wireMaterial: "gtceu:magmada_alloy",
            foilMaterial: "gtceu:pure_netherite"
        },
        counts: {
            frameCount: 4,
            wireCount: 8,
            foilCount: 2
        },
        prefix: "kubejs:"
    },
    abyssal_alloy_coil_block: {
        materials: {
            frameMaterial: "gtceu:draconyallium",
            wireMaterial: "gtceu:abyssal_alloy",
            foilMaterial: "gtceu:nyanium"
        },
        counts: {
            frameCount: 4,
            wireCount: 8,
            foilCount: 2
        },
        prefix: "kubejs:"
    },
    rhenotax_coil: {
        materials: {
            frameMaterial: "gtceu:astrenalloy_nx",
            wireMaterial: "gtceu:rhenate_w",
            foilMaterial: "gtceu:tantalum_carbide"
        },
        counts: {
            frameCount: 4,
            wireCount: 8,
            foilCount: 4
        },
        prefix: "kubejs:"
    }
}

global.fusionCasingDetails = {
    fusion_casing: {
        name: "fusion_casing",
        prefix: "gtceu:",
        field_generator_tier: "iv",
        casing_tier: "luv"
    },
    fusion_casing_mk2: {
        name: "fusion_casing_mk2",
        prefix: "gtceu:",
        field_generator_tier: "luv",
        casing_tier: "zpm"
    },
    fusion_casing_mk3: {
        name: "fusion_casing_mk3",
        prefix: "gtceu:",
        field_generator_tier: "zpm",
        casing_tier: "uv"
    },
    auxiliary_boosted_fusion_casing_mk1: {
        name: "auxiliary_boosted_fusion_casing_mk1",
        prefix: "start_core:",
        field_generator_tier: "uv",
        casing_tier: "uhv"
    },
    fusion_casing_mk4: {
        name: "fusion_casing_mk4",
        prefix: "start_core:",
        field_generator_tier: "uhv",
        casing_tier: "uev"
    },
    auxiliary_boosted_fusion_casing_mk2: {
        name: "auxiliary_boosted_fusion_casing_mk2",
        prefix: "start_core:",
        field_generator_tier: "uev",
        casing_tier: "uiv"
    }
}

global.fusionCoilRecycleDetails = {
    fusion_coil: {
        components: "ignored",
        tierComponent: "iv",
        plateMaterial: "gtceu:europium",
        prefix: "gtceu:",
        plateCount: 4
    },
    auxiliary_fusion_coil_mk1: {
        components: [ "field_generator", "field_generator", "field_generator", "field_generator", "electric_pump", "electric_pump" ],
        tierComponent: "zpm",
        plateMaterial: "gtceu:zircalloy_4",
        prefix: "start_core:",
        plateCount: 8
    },
    advanced_fusion_coil: {
        components: [ "field_generator", "field_generator", "electric_pump"],
        tierComponent: "uv",
        plateMaterial: "gtceu:magmada_alloy",
        prefix: "start_core:",
        plateCount: 4
    },
    auxiliary_fusion_coil_mk2: {
        components: [ "field_generator", "field_generator", "field_generator", "field_generator", "electric_pump", "electric_pump" ],
        tierComponent: "uhv",
        plateMaterial: "gtceu:abyssal_alloy",
        prefix: "start_core:",
        plateCount: 8
    }
};

global.casingMaterials = {
    lv: `gtceu:${componentMaterials.lv.materials.tierMaterial}`,
    mv: `gtceu:${componentMaterials.mv.materials.tierMaterial}`,
    hv: `gtceu:${componentMaterials.hv.materials.tierMaterial}`,
    ev: `gtceu:${componentMaterials.ev.materials.tierMaterial}`,
    iv: `gtceu:${componentMaterials.iv.materials.tierMaterial}`,
    luv: `gtceu:${componentMaterials.luv.materials.tierMaterial}`,
    zpm: `gtceu:${componentMaterials.zpm.materials.tierMaterial}`,
    uv: `gtceu:${componentMaterials.uv.materials.tierMaterial}`,
    uhv: `gtceu:${componentMaterials.uhv.materials.tierMaterial}`,
    uev: `gtceu:${componentMaterials.uev.materials.tierMaterial}`,
    uiv: `gtceu:${componentMaterials.uiv.materials.tierMaterial}`
}

// global.energyRecycleMaterials = {
//     lv: {
//         casingMaterial: "steel",
//         cableMaterial: "tin"
//     },
//     mv: {
//         casingMaterial: "aluminium",
//         cableMaterial: "copper"
//     },
//     hv: {
//         casingMaterial: "stainless_steel",
//         cableMaterial: "gold"
//     },
//     ev: {
//         casingMaterial: "titanium",
//         cableMaterial: "aluminium"
//     },
//     iv: {
//         casingMaterial: "tungsten_steel",
//         cableMaterial: "tungsten"
//     },
//     luv: {
//         casingMaterial: "rhodium_plated_palladium",
//         cableMaterial: "niobium_titanium"
//     },
//     zpm: {
//         casingMaterial: "naquadah_alloy",
//         cableMaterial: "vanadium_gallium"
//     },
//     uv: {
//         casingMaterial: "darmstadtium",
//         cableMaterial: "yttrium_barium_cuprate"
//     },
//     uhv: {
//         casingMaterial: "neutronium",
//         cableMaterial: "europium"
//     },
//     uev: {
//         casingMaterial: "mythrolic_alloy",
//         cableMaterial: "cerium_tritelluride"
//     },
//     uiv: {
//         casingMaterial: "chaotixic_alloy",
//         cableMaterial: "polonium_bismide"
//     }
// }

// global.energyHatchRecycleCounts = {
//     lvtohv: {
//         a2: {
//             casingCount: 8,
//             cableCount: 2
//         }
//     },
//     evtoiv: {
//         a2: {
//             casingCount: 8,
//             cableCount: 2
//         },
//         a4: {
//             casingCount: 10, //+2
//             cableCount: 6 //+4
//         },
//         a16: {
//             casingCount: 22, //+12
//             cableCount: 17 //+11
//         },
//         a64: {
//             casingCount: 36, //+14
//             cableCount: 65 //+48
//         }
//     },
//     luv: {
//         a2: {
//             casingCount: 8,
//             cableCount: 3
//         },
//         a4: {
//             casingCount: 10,
//             cableCount: 7
//         },
//         a16: {
//             casingCount: 22,
//             cableCount: 18
//         },
//         a64: {
//             casingCount: 36,
//             cableCount: 66
//         }
//     },
//     zpm,
//     uv,
//     uhv,
//     uev,
//     uiv
// }
