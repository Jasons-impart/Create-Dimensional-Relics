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
})