ServerEvents.recipes(e => {
    // 钻石粉碎
    e.recipes.create.crushing(
        [
            "minecraft:diamond",
            Item.of("mekanism:dust_diamond").withChance(0.25)
        ],
        [
            "mekanism:dust_diamond"
        ])
        .id("create:crushing/mekanism:dust_diamond")
    // 金粉碎
    e.recipes.create.crushing(        
        [
        "minecraft:gold_ingot",
        Item.of("mekanism:dust_gold").withChance(0.25)
        ],
        [
            "mekanism:dust_gold"
        ])
        .id("create:crushing/mekanism:dust_gold")
    // 焦煤粉 
    e.recipeSt.create.milling(
        [
            "createindustry:coal_coke",
        ],
        [
            "createindustry:coal_coke_dust"
        ])
        .id("coal_coke_dust")
})
