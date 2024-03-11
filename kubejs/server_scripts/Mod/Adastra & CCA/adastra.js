ServerEvents.recipes(e => {
    // 移除配方：ad_astra
    remove_recipes_output(e, [
        "ad_astra:hammer",
        "ad_astra:compressor",
        "ad_astra:coal_generator",
        "ad_astra:cable_duct",
        "ad_astra:ostrum_fluid_pipe",
        "ad_astra:desh_cable",
        "ad_astra:steel_cable",
        "ad_astra:desh_fluid_pipe",
        "ad_astra:fluid_pipe_duct",
        "ad_astra:water_pump",
        "ad_astra:nasa_workbench",
        "ad_astra:wrench",
        "ad_astra:rocket_nose_cone",
        "ad_astra:rocket_fin",
    ])
    remove_recipes_id(e, [
        "ad_astra:nasa_workbench/tier_1_rocket",
        "ad_astra:nasa_workbench/tier_2_rocket",
        "ad_astra:nasa_workbench/tier_3_rocket",
        "ad_astra:nasa_workbench/tier_4_rocket",
        "alloyed:mixing/steel_ingot",
        "ad_astra:recipes/steel_ingot_from_blasting_iron_ingot",
        "ad_astra:recipes/steel_ingot_from_nuggets",
        "ad_astra:recipes/steel_block",
        "ad_astra:recipes/steel_ingot",
        "ad_astra:recipes/engine_frame",
        "ad_astra:recipes/steel_tank",
        "ad_astra:recipes/steel_engine",
        "ad_astra:recipes/desh_tank",
        "ad_astra:recipes/desh_engine",
        "ad_astra:recipes/ostrum_tank",
        "ad_astra:recipes/ostrum_engine",
        "ad_astra:recipes/calorite_tank",
        "ad_astra:recipes/calorite_engine",
    ])

    // 新增配方：银河系漫游指南
    e.shapeless("ad_astra:astrodux", [
        "alloyed:steel_ingot",
        "minecraft:book"
    ])
        .id("ad_astra:recipes/astrodux")
    // 新增配方：霜原木
    e.shapeless("ad_astra:glacian_log", [
        "#minecraft:logs",
        "ad_astra:ice_shard"
    ])
    // 新增配方：霜原树叶
    e.shapeless("ad_astra:glacian_leaves", [
        "#minecraft:leaves",
        "ad_astra:ice_shard"
    ])
    // 替换配方：氧气罐
    e.shaped("ad_astra:oxygen_tank", [
        "ABA",
        "ACA",
        "AAA"
    ], {
        A: "alloyed:steel_sheet",
        B: "createaddition:iron_rod",
        C: "create:fluid_tank"
    })
        .id("ad_astra:recipes/oxygen_tank")
    // 替换配方：喷气式航天服
    e.shaped("ad_astra:jet_suit", [
        "ABA",
        "CDC",
        "EFE"
    ], {
        A: "ad_astra:calorite_plate",
        B: "create_sa:brass_jetpack_chestplate",
        C: "ad_astra:calorite_tank",
        D: "ad_astra:netherite_space_suit",
        E: "ad_astra:calorite_block",
        F: "ad_astra:calorite_engine"
    })
        .id("ad_astra:recipes/jet_suit")
    //替换配方：充能器
    e.shaped("ad_astra:energizer", [
        "ABA",
        "ACA",
        "DAD"
    ], {
        A: "ad_astra:ostrum_plate",
        B: "create:depot",
        C: "create_new_age:energiser_t3",
        D: "createaddition:modular_accumulator"
    })
        .id("ad_astra:recipes/energizer")
    // 替换配方：凛冰冻结装置
    e.shaped("ad_astra:cryo_freezer", [
        "ABA",
        "BCB",
        "DBD"
    ], {
        A: "ad_astra:engine_fan",
        B: "ad_astra:ostrum_ingot",
        C: "ad_astra:ostrum_tank",
        D: "createaddition:modular_accumulator"
    })
        .id("ad_astra:recipes/cryo_freezer")
    // 替换配方：氧气装载机
    e.shaped("ad_astra:oxygen_loader", [
        "ABA",
        "CDC",
        "AEA"
    ], {
        A: "alloyed:steel_sheet",
        B: "ad_astra:engine_fan",
        C: "ad_astra:oxygen_tank",
        D: "minecraft:lightning_rod",
        E: "createaddition:modular_accumulator"
    })
        .id("ad_astra:recipes/oxygen_loader")
    // 替换配方：燃油精炼机
    e.shaped("ad_astra:fuel_refinery", [
        "AAA",
        "BCB",
        "AAA"
    ], {
        A: "alloyed:steel_sheet",
        B: "create:fluid_tank",
        C: "minecraft:furnace"
    })
        .id("ad_astra:recipes/fuel_refinery")
    // 替换配方：太阳能板
    e.shaped("ad_astra:solar_panel", [
        "AAA",
        "BCB",
        "CDC"
    ], {
        A: "minecraft:blue_stained_glass",
        B: "alloyed:steel_sheet",
        C: "ad_astra:desh_plate",
        D: "createaddition:modular_accumulator"
    })
        .id("ad_astra:recipes/solar_panel")
    // 动力合成器添加：喷气式宇航服一套
    e.recipes.create.mechanical_crafting("ad_astra:jet_suit_helmet", [
        "AAA",
        "ABA"
    ], {
        A: "createdimensionalrelics:bleak_space_alloy_ingot",
        B: "create_crystal_clear:train_glass_casing"
    })
    e.recipes.create.mechanical_crafting(Item.of("ad_astra:jet_suit", "{BotariumData:{Energy:1000000L,StoredFluids:[{Amount:4000L,Fluid:\"ad_astra: oxygen\"}]},Damage:0,SpawnParticles:0b}"), [
        "A A",
        "AAA",
        "ABA"
    ], {
        A: "createdimensionalrelics:space_alloy_ingot",
        B: "create_sa:brass_jetpack_chestplate"
    })
    e.recipes.create.mechanical_crafting("ad_astra:jet_suit", [
        "A A",
        "AAA",
        "ABA"
    ], {
        A: "createdimensionalrelics:bleak_space_alloy_ingot",
        B: "create_sa:brass_jetpack_chestplate"
    })
    e.recipes.create.mechanical_crafting("ad_astra:jet_suit_pants", [
        "AAA",
        "A A",
        "A A"
    ], {
        A: "createdimensionalrelics:bleak_space_alloy_ingot"
    })
    e.recipes.create.mechanical_crafting("ad_astra:jet_suit_boots", [
        "   ",
        "A A",
        "A A"
    ], {
        A: "createdimensionalrelics:bleak_space_alloy_ingot"
    })
})
