ServerEvents.recipes(e=>{
  //深渊锭合成
  e.custom({
    type: "lychee:item_exploding",
    post: [
      {
        type: "drop_item",
        item: "kubejs:abyss_ingot",
        count: 1
      }
    ],
    item_in: [
      
        {
          "item": 'deeperdarker:heart_of_the_deep'
        },
        {
          "item": 'deeperdarker:reinforced_echo_shard',
        },
        {
          "item": 'deeperdarker:reinforced_echo_shard',
        },
        {
          "item": 'deeperdarker:reinforced_echo_shard',
        },
        {
          "item": 'deeperdarker:soul_crystal',
        },
        {
          "item": 'deeperdarker:soul_crystal',
        },
        {
          "item": 'deeperdarker:soul_crystal',
        },
        {
          "item": 'deeperdarker:soul_dust'
        },
        {
          "item":'kubejs:miracle_dust'
        },
        {
          "item":'upgradednetherite:echo_upgraded_netherite_ingot'
        }
      
    ]
  })
  //合成深渊合金块
  e.shapeless('kubejs:abyss_block', '9x kubejs:abyss_ingot')
  e.shapeless('9x kubejs:abyss_ingot', 'kubejs:abyss_block')
})


