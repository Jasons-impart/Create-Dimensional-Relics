ServerEvents.recipes(e => {
    // 移除配方： mek钢
    remove_recipes_output(e, [
        "mekanism:ingot_steel",
        "mekanism:ingot_bronze",
    ])

})
