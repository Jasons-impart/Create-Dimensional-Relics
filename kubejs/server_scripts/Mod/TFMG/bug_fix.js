ServerEvents.recipes(e =>{
    // 流体兼容create储罐
    e.recipes.create.emptying([Fluid.of('createindustry:crude_oil_fluid'), "minecraft:bucket"], 'createindustry:crude_oil_fluid_bucket')
    e.recipes.create.emptying([Fluid.of('createindustry:gasoline'), "minecraft:bucket"], 'createindustry:gasoline_bucket')
    e.recipes.create.emptying([Fluid.of('createindustry:creosote'), "minecraft:bucket"], 'createindustry:creosote_bucket')
    e.recipes.create.emptying([Fluid.of('createindustry:heavy_oil'), "minecraft:bucket"], 'createindustry:heavy_oil_bucket')
    e.recipes.create.emptying([Fluid.of('createindustry:naphtha'), "minecraft:bucket"], 'createindustry:naphtha_bucket')
    e.recipes.create.emptying([Fluid.of('createindustry:kerosene'), "minecraft:bucket"], 'createindustry:kerosene_bucket')
    e.recipes.create.emptying([Fluid.of('createindustry:diesel'), "minecraft:bucket"], 'createindustry:diesel_bucket')
    e.recipes.create.emptying([Fluid.of('ulterlands:primosoup'), "minecraft:bucket"], 'ulterlands:primosoup_bucket')
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