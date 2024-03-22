ServerEvents.recipes(e => {
    // 燃料储罐合成修改
    e.shaped("create:fluid_tank",[
        "AAA",
        "ABA",
        "AAA"
    ],{
        A:"create:copper_sheet",
        B:"minecraft:bucket"
    }).id("create:crafting/kinetics/fluid_tank")
    // 搅拌合成：玫瑰石英
    e.recipes.create.mixing(
        ["create:rose_quartz"],
        ["2x minecraft:redstone", "minecraft:quartz"]
    ).id("create.kjs:rose_quartz").heated()
    // 新增配方：玫瑰石英
    e.shapeless("create:rose_quartz", [
        "4x redstone",
        "quartz"
    ])
    // 动力锯切割：平滑玫瑰石英
    e.recipes.create.cutting(
        ["create:polished_rose_quartz", Item.of("create:polished_rose_quartz").withChance(0.1)],
        "create:rose_quartz"
    ).id("create.kjs:polished_rose_quartz")
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
})
