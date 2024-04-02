ServerEvents.recipes(e => {
  // 更改配方：黑曜石粉碎
  e.recipes.mekanism.enriching(
    "4x create:powdered_obsidian",
    "minecraft:obsidian"
  )
    .id("mekanism:enriching/conversion/obsidian_to_obsidian_dust")
  // 移除配方： mek青铜及钢
  remove_recipes_output(e, [
      "mekanism:ingot_steel",
      "mekanism:ingot_bronze",
      "mekanism:block_bronze",
      "mekanism:block_steel"
  ])
  // 碳粉灌注到碳
  e.custom(
      {
          "type": "mekanism:infusion_conversion",
          "input": {
            "ingredient": [
              {
                "tag": "forge:dusts/carbon"
              },
              {
                "item": "createdimensionalrelics:carbon_dust"
              }
            ]
          },
          "output": {
          "amount": 40,
          "infuse_type": "mekanism:carbon"
          }
      }
  )
})
