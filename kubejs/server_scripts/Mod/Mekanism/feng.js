ServerEvents.recipes(e => {
    // 钻石粉碎
    e.recipes.create.crushing(
        [
            "mekanism:dust_diamond",
            Item.of("mekanism:dust_diamond").withChance(0.25)
        ],
        [
            "minecraft:diamond"
        ])
        .id("create:crushing/dust_diamond")
    // 金粉碎
    e.recipes.create.crushing(        
        [
            "mekanism:dust_gold",
            Item.of("mekanism:dust_gold").withChance(0.25)
        ],
        [
            "minecraft:gold_ingot"
        ])
        .id("create:crushing/dust_gold")
    // 焦煤粉 
    e.recipeSt.create.milling(
        [
            "createindustry:coal_coke_dust",
        ],
        [
            "createindustry:coal_coke"
        ])
        .id("create:crushing/coal_coke_dust")
})
