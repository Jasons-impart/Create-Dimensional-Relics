ServerEvents.recipes(e => {
    // 移除配方：ad_astra
    remove_recipes_output(e, [
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
        'ad_astra:steel_plate'
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
    ])
    // 钢板合成
    e.shapeless("alloyed:steel_sheet",[
        "ad_astra:hammer",
        "alloyed:steel_ingot"
    ]).damageIngredient("ad_astra:hammer").id("ad_astra:hammering/steel_sheet")
    // 钢燃料储罐合成
    let steel_tank = "ad_astra:steel_tank"
    e.recipes.create.sequenced_assembly("3x ad_astra:steel_tank", "alloyed:steel_sheet",[
        e.recipes.create.deploying(steel_tank, [steel_tank, "alloyed:steel_sheet"]),
        e.recipes.create.pressing(steel_tank, steel_tank),
        e.recipes.create.pressing(steel_tank, steel_tank),
        e.recipes.create.pressing(steel_tank, steel_tank)
    ])
        .transitionalItem(steel_tank)
        .loops(2)
        .id("ad_astra:recipes/steel_tank")
    // 戴斯燃料储罐合成
    let desh_tank = "ad_astra:desh_tank"
    e.recipes.create.sequenced_assembly("3x ad_astra:desh_tank", "ad_astra:desh_plate",[
        e.recipes.create.deploying(desh_tank, [desh_tank, "ad_astra:desh_plate"]),
        e.recipes.create.pressing(desh_tank, desh_tank),
        e.recipes.create.pressing(desh_tank, desh_tank),
        e.recipes.create.pressing(desh_tank, desh_tank)
    ])
        .transitionalItem(steel_tank)
        .loops(2)
        .id("ad_astra:recipes/desh_tank")
    // 紫金燃料储罐合成
    let ostrum_tank = "ad_astra:ostrum_tank"
    e.recipes.create.sequenced_assembly("3x ad_astra:ostrum_tank", "ad_astra:ostrum_plate",[
        e.recipes.create.deploying(ostrum_tank, [ostrum_tank, "ad_astra:ostrum_plate"]),
        e.recipes.create.pressing(ostrum_tank, ostrum_tank),
        e.recipes.create.pressing(ostrum_tank, ostrum_tank),
        e.recipes.create.pressing(ostrum_tank, ostrum_tank)
    ])
        .transitionalItem(ostrum_tank)
        .loops(2)
        .id("ad_astra:recipes/ostrum_tank")
    // 耐热金属燃料储罐合成
    let calorite_tank = "ad_astra:calorite_tank"
    e.recipes.create.sequenced_assembly("3x ad_astra:calorite_tank", "ad_astra:calorite_plate",[
        e.recipes.create.deploying(calorite_tank, [calorite_tank, "ad_astra:calorite_plate"]),
        e.recipes.create.pressing(calorite_tank, calorite_tank),
        e.recipes.create.pressing(calorite_tank, calorite_tank),
        e.recipes.create.pressing(calorite_tank, calorite_tank)
    ])
        .transitionalItem(calorite_tank)
        .loops(2)
        .id("ad_astra:recipes/calorite_tank")
    // 引擎框架合成配方修改
    let inter = "ad_astra:engine_frame"
    e.recipes.create.sequenced_assembly("4x ad_astra:engine_frame", "create:precision_mechanism", [
        e.recipes.create.deploying(inter, [inter, "alloyed:steel_sheet"]),
        e.recipes.create.deploying(inter, [inter, "create:cogwheel"]),
        e.recipes.create.deploying(inter, [inter, "create:large_cogwheel"]),
        e.recipes.create.cutting(inter, inter)
    ])
        .transitionalItem(inter)
        .loops(1)
        .id("ad_astra:recipes/engine_frame")
    // 钢引擎合成配方修改
    e.shaped("ad_astra:steel_engine", [
        "AAA",
        "ABA",
        "ACA"
    ], {
        A:"alloyed:steel_sheet",
        B:"ad_astra:engine_frame",
        C:"ad_astra:engine_fan"
    }).id("ad_astra:recipes/steel_engine")
    // 戴斯引擎合成配方修改
    e.shaped("ad_astra:desh_engine", [
        "AAA",
        "ABA",
        "ACA"
    ], {
        A:"ad_astra:desh_plate",
        B:"ad_astra:engine_frame",
        C:"ad_astra:engine_fan"
    }).id("ad_astra:recipes/desh_engine")
    // 紫金引擎合成配方修改
    e.shaped("ad_astra:ostrum_engine", [
        "AAA",
        "ABA",
        "ACA"
    ], {
        A:"ad_astra:ostrum_plate",
        B:"ad_astra:engine_frame",
        C:"ad_astra:engine_fan"
    }).id("ad_astra:recipes/ostrum_engine")
    // 耐热金属引擎合成配方修改
    e.shaped("ad_astra:calorite_engine", [
        "AAA",
        "ABA",
        "ACA"
    ], {
        A:"ad_astra:calorite_plate",
        B:"ad_astra:engine_frame",
        C:"ad_astra:engine_fan"
    }).id("ad_astra:recipes/calorite_engine")
    // 钢引擎方块合成配方
    e.shaped("createdimensionalrelics:steel_engine",[
        "AAA",
        "ABA",
        "CCC"
    ], {
        A:"alloyed:steel_sheet",
        B:"ad_astra:steel_tank",
        C:"ad_astra:steel_engine"
    })
    // 戴斯引擎方块合成配方
    e.shaped("createdimensionalrelics:desh_engine",[
        "AAA",
        "ABA",
        "CCC"
    ], {
        A:"ad_astra:desh_plate",
        B:"ad_astra:desh_tank",
        C:"ad_astra:desh_engine"
    })
    // 紫金引擎方块合成配方
    e.shaped("createdimensionalrelics:ostrum_engine",[
        "AAA",
        "ABA",
        "CCC"
    ], {
        A:"ad_astra:ostrum_plate",
        B:"ad_astra:ostrum_tank",
        C:"ad_astra:ostrum_engine"
    })
    // 耐热金属引擎方块合成配方
    e.shaped("createdimensionalrelics:calorite_engine",[
        "AAA",
        "ABA",
        "CCC"
    ], {
        A:"ad_astra:calorite_plate",
        B:"ad_astra:calorite_tank",
        C:"ad_astra:calorite_engine"
    })
    // 钢燃料储罐方块合成配方
    e.shaped("createdimensionalrelics:steel_tank", [
        "AAA",
        "AAA",
        "BBB"
    ], {
        A:"alloyed:steel_sheet",
        B:"ad_astra:steel_tank"
    })
    // 戴斯燃料储罐方块合成配方
    e.shaped("createdimensionalrelics:desh_tank", [
        "AAA",
        "AAA",
        "BBB"
    ], {
        A:"ad_astra:desh_plate",
        B:"ad_astra:desh_tank"
    })
    // 紫金燃料储罐方块合成配方
    e.shaped("createdimensionalrelics:ostrum_tank", [
        "AAA",
        "AAA",
        "BBB"
    ], {
        A:"ad_astra:ostrum_plate",
        B:"ad_astra:ostrum_tank"
    })
    // 耐热金属燃料储罐方块合成配方
    e.shaped("createdimensionalrelics:calorite_tank", [
        "AAA",
        "AAA",
        "BBB"
    ], {
        A:"ad_astra:calorite_plate",
        B:"ad_astra:calorite_tank"
    })
    // 一阶火箭核心合成配方
    let tier_1_core = "createdimensionalrelics:rocket_core_tier_1"
    e.recipes.create.sequenced_assembly("createdimensionalrelics:rocket_core_tier_1", "alloyed:steel_sheet", [
        e.recipes.create.deploying(tier_1_core, [tier_1_core, "create:precision_mechanism"]),
        e.recipes.create.deploying(tier_1_core, [tier_1_core, "alloyed:steel_sheet"])
    ])
        .transitionalItem(tier_1_core)
        .loops(3)
    // 二阶火箭核心合成配方
    let tier_2_core = "createdimensionalrelics:rocket_core_tier_2"
    e.recipes.create.sequenced_assembly("createdimensionalrelics:rocket_core_tier_2", "ad_astra:desh_plate", [
        e.recipes.create.deploying(tier_2_core, [tier_2_core, "create:precision_mechanism"]),
        e.recipes.create.deploying(tier_2_core, [tier_2_core, "ad_astra:desh_plate"])
    ])
        .transitionalItem(tier_2_core)
        .loops(3)
    // 三阶火箭核心合成配方
    let tier_3_core = "createdimensionalrelics:rocket_core_tier_3"
    e.recipes.create.sequenced_assembly("createdimensionalrelics:rocket_core_tier_3", "ad_astra:ostrum_plate", [
        e.recipes.create.deploying(tier_3_core, [tier_3_core, "create:precision_mechanism"]),
        e.recipes.create.deploying(tier_3_core, [tier_3_core, "ad_astra:ostrum_plate"])
    ])
        .transitionalItem(tier_3_core)
        .loops(3)
    // 四阶火箭核心合成配方
    let tier_4_core = "createdimensionalrelics:rocket_core_tier_4"
    e.recipes.create.sequenced_assembly("createdimensionalrelics:rocket_core_tier_4", "ad_astra:calorite_plate", [
        e.recipes.create.deploying(tier_4_core, [tier_4_core, "create:precision_mechanism"]),
        e.recipes.create.deploying(tier_4_core, [tier_4_core, "ad_astra:calorite_plate"])
    ])
        .transitionalItem(tier_4_core)
        .loops(3)
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
    // 替换配方叶片
    e.shaped("ad_astra:engine_fan", [
        " A ",
        "ABA",
        " A "
    ], {
        A:"alloyed:steel_sheet",
        B:"createaddition:iron_rod"
    }).id("ad_astra:recipes/engine_fan")
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
