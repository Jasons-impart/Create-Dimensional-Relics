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
    // 硫粉兼容
    e.recipes.create.crushing([
        "mekanism:dust_sulfur",
        Item.of("mekanism:dust_sulfur").withChance(0.1)
    ],[
        "createindustry:sulfur"
    ]).id("createindustry:crushing/sulfur")
    e.shaped("createindustry:zinc_grenade",[
        " A ",
        "BCB",
        " A "
    ], {
        A:"create:zinc_ingot",
        B:"mekanism:dust_sulfur",
        C:"createindustry:thermite_grenade"
    }).id("createindustry:crafting/zinc_grenade")
    e.recipes.create.mixing("6x minecraft:gunpowder",[
        "2x createindustry:nitrate_dust",
        "3x minecraft:charcoal",
        "mekanism:dust_sulfur"
    ]).id("createindustry:mixing/gun_powder")
    // 硫粉兼容粉碎工厂
    e.recipes.mekanism.crushing("2x mekanism:dust_sulfur", "createindustry:sulfur")
})