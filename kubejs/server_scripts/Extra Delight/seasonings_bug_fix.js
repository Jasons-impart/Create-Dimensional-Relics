ServerEvents.recipes(e => {
    // 搅拌合成：烧烤汁
    e.recipes.create.mixing(
        ["extradelight:bbq_jar_item"],
        ["#forge:crops/tomato", "#forge:crops/onion", "extradelight:vinegar", "minecraft:glass_bottle", Fluid.of("create:honey", 250)]
    )
        .id("sliceanddice_kjs:cooking/extradelight/bbq_sugar")
        .heated()
    // 搅拌合成：大骨汤
    e.recipes.create.mixing(
        ["farmersdelight:bone_broth"],
        ["minecraft:bone", "minecraft:glass_bottle", "#forge:crops/tomato"]
    )
        .id("sliceanddice_kjs:cooking/extradelight/stock_bottle")
        .heated()
    e.recipes.create.mixing(
        ["farmersdelight:bone_broth"],
        ["minecraft:bone", "minecraft:bowl", "#forge:crops/tomato"]
    )
        .id("sliceanddice_kjs:cooking/extradelight/stock_bowl")
        .heated()
    // 搅拌合成：番茄酱
    e.recipes.create.mixing(
        ["extradelight:ketchup_jar_item"],
        [Fluid.of("create:honey", 250), "2x #forge:crops/tomato", "extradelight:vinegar", "minecraft:glass_bottle"]
    )
        .id("sliceanddice_kjs:cooking/extradelight/ketchup_jar")
        .heated()
    // 苹果酱移除（配方冲突）
    e.remove({ output: "extradelight:apple_sauce" })
})
