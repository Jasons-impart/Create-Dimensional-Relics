ServerEvents.recipes(e => {
    // 原本配方移除
    remove_recipes_output(e, [
        "alloyedguns:musket",
        "alloyedguns:flintlock",
        "alloyedguns:small_iron_pipe",
        "cgm:workbench",
        "alloyedguns:complex_bullet_casing",
    ])
    remove_recipes_id(e, [
        "cgm:crude_shot",
    ])
    remove_recipes_type(e, [
        "cgm:workbench",
    ])

    // 短距瞄准镜
    e.recipes.create.sequenced_assembly([
        Item.of("cgm:short_scope").withChance(80.0),
        Item.of("alloyed:steel_sheet").withChance(20.0),],
        "alloyed:steel_sheet", [
        e.recipes.create.deploying("alloyed:steel_sheet", ["alloyed:steel_sheet", "create:framed_glass_pane"]),
        e.recipes.create.deploying("alloyed:steel_sheet", ["alloyed:steel_sheet", "minecraft:amethyst_shard"]),
    ]).transitionalItem("alloyed:steel_sheet").loops(2)
    // 中距瞄准镜
    e.recipes.create.sequenced_assembly([
        Item.of("cgm:medium_scope").withChance(80.0),
        Item.of("alloyed:steel_sheet").withChance(20.0),],
        "alloyed:steel_sheet", [
        e.recipes.create.deploying("alloyed:steel_sheet", ["alloyed:steel_sheet", "minecraft:copper_ingot"]),
        e.recipes.create.deploying("alloyed:steel_sheet", ["alloyed:steel_sheet", "minecraft:amethyst_shard"]),
        e.recipes.create.deploying("alloyed:steel_sheet", ["alloyed:steel_sheet", "minecraft:redstone"]),
    ]).transitionalItem("alloyed:steel_sheet").loops(2)
    // 长距瞄准镜
    e.recipes.create.sequenced_assembly([
        Item.of("cgm:long_scope").withChance(80.0),
        Item.of("alloyed:steel_sheet").withChance(10.0),
        Item.of("minecraft:spyglass").withChance(10.0),],
        "alloyed:steel_sheet", [
        e.recipes.create.deploying("alloyed:steel_sheet", ["alloyed:steel_sheet", "minecraft:spyglass"]),
        e.recipes.create.deploying("alloyed:steel_sheet", ["alloyed:steel_sheet", "minecraft:amethyst_shard"]),
        e.recipes.create.deploying("alloyed:steel_sheet", ["alloyed:steel_sheet", "minecraft:copper_ingot"]),
    ]).transitionalItem("alloyed:steel_sheet").loops(1)
    // 消音器    
    e.recipes.create.sequenced_assembly([
        Item.of("cgm:silencer").withChance(80.0),
        Item.of("minecraft:sponge").withChance(10.0),
        Item.of("alloyed:steel_ingot").withChance(10.0)],
        "minecraft:sponge", [
        e.recipes.create.deploying("minecraft:sponge", ["minecraft:sponge", "alloyed:steel_ingot"]),
        e.recipes.create.pressing("minecraft:sponge", "minecraft:sponge"),
    ]).transitionalItem("minecraft:sponge").loops(1)
    // 轻型枪托
    e.recipes.create.sequenced_assembly([
        Item.of("cgm:light_stock").withChance(80.0),
        Item.of("alloyed:steel_sheet").withChance(20.0),],
        "alloyed:steel_sheet", [
        e.recipes.create.deploying("alloyed:steel_sheet", ["alloyed:steel_sheet", "minecraft:iron_nugget"]),
        e.recipes.create.cutting("alloyed:steel_sheet", "alloyed:steel_sheet"),
        e.recipes.create.deploying("alloyed:steel_sheet", ["alloyed:steel_sheet", "minecraft:gray_wool"]),
    ]).transitionalItem("alloyed:steel_sheet").loops(1)
    // 战术枪托
    e.recipes.create.sequenced_assembly([
        Item.of("cgm:tactical_stock").withChance(70.0),
        Item.of("alloyed:steel_sheet").withChance(30.0),],
        "alloyed:steel_sheet", [
        e.recipes.create.deploying("alloyed:steel_sheet", ["alloyed:steel_sheet", "alloyed:steel_sheet"]),
        e.recipes.create.cutting("alloyed:steel_sheet", "alloyed:steel_sheet"),
        e.recipes.create.deploying("alloyed:steel_sheet", ["alloyed:steel_sheet", "minecraft:iron_nugget"]),
        e.recipes.create.deploying("alloyed:steel_sheet", ["alloyed:steel_sheet", "minecraft:gray_wool"]),
    ]).transitionalItem("alloyed:steel_sheet").loops(1)
    // 重型枪托
    e.recipes.create.sequenced_assembly([
        Item.of("cgm:weighted_stock").withChance(80.0),
        Item.of("alloyed:steel_sheet").withChance(20.0),],
        "alloyed:steel_sheet", [
        e.recipes.create.deploying("alloyed:steel_sheet", ["alloyed:steel_sheet", "minecraft:iron_ingot"]),
        e.recipes.create.deploying("alloyed:steel_sheet", ["alloyed:steel_sheet", "minecraft:stripped_spruce_log"]),
        e.recipes.create.pressing("alloyed:steel_sheet", "alloyed:steel_sheet"),
    ]).transitionalItem("alloyed:steel_sheet").loops(1)
    // 轻型握把
    e.recipes.create.sequenced_assembly([
        Item.of("cgm:light_grip").withChance(80.0),
        Item.of("alloyed:steel_sheet").withChance(20.0),],
        "alloyed:steel_sheet", [
        e.recipes.create.deploying("alloyed:steel_sheet", ["alloyed:steel_sheet", "alloyed:steel_nugget"]),
        e.recipes.create.pressing("alloyed:steel_sheet", "alloyed:steel_sheet"),
    ]).transitionalItem("alloyed:steel_sheet").loops(1)
    // 特种握把
    e.recipes.create.sequenced_assembly([
        Item.of("cgm:specialised_grip").withChance(80.0),
        Item.of("alloyed:steel_ingot").withChance(20.0),],
        "alloyed:steel_ingot", [
        e.recipes.create.deploying("alloyed:steel_ingot", ["alloyed:steel_ingot", "alloyed:steel_nugget"]),
        e.recipes.create.deploying("alloyed:steel_ingot", ["alloyed:steel_ingot", "alloyed:steel_nugget"]),
        e.recipes.create.pressing("alloyed:steel_ingot", "alloyed:steel_ingot"),
    ]).transitionalItem("alloyed:steel_ingot").loops(2)
    // 基础配件包          
    e.recipes.create.mechanical_crafting("alloyedguns:basic_gun_kit", [
        "AAAA",
        "ABCA",
        "ADEA",
        "AAAA"
    ], {
        A: "create:andesite_alloy",
        B: "alloyedguns:revolver_cylinder",
        C: "create:precision_mechanism",
        D: "alloyedguns:magazine",
        E: "alloyedguns:small_steel_pipe"
    })
    // 高级配件包            
    e.recipes.create.mechanical_crafting("alloyedguns:advanced_gun_kit", [
        "AAAAA",
        "ABCBA",
        "ADEFA",
        "AAAAA"
    ], {
        A: "alloyed:bronze_ingot",
        B: "create:precision_mechanism",
        C: "alloyedguns:basic_gun_kit",
        D: "cgm:silencer",
        E: "cgm:tactical_stock",
        F: "cgm:medium_scope"
    })
    // 精密配件包
    e.recipes.create.mechanical_crafting("alloyedguns:complex_gun_kit", [
        "AAAAA",
        "BCCCB",
        "BDEDB",
        "BFGHB",
        "AAAAA"
    ], {
        A: "create:brass_ingot",
        B: "createaddition:electrum_ingot",
        C: "create:precision_mechanism",
        D: "alloyedguns:revolver_cylinder",
        E: "alloyedguns:advanced_gun_kit",
        F: "cgm:weighted_stock",
        G: "cgm:long_scope",
        H: "cgm:specialised_grip"
    })
    // 闪光弹
    e.recipes.create.sequenced_assembly([
        "cgm:stun_grenade"
    ], "alloyedguns:gunpowder_bottle", [
        e.recipes.create.deploying("alloyedguns:gunpowder_bottle", ["alloyedguns:gunpowder_bottle", "minecraft:glowstone_dust"]),
        e.recipes.create.deploying("alloyedguns:gunpowder_bottle", ["alloyedguns:gunpowder_bottle", "minecraft:string"]),
    ]).transitionalItem("alloyedguns:gunpowder_bottle").id("cgm:sequenced_assembly/stun_grenade").loops(1)
    // 榴弹发射器
    e.recipes.create.sequenced_assembly([
        "cgm:grenade_launcher"
    ], "cgm:rifle", [
        e.recipes.create.deploying("cgm:rifle", ["cgm:rifle", "alloyedguns:small_steel_pipe"]),
        e.recipes.create.deploying("cgm:rifle", ["cgm:rifle", "alloyed:steel_sheet"]),
        e.recipes.create.deploying("cgm:rifle", ["cgm:rifle", "alloyedguns:complex_gun_kit"]),
    ]).transitionalItem("cgm:rifle").loops(1).id("cgm:sequenced_assembly/grenade_launcher")
    // 巴祖卡火箭筒
    e.recipes.create.mechanical_crafting("cgm:bazooka", [
        "  A  ",
        "BCCCB",
        " DEF "
    ], {
        A: "alloyedguns:advanced_gun_kit",
        B: "create:smart_chute",
        C: "create:chute",
        D: "alloyed:steel_ingot",
        E: "alloyedguns:complex_gun_kit",
        F: "cgm:grenade_launcher"
    }).id("cgm:mechanical_crafting/bazooka")
    // 重型步枪
    e.recipes.create.mechanical_crafting("cgm:heavy_rifle", [
        "    AA   ",
        "BCCCCCCCC",
        "B DEBBF B"
    ], {
        A: "alloyed:steel_ingot",
        B: "alloyed:steel_sheet",
        C: "alloyedguns:small_steel_pipe",
        D: "alloyedguns:complex_gun_kit",
        E: "cgm:rifle",
        F: "alloyedguns:advanced_gun_kit"
    }).id("cgm:mechanical_crafting/heavy_rifle")
})