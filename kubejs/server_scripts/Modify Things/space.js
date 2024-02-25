ServerEvents.recipes(e => {
    // 动力合成器添加：暗淡太空合金
    e.recipes.create.mechanical_crafting("8x createdelight:bleak_space_alloy_ingot", [
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
    e.shapeless("createdelight:bleak_space_alloy_block", [
        "9x createdelight:bleak_space_alloy_ingot"
    ])
    e.shapeless("9x createdelight:bleak_space_alloy_ingot", [
        "createdelight:bleak_space_alloy_block"
    ])
    // 太空合金块合成
    e.shapeless("createdelight:space_alloy_block", [
        "9x createdelight:space_alloy_ingot"
    ])
    e.shapeless("9x createdelight:space_alloy_ingot", [
        "createdelight:space_alloy_block"
    ])
    // 暗淡太空合金充能
    e.custom({
        type: "create_new_age:energising",
        energy_needed: 10000,
        ingredients: [{
            item: "createdelight:bleak_space_alloy_ingot"
        }],
        results: [{
            item: "createdelight:space_alloy_ingot"
        }]
    })
    // 暗淡太空合金充能
    e.custom({
        type: "createaddition:charging",
        input: {
            "item": "createdelight:bleak_space_alloy_ingot",
            "count": 1
        },
        result: {
            "item": "createdelight:space_alloy_ingot",
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
            item: "createdelight:bleak_space_alloy_block"
        }],
        results: [{
            item: "createdelight:space_alloy_block"
        }]
    })
    // 太空构件合成
    let inter = "createdelight:incompleted_space_precision_mechanism";
    e.recipes.create.sequenced_assembly([
        Item.of("createdelight:space_precision_mechanism")
            .withChance(80),
        Item.of("kuebjs:space_alloy_nugget")
            .withChance(5),
        Item.of("createdelight:overcharged_redstone")
            .withChance(5),
        Item.of("create_new_age:overcharged_diamond")
            .withChance(5),
        Item.of("createdelight:space_alloy_sheet")
            .withChance(5)
    ], "createdelight:space_alloy_sheet", [
        e.recipes.create.deploying(inter, [inter, "createdelight:space_alloy_nugget"]),
        e.recipes.create.deploying(inter, [inter, "createdelight:overcharged_redstone"]),
        e.recipes.create.deploying(inter, [inter, "create_new_age:overcharged_diamond"])
    ])
        .transitionalItem(inter)
        .loops(5)
    // 太空合金板合成
    e.recipes.create.pressing("createdelight:space_alloy_sheet", "createdelight:space_alloy_ingot")
    // 太空合金粒合成
    e.shapeless("9x createdelight:space_alloy_nugget", "createdelight:space_alloy_ingot")
    e.shapeless("createdelight:space_alloy_ingot", "9x createdelight:space_alloy_nugget")
    // 暗淡太空合金工具手柄
    e.shaped("createdelight:bleak_space_alloy_handle", [
        " A ",
        " A ",
        "   "
    ], {
        A: "createdelight:bleak_space_alloy_ingot"
    })
    // 太空合金稿合成
    e.recipes.create.mechanical_crafting("createdelight:space_alloy_pickaxe", [
        " AAA ",
        "BCBCB",
        "CBEBC",
        "  D  ",
        "  D  ",
        "  D  "
    ], {
        A: "createdelight:space_alloy_sheet",
        B: "create_new_age:overcharged_diamond",
        C: "createdelight:space_alloy_ingot",
        D: "createdelight:bleak_space_alloy_handle",
        E: "createdelight:space_precision_mechanism"
    })
    // 太空合金剑合成
    e.recipes.create.mechanical_crafting("createdelight:space_alloy_sword", [
        "    B",
        "   BA",
        "  BA ",
        "BAC  ",
        " DA  ",
        "D B  ",
    ], {
        A: "createdelight:space_alloy_ingot",
        B: "create_new_age:overcharged_diamond",
        C: "createdelight:space_precision_mechanism",
        D: "createdelight:bleak_space_alloy_handle"
    })
    // 太空合金头盔合成
    e.recipes.create.mechanical_crafting("createdelight:space_alloy_helmet", [
        " AAAAA ",
        "ABBBBBA",
        "A CBC A",
        "ABBDBBA",
        "ABBBBBA",
        "DBDBDBD"
    ], {
        A: "createdelight:bleak_space_alloy_ingot",
        B: "createdelight:space_alloy_ingot",
        C: "createdelight:miracle_dust",
        D: "createdelight:space_precision_mechanism"
    })
    e.recipes.create.mechanical_crafting("createdelight:space_alloy_chestplate", [
        "AB   BA",
        "AACCCAA",
        " ADCDA ",
        " ACBCA ",
        " ADCDA ",
        "  AAA  "
    ], {
        A: "createdelight:bleak_space_alloy_ingot",
        B: "createdelight:space_precision_mechanism",
        C: "createdelight:space_alloy_ingot",
        D: "createdelight:miracle_dust"
    })
    // 太空合金护腿合成
    e.recipes.create.mechanical_crafting("createdelight:space_alloy_leggings", [
        "AAAAAAA",
        "ABBCBBA",
        "ADACADA",
        "ABA ABA",
        "ADA ADA",
        "ABA ABA",
        "AAA AAA"
    ], {
        A: "createdelight:bleak_space_alloy_ingot",
        B: "createdelight:space_alloy_ingot",
        C: "createdelight:miracle_dust",
        D: "createdelight:space_precision_mechanism"
    })
    // 太空合金靴子合成
    e.recipes.create.mechanical_crafting("createdelight:space_alloy_boots", [
        " BA AB ",
        " AB BA ",
        " BA AB ",
        "AAB BAA",
        "ACA ACA",
        "AAA AAA"
    ], {
        A: "createdelight:bleak_space_alloy_ingot",
        B: "createdelight:space_alloy_ingot",
        C: "createdelight:space_precision_mechanism"
    })
})
// 太空合金系列附魔取消
MoreJSEvents.enchantmentTableEnchant(e => {
    if (e.item == "#createdelight:space_alloy_tiers/tools") {
        e.cancel()
    }
})
MoreJSEvents.enchantmentTableIsEnchantable(e => {
    if (e.item.tag == "#createdelight:space_alloy_tiers/tools") {
        e.cancel()
    }
})
ServerEvents.tags("item", e => {
    // 太空合金锭tag添加（维修）
    e.add("kjs:bleak_space_alloy_ingot", [
        "createdelight:bleak_space_alloy_ingot", "createdelight:space_alloy_ingot"
    ])
    e.add("kjs:space_alloy_ingot", "createdelight:space_alloy_ingot")
    // 太空合金物品tag添加
    e.add("kjs:space_alloy_tiers/tools", [
        "createdelight:space_alloy_helmet",
        "createdelight:space_alloy_boots",
        "createdelight:space_alloy_leggings",
        "createdelight:space_alloy_chestplate",
        "createdelight:space_alloy_axe",
        "createdelight:space_alloy_pickaxe",
        "createdelight:space_alloy_sword",
        "createdelight:space_alloy_shovel",
        "createdelight:space_alloy_hoe",
    ])
    // 非天境物品支持天境挖掘速度
    e.add("aether:treated_as_aether_item", [
        "upgradednetherite_creative:creative_upgraded_netherite_sword",
        "upgradednetherite_creative:creative_upgraded_netherite_shield",
        "createdelight:space_alloy_axe"
    ])
    // 非天境物品支持金琥珀开掘
    e.add("aether:golden_amber_harvesters", [
        "createdelight:space_alloy_axe"
    ])
})
