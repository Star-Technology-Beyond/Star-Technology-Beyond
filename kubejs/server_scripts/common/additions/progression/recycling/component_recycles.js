global.componentRecycles = {
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

global.LUVToUVComponentRecycleCounts = { 
    dreamlink_cover: {
        primCount: 13,
        cableCount: 11,
        secCount: 1,
        tertCount: 4
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
    electric_motor: {
        primCount: 5,
        cableCount: 1,
        wireCount: 8,
        foilCount: 0
    }
}

global.UHVPlusComponentRecycleCounts = {
    dreamlink_cover: { // NOTE: THIS DOES NOT INCLUDE THE 2 CASING FOIL IN RECIPE
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