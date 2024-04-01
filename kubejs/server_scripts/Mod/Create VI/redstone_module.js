ServerEvents.recipes(e =>{
    //红石构建配方修改
     e.custom(
      {
        "type": "create:sequenced_assembly",
        "ingredient": {
          "item": "create:precision_mechanism"
        },
        "loops": 1,
        "results": [
          {
            "chance": 195.0,
            "item": "vintageimprovements:redstone_module"
          },
          {
            "chance": 3.0,
            "item": "createindustry:screw"
          },
          {
            "chance": 1.0,
            "item": "minecraft:redstone"
          },
          {
            "chance":5.0,
            "item": "create_new_age:copper_circuit"
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
                "item": "create_new_age:copper_circuit"
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
            "ingredients":[
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
            "ingredients": [
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
            "type": "create:filling",
            "ingredients": [
              {
               "item": "vintageimprovements:incomplete_redstone_module"
              },
              {
                  "fluid": "createindustry:lubrication_oil",
                  "amount": 200
              }
            ],
            "results": [
              {
                "item": "vintageimprovements:incomplete_redstone_module"
              }
            ]
          },
          {
            "type": "create:pressing",
            "ingredients": [
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
            "ingredients": [
              {
                "item": "vintageimprovements:incomplete_redstone_module"
              },
              {
                "item": "createindustry:screw"
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
            "ingredients": [
              {
                "item": "vintageimprovements:incomplete_redstone_module"
              },
              {
                "item": "createindustry:screwdriver"
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
      }
    ).id("vintageimprovements:sequenced_assembly/redstone_module")
  })