ServerEvents.recipes(e => {
    // 深渊锭合成
    e.custom({
        type: "lychee:item_exploding",
        post: [{
            type: "drop_item",
            item: "createdimensionalrelics:abyss_alloy_ingot",
            count: 1
        }],
        item_in: [
            {
                "item": "deeperdarker:heart_of_the_deep"
            },
            {
                "item": "deeperdarker:reinforced_echo_shard",
            },
            {
                "item": "deeperdarker:reinforced_echo_shard",
            },
            {
                "item": "deeperdarker:reinforced_echo_shard",
            },
            {
                "item": "deeperdarker:soul_crystal",
            },
            {
                "item": "deeperdarker:soul_crystal",
            },
            {
                "item": "deeperdarker:soul_crystal",
            },
            {
                "item": "deeperdarker:soul_dust"
            },
            {
                "item": "createdimensionalrelics:miracle_dust"
            },
            {
                "item": "upgradednetherite:echo_upgraded_netherite_ingot"
            },
        ]
    })
    // 合成深渊合金块
    e.shapeless("createdimensionalrelics:abyss_alloy_block", "9x createdimensionalrelics:abyss_alloy_ingot")
    e.shapeless("9x createdimensionalrelics:abyss_alloy_ingot", "createdimensionalrelics:abyss_alloy_block")
})
