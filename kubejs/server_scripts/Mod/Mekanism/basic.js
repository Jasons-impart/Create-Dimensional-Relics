ServerEvents.recipes(e => {
    // 移除配方： 三大合金
    remove_recipes_output(e, [
        "mekanism:alloy_infused",
        "mekanism:alloy_reinforced",
        "mekanism:alloy_atomic",
    ])

    // 移除配方： 四大控制电路
    remove_recipes_output(e, [
        "mekanism:basic_control_circuit",
        "mekanism:advanced_control_circuit",
        "mekanism:elite_control_circuit",
        "mekanism:ultimate_control_circuit",
    ])
    e.recipes.mekanism.metallurgic_infusing("createbigcannons:cast_iron_ingot",
        "createdimensionalrelics:raw_steel_ingot",
        "mekanism:carbon"
    )
    // 序列合成：灌注合金
    e.recipes.create.sequenced_assembly("mekanism:alloy_infused", "create:iron_sheet", [
        e.recipes.create.deploying("mekanism:alloy_infused", ["mekanism:alloy_infused", "ad_astra:ostrum_plate"]),
        e.recipes.create.deploying("mekanism:alloy_infused", ["mekanism:alloy_infused", "mekanism:enriched_redstone"]),
        e.recipes.create.pressing("mekanism:alloy_infused", "mekanism:alloy_infused")
    ])
        .transitionalItem("mekanism:alloy_infused")
        .loops(1)
        .id('mekanism:alloy_infused')

    // 序列合成：强化合金
    e.recipes.create.sequenced_assembly("mekanism:alloy_reinforced", "mekanism:alloy_infused", [
        e.recipes.create.deploying("mekanism:alloy_reinforced", ["mekanism:alloy_reinforced", "ad_astra:calorite_plate"]),
        e.recipes.create.deploying("mekanism:alloy_reinforced", ["mekanism:alloy_reinforced", "mekanism:enriched_diamond"]),
        e.recipes.create.pressing("mekanism:alloy_reinforced", "mekanism:alloy_reinforced")
    ])
        .transitionalItem("mekanism:alloy_reinforced")
        .loops(1)
        .id('mekanism:alloy_reinforced')

    // 序列合成：原子合金
    e.recipes.create.sequenced_assembly("mekanism:alloy_atomic", "mekanism:alloy_reinforced", [
        e.recipes.create.deploying("mekanism:alloy_atomic", ["mekanism:alloy_atomic", "createdimensionalrelicscore:space_alloy_sheet"]),
        e.recipes.create.deploying("mekanism:alloy_atomic", ["mekanism:alloy_atomic", 'mekanism:enriched_refined_obsidian']),
        e.recipes.create.pressing("mekanism:alloy_atomic", "mekanism:alloy_atomic")
    ])
        .transitionalItem("mekanism:alloy_atomic")
        .loops(1)
        .id('mekanism:alloy_atomic')

    // 序列合成：基础控制电路
    e.recipes.create.sequenced_assembly("mekanism:basic_control_circuit", "mekanism:ingot_osmium", [
        e.recipes.create.deploying("mekanism:basic_control_circuit", ["mekanism:basic_control_circuit", "create:copper_sheet"]),
        e.recipes.create.deploying("mekanism:basic_control_circuit", ["mekanism:basic_control_circuit", "mekanism:enriched_redstone"]),
        e.recipes.create.pressing("mekanism:basic_control_circuit", "mekanism:basic_control_circuit")
    ])
        .transitionalItem("mekanism:basic_control_circuit")
        .loops(1)
        .id('mekanism:basic_control_circuit_fast')
    // 序列合成：高级控制电路
    e.recipes.create.sequenced_assembly("mekanism:advanced_control_circuit", "mekanism:basic_control_circuit", [
        e.recipes.create.deploying("mekanism:advanced_control_circuit", ["mekanism:advanced_control_circuit", "mekanism:alloy_infused"]),
        e.recipes.create.pressing("mekanism:advanced_control_circuit", "mekanism:advanced_control_circuit")
    ])
        .transitionalItem("mekanism:advanced_control_circuit")
        .loops(2)
        .id('mekanism:advanced_control_circuit')

    // 序列合成：精英控制电路
    e.recipes.create.sequenced_assembly("mekanism:elite_control_circuit", "mekanism:advanced_control_circuit", [
        e.recipes.create.deploying("mekanism:elite_control_circuit", ["mekanism:elite_control_circuit", "mekanism:alloy_reinforced"]),
        e.recipes.create.pressing("mekanism:elite_control_circuit", "mekanism:elite_control_circuit")
    ])
        .transitionalItem("mekanism:elite_control_circuit")
        .loops(2)
        .id('mekanism:elite_control_circuit')

    // 序列合成：终极控制电路
    e.recipes.create.sequenced_assembly("mekanism:ultimate_control_circuit", "mekanism:elite_control_circuit", [
        e.recipes.create.deploying("mekanism:ultimate_control_circuit", ["mekanism:ultimate_control_circuit", "mekanism:alloy_atomic"]),
        e.recipes.create.pressing("mekanism:ultimate_control_circuit", "mekanism:ultimate_control_circuit")
    ])
        .transitionalItem("mekanism:ultimate_control_circuit")
        .loops(2)
        .id('mekanism:ultimate_control_circuit')
    // alloyed钢锭青铜锭兼容
    e.blasting("createdimensionalrelics:raw_steel_ingot", "mekanism:enriched_iron")
    e.blasting("createindustry:steel_ingot", "mekanism:dust_steel")
    e.blasting("alloyed:bronze_ingot", "mekanism:dust_bronze")
    e.smelting("createdimensionalrelics:raw_steel_ingot", "mekanism:enriched_iron")
    e.smelting("createindustry:steel_ingot", "mekanism:dust_steel")
    e.smelting("alloyed:bronze_ingot", "mekanism:dust_bronze")
})
