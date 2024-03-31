ServerEvents.recipes(e => {
    // 移除配方： mek青铜及钢
    remove_recipes_output(e, [
        "mekanism:ingot_steel",
        "mekanism:ingot_bronze",
        "mekanism:block_bronze",
        "mekanism:block_steel"
    ])

})
