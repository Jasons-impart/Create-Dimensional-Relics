ServerEvents.recipes(e => {
    // 移除纸箱配方 
    remove_recipes_output(e, [
        "mekanism:cardboard_box",
        "mekanism:energized_smelter",

    ])


    //  序列合成电力熔炼炉
    let iner = "minecraft:blast_furnace"
    e.recipes.create.sequenced_assembly("mekanism:energized_smelter", "minecraft:blast_furnace", [
        e.recipes.create.deploying(iner, [iner, "mekanism:steel_casing"]),
        e.recipes.create.deploying(iner, [iner, "vintageimprovements:redstone_module"]),
        e.recipes.create.deploying(iner, [iner, "createindustry:screw"]),
        e.recipes.create.deploying(iner, [iner, "createindustry:screwdriver"])
            .keepHeldItem()
        
    ])
        .transitionalItem(iner)
        .loops(1)
        .id('mekanism:energized_smelter')
    
    //  序列合成冶金灌注机
    let perfusion = "createindustry:casting_spout"
    e.recipes.create.sequenced_assembly("mekanism:metallurgic_infuser", "createindustry:casting_spout", [
        e.recipes.create.deploying(perfusion, [perfusion, "mekanism:steel_casing"]),
        e.recipes.create.deploying(perfusion, [perfusion, "vintageimprovements:redstone_module"]),
        e.recipes.create.deploying(perfusion, [perfusion, "mekanism:alloy_infused"]),
        e.recipes.create.deploying(perfusion, [perfusion, "aether:zanite_gemstone"]),
        e.recipes.create.deploying(perfusion, [perfusion, "createindustry:screw"]),
        e.recipes.create.deploying(perfusion, [perfusion, "createindustry:screwdriver"])
            .keepHeldItem()
        
    ])
        .transitionalItem(perfusion)
        .loops(1)
        .id('mekanism:metallurgic_infuser')
}) 