ServerEvents.recipes(e => {
    // 动力合成器添加：暗淡太空合金
    e.recipes.create.mechanical_crafting("8x createdimensionalrelics:bleak_space_alloy_ingot", [
        "AABB",
        "ACDB",
        "BEFA",
        "BBAA"
    ], {
        A: "createbigcannons:cast_iron_ingot",
        B: "alloyed:steel_sheet",
        C: "ad_astra:calorite_ingot",
        D: "ad_astra:ostrum_ingot",
        E: "createbigcannons:nethersteel_ingot",
        F: "ad_astra:desh_ingot"
    })
    // 暗淡太空合金块合成
    e.shapeless("createdimensionalrelics:bleak_space_alloy_block", [
        "9x createdimensionalrelics:bleak_space_alloy_ingot"
    ])
    e.shapeless("9x createdimensionalrelics:bleak_space_alloy_ingot", [
        "createdimensionalrelics:bleak_space_alloy_block"
    ])
    // 太空合金块合成
    e.shapeless("createdimensionalrelics:space_alloy_block", [
        "9x createdimensionalrelics:space_alloy_ingot"
    ])
    e.shapeless("9x createdimensionalrelics:space_alloy_ingot", [
        "createdimensionalrelics:space_alloy_block"
    ])
    // 暗淡太空合金充能
    e.custom({
        type: "create_new_age:energising",
        energy_needed: 10000,
        ingredients: [{
            item: "createdimensionalrelics:bleak_space_alloy_ingot"
        }],
        results: [{
            item: "createdimensionalrelics:space_alloy_ingot"
        }]
    })
    // 暗淡太空合金充能
    e.custom({
        type: "createaddition:charging",
        input: {
            "item": "createdimensionalrelics:bleak_space_alloy_ingot",
            "count": 1
        },
        result: {
            "item": "createdimensionalrelics:space_alloy_ingot",
            "count": 1
        },
        "energy": 10000,
        "maxChargeRate": 200
    })
    // 暗淡太空合金块充能
    e.custom({
        type: "create_new_age:energising",
        energy_needed: 90000,
        ingredients: [{
            item: "createdimensionalrelics:bleak_space_alloy_block"
        }],
        results: [{
            item: "createdimensionalrelics:space_alloy_block"
        }]
    })
    // 太空构件合成
    let inter = "createdimensionalrelics:incompleted_space_alloy_precision_mechanism";
    e.recipes.create.sequenced_assembly([
        Item.of("createdimensionalrelics:space_alloy_precision_mechanism")
            .withChance(80),
        Item.of("kuebjs:space_alloy_nugget")
            .withChance(5),
        Item.of("createdimensionalrelics:overcharged_redstone")
            .withChance(5),
        Item.of("create_new_age:overcharged_diamond")
            .withChance(5),
        Item.of("createdimensionalrelics:space_alloy_sheet")
            .withChance(5)
    ], "createdimensionalrelics:space_alloy_sheet", [
        e.recipes.create.deploying(inter, [inter, "createdimensionalrelics:space_alloy_nugget"]),
        e.recipes.create.deploying(inter, [inter, "createdimensionalrelics:overcharged_redstone"]),
        e.recipes.create.deploying(inter, [inter, "create_new_age:overcharged_diamond"])
    ])
        .transitionalItem(inter)
        .loops(5)
    // 太空合金板合成
    e.recipes.create.pressing("createdimensionalrelics:space_alloy_sheet", "createdimensionalrelics:space_alloy_ingot")
    // 太空合金粒合成
    e.shapeless("9x createdimensionalrelics:space_alloy_nugget", "createdimensionalrelics:space_alloy_ingot")
    e.shapeless("createdimensionalrelics:space_alloy_ingot", "9x createdimensionalrelics:space_alloy_nugget")
    // 暗淡太空合金工具手柄
    e.shaped("createdimensionalrelics:bleak_space_alloy_handle", [
        " A ",
        " A ",
        "   "
    ], {
        A: "createdimensionalrelics:bleak_space_alloy_ingot"
    })
    // 太空合金稿合成
    e.recipes.create.mechanical_crafting("createdimensionalrelics:space_alloy_pickaxe", [
        " AAA ",
        "BCBCB",
        "CBEBC",
        "  D  ",
        "  D  ",
        "  D  "
    ], {
        A: "createdimensionalrelics:space_alloy_sheet",
        B: "create_new_age:overcharged_diamond",
        C: "createdimensionalrelics:space_alloy_ingot",
        D: "createdimensionalrelics:bleak_space_alloy_handle",
        E: "createdimensionalrelics:space_alloy_precision_mechanism"
    })
    // 太空合金剑合成
    e.recipes.create.mechanical_crafting("createdimensionalrelics:space_alloy_sword", [
        "    B",
        "   BA",
        "  BA ",
        "BAC  ",
        " DA  ",
        "D B  ",
    ], {
        A: "createdimensionalrelics:space_alloy_ingot",
        B: "create_new_age:overcharged_diamond",
        C: "createdimensionalrelics:space_alloy_precision_mechanism",
        D: "createdimensionalrelics:bleak_space_alloy_handle"
    })
    // 太空合金头盔合成
    e.recipes.create.mechanical_crafting("createdimensionalrelicscore:space_alloy_helmet", [
        " AAAAA ",
        "ABBBBBA",
        "A CBC A",
        "ABBDBBA",
        "ABBBBBA",
        "DBDBDBD"
    ], {
        A: "createdimensionalrelics:bleak_space_alloy_ingot",
        B: "createdimensionalrelics:space_alloy_ingot",
        C: "createdimensionalrelics:miracle_dust",
        D: "createdimensionalrelics:space_alloy_precision_mechanism"
    })
    e.recipes.create.mechanical_crafting("createdimensionalrelicscore:space_alloy_chestplate", [
        "AB   BA",
        "AACCCAA",
        " ADCDA ",
        " ACBCA ",
        " ADCDA ",
        "  AAA  "
    ], {
        A: "createdimensionalrelics:bleak_space_alloy_ingot",
        B: "createdimensionalrelics:space_alloy_precision_mechanism",
        C: "createdimensionalrelics:space_alloy_ingot",
        D: "createdimensionalrelics:miracle_dust"
    })
    // 太空合金护腿合成
    e.recipes.create.mechanical_crafting("createdimensionalrelicscore:space_alloy_leggings", [
        "AAAAAAA",
        "ABBCBBA",
        "ADACADA",
        "ABA ABA",
        "ADA ADA",
        "ABA ABA",
        "AAA AAA"
    ], {
        A: "createdimensionalrelics:bleak_space_alloy_ingot",
        B: "createdimensionalrelics:space_alloy_ingot",
        C: "createdimensionalrelics:miracle_dust",
        D: "createdimensionalrelics:space_alloy_precision_mechanism"
    })
    // 太空合金靴子合成
    e.recipes.create.mechanical_crafting("createdimensionalrelicscore:space_alloy_boots", [
        " BA AB ",
        " AB BA ",
        " BA AB ",
        "AAB BAA",
        "ACA ACA",
        "AAA AAA"
    ], {
        A: "createdimensionalrelics:bleak_space_alloy_ingot",
        B: "createdimensionalrelics:space_alloy_ingot",
        C: "createdimensionalrelics:space_alloy_precision_mechanism"
    })
})
// 太空合金系列附魔取消
MoreJSEvents.enchantmentTableEnchant(e => {
    if (e.item == "#createdimensionalrelics:space_alloy_tiers/tools") {
        e.cancel()
    }
})
MoreJSEvents.enchantmentTableIsEnchantable(e => {
    if (e.item.tag == "#createdimensionalrelics:space_alloy_tiers/tools") {
        e.cancel()
    }
})
ServerEvents.tags("item", e => {
    // 太空合金锭tag添加（维修）
    e.add("kjs:bleak_space_alloy_ingot", [
        "createdimensionalrelics:bleak_space_alloy_ingot", "createdimensionalrelics:space_alloy_ingot"
    ])
    e.add("kjs:space_alloy_ingot", "createdimensionalrelics:space_alloy_ingot")
    // 太空合金物品tag添加
    e.add("kjs:space_alloy_tiers/tools", [
        "createdimensionalrelics:space_alloy_helmet",
        "createdimensionalrelics:space_alloy_boots",
        "createdimensionalrelics:space_alloy_leggings",
        "createdimensionalrelics:space_alloy_chestplate",
        "createdimensionalrelics:space_alloy_axe",
        "createdimensionalrelics:space_alloy_pickaxe",
        "createdimensionalrelics:space_alloy_sword",
        "createdimensionalrelics:space_alloy_shovel",
        "createdimensionalrelics:space_alloy_hoe",
    ])
    // 非天境物品支持天境挖掘速度
    e.add("aether:treated_as_aether_item", [
        "upgradednetherite_creative:creative_upgraded_netherite_sword",
        "upgradednetherite_creative:creative_upgraded_netherite_shield",
        "createdimensionalrelics:space_alloy_axe"
    ])
    // 非天境物品支持金琥珀开掘
    e.add("aether:golden_amber_harvesters", [
        "createdimensionalrelics:space_alloy_axe"
    ])
})
