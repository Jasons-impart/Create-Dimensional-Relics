ServerEvents.recipes(e => {
    // 增加配方：磁铁矿块
    e.shaped("create_new_age:magnetite_block", [
        "ABA",
        "BAB",
        "ABA"
    ], {
        A: "create_new_age:overcharged_iron",
        B: "createdelight:overcharged_redstone"
    })
    // 替换配方：锅炉加热器
    e.shaped("create_new_age:heater", [
        "A A",
        "ABA",
        "CDC"
    ], {
        A: "alloyed:steel_nugget",
        B: "create:empty_blaze_burner",
        C: "create_new_age:heat_pipe",
        D: "create_new_age:overcharged_iron"
    })
        .id("create_new_age:shaped/boiler_heater")
    // 增加配方：充能红石
    e.custom({
        type: "create_new_age:energising",
        energy_needed: 1000,
        ingredients: [{
            item: "redstone"
        }],
        results: [{
            item: "createdelight:overcharged_redstone"
        }]
    })
    // 替换配方：基础电路板
    e.recipes.create.deploying("create_new_age:blank_circuit", [
        "#forge:stone",
        "refinedstorage:basic_processor"
    ])
        .id("create_new_age:pressing/blank_circuit")
})
