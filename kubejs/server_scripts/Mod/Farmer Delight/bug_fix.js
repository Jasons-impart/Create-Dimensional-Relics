ServerEvents.recipes(e => {
    // 搅拌合成：番茄酱（液体）
    e.recipes.create.mixing(
        [Fluid.of("create_central_kitchen:tomato_sauce", 250)],
        ["2x #forge:crops/tomato"]
    )
        .id("create_central_kitchen:mixing/tomato_sauce")
})
