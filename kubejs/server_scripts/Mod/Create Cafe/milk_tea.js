ServerEvents.recipes(e => {
    // 搅拌合成：椰子奶茶
    e.recipes.create.mixing(
        [Fluid.of("createcafe:coconut_tea", 500)],
        ["beachparty:coconut_open", Fluid.of("minecraft:milk", 250), Fluid.of("createcafe:melted_sugar", 250)]
    ).id("createcafe.kjs:coconut_tea").heated()
    // 搅拌合成：椰子糖浆
    e.recipes.create.mixing(
        [Fluid.of("createcafe:coconut_syrup", 1000)],
        ["beachparty:coconut_open", Fluid.water(250), Fluid.of("createcafe:melted_sugar", 750)]
    ).id("createcafe.kjs:coconut_syrup").heated()
    // 搅拌合成：葡萄奶茶
    e.recipes.create.mixing(
        [Fluid.of("createcafe:grape_tea", 1000)],
        ["#vinery:red_grape", "#vinery:white_grape", Fluid.of("minecraft:milk", 500), Fluid.of("createcafe:melted_sugar", 500)]
    ).id("createcafe.kjs:grape_tea").heated()
})
