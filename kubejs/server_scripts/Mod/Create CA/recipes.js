ServerEvents.recipes(e =>{
    e.remove({output:"createaddition:tesla_coil"})
    // 电容合成
    e.remove({id:"createaddition:crafting/capacitor_1"})
    e.remove({id:"createaddition:crafting/capacitor_2"})
    let iner = "createaddition:incompleted_capacitor"
    e.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
              "tag": "forge:plates/aluminum"
            },
            "loops": 1,
            "results": [
              {
                "item": "createaddition:capacitor"
              }
            ],
            "sequence": [
                {
                    "type": "vintageimprovements:curving",
                    "ingredients": [
                        {
                          "item": "createaddition:incompleted_capacitor"
                        }
                    ],
                    "results": [
                        {
                          "item": "createaddition:incompleted_capacitor"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients":[
                      {
                        "item": "createaddition:incompleted_capacitor"
                      },
                      {
                        "tag": "forge:wires/all_metal"
                      }
                    ],
                    "results": [
                      {
                        "item": "createaddition:incompleted_capacitor"
                      }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients":[
                      {
                        "item": "createaddition:incompleted_capacitor"
                      },
                      {
                        "item": "minecraft:paper"
                      }
                    ],
                    "results": [
                      {
                        "item": "createaddition:incompleted_capacitor"
                      }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients":[
                      {
                        "item": "createaddition:incompleted_capacitor"
                      },
                      {
                        "tag": "forge:plates/aluminum"
                      }
                    ],
                    "results": [
                      {
                        "item": "createaddition:incompleted_capacitor"
                      }
                    ]
                },
                {
                    "type": "create:pressing",
                    "ingredients":[
                      {
                        "item": "createaddition:incompleted_capacitor"
                      },
                    ],
                    "results": [
                      {
                        "item": "createaddition:incompleted_capacitor"
                      }
                    ]
                }
            ],
            "transitionalItem": {
              "item": "createaddition:incompleted_capacitor"
            }
          }
    )
          .id("createaddition:crafting/capacitor")
    e.shaped("createaddition:portable_energy_interface",[
        "AB ",
        "C  ",
        "   "
    ], {
        A:"create:brass_casing",
        B:"create_new_age:energiser_t1",
        C:"create_new_age:copper_wire"
    })
        .id("createaddition:crafting/portable_energy_interface")
})