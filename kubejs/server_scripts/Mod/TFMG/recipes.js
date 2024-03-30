ServerEvents.recipes(e=>{
    // 耐火黏土球与耐火黏土合成
    e.shapeless('createindustry:fireclay', '4x createindustry:fireclay_ball')
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
    //塑料合成配方修改
    e.recipes.create.mixing(
        [Fluid.of("createindustry:liquid_plastic",500)],
        [
            Fluid.of("mekanism:flowing_ethene", 1000),
            Fluid.of("createindustry:air", 1000)
        ]
    )
        .id("createindustry:mixing/liquid_plastic_from_ethylene")
        .heated()
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
                    "amount":100
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
    )
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
                "item": "createindustry:sulfur_dust"
              }
            ]
        }
    ).id("createindustry:distillation/kerosene")
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
                "fluid": "createindustry:ethylene",
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
    )
    // 移除古早配方
    e.remove({id:"createindustry:fractional_distillation/crude_oil_sus"})
    e.remove({id:"createindustry:distillation/heavy_oil"})
})
ServerEvents.tags("fluid", e =>{})