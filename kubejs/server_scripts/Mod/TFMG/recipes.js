ServerEvents.recipes(e=>{
    // 耐火黏土球与耐火黏土合成
    e.shapeless('createindustry:fireclay', '4x createindustry:fireclay_ball')
    e.recipes.create.crushing("4x createindustry:fireclay_ball", "createindustry:fireclay")
    // quark石灰岩兼容石灰粉
    e.recipes.create.crushing("createindustry:limesand", "quark:limestone")
    e.recipes.create.milling("createindustry:limesand", "quark:limestone")
    // 铝土矿作为副矿产生
    e.recipes.create.crushing([
        Item.of("create:crushed_raw_aluminum").withChance(0.1)
    ], [
        "create:crushed_raw_iron"
    ])
    e.recipes.create.crushing([
        "create:crushed_raw_iron",
        Item.of("create:crushed_raw_aluminum").withChance(0.3),
        Item.of("create:experience_nugget").withChance(0.75)
    ], [
        "minecraft:raw_iron"
    ])
        .id("create:crushing/raw_iron")
    e.recipes.create.crushing([
        "9x create:crushed_raw_iron",
        Item.of("create:crushed_raw_aluminum").withChance(0.3).withCount(9),
        Item.of("create:experience_nugget").withChance(0.75).withCount(9)
    ], [
        "minecraft:raw_iron_block"
    ])
        .id("create:crushing/raw_iron_block")
})
ServerEvents.tags("fluid", e =>{})