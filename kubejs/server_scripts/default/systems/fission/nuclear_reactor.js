global.not_hardmode(() => {
        
    ServerEvents.recipes(event => {
        const id = global.id;

        //Controller
        event.shaped('gtceu:nuclear_reactor', [
            `HAH`,
            `RLR`,
            `CEC`
        ], {
            H: 'gtceu:heat_vent',
            A: 'gtceu:ev_robot_arm',
            R: 'gtceu:ev_fluid_regulator',
            E: 'gtceu:ev_emitter',
            L: 'gtceu:large_chemical_reactor',
            C: '#gtceu:circuits/iv'
        }).id('start:shaped/nuclear_reactor');

        const COOLANT = {
            1: 'gtceu:distilled_water 5000',
            2: 'gtceu:distilled_water 7500',
            3: 'gtceu:distilled_water 12500',
            4: 'gtceu:distilled_water 20000',
            5: 'gtceu:deionized_water 5000',
            6: 'gtceu:deionized_water 10000' 
        }

        //Fuels
        let nuclearReactor = (type,tier,modifier,boost) => {

            let coolant = COOLANT[tier];

            event.recipes.gtceu.nuclear_fission(id(type + '_fuel_rod'))
                .itemInputs('kubejs:' + type + '_fuel_rod')
                .inputFluids(coolant)
                .itemOutputs('kubejs:depleted_' + type + '_fuel_rod')
                .duration(640 * modifier / boost)
                .EUt(-GTValues.V[GTValues.EV] * boost * (2 ** tier));

        }

        nuclearReactor(`thr`,1,1.05,1.05);
        nuclearReactor(`leu238`,1,1.2,1.05);
        nuclearReactor(`heu`,2,2.2,2.4);
        nuclearReactor(`plu`,2,1.1,1.2);
        nuclearReactor(`mox239`,2,1.1,4);
        nuclearReactor(`amr`,3,1.4,0.9);
        nuclearReactor(`nep`,3,2.4,0.95);
        nuclearReactor(`crm`,4,1.5,2);
        nuclearReactor(`mox241`,4,1.15,6);
        nuclearReactor(`tpu`,4,1.1,6);
        nuclearReactor(`mox238`,4,1.1,8);
        nuclearReactor(`caf`,5,1.6,1.2);
        nuclearReactor(`etu`,5,0.9,12);
        nuclearReactor(`leu233`,5,1.2,1.1);
        nuclearReactor(`nqe`,6,0.3,32);

        });

    });

// ItemEvents.rightClicked('kubejs:highly_enriched_uranium_fuel_rod', event => {
//     if (event.player.isCrouching()) {
//         event.item.count--
//         event.server.runCommandSilent(`execute at ${event.player.username} run playsound minecraft:entity.generic.eat player ${event.player.username} ~ ~ ~`);
//         event.server.scheduleInTicks(10+Math.floor(Math.random()*300), ctx => {
//             event.server.runCommandSilent(`execute at ${event.player.username} run playsound minecraft:entity.player.burp player ${event.player.username} ~ ~ ~`);
//             event.server.scheduleInTicks(15, ctx => {
//                 event.server.runCommandSilent(`execute at ${event.player.username} run summon thermal:fire_tnt ${Math.floor(event.player.x)} ${Math.floor(event.player.y)} ${Math.floor(event.player.z)}`);
//                 event.server.runCommandSilent(`execute at ${event.player.username} run summon minecraft:tnt ${Math.floor(event.player.x)} ${Math.floor(event.player.y)} ${Math.floor(event.player.z)}`);
//                 event.player.potionEffects.add('minecraft:instant_damage', 1, 99);
//             })
//         })
//     }
// });