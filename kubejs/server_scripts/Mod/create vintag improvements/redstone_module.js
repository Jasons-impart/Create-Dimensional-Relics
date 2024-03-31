ServerEvents.recipes(e => {
    // 红石模块
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    let eirds = "create:precision_mechanism"
    e.custom({
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
              "tag": eirds
            },
            "loops": 1,
            "results": [
              {
                "item": "vintageimprovements:redstone_module"
              }
            ],
            "sequence": [
              {
                "type": "create:deploying",
                "ingredients": [
                  {
                    "item": "vintageimprovements:incomplete_redstone_module"
                  },
                  {
                    "item": "minecraft:redstone"
                  }
                ],
                "results": [
                  {
                    "item": "vintageimprovements:incomplete_redstone_module"
                  }
                ]
              },
              {
                "type": "vintageimprovements:vibrating",
                "":ingredients: [
                  {
                    "item": "vintageimprovements:incomplete_redstone_module"
                  }
                ],
                "results": [
                  {
                    "item": "vintageimprovements:incomplete_redstone_module"
                  }
                ]
              },
              {
                "type": "create:deploying",
                "":ingredients [
                  {
                    "item": "vintageimprovements:incomplete_redstone_module"
                  },
                  {
                    "tag": "create_new_age:copper_circuit"
                  }
                ],
                "results": [
                  {
                    "item": "vintageimprovements:incomplete_redstone_module"
                  }
                ]
              },
              {
                "type": "create:filling"
                "ingredients": [
                    {
                      "item": "vintageimprovements:incomplete_redstone_module"

                    },
                    {
                      "fluid": "createindustry:lubrication_oil",
                      "nbt": {},
                      "amount": 200
                    }
                ],
                "results":[
                    {
                        "item":"vintageimprovements:incomplete_redstone_module"
                    }
                ]
              }
              {
                "type": "create:deploying",
                "ingredients": [
                  {
                    "item": "vintageimprovements:incomplete_redstone_module"
                  },
                  {
                    "tag": "createindustry:screw"
                  }
                ],
                "results": [
                  {
                    "item": "vintageimprovements:incomplete_redstone_module"
                  }
                ]
              }
            ],
            "transitionalItem": {
              "item": "vintageimprovements:incomplete_redstone_module"
            }
        )}
    }
})

