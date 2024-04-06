ServerEvents.recipes(e => {
    // 海带粉及合成盐
    e.recipes.create.milling(
        "createdimensionalrelics:kelp_dust",
        "minecraft:dried_kelp"
    )
    e.recipes.create.crushing(
        "createdimensionalrelics:kelp_dust",
        "minecraft:dried_kelp"
    )
    e.recipes.create.mixing(
        [
            Fluid.of("mekanism:brine", 1000)
        ],
        [
            "createdimensionalrelics:kelp_dust",
            Fluid.of("water", 1000)
        ]
    )
    // 锰
    e.recipes.create.crushing(
        [
            "createdimensionalrelics:crush_raw_manganese",
            Item.of("create:crushed_raw_iron")
                .withChance(0.3),
            Item.of("create:crushed_raw_aluminum")
                .withChance(0.1),
            Item.of("create:experience_nugget")
                .withChance(0.75)
        ],
        [
            "createdimensionalrelics:raw_manganese"
        ]
    ).id("create:crushing/raw_manganses")
    e.recipes.create.crushing(
        [
            "createdimensionalrelics:crush_raw_manganese",
            Item.of("createdimensionalrelics:crush_raw_manganese")
                .withChance(0.75),
            Item.of("create:crushed_raw_iron")
                .withChance(0.3),
            Item.of("create:crushed_raw_aluminum")
                .withChance(0.1),
            Item.of("create:experience_nugget")
                .withChance(0.75),
            Item.of("minecraft:cobblestone")
                .withChance(0.12)
        ],
        [
            "createdimensionalrelics:manganese_ore"
        ]
        )
        .id("create:crushing/manganses_ore")
    e.recipes.minecraft.smelting(
        "createdimensionalrelics:manganese",
        "createdimensionalrelics:crush_raw_manganese"
    ).id("minecraft:smelting/manganse")
    e.recipes.minecraft.blasting(
        "createdimensionalrelics:manganese",
        "createdimensionalrelics:crush_raw_manganese"
    ).id("minecraft:blasting/manganse")
    e.recipes.minecraft.smelting(
        "createdimensionalrelics:manganese",
        "createdimensionalrelics:manganese_ore"
    ).id("minecraft:smelting/manganese_ore")
    e.recipes.minecraft.blasting(
        "createdimensionalrelics:manganese",
        "createdimensionalrelics:manganese_ore"
    ).id("minecraft:blasting/manganese_ore")
    e.recipes.minecraft.smelting(
        "createdimensionalrelics:manganese",
        "createdimensionalrelics:raw_manganese"
    ).id("minecraft:smelting/raw_manganese")
    e.recipes.minecraft.blasting(
        "createdimensionalrelics:manganese",
        "createdimensionalrelics:raw_manganese"
    ).id("minecraft:blasting/raw_manganese")
    // 钴
    e.recipes.create.crushing(
        [
            "createdimensionalrelics:crush_raw_cobalt",
            Item.of("create:crushed_raw_copper")
                .withChance(0.3),
            Item.of("create:experience_nugget")
                .withChance(0.75)
        ],
        [
            "createdimensionalrelics:raw_cobalt"
        ]
    ).id("create:crushing/raw_cobalt")
    e.recipes.create.crushing(
        [
            "createdimensionalrelics:crush_raw_cobalt",
            Item.of("createdimensionalrelics:crush_raw_cobalt")
                .withChance(0.75),
            Item.of("create:crushed_raw_copper")
                .withChance(0.3),
            Item.of("create:experience_nugget")
                .withChance(0.75),
            Item.of("minecraft:cobblestone")
                .withChance(0.12)
        ],
        [
            "createdimensionalrelics:cobalt_ore"
        ]
        )
        .id("create:crushing/cobalt_ore")
    e.recipes.minecraft.smelting(
        "createdimensionalrelics:cobalt",
        "createdimensionalrelics:crush_raw_cobalt"
    ).id("minecraft:smelting/cobalt")
    e.recipes.minecraft.blasting(
        "createdimensionalrelics:cobalt",
        "createdimensionalrelics:crush_raw_cobalt"
    ).id("minecraft:blasting/cobalt")
    e.recipes.minecraft.smelting(
        "createdimensionalrelics:cobalt",
        "createdimensionalrelics:cobalt_ore"
    ).id("minecraft:smelting/cobalt_ore")
    e.recipes.minecraft.blasting(
        "createdimensionalrelics:cobalt",
        "createdimensionalrelics:cobalt_ore"
    ).id("minecraft:blasting/cobalt_ore")
    e.recipes.minecraft.smelting(
        "createdimensionalrelics:cobalt",
        "createdimensionalrelics:raw_cobalt"
    ).id("minecraft:smelting/raw_cobalt")
    e.recipes.minecraft.blasting(
        "createdimensionalrelics:cobalt",
        "createdimensionalrelics:raw_cobalt"
    ).id("minecraft:blasting/raw_cobalt")
    // 锂
    e.recipes.create.crushing(
        [
            "createdimensionalrelics:crush_raw_lithium",
            Item.of("create:crushed_raw_copper")
                .withChance(0.3),
            Item.of("create:experience_nugget")
                .withChance(0.75)
        ],
        [
            "createdimensionalrelics:raw_lithium"
        ]
    ).id("create:crushing/raw_lithium")
    e.recipes.create.crushing(
        [
            "createdimensionalrelics:crush_raw_lithium",
            Item.of("createdimensionalrelics:crush_raw_lithium")
                .withChance(0.75),
            Item.of("create:crushed_raw_copper")
                .withChance(0.3),
            Item.of("create:experience_nugget")
                .withChance(0.75),
            Item.of("minecraft:cobblestone")
                .withChance(0.12)
        ],
        [
            "createdimensionalrelics:lithium_ore"
        ]
        )
        .id("create:crushing/lithium_ore")
    e.recipes.minecraft.smelting(
        "createdimensionalrelics:lithium",
        "createdimensionalrelics:crush_raw_lithium"
    ).id("minecraft:smelting/lithium")
    e.recipes.minecraft.blasting(
        "createdimensionalrelics:lithium",
        "createdimensionalrelics:crush_raw_lithium"
    ).id("minecraft:blasting/lithium")
    e.recipes.minecraft.smelting(
        "createdimensionalrelics:lithium",
        "createdimensionalrelics:lithium_ore"
    ).id("minecraft:smelting/lithium_ore")
    e.recipes.minecraft.blasting(
        "createdimensionalrelics:lithium",
        "createdimensionalrelics:lithium_ore"
    ).id("minecraft:blasting/lithium_ore")
    e.recipes.minecraft.smelting(
        "createdimensionalrelics:lithium",
        "createdimensionalrelics:raw_lithium"
    ).id("minecraft:smelting/raw_lithium")
    e.recipes.minecraft.blasting(
        "createdimensionalrelics:lithium",
        "createdimensionalrelics:raw_lithium"
    ).id("minecraft:blasting/raw_lithium")
    // 煤粉、木炭粉清洗
    washing_recipe(e,
        "mekanism:dust_coal",
        "mekanism:sulfuric_acid",
        "createdimensionalrelics:carbon_dust")
    washing_recipe(e,
        "mekanism:dust_charcoal",
        "mekanism:sulfuric_acid",
        "createdimensionalrelics:carbon_dust")

    // 氢氧化钠
    dissolve_extract_recipe(e,
        "createdimensionalrelics:sodium_hydroxide",
        "createdimensionalrelics:sodium_hydroxide_fluid",
        "minecraft:water")
    // 次氯酸钠
    dissolve_extract_recipe(e,
        "createdimensionalrelics:sodium_hypochlorite",
        "createdimensionalrelics:sodium_hypochlorite_fluid",
        "minecraft:water")
    // 盐
    dissolve_extract_recipe(e,
        "#forge:dusts/salt",
        "mekanism:brine",
        "minecraft:water")

    // 电解食盐水
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidResults": 1,
            "ingredients": [
                {
                    "fluid": "mekanism:brine",
                    "amount": 1000
                },
                {
                    "item": "createdimensionalrelics:electrolyzer_charged"
                }
            ],
            "results": [
                {
                    "fluid": "createdimensionalrelics:sodium_hydroxide_fluid",
                    "amount": 1000
                },
                {
                    "fluid": "mekanism:chlorine",
                    "amount": 500
                },
                {
                    "fluid": "mekanism:hydrogen",
                    "amount": 500
                },
                {
                    "item": "createdimensionalrelics:electrolyzer"
                }
            ],
            "processingTime": 600
        }).id("createdimensionalrelics:electrolyze/brine")
    // 电解食盐
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidResults": 0,
            "heatRequirement": "superheated",
            "ingredients": [
                {
                    "item": "mekanism:salt"
                },
                {
                    "item": "createdimensionalrelics:electrolyzer_charged"
                }
            ],
            "results": [
                {
                    "fluid": "mekanism:chlorine",
                    "amount": 100
                },
                {
                    "item": "createdimensionalrelics:sodium",
                },
                {
                    "item": "createdimensionalrelics:electrolyzer"
                }
            ],
            "processingTime": 600
        }).id("createdimensionalrelics:electrolyze/salt")
    // 锂遇水爆炸生成NaOH
    e.custom(
        {
            "type": "lychee:item_inside",
            "item_in": {
                "item": "createdimensionalrelics:lithium"
            },
            "block_in": {
                "blocks": ["water"]
            },
            "post": [
                {
                    "type": "execute",
                    "command": "summon minecraft:tnt ~ ~1 ~ {fuse:0,explosionpower:5}"
                },
                {
                    "type": "place",
                    "block": "createdimensionalrelics:lithium_hydroxide"
                }
            ]
        })
    // 锂与水缓慢反应生成NaOH
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidResults": 1,
            "ingredients": [
                {
                    "fluid": "water",
                    "amount": 1000
                },
                {
                    "item": "createdimensionalrelics:lithium"
                }
            ],
            "results": [
                {
                    "fluid": "createdimensionalrelics:lithium_hydroxide",
                    "amount": 500
                },
                {
                    "fluid": "mekanism:hydrogen",
                    "amount": 500
                },
            ],
            "processingTime": 300
        })
    // 钠遇水爆炸生成NaOH
    e.custom(
        {
            "type": "lychee:item_inside",
            "item_in": {
                "item": "createdimensionalrelics:sodium"
            },
            "block_in": {
                "blocks": ["water"]
            },
            "post": [
                {
                    "type": "execute",
                    "command": "summon minecraft:tnt ~ ~1 ~ {fuse:0,explosionpower:5}"
                },
                {
                    "type": "place",
                    "block": "createdimensionalrelics:sodium_hydroxide_fluid"
                }
            ]
        })
    // 钠与水缓慢反应生成NaOH
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidResults": 1,
            "ingredients": [
                {
                    "fluid": "water",
                    "amount": 1000
                },
                {
                    "item": "createdimensionalrelics:sodium"
                }
            ],
            "results": [
                {
                    "fluid": "createdimensionalrelics:sodium_hydroxide_fluid",
                    "amount": 500
                },
                {
                    "fluid": "mekanism:hydrogen",
                    "amount": 500
                },
            ],
            "processingTime": 300
        })
    // NaOH+Cl
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidResults": 0,
            "ingredients": [
                {
                    "fluid": "createdimensionalrelics:sodium_hydroxide_fluid",
                    "amount": 1000
                },
                {
                    "fluid": "mekanism:chlorine",
                    "amount": 1000
                }
            ],
            "results": [
                {
                    "fluid": "createdimensionalrelics:sodium_hypochlorite_fluid",
                    "amount": 1000
                },
                {
                    "fluid": "mekanism:brine",
                    "amount": 1000
                },
            ],
            "processingTime": 600
        })
    // 甲烷合成H2
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidResults": 1,
            "heatRequirement": "heated",
            "ingredients": [
                {
                    "fluid": "createindustry:lpg",
                    "amount": 100
                },
                {
                    "fluid": "water",
                    "amount": 200
                }
            ],
            "results": [
                {
                    "fluid": "createdimensionalrelics:carbon_dioxide",
                    "amount": 100
                },
                {
                    "fluid": "mekanism:hydrogen",
                    "amount": 400
                }
            ],
            "processingTime": 600
        }
    )
    // CO2生成
    e.custom(
        {
            "type": "vintageimprovements:vacuumizing",
            "heatRequirement": "heated",
            "ingredients": [
                {
                    "tag": "minecraft:coals",
                },
                {
                    "fluid": "ad_astra:oxygen",
                    "amount": 1000
                }
            ],
            "results": [
                {
                    "fluid": "createdimensionalrelics:carbon_dioxide",
                    "amount": 1000
                },
            ],
            "processingTime": 100
        })
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "heatRequirement": "heated",
            "ingredients": [
                {
                    "tag": "minecraft:coals",
                },
            ],
            "results": [
                {
                    "fluid": "createdimensionalrelics:carbon_dioxide",
                    "amount": 500
                },
            ],
            "processingTime": 600
        })
    // 合成氨
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidResults": 0,
            "ingredients": [
                {
                    "fluid": "mekanism:hydrogen",
                    "amount": 100
                },
                {
                    "fluid": "createdimensionalrelics:nitrogen",
                    "amount": 33
                },
                {
                    "item": "createdimensionalrelics:electrolyzer_charged"
                }
            ],
            "results": [
                {
                    "fluid": "createdimensionalrelics:ammonia",
                    "amount": 100
                },
                {
                    "item": "createdimensionalrelics:electrolyzer",
                    "count": 1
                }
            ],
            "processingTime": 3000
        }
    )
    // 合成尿素
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidResults": 0,
            "ingredients": [
                {
                    "fluid": "createdimensionalrelics:ammonia",
                    "amount": 1000
                },
                {
                    "fluid": "createdimensionalrelics:carbon_dioxide",
                    "amount": 500
                }
            ],
            "results": [
                {
                    "item": "createdimensionalrelics:urea"
                },
                {
                    "fluid": "water",
                    "amount": 500
                }
            ],
            "processingTime": 3000
        }
    )
    // 合成肼
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidResults": 2,
            "ingredients": [
                {
                    "fluid": "createdimensionalrelics:sodium_hydroxide_fluid",
                    "amount": 2000
                },
                {
                    "fluid": "createdimensionalrelics:sodium_hypochlorite_fluid",
                    "amount": 1000
                },
                {
                    "item": "createdimensionalrelics:urea"
                }
            ],
            "results": [
                {
                    "fluid": "createdimensionalrelics:hydrazine",
                    "amount": 1000
                },
                {
                    "fluid": "mekanism:brine",
                    "amount": 2000
                },
                {
                    "fluid": "createdimensionalrelics:carbon_dioxide",
                    "amount": 1000
                }

            ],
            "processingTime": 2000
        }
    )
    // 合成偏二甲肼
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidResults": 1,
            "ingredients": [
                {
                    "fluid": "createdimensionalrelics:hydrazine",
                    "amount": 500
                },
                {
                    "fluid": "createdimensionalrelics:methane",
                    "amount": 500
                },
                {
                    "item": "createdimensionalrelics:electrolyzer_charged"
                }
            ],
            "results": [
                {
                    "fluid": "createdimensionalrelics:udmh",
                    "amount": 500
                },
                {
                    "fluid": "mekanism:hydrogen",
                    "amount": 1000
                },
                {
                    "item": "createdimensionalrelics:electrolyzer"
                }

            ],
            "processingTime": 2000
        }
    )
    // 合成HCl
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "ingredients": [
                {
                    "fluid": "mekanism:chlorine",
                    "amount": 1000
                },
                {
                    "fluid": "mekanism:hydrogen",
                    "amount": 1000
                }
            ],
            "results": [
                {
                    "fluid": "mekanism:hydrogen_chloride",
                    "amount": 1000
                },
            ],
            "processingTime": 600
        }
    )
    // 合成氯化铵（侯氏制碱法）
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "ingredients": [
                {
                    "fluid":"createdimensionalrelics:carbon_dioxide",
                    "amount": 1000
                },
                {
                    "item": "mekanism:salt"
                },
                {
                    "fluid": "createdimensionalrelics:ammonia",
                    "amount": 1000
                }
            ],
            "results": [
                {
                    "fluid": "createdimensionalrelics:ammonium_chloride",
                    "amount": 1000
                },
                {
                    "item": "createdimensionalrelics:sodium_bicarbonate"
                }
            ],
            "processingTime": 600
        }
    )
    // 碳酸氢钠加热转变成碳酸钠
    e.recipes.create.mixing(
        [
            "createdimensionalrelics:sodium_carbonate",
            Fluid.of("water", 1000),
            Fluid.of("createdimensionalrelics:carbon_dioxide", 1000)
        ],
        [
            "2x createdimensionalrelics:sodium_bicarbonate"
        ]
    )
        .heated()
    // 碳酸钠加盐酸转变为NaCl
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidResults": 0,
            "ingredients": [
                {
                    "fluid": "mekanism:hydrogen_chloride_bucket",
                    "amount": 1000
                },
                {
                    "item": "createdimensionalrelics:sodium_carbonate"
                }
            ],
            "results": [
                {
                    "fluid": "createdimensionalrelics:carbon_dioxide",
                    "amount": 1000
                },
                {
                    "item": "mekanism:salt"
                }
            ],
            "processingTime": 600
        }
    )
    // 炭粉碎
    e.recipes.create.crushing(
        [
            "mekanism:dust_coal",
            Item.of("mekanism:dust_coal").withChance(0.25)
        ],
        [
            "minecraft:coal"
        ])
        .id("create:crushing/coal")
    e.recipes.create.crushing([
        "mekanism:dust_charcoal",
        Item.of("mekanism:dust_charcoal").withChance(0.25)
    ],
        [
            "minecraft:charcoal"
        ])
        .id("create:crushing/charcoal")
    // MnO2合成
    e.custom(
        {
            "type": "vintageimprovements:vacuumizing",
            "heatRequirement": "heated",
            "ingredients": [
                {
                    "item": "createdimensionalrelics:manganese",
                },
                {
                    "fluid": "ad_astra:oxygen",
                    "amount": 1000
                }
            ],
            "results": [
                {
                    "item": "createdimensionalrelics:manganese_dioxide"
                },
            ],
            "processingTime": 100
        })
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "heatRequirement": "heated",
            "ingredients": [
                {
                    "item": "createdimensionalrelics:manganese",
                },
            ],
            "results": [
                {
                    "item": "createdimensionalrelics:manganese_dioxide",
                },
            ],
            "processingTime": 600
        })
    // 干电池合成
    e.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
                "tag": "forge:plates/zinc"
            },
            "loops": 1,
            "results": [
                {
                    "item": "createdimensionalrelics:disposable_batteries"
                }
            ],
            "sequence": [
                {
                    "type": "vintageimprovements:curving",
                    "ingredients": [
                        {
                            "item": "createdimensionalrelics:incompleted_disposable_batteries"
                        }
                    ],
                    "results": [
                        {
                            "item": "createdimensionalrelics:incompleted_disposable_batteries"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "createdimensionalrelics:incompleted_disposable_batteries"
                        },
                        {
                            "item": "createdimensionalrelics:manganese_dioxide"
                        }
                    ],
                    "results": [
                        {
                            "item": "createdimensionalrelics:incompleted_disposable_batteries"
                        }
                    ]
                },
                {
                    "type": "create:filling",
                    "ingredients": [
                        {
                            "item": "createdimensionalrelics:incompleted_disposable_batteries"
                        },
                        {
                            "fluid": "createdimensionalrelics:ammonium_chloride",
                            "amount": 200
                        }
                    ],
                    "results": [
                        {
                            "item": "createdimensionalrelics:incompleted_disposable_batteries"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "createdimensionalrelics:incompleted_disposable_batteries"
                        },
                        {
                            "item": "createdimensionalrelics:carbon_rod"
                        }
                    ],
                    "results": [
                        {
                            "item": "createdimensionalrelics:incompleted_disposable_batteries"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "createdimensionalrelics:incompleted_disposable_batteries"
                        },
                        {
                            "tag": "forge:plates/zinc"
                        }
                    ],
                    "results": [
                        {
                            "item": "createdimensionalrelics:incompleted_disposable_batteries"
                        }
                    ]
                },
                {
                    "type": "create:pressing",
                    "ingredients": [
                        {
                            "item": "createdimensionalrelics:incompleted_disposable_batteries"
                        },
                    ],
                    "results": [
                        {
                            "item": "createdimensionalrelics:incompleted_disposable_batteries"
                        }
                    ]
                }
            ],
            "transitionalItem": {
                "item": "createdimensionalrelics:incompleted_disposable_batteries"
            }
        }
    )
        .id("createdimensionalrelics:crafting/disposable_batteries")
    // 干电池回收
    e.recipes.create.crushing(
        [
            Item.of("create:zinc_ingot"),
            Item.of("create:zinc_nugget").withChance(0.3).withCount(3),
            Item.of("createdimensionalrelics:carbon_dust").withCount(2)
        ],
        [
            Item.of("createdimensionalrelics:disposable_batteries", "{Damage:128000}").weakNBT()
        ]
    ).id("createdimensionalrelics:recycle_batteries")
    // CO2+LiOH=Li2CO3
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidResults": 0,
            "ingredients": [
                {
                    "fluid": "createdimensionalrelics:carbon_dioxide",
                    "amount": 1000
                },
                {
                    "fluid": "createdimensionalrelics:lithium_hydroxide",
                    "amount": 1000
                }
            ],
            "results": [
                {
                    "fluid": "minecraft:water",
                    "amount": 1000
                },
                {
                    "item": "createdimensionalrelics:lithium_carbonate"
                }
            ],
            "processingTime": 600
        }
    )
    // CoO合成
    e.recipes.create.mixing(
        [
            "createdimensionalrelics:cobaltous_oxide"
        ],
        [
            Fluid.of("ad_astra:oxygen", 1000),
            "createdimensionalrelics:cobalt"
        ]
    )
        .heated()
    // 钴酸锂合成
    e.recipes.create.mixing(
        [
            "2x createdimensionalrelics:lithium_oxidocobalt",
            Fluid.of("createdimensionalrelics:carbon_dioxide", 1000)
        ],
        [
            "createdimensionalrelics:lithium_carbonate",
            "2x createdimensionalrelics:cobaltous_oxide",
            Fluid.of("ad_astra:oxygen", 500)
        ]
    )
        .superheated()
    // 锂电池合成
    e.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": "createdimensionalrelics:super_polymer"
            },
            "loops": 1,
            "results": [
                {
                    "item": "createdimensionalrelics:lithium_battery",
                    "nbt": {
                        "Damage": 1600000
                    }

                }
            ],
            "sequence": [
                {
                    "type": "vintageimprovements:curving",
                    "ingredients": [
                        {
                            "item": "createdimensionalrelics:incompleted_lithium_battery"
                        }
                    ],
                    "results": [
                        {
                            "item": "createdimensionalrelics:incompleted_lithium_battery"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "createdimensionalrelics:incompleted_lithium_battery"
                        },
                        {
                            "item": "createdimensionalrelics:carbon_dust"
                        }
                    ],
                    "results": [
                        {
                            "item": "createdimensionalrelics:incompleted_lithium_battery"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "createdimensionalrelics:incompleted_lithium_battery"
                        },
                        {
                            "item": "createdimensionalrelics:polypropylene"
                        }
                    ],
                    "results": [
                        {
                            "item": "createdimensionalrelics:incompleted_lithium_battery"
                        }
                    ]
                },
                {
                    "type": "create:filling",
                    "ingredients": [
                        {
                            "item": "createdimensionalrelics:incompleted_lithium_battery"
                        },
                        {
                            "fluid": "createdimensionalrelics:lithium_hydroxide",
                            "amount": 200
                        }
                    ],
                    "results": [
                        {
                            "item": "createdimensionalrelics:incompleted_lithium_battery"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "createdimensionalrelics:incompleted_lithium_battery"
                        },
                        {
                            "item": "createdimensionalrelics:lithium_oxidocobalt"
                        }
                    ],
                    "results": [
                        {
                            "item": "createdimensionalrelics:incompleted_lithium_battery"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "createdimensionalrelics:incompleted_lithium_battery"
                        },
                        {
                            "tag": "forge:plates/aluminum"
                        }
                    ],
                    "results": [
                        {
                            "item": "createdimensionalrelics:incompleted_lithium_battery"
                        }
                    ]
                },
                {
                    "type": "create:pressing",
                    "ingredients": [
                        {
                            "item": "createdimensionalrelics:incompleted_lithium_battery"
                        },
                    ],
                    "results": [
                        {
                            "item": "createdimensionalrelics:incompleted_lithium_battery"
                        }
                    ]
                }
            ],
            "transitionalItem": {
                "item": "createdimensionalrelics:incompleted_lithium_battery"
            }
        }
    ).id("createdimensionalrelics:crafting/lithium_battery")
    // 太努力了jason，么么叽 （づ￣3￣）づ╭❤～
    // 收到jbson的(づ￣3￣)づ╭❤～
})
