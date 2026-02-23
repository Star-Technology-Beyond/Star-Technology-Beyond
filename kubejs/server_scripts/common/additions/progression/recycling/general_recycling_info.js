global.componentRecycleMaterials = {
    luv: {
        primMaterial: "gtceu:hsss",
        cableMaterial: "gtceu:niobium_titanium",
        wireMaterial: "gtceu:palladium",
        foilMaterial: "gtceu:rhodium"
    },
    zpm: {
        primMaterial: "gtceu:naquadah_alloy",
        cableMaterial: "gtceu:vanadium_gallium",
        wireMaterial: "gtceu:europium",
        foilMaterial: "gtceu:trinium"
    },
    uv: {
        primMaterial: "gtceu:titan_steel",
        cableMaterial: "gtceu:yttrium_barium_cuprate",
        wireMaterial: "gtceu:americium",
        foilMaterial: "gtceu:naquadria"
    },
    uhv: {
        primMaterial: "gtceu:zalloy",
        cableMaterial: "gtceu:europium",
        secMaterial: "gtceu:zircalloy_4",
        tertMaterial: "gtceu:zirconium"
    },
    uev: {
        primMaterial: "gtceu:starium_alloy",
        cableMaterial: "gtceu:cerium_tritelluride",
        secMaterial: "gtceu:magmada_alloy",
        tertMaterial: "gtceu:mythrolic_alloy"
    },
    uiv: {
        primMaterial: "gtceu:ohmderblux_alloy",
        cableMaterial: "gtceu:polonium_bismide",
        secMaterial: "gtceu:abyssal_alloy",
        tertMaterial: "gtceu:chaotixic_alloy"
    }
}

global.energyRecycleMaterials = {
    lv: {
        casingMaterial: "steel",
        cableMaterial: "tin"
    },
    mv: {
        casingMaterial: "aluminium",
        cableMaterial: "copper"
    },
    hv: {
        casingMaterial: "stainless_steel",
        cableMaterial: "gold"
    },
    ev: {
        casingMaterial: "titanium",
        cableMaterial: "aluminium"
    },
    iv: {
        casingMaterial: "tungsten_steel",
        cableMaterial: "tungsten"
    },
    luv: {
        casingMaterial: "rhodium_plated_palladium",
        cableMaterial: "niobium_titanium"
    },
    zpm: {
        casingMaterial: "naquadah_alloy",
        cableMaterial: "vanadium_gallium"
    },
    uv: {
        casingMaterial: "darmstadtium",
        cableMaterial: "yttrium_barium_cuprate"
    },
    uhv: {
        casingMaterial: "neutronium",
        cableMaterial: "europium"
    },
    uev: {
        casingMaterial: "mythrolic_alloy",
        cableMaterial: "cerium_tritelluride"
    },
    uiv: {
        casingMaterial: "chaotixic_alloy",
        cableMaterial: "polonium_bismide"
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
