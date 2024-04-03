ServerEvents.recipes(e => {
    // 煤粉清洗
    e.recipes.create.mixing(
        [
            "createdimensionalrelics:carbon_dust",
            Fluid.of("mekanism:sulfuric_acid")
        ],
        [
            "mekanism:dust_coal",
            Fluid.of("mekanism:sulfuric_acid")
        ]
    ).id("cdr:mixing/dust_coal")
    e.custom(
        {
            "type": "lychee:item_inside",
            "post": [
              {
                "type": "drop_item",
                "item": "createdimensionalrelics:carbon_dust"
              }
            ],
            "item_in": [
              {
                "item": "mekanism:dust_coal"
              }
            ],
            "block_in": "mekanism:sulfuric_acid",
            "time": 5
        })
    // 木炭粉清洗
    e.recipes.create.mixing(
        [
            "createdimensionalrelics:carbon_dust",
            Fluid.of("mekanism:sulfuric_acid")
        ],
        [
            "mekanism:dust_charcoal",
            Fluid.of("mekanism:sulfuric_acid")
        ]
    ).id("cdr:mixing/dust_charcoal")
    e.custom(
        {
            "type": "lychee:item_inside",
            "post": [
              {
                "type": "drop_item",
                "item": "createdimensionalrelics:carbon_dust"
              }
            ],
            "item_in": [
              {
                "item": "mekanism:dust_charcoal"
              }
            ],
            "block_in": "mekanism:sulfuric_acid",
            "time": 5
        })
    // 氢氧化钠溶解
    e.recipes.create.mixing(
        [
            Fluid.of("createdimensionalrelics:sodium_hydroxide_fluid", 1000)
        ],
        [
            "createdimensionalrelics:sodium_hydroxide",
            Fluid.of("minecraft:water", 1000)
        ]
    )
    e.custom(
        {
            "type": "lychee:item_inside",
            "item_in": {
                "item": "createdimensionalrelics:sodium_hydroxide"
            },
            "block_in": {
                "blocks": ["water"]
            },
            "post": [
                {
                    "type": "place",
                    "block": "createdimensionalrelics:sodium_hydroxide_fluid"
                }
            ]
        })
    // 氢氧化钠提取
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidResults": 0,
            "heatRequirement": "heated",
            "ingredients": [
                {
                    "fluid": "createdimensionalrelics:sodium_hydroxide_fluid",
                    "amount": 1000
                },
            ],
            "results": [
                {
                    "fluid": "water",
                    "amount": 1000
                },
                {
                    "item": "createdimensionalrelics:sodium_hydroxide",
                },
            ],
            "processingTime": 300
        }
    )
    // 次氯酸钠溶解
    e.recipes.create.mixing(
        [
            Fluid.of("createdimensionalrelics:sodium_hypochlorite_fluid", 1000)
        ],
        [
            "createdimensionalrelics:sodium_hypochlorite",
            Fluid.of("minecraft:water", 1000)
        ]
    )
    e.custom(
        {
            "type": "lychee:item_inside",
            "item_in": {
                "item": "createdimensionalrelics:sodium_hypochlorite"
            },
            "block_in": {
                "blocks": ["water"]
            },
            "post": [
                {
                    "type": "place",
                    "block": "createdimensionalrelics:sodium_hypochlorite_fluid"
                }
            ]
        })
    // 次氯酸钠提取
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidResults": 0,
            "heatRequirement": "heated",
            "ingredients": [
                {
                    "fluid": "createdimensionalrelics:sodium_hypochlorite_fluid",
                    "amount": 1000
                },
            ],
            "results": [
                {
                    "fluid": "water",
                    "amount": 1000
                },
                {
                    "item": "createdimensionalrelics:sodium_hypochlorite",
                },
            ],
            "processingTime": 300
        }
    )
    // 盐溶解
    e.recipes.create.mixing(
        [
            Fluid.of("mekanism:brine", 1000),
        ],
        [
            Fluid.of("minecraft:water", 1000),
            "#forge:dusts/salt"
        ]
    ).id("cdr:mixing/brine")
    e.custom(
        {
            "type": "lychee:item_inside",
            "item_in": {
                "item": "mekanism:salt"
            },
            "block_in": {
                "blocks": ["water"]
            },
            "post": [
                {
                    "type": "place",
                    "block": "mekanism:brine"
                }
            ]
        })
    // 盐提取
    e.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "secondaryFluidResults": 0,
            "heatRequirement": "heated",
            "ingredients": [
                {
                    "fluid": "mekanism:brine",
                    "amount": 1000
                },
            ],
            "results": [
                {
                    "fluid": "water",
                    "amount": 1000
                },
                {
                    "item": "mekanism:salt",
                },
            ],
            "processingTime": 300
        }
    )
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
            "type":"vintageimprovements:pressurizing",
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
            "type":"vintageimprovements:pressurizing",
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
            "type":"vintageimprovements:pressurizing",
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
            "type":"vintageimprovements:pressurizing",
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
            "type":"vintageimprovements:pressurizing",
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
    // 合成氯化铵
    e.custom(
        {
            "type":"vintageimprovements:pressurizing",
            "ingredients": [ 
                {
                    "fluid": "mekanism:hydrogen_chloride",
                    "amount": 1000
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
    e.recipes.create.crushing(        [
        "mekanism:dust_charcoal",
        Item.of("mekanism:dust_charcoal").withChance(0.25)
        ],
        [
            "minecraft:charcoal"
        ])
        .id("create:crushing/charcoal")
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
                    "ingredients":[
                      {
                        "item": "createdimensionalrelics:incompleted_disposable_batteries"
                      },
                      {
                        "item": "createdimensionalrelics:carbon_dust"
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
                    "ingredients":[
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
                    "ingredients":[
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
                    "ingredients":[
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
            Item.of("create:zinc_ingot").withChance(0.2),
            Item.of("create:zinc_nugget").withChance(0.3),
            Item.of("createdimensionalrelics:carbon_dust").withChance(0.5).withCount(2)
        ],
        [
            Item.of("createdimensionalrelics:disposable_batteries","{Damage:32000}").weakNBT()
        ]
    ).id("createdimensionalrelics:recycle_batteries")
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
                        "Damage": 160000
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
                        "ingredients":[
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
                        "ingredients":[
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
                              "fluid": "createdimensionalrelics:ammonium_chloride",
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
                        "ingredients":[
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
                        "ingredients":[
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
        )
              .id("createdimensionalrelics:crafting/lithium_battery")
            //   太努力了jason，么么叽 （づ￣3￣）づ╭❤～
})