ServerEvents.recipes(e => {
    // 序列合成：核反应堆砖块
    e.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": "minecraft:bricks"
            },
            "loops": 1,
            "results": [
                {
                    "count": 4,
                    "item": "create_new_age:reactor_casing"
                }
            ],
            "sequence": [
                {
                    "type": "create_new_age:energising",
                    "energy_needed": 500,
                    "ingredients": [
                        {
                            "item": "create_new_age:incomplete_casing"
                        }
                    ],
                    "results": [
                        {
                            "item": "create_new_age:incomplete_casing"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "create_new_age:incomplete_casing"
                        },
                        [
                            {
                                "tag": "forge:plates/steel"
                            }
                        ]
                    ],
                    "results": [
                        {
                            "item": "create_new_age:incomplete_casing"
                        }
                    ]
                },
                {
                    "type": "create:pressing",
                    "ingredients": [
                        {
                            "item": "create_new_age:incomplete_casing"
                        }
                    ],
                    "results": [
                        {
                            "item": "create_new_age:incomplete_casing"
                        }
                    ]
                }
            ],
            "transitionalItem": {
                "item": "create_new_age:incomplete_casing"
            }
        }
    ).id("create_new_age:reactor/reactor_casing")
    // 替换配方：核燃料棒
    let iner = "create_new_age:incomplete_fuel"
    e.recipes.create.sequenced_assembly("create_new_age:nuclear_fuel", "#forge:plates/steel", [
        e.recipes.create.pressing(iner, iner),
        e.recipes.create.deploying(iner, [iner, "create_new_age:radioactive_thorium"]),
        e.recipes.create.deploying(iner, [iner, "#forge:plates/steel"]),
        e.recipes.create.pressing(iner, iner)
    ]).transitionalItem(iner).loops(1).id("create_new_age:thorium/nuclear_fuel")
})
