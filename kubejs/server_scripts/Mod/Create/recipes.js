ServerEvents.recipes(e => {
    // 储罐合成修改
    e.shaped("create:fluid_tank", [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "create:copper_sheet",
        B: "minecraft:bucket"
    }).id("create:crafting/kinetics/fluid_tank")
    // 储罐合成增加配方
    e.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
              "tag": "forge:plates/bronze"
            },
            "loops": 5,
            "results": [
              {
                "item": "create:fluid_tank"
              }
            ],
            "sequence": [
                {
                    "type": "vintageimprovements:curving",
                    "ingredients": [
                        {
                          "tag": "forge:plates/bronze"
                        }
                    ],
                    "results": [
                        {
                          "item": "alloyed:bronze_sheet"
                        }
                    ]
                },
            ],
            "transitionalItem": {
              "item": "alloyed:bronze_sheet"
            }
          }
    )
    // 搅拌合成：玫瑰石英
    e.recipes.create.mixing(
        ["create:rose_quartz"],
        ["2x minecraft:redstone", "minecraft:quartz"]
    ).id("create.kjs:rose_quartz").heated()
    // 新增配方：玫瑰石英
    e.shapeless("create:rose_quartz", [
        "4x redstone",
        "quartz"
    ]).id("create.kjs:rose_quartz_manual_only")
    //钻石粉修改兼容
    e.recipes.create.crushing(
        ["mekanism:dust_diamond", Item.of("mekanism:dust_diamond").withChance(0.25)],
        ["minecraft:diamond"]
    ).id("createaddition:crushing/diamond")
    // 强化黑曜石粉修改兼容
    e.recipes.create.crushing(
        ["mekanism:dust_refined_obsidian", Item.of("create:powdered_obsidian").withChance(0.75)],
        ["mekanism:ingot_refined_obsidian"]
    )
    // 树木肥料
    remove_recipes_output(e, "create:tree_fertilizer")
    e.shapeless("2x create:tree_fertilizer",
        ["createaddition:biomass", "minecraft:bone_meal"])
})
