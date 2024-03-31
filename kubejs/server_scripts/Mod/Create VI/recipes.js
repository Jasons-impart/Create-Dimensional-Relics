ServerEvents.recipes(e =>{
    // 移除硫磺配方
    e.remove({output:"vintageimprovements:sulfur_chunk"})
    e.remove({input:"vintageimprovements:sulfur_chunk"})
    e.remove({input:"vintageimprovements:sulfur"})
    e.remove({output:"vintageimprovements:sulfur"})
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
    e.remove({output:"vintageimprovements:copper_sulfate"})
    // 移除二氧化硫配方
    e.remove({id:"vintageimprovements:pressurizing/sulfuric_acid"})
    e.remove({id:"vintageimprovements:pressurizing/sulfur_dioxide"})
    e.remove({id:"vintageimprovements:pressurizing/sulfur_trioxide"})
    e.remove({id:"vintageimprovements:pressurizing/sulfur_trioxide_alt"})
    // 移除XX染料离心机配方
    e.remove({id:"vintageimprovements:centrifugation/gray_dye"})
    e.remove({id:"vintageimprovements:centrifugation/cyan_dye"})
    e.remove({id:"vintageimprovements:centrifugation/pink_dye"})
    e.remove({id:"vintageimprovements:centrifugation/light_blue_dye"})
    e.remove({id:"vintageimprovements:centrifugation/magenta_dye"})
    e.remove({id:"vintageimprovements:centrifugation/orange_dye"})
    e.remove({id:"vintageimprovements:centrifugation/lime_dye"})
    e.remove({id:"vintageimprovements:centrifugation/light_gray_dye"})
    e.remove({id:"vintageimprovements:centrifugation/purple_dye"})
    // 增加空气离心产生氧气及氮气
    e.custom(
        {
            "type":"vintageimprovements:centrifugation",
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

})