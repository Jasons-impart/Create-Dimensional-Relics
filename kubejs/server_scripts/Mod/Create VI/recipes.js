ServerEvents.recipes(e => {
    // 琥珀金合成
    e.recipes.create.mixing(
        ["createaddition:electrum_ingot"],
        [
            "minecraft:gold_ingot",
            "minecraft:copper_ingot"
        ]
    ).superheated()
    // 移除硫磺配方
    e.remove({ output: "vintageimprovements:sulfur_chunk" })
    e.remove({ input: "vintageimprovements:sulfur_chunk" })
    e.remove({ input: "vintageimprovements:sulfur" })
    e.remove({ output: "vintageimprovements:sulfur" })
    e.recipes.create.crushing([
        Item.of("create:crushed_raw_zinc").withChance(0.3),
        Item.of("create:zinc_nugget").withChance(0.3)
    ], [
        "create:asurine"
    ])
    e.recipes.create.crushing([
        Item.of("create:crushed_raw_zinc").withChance(0.3),
        Item.of("create:zinc_nugget").withChance(0.3)
    ], [
        "#create:stone_types/asurine"
    ])
    // 移除硫酸铜配方
    remove_recipes_output(e, [
        "vintageimprovements:copper_sulfate",
    ])
    // 移除二氧化硫配方、XX染料离心机配方
    remove_recipes_id(e, [
        "vintageimprovements:pressurizing/sulfuric_acid",
        "vintageimprovements:pressurizing/sulfur_dioxide",
        "vintageimprovements:pressurizing/sulfur_trioxide",
        "vintageimprovements:pressurizing/sulfur_trioxide_alt",
        "vintageimprovements:centrifugation/gray_dye",
        "vintageimprovements:centrifugation/cyan_dye",
        "vintageimprovements:centrifugation/pink_dye",
        "vintageimprovements:centrifugation/light_blue_dye",
        "vintageimprovements:centrifugation/magenta_dye",
        "vintageimprovements:centrifugation/orange_dye",
        "vintageimprovements:centrifugation/lime_dye",
        "vintageimprovements:centrifugation/light_gray_dye",
        "vintageimprovements:centrifugation/purple_dye",
    ])

    // 增加空气离心产生氧气及氮气
    e.custom(
        {
            "type": "vintageimprovements:centrifugation",
            "ingredients": [
                {
                    "fluid": "createindustry:air",
                    "amount": 1000
                }
            ],
            "results": [
                {
                    "fluid": "createdimensionalrelics:nitrogen",
                    "amount": 800
                },
                {
                    "fluid": "ad_astra:oxygen",
                    "amount": 200
                }
            ],
            "processingTime": 1000
        }
    )
    // LPG离心合成甲烷
    e.custom(
        {
            "type": "vintageimprovements:centrifugation",
            "ingredients": [
                {
                    "fluid": "createindustry:lpg",
                    "amount": 1000
                }
            ],
            "results": [
                {
                    "fluid": "createdimensionalrelics:methane",
                    "amount": 800
                },
                {
                    "item": "mekanism:dust_sulfur"
                }
            ],
            "processingTime": 1000
        }
    )
})