ServerEvents.recipes(e => {
    remove_recipes_output(e, [
        "supplementaries:bomb",
        "create_enchantment_industry:experience_rotor",
        "vinery:cherry_boat",
        "beachparty:palm_boat",
        "createaddition:electrum_amulet",
        "createaddition:spool",
        "createaddition:copper_spool",
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
        "supplementaries:bomb_spiky"
    ])
    remove_recipes_id(e, [
        "create:crafting/materials/rose_quartz",
        "alexsmobs:flint_n_steel_dropbear_claw",
        "neapolitan:banana/banana_bread",
    ])
    remove_recipes_mod(e, [
        "ftbquests",
        "itemfilters",
    ])
})
