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
        e.recipes.create.pressing(iner, iner)
    ])
        .transitionalItem(iner)
        .loops(1)
        .id('mekanism:energized_smelter')
   
}) 
