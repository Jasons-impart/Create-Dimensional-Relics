ServerEvents.recipes(e=>{
    e.recipes.create.mixing('create:chromatic_compound', [
        '#forge:ingots/iron',
        'minecraft:gold_ingot',
        '#forge:ingots/bronze',
        '#forge:ingots/brass',
        'create:polished_rose_quartz',
        'ulterlands:astrumm_ingot',
        '#forge:ingots/electrum',
        'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
        'create:andesite_alloy'
    ]).superheated().id('create:mixing/chromatic_compound')
    e.custom(
        {
            "type": "lychee:item_inside",
            "post": [
              {
                "type": "drop_item",
                "item": "kubejs:glow_shadow_alloy"
              }
            ],
            "item_in": [
              {
                "item": "create:shadow_steel"
              },
              {
                "item": "create:refined_radiance"
              }
            ],
            "block_in": "*"
          }
    )
    e.recipes.create.mixing('kubejs:glow_shadow_alloy', [
        'create:refined_radiance',
        'create:shadow_steel'
    ])
})