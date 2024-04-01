ServerEvents.recipes(e => {
    // 充电铁线及充电金线合成
    e.recipes.create.cutting("2x create_new_age:overcharged_iron_wire_2", "create_new_age:overcharged_iron_sheet")
    e.custom(
        {
            type: "create_new_age:energising",
            energy_needed: 500,
            ingredients: [
            {
                item: "createaddition:iron_wire"
            }
            ],
            results: [
            {
                item: "create_new_age:overcharged_iron_wire_2"
            }
            ]
        }
    )
    e.recipes.create.cutting("2x create_new_age:overcharged_gold_wire", "create_new_age:overcharged_golden_sheet")
    e.custom(
        {
            type: "create_new_age:energising",
            energy_needed: 1000,
            ingredients: [
            {
                item: "createaddition:gold_wire"
            }
            ],
            results: [
            {
                item: "create_new_age:overcharged_gold_wire"
            }
            ]
        }
    )
    // 替换配方：导线
    let iner = "create_new_age:copper_wire"
    e.recipes.create.sequenced_assembly("create_new_age:copper_wire", "createaddition:copper_wire", [
        e.recipes.create.deploying(iner, [iner, "minecraft:stick"]),
        e.recipes.create.cutting(iner, iner)
    ])
        .transitionalItem(iner)
        .loops(1)
        .id("create_new_age:sequenced_assembly/copper_wire")
    let iner_2 = "create_new_age:copper_wire"
    e.recipes.create.sequenced_assembly("create_new_age:overcharged_iron_wire", "create_new_age:overcharged_iron_wire_2", [
        e.recipes.create.deploying(iner_2, [iner_2, "minecraft:stick"]),
        e.recipes.create.cutting(iner_2, iner_2)
    ])
        .transitionalItem(iner_2)
        .loops(1)
        .id("create_new_age:sequenced_assembly/overcharged_iron_wire")
    let iner_3 = "create_new_age:overcharged_iron_wire"
    e.recipes.create.sequenced_assembly("create_new_age:overcharged_golden_wire", "create_new_age:overcharged_gold_wire", [
        e.recipes.create.deploying(iner_3, [iner_3, "minecraft:stick"]),
        e.recipes.create.cutting(iner_3, iner_3)
    ])
        .transitionalItem(iner_3)
        .loops(1)
        .id("create_new_age:sequenced_assembly/overcharged_golden_wire")
    e.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": "create_new_age:overcharged_diamond"
            },
            "loops": 3,
            "results": [
                {
                    "count": 3,
                    "item": "create_new_age:overcharged_diamond_wire"
                }
            ],
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [
                      {
                        "item": "create_new_age:overcharged_diamond"
                      },
                      {
                        "item": "minecraft:stick"
                      }
                    ],
                    "results": [
                      {
                        "item": "create_new_age:overcharged_diamond"
                      }
                    ]
                },
                {
                    "type": "create_new_age:energising",
                    "energy_needed": 100,
                    "ingredients": [
                        {
                            "item": "create_new_age:overcharged_diamond"
                        }
                    ],
                    "results": [
                        {
                            "item": "create_new_age:overcharged_diamond"
                        }
                    ]
                },
                {
                    "type": "create:cutting",
                    "ingredients": [
                        {
                            "item": "create_new_age:overcharged_diamond"
                        }
                    ],
                    "results": [
                        {
                            "item": "create_new_age:overcharged_diamond"
                        }
                    ]
                }
            ],
            "transitionalItem": {
                "item": "create_new_age:overcharged_diamond"
            }
        }
    ).id("create_new_age:diamond_wire")
    e.shaped("3x create_new_age:copper_wire",[
        "ABA",
        "ABA",
        "ABA"
    ], {
        A:"createaddition:copper_wire",
        B:"minecraft:stick"
    }).id("create_new_age:cutting/copper_sheet")
    e.shaped("3x create_new_age:overcharged_iron_wire",[
        "ABA",
        "ABA",
        "ABA"
    ], {
        A:"create_new_age:overcharged_iron_wire_2",
        B:"minecraft:stick"
    }).id("create_new_age:cutting/overcharged_iron_sheet")
    e.shaped("3x create_new_age:overcharged_golden_wire",[
        "ABA",
        "ABA",
        "ABA"
    ], {
        A:"create_new_age:overcharged_gold_wire",
        B:"minecraft:stick"
    }).id("create_new_age:cutting/overcharged_golden_sheet")
    // 增加配方：磁铁矿块
    e.shaped("create_new_age:magnetite_block", [
        "ABA",
        "BAB",
        "ABA"
    ], {
        A: "create_new_age:overcharged_iron",
        B: "createdimensionalrelics:overcharged_redstone"
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
            item: "createdimensionalrelics:overcharged_redstone"
        }]
    })
    // 替换配方：基础电路板
    e.recipes.create.deploying("2x create_new_age:blank_circuit", [
        "#forge:stone",
        "refinedstorage:basic_processor"
    ])
        .id("create_new_age:pressing/blank_circuit")
    e.recipes.create.sequenced_assembly("2x create_new_age:copper_circuit", "create_new_age:blank_circuit",[
        e.recipes.create.deploying("create_new_age:blank_circuit", ["create_new_age:blank_circuit", "createaddition:copper_wire"])
    ])
        .transitionalItem("create_new_age:blank_circuit")
        .loops(2)
        .id("create_new_age:deploying/copper_circuit")
})
