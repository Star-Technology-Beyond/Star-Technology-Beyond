ServerEvents.recipes (event => {
    const id = global.id;

    event.recipes.create.mechanical_crafting(`gtceu:komaru_frame_test`, [
		'   G G   ',
        '  GGFGG  ',
        ' Gg1m2bG ',
        '  s345a  ',
        'R  FPF  R',
        'PPFPPPFPP',
        '  fFPFf  ',
        'RfFPPPFfR',
        'PPPPPPPPP'
	], {
		G: 'kubejs:komaru_gravitational_stabilizers',
		F: 'gtceu:hvga_steel_frame',
		f: 'gtceu:draco_abyssal_frame',
		P: 'kubejs:komaru_plating',
		R: 'kubejs:komaru_rift_caller',
		g: 'gtceu:gravitational_compression_chamber',
		b: 'gtceu:byteforce_unified_incomparable_logistics_depot',
		m: 'gtceu:multithreaded_component_synthesis_forge',
		s: 'gtceu:superior_particulate_isolation_nexus',
		a: 'gtceu:ascendant_engraving_matrix',
        1: 'placeablemaxwell:mars',
        2: 'placeablemaxwell:vasilisa',
        3: 'placeablemaxwell:valenok',
        4: 'placeablemaxwell:maxwell',
        5: 'placeablemaxwell:poomba',
	}).id('start:shaped/komaru_frame');

});