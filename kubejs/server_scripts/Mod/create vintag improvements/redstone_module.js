ServerEvents.recipes(e =>{
  e.custom(
    {
      "type": "create:sequenced_assembly",
      "ingredient": {
        "item": "create:precision_mechanism"
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
              "tag": "forge:gems/quartz"
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
              "tag": "forge:nuggets/iron"
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

