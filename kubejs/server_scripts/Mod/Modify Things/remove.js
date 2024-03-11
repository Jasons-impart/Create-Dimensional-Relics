ServerEvents.recipes(e => {
    remove_recipes_output(e, [
        "supplementaries:bomb",
        "create_sa:slime_helmet",
        "create_sa:slime_boots",
        "create_sa:copper_magnet",
        "create_sa:brass_cube",
        "create_sa:drone_controller",
        "create_sa:fan_component",
        "create_sa:vault_component",
        "create_sa:brass_drone_item",
        "create_enchantment_industry:experience_rotor",
        "vinery:cherry_boat",
        "beachparty:palm_boat",
        "createaddition:tesla_coil",
        "createaddition:electrum_amulet",
        "createaddition:copper_wire",
        "createaddition:iron_wire",
        "createaddition:spool",
        "createaddition:electrum_rod",
        "createaddition:gold_rod",
        "createaddition:brass_rod",
        "createaddition:festive_spool",
        "createaddition:gold_spool",
        "createaddition:electrum_spool",
        "createaddition:electric_motor",
        "createaddition:alternator",
        "createaddition:connector",
        "createaddition:small_light_connector",
        "createaddition:large_connector",
        "createaddition:redstone_relay",
        "refinedstorage:raw_basic_processor",
        "refinedstorage:raw_improved_processor",
        "refinedstorage:raw_advanced_processor",
        "refinedstorage:wrench",
        'supplementaries:bomb_spiky'
    ])
    remove_recipes_id(e, [
        "create:crafting/materials/rose_quartz",
        // "minecraft:flint_and_steel",
        "alexsmobs:flint_n_steel_dropbear_claw",
        "neapolitan:banana/banana_bread",
    ])
    remove_recipes_mod(e, [
        "ftbquests",
        "itemfilters",
    ])
})
