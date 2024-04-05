ServerEvents.recipes(e =>{
  e.remove({output:"createaddition:tesla_coil"})
  e.remove({output:"createaddition:modular_accumulator"})
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
  // 蓄电池合成配方\
  let iner_1 = "create:brass_sheet"
  e.recipes.create.sequenced_assembly("createaddition:modular_accumulator", "create:brass_sheet", [
    e.recipes.create.pressing(iner_1, iner_1),
    e.recipes.create.deploying(iner_1, [iner_1, "createaddition:copper_wire"]),
    // e.recipes.create.deploying(iner_1, [iner_1, Item.of("createdimensionalrelics:lithium_battery", "{Damage:1600000}").weakNBT()])
    e.recipes.create.deploying(iner_1, [iner_1, "createdimensionalrelics:lithium_battery"])
  ])
    .transitionalItem(iner_1)
    .loops(6)
  // 移动式能量接口
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