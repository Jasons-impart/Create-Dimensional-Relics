ServerEvents.recipes(e => {
    // 搅拌合成：粗铸铁
    e.recipes.create.mixing(
        ["createdimensionalrelics:raw_steel_ingot"],
        ["minecraft:iron_ingot", "#minecraft:coals", Fluid.lava(10)]
    )
        .id("create.kjs:raw_steel")
    e.recipes.create.mixing(
        ["createdimensionalrelics:raw_steel_ingot"],
        ["minecraft:iron_ingot", "#minecraft:coals"]
    )
        .id("create.kjs:raw_steel/2")
        .heated()
    // 序列合成：铸铁
    let inter = "createdimensionalrelics:hammering_raw_steel_ingot"
    e.recipes.create.sequenced_assembly("createbigcannons:cast_iron_ingot", "createdimensionalrelics:raw_steel_ingot", [
        e.recipes.create.filling(inter, [inter, Fluid.lava(10)]),
        e.recipes.create.pressing(inter, inter)
    ])
        .transitionalItem(inter)
        .loops(3)
    e.remove({ id: "createbigcannons:compacting/iron_to_cast_iron_ingot" })
})
