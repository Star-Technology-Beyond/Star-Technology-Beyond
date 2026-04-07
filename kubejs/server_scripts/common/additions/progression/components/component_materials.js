// priority: 1000

global.componentMaterials = {
    lv: {
        materials: {
            tierMaterial: 'steel',
            cable: 'tin'
        }
    },
    mv: {
        materials: {
            tierMaterial: 'aluminium',
            cable: 'copper'
        }
    },
    hv: {
        materials: {
            tierMaterial: 'stainless_steel',
            cable: 'gold'
        }
    },
    ev: {
        materials: {
            tierMaterial: 'titanium',
            cable: 'aluminium',
            lubricant: 'lubricant',
            solder: 'soldering_alloy',
            superconductor: 'uranium_triplatinum',
            battery: 'lapotron_crystal'
        }
    },
    iv: {
        materials: {
            tierMaterial: 'tungsten_steel',
            cable: 'platinum',
            lubricant: 'lubricant',
            solder: 'soldering_alloy',
            superconductor: 'samarium_iron_arsenic_oxide',
            battery: 'lapotronic_energy_orb'
        }
    },
    luv: {
        tiers: { tier: 'luv', tier0: 'zpm', tier1: 'iv', tier2: 'ev' },
        materials: {
            tierMaterial: 'rhodium_plated_palladium',
            primMaterial: 'hsss',
            supMaterial: 'ruridit',
            wire: 'hssg',
            wireMechanical: 'palladium',
            wireCoil: 'osmiridium',
            elctrlyzWire: 'osmium',
            tierFluid: '', //none exist
            coolant: '', //none exist
            solder: 'soldering_alloy',
            lubricant: 'lubricant',
            primRubber: 'styrene_butadiene_rubber',
            supRubber: 'silicone_rubber',
            plastic: 'polybenzimidazole',
            cable: 'niobium_titanium',
            cable1: 'vanadium_gallium',
            catalyst: '1x gtceu:quantum_star',
            primMagnet: 'samarium',
            supMagnet: '', //none exist
            pipeMaterial: 'niobium_titanium',
            miscMaterial: 'rhodium',
            glass: 'gtceu:laminated_glass',
            superconductor: 'indium_tin_barium_titanium_cuprate',
            buzz: 'niobium_titanium',
            chip: 'gtceu:hpic',
            fluidStorage: 'gtceu:titanium_drum',
            itemStorage: 'gtceu:titanium_crate',
            battery: 'lapotronic_energy_orb_cluster'
        },
        scaling: {
            scaler: 1,
            EU: GTValues.VA[GTValues.IV]
        },
        researchData: {
            default: { ifDRS: false, cwuD: 0, duraD: 90, EUtD: GTValues.VA[GTValues.EV] },
            special: { ifSRS: false, cwuS: 0, duraS: 60, EUtS: GTValues.VA[GTValues.IV] }
        }
    },

    zpm: {
        tiers: { tier: 'zpm', tier0: 'uv', tier1: 'luv', tier2: 'iv' },
        materials: {
            tierMaterial: 'naquadah_alloy',
            primMaterial: 'naquadah_alloy',
            supMaterial: 'osmiridium',
            wire: 'naquadah',
            wireMechanical: 'europium',
            wireCoil: 'europium',
            elctrlyzWire: 'osmium',
            tierFluid: '', //none exist
            coolant: '', //none exist
            solder: 'soldering_alloy',
            lubricant: 'lubricant',
            primRubber: 'styrene_butadiene_rubber',
            supRubber: 'silicone_rubber',
            plastic: 'polybenzimidazole',
            cable: 'vanadium_gallium',
            cable1: 'yttrium_barium_cuprate',
            catalyst: '2x gtceu:quantum_star',
            primMagnet: 'samarium',
            supMagnet: '', //none exist
            pipeMaterial: 'polybenzimidazole',
            miscMaterial: 'trinium',
            glass: 'gtceu:fusion_glass',
            superconductor: 'uranium_rhodium_dinaquadide',
            buzz: 'naquadah_alloy',
            chip: 'gtceu:uhpic',
            fluidStorage: 'gtceu:tungsten_steel_drum',
            itemStorage: 'gtceu:tungsten_steel_crate'
        },
        scaling: {
            scaler: 2,
            EU: GTValues.VA[GTValues.LuV]
        },
        researchData: {
            default: { ifDRS: false, cwuD: 0, duraD: 90, EUtD: GTValues.VA[GTValues.IV] },
            special: { ifSRS: true, cwuS: 4, duraS: 90, EUtS: GTValues.VA[GTValues.LuV] }
        }
    },

    uv: {
        tiers: { tier: 'uv', tier0: 'uhv', tier1: 'zpm', tier2: 'luv' },
        materials: {
            tierMaterial: 'darmstadtium',
            primMaterial: 'titan_steel',
            supMaterial: 'pure_netherite',
            wire: 'naquadah_alloy',
            wireMechanical: 'americium',
            wireCoil: 'tritanium',
            elctrlyzWire: 'trinium',
            tierFluid: 'naquadria',
            coolant: '', //none exist
            solder: 'indium_tin_lead_cadmium_soldering_alloy',
            lubricant: 'lubricant',
            primRubber: 'styrene_butadiene_rubber',
            supRubber: 'styrene_butadiene_rubber',
            plastic: 'polyether_ether_ketone',
            cable: 'yttrium_barium_cuprate',
            cable1: 'europium',
            catalyst: '1x gtceu:gravi_star',
            primMagnet: 'dysprosium',
            supMagnet: '',
            pipeMaterial: 'naquadah',
            miscMaterial: 'naquadria',
            glass: 'gtceu:fusion_glass',
            superconductor: 'enriched_naquadah_trinium_europium_duranide',
            buzz: 'duranium',
            chip: 'gtceu:uhpic',
            fluidStorage: 'start_core:enriched_naquadah_drum',
            itemStorage: 'start_core:enriched_naquadah_crate',
            battery: 'energy_cluster'
        },
        scaling: {
            scaler: 3,
            EU: GTValues.VA[GTValues.ZPM]
        },
        researchData: {
            default: { ifDRS: true, cwuD: 32, duraD: 180, EUtD: GTValues.VA[GTValues.ZPM] },
            special: { ifSRS: true, cwuS: 48, duraS: 180, EUtS: GTValues.VA[GTValues.UV] }
        }
    },

    uhv: {
        tiers: { tier: 'uhv', tier0: 'uev', tier1: 'uv', tier2: 'zpm' },
        materials: {
            tierMaterial: 'neutronium',
            primMaterial: 'zalloy',
            supMaterial: 'zircalloy_4',
            wire: 'zirconium_selenide_diiodide',
            wireMechanical: 'zirconium',
            wireCoil: 'thorium_plut_duranide_241',
            elctrlyzWire: 'trinium',
            tierFluid: 'naquadria',
            coolant: 'liquid_helium',
            solder: 'indium_tin_lead_cadmium_soldering_alloy',
            lubricant: 'tungsten_disulfide',
            primRubber: 'perfluoroelastomer_rubber',
            supRubber: 'styrene_butadiene_rubber',
            plastic: 'polyether_ether_ketone',
            cable: 'europium',
            cable1: 'cerium_tritelluride',
            catalyst: '2x gtceu:gravi_star',
            primMagnet: 'dysprosium',
            supMagnet: 'samarium',
            pipeMaterial: 'zapolgium',
            miscMaterial: 'neutronium',
            glass: 'kubejs:reinforced_fusion_glass',
            superconductor: 'ruthenium_trinium_americium_neutronate',
            buzz: 'neutronium',
            chip: 'gtceu:uhpic',
            fluidStorage: 'start_core:neutronium_drum',
            itemStorage: 'start_core:neutronium_crate',
            battery: 'max_battery'
        },
        scaling: {
            scaler: 4,
            EU: GTValues.VA[GTValues.UV]
        },
        researchData: {
            default: { ifDRS: true, cwuD: 128, duraD: 180, EUtD: GTValues.VA[GTValues.UV] },
            special: { ifSRS: true, cwuS: 144, duraS: 180, EUtS: GTValues.VA[GTValues.UV] }
        }
    },

    uev: {
        tiers: { tier: 'uev', tier0: 'uiv', tier1: 'uhv', tier2: 'uv' },
        materials: {
            tierMaterial: 'mythrolic_alloy',
            primMaterial: 'starium_alloy',
            supMaterial: 'magmada_alloy',
            wire: 'astatium_bioselex_carbonite',
            wireMechanical: 'adamantine',
            wireCoil: 'aurourium',
            elctrlyzWire: 'tritanium',
            tierFluid: 'isovol',
            coolant: 'superstate_helium_3',
            solder: 'naquadated_soldering_alloy',
            lubricant: 'tungsten_disulfide',
            primRubber: 'perfluoroelastomer_rubber',
            supRubber: 'styrene_butadiene_rubber',
            plastic: 'poly_34_ethylenedioxythiophene_polystyrene_sulfate',
            cable: 'cerium_tritelluride',
            cable1: 'polonium_bismide',
            catalyst: '2x kubejs:helish_star',
            primMagnet: 'zapolgium',
            supMagnet: 'dysprosium',
            pipeMaterial: 'mythrolic_alloy',
            miscMaterial: 'mythrolic_alloy',
            glass: 'kubejs:reinforced_fusion_glass',
            superconductor: 'enriched_pallarovium_alloy',
            buzz: 'neutronium',
            chip: 'kubejs:uepic',
            fluidStorage: '', //none exist
            itemStorage: '' //none exist
        },
        scaling: {
            scaler: 5,
            EU: GTValues.VA[GTValues.UHV]
        },
        researchData: {
            default: { ifDRS: true, cwuD: 160, duraD: 180, EUtD: GTValues.VA[GTValues.UHV] },
            special: { ifSRS: true, cwuS: 176, duraS: 180, EUtS: GTValues.VA[GTValues.UHV] }
        }
    },

    uiv: {
        tiers: { tier: 'uiv', tier0: 'uxv', tier1: 'uev', tier2: 'uhv' },
        materials: {
            tierMaterial: 'chaotixic_alloy',
            primMaterial: 'ohmderblux_alloy',
            supMaterial: 'abyssal_alloy',
            wire: 'hafnide_ito_ceramic',
            wireMechanical: 'xeproda',
            wireCoil: 'magmada_alloy',
            elctrlyzWire: 'tritanium',
            tierFluid: 'calamatium',
            coolant: 'superstate_helium_3',
            solder: 'naquadated_soldering_alloy',
            lubricant: 'tungsten_disulfide',
            primRubber: 'perfluoroelastomer_rubber',
            supRubber: 'perfluoroelastomer_rubber',
            plastic: 'poly_34_ethylenedioxythiophene_polystyrene_sulfate',
            cable: 'polonium_bismide',
            cable1: 'lepton_resonant_thallium_antimonide',
            catalyst: '1x kubejs:dragonic_eye',
            primMagnet: 'zapolgium',
            supMagnet: 'dysprosium',
            pipeMaterial: 'nyanium',
            miscMaterial: 'chaotixic_alloy',
            glass: 'kubejs:draco_resilient_fusion_glass',
            superconductor: 'rhenium_super_composite_alloy',
            buzz: 'neutronium',
            chip: 'kubejs:uepic',
            fluidStorage: '', //none exist
            itemStorage: '' //none exist
        },
        scaling: {
            scaler: 6,
            EU: GTValues.VA[GTValues.UEV]
        },
        researchData: {
            default: { ifDRS: true, cwuD: 192, duraD: 180, EUtD: GTValues.VA[GTValues.UEV] },
            special: { ifSRS: true, cwuS: 208, duraS: 180, EUtS: GTValues.VA[GTValues.UEV] }
        }
    }

}
