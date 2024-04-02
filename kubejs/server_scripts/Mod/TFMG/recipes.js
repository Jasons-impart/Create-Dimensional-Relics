ServerEvents.recipes(e => {
    // 碳板合成
    e.recipes.create.compacting("createindustry:coal_sheet", "createdimensionalrelics:carbon_dust")
        .heated()
        .id("craeteindustry:pressing/coal_sheet")
    // 碳棍合成
    e.custom(
        {
            "type": "createaddition:rolling",
            "input": {
                "tag": "forge:plates/carbon"
            },
            "result": {
                "item": "createdimensionalrelics:carbon_rod",
                "count": 2
            }
        }
    )
    // 铝板合成
    e.recipes.create.pressing("createindustry:aluminum_sheet", "createindustry:aluminum_ingot")
        .id("createindustry:pressing/aluminum_sheet")
    // 电解器合成
    e.shaped("createdimensionalrelics:electrolyzer", [
        "ABA",
        "C D",
        "   "
    ], {
        A: "create_new_age:copper_wire",
        B: "create:golden_sheet",
        C: "vintageimprovements:vanadium_nugget",
        D: "createaddition:electrum_nugget"
    })
    // 钢储罐合成
    e.recipes.create.item_application("createindustry:steel_fluid_tank", [
        "create:fluid_tank", "createindustry:heavy_plate"
    ])
        .id("createindustry:crafting/steel_tank")
    e.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": "createindustry:heavy_plate"
            },
            "loops": 5,
            "results": [
                {
                    "item": "createindustry:steel_fluid_tank"
                }
            ],
            "sequence": [
                {
                    "type": "vintageimprovements:curving",
                    "ingredients": [
                        {
                            "item": "createindustry:heavy_plate"
                        }
                    ],
                    "results": [
                        {
                            "item": "createindustry:heavy_plate"
                        }
                    ]
                },
            ],
            "transitionalItem": {
                "item": "createindustry:heavy_plate"
            }
        }
    )
    // 钢双锭合成
    e.recipes.create.deploying("createdimensionalrelics:double_steel", ["createindustry:steel_ingot", "createindustry:steel_ingot"])
    // 厚钢板合成
    const iner = "createdimensionalrelics:double_steel"
    e.recipes.create.sequenced_assembly("createindustry:heavy_plate", "createdimensionalrelics:double_steel", [
        e.recipes.create.pressing(iner, [iner, iner])
    ])
        .transitionalItem(iner)
        .loops(3)
        .id("createindustry:sequenced_assembly/heavy_plate")
    // 耐火黏土球与耐火黏土合成
    e.shapeless("createindustry:fireclay", "4x createindustry:fireclay_ball")
    e.recipes.create.crushing("4x createindustry:fireclay_ball", "createindustry:fireclay")
    // quark石灰岩兼容石灰粉
    e.recipes.create.crushing("createindustry:limesand", "quark:limestone")
    e.recipes.create.milling("createindustry:limesand", "quark:limestone")
    // 铝土矿作为副矿产生
    e.recipes.create.crushing([
        Item.of("create:crushed_raw_aluminum").withChance(0.1)
    ], [
        "create:crushed_raw_iron"
    ])
    e.recipes.create.crushing([
        "create:crushed_raw_iron",
        Item.of("create:crushed_raw_aluminum").withChance(0.3),
        Item.of("create:experience_nugget").withChance(0.75)
    ], [
        "minecraft:raw_iron"
    ])
        .id("create:crushing/raw_iron")
    e.recipes.create.crushing([
        "9x create:crushed_raw_iron",
        Item.of("create:crushed_raw_aluminum").withChance(0.3).withCount(9),
        Item.of("create:experience_nugget").withChance(0.75).withCount(9)
    ], [
        "minecraft:raw_iron_block"
    ])
        .id("create:crushing/raw_iron_block")
    // 乙烯合成配方修改
    e.recipes.create.mixing(
        [Fluid.of("createindustry:liquid_plastic", 500)],
        [
            Fluid.of("createindustry:ethylene", 1000),
            Fluid.of("ad_astra:oxygen", 1000)
        ]
    )
        .id("createindustry:mixing/liquid_plastic_from_ethylene")
        .heated()
    // 聚丙烯合成配方
    e.recipes.create.mixing(
        [
            Fluid.of("createdimensionalrelics:polypropylene", 500)
        ],
        [
            Fluid.of("ad_astra:oxygen", 1000),
            Fluid.of("createindustry:propylene", 1000)
        ]
    ).heated()
    e.recipes.create.compacting(
        "createdimensionalrelics:polypropylene",
        [
            Fluid.of("createdimensionalrelics:polypropylene", 200)
        ]
    )
    // 聚氯乙烯
    e.recipes.create.mixing(
        Fluid.of("createdimensionalrelics:polyvinyl_chloride", 1000),
        [
            Fluid.of("createindustry:ethylene", 1000),
            Fluid.of("mekanism:chlorine", 200)
        ]
    ).heated()
    e.recipes.create.compacting(
        "createdimensionalrelics:polyvinyl_chloride",
        [
            Fluid.of("createdimensionalrelics:polyvinyl_chloride")
        ]
    )
    // 聚苯乙烯
    e.recipes.create.mixing(
        Fluid.of("createdimensionalrelics:polystyrene", 1000),
        [
            Fluid.of("createindustry:ethylene", 1000),
            Fluid.of("createdimensionalrelics:benzene", 200)
        ]
    ).heated()
    e.recipes.create.compacting(
        "createdimensionalrelics:polystyrene",
        [
            Fluid.of("createdimensionalrelics:polystyrene")
        ]
    )
    // 高分子化合物合成
    e.recipes.create.mixing(
        ["2x createdimensionalrelics:super_polymer"],
        [
            "createindustry:plastic_sheet",
            "createdimensionalrelics:polypropylene",
            "createdimensionalrelics:polystyrene",
            "createdimensionalrelics:polyvinyl_chloride"
        ]
    ).superheated()
    // 航空纤维
    e.recipes.create.mixing(
        ["createdimensionalrelics:aviation_fibers"],
        [
            "createdimensionalrelics:super_polymer",
            "vintageimprovements:steel_wire",
            Fluid.of("createindustry:liquid_plastic", 200)
        ]
    )
    // 航空纤维板
    let iner_1 = "createindustry:coal_sheet"
    e.recipes.create.sequenced_assembly("createdimensionalrelics:aviation_fibers_sheet", "createindustry:coal_sheet", [
        e.recipes.create.deploying(iner_1, [iner_1, "createdimensionalrelics:aviation_fibers"]),
        e.recipes.create.filling(iner_1, [iner_1, Fluid.of("createindustry:liquid_plastic", 100)]),
    ])
        .transitionalItem(iner_1)
        .loops(3)
    // 石油分馏
    e.custom(
        {
            "type": "createindustry:advanced_distillation",
            "ingredients": [
                {
                    "fluid": "createindustry:crude_oil_fluid",
                    "nbt": {},
                    "amount": 200
                }
            ],
            "results": [
                {
                    "fluid": "createindustry:heavy_oil",
                    "amount": 40
                },
                {
                    "fluid": "createindustry:diesel",
                    "amount": 30
                },
                {
                    "fluid": "createindustry:kerosene",
                    "amount": 30
                },
                {
                    "fluid": "createindustry:naphtha",
                    "amount": 70
                },
                {
                    "fluid": "createindustry:lpg",
                    "amount": 30
                }
            ]
        }
    ).id("createindustry:fractional_distillation/crude_oil")
    // 重油分馏
    e.custom(
        {
            "type": "createindustry:advanced_distillation",
            "ingredients": [
                {
                    "fluid": "createindustry:heavy_oil",
                    "nbt": {},
                    "amount": 100
                }
            ],
            "results": [
                {
                    "fluid": "createindustry:liquid_asphalt",
                    "amount": 40
                },
                {
                    "fluid": "createindustry:lubrication_oil",
                    "amount": 60
                },
            ]
        }
    ).id("createindustry:fractional_distillation/heavy_oil")
    // 煤油裂解
    e.custom(
        {
            "type": "createindustry:distillation",
            "ingredients": [

                {
                    "fluid": "createindustry:kerosene",
                    "nbt": {},
                    "amount": 300
                }
            ],
            "results": [
                {
                    "fluid": "createindustry:lpg",
                    "amount": 30
                },
                {
                    "fluid": "createindustry:ethylene",
                    "amount": 35
                },
                {
                    "fluid": "createindustry:ethylene",
                    "amount": 35
                },
                {
                    "item": "createindustry:coal_coke"
                },
                {
                    "item": "mekanism:dust_sulfur"
                }
            ]
        }
    ).id("createindustry:distillation/kerosene")
    // 石脑油分馏提纯
    e.custom(
        {
            "type": "createindustry:advanced_distillation",
            "ingredients": [
                {
                    "fluid": "createindustry:naphtha",
                    "nbt": {},
                    "amount": 100
                }
            ],
            "results": [
                {
                    "fluid": "createindustry:kerosene",
                    "amount": 20
                },
                {
                    "fluid": "createindustry:gasoline",
                    "amount": 80
                },
            ]
        }
    ).id("createindustry:fractional_distillation/naphtha")
    // 石脑油裂解
    e.custom(
        {
            "type": "createindustry:distillation",
            "ingredients": [

                {
                    "fluid": "createindustry:naphtha",
                    "nbt": {},
                    "amount": 3
                }
            ],
            "results": [
                {
                    "fluid": "createindustry:propylene",
                    "amount": 1
                },
                {
                    "fluid": "createindustry:ethylene",
                    "amount": 1
                },
                {
                    "fluid": "createdimensionalrelics:benzene",
                    "amount": 1
                },
                {
                    "item": "minecraft:air"

                },
                {
                    "item": "minecraft:air"

                }
            ]
        }
    ).id("createindustry:distillation/naphtha")

    // 移除古早配方
    remove_recipes_id(e, [
        "createindustry:fractional_distillation/crude_oil_sus",
        "createindustry:fractional_distillation/heavy_oil",
        "createindustry:mixing/liquid_plastic_from_propylene",
        "createindustry:mixing/cast_iron_ingot",
    ])
})

ServerEvents.tags("fluid", e => {

})
