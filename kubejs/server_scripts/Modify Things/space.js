ServerEvents.recipes(e=>{
    //动力合成器添加：暗淡太空合金
    e.recipes.create.mechanical_crafting('8x kubejs:bleak_space_ingot',[
    'AABB',
    'ACDB',
    'BEFA',
    'BBAA'
    ],{
    A:'createbigcannons:cast_iron_ingot',
    B:'alloyed:steel_sheet',
    C:'ad_astra:calorite_ingot',
    D:'ad_astra:ostrum_ingot',
    E:'createbigcannons:nethersteel_ingot',
    F:'ad_astra:desh_ingot'
    })
    //暗淡太空合金块合成
    e.shapeless('kubejs:bleak_space_block',[
      '9x kubejs:bleak_space_ingot'
    ])
    e.shapeless('9x kubejs:bleak_space_ingot',[
      'kubejs:bleak_space_block'
    ])
    //太空合金块合成
    e.shapeless('kubejs:space_block',[
      '9x kubejs:space_ingot'
    ])
    e.shapeless('9x kubejs:space_ingot',[
      'kubejs:space_block'
    ])
    //暗淡太空合金充能
    e.custom({
      type: "create_new_age:energising",
      energy_needed: 10000,
      ingredients: [
        {
          item: "kubejs:bleak_space_ingot"
        }
      ],
      results: [
        {
          item: "kubejs:space_ingot"
        }
      ]
    })
    //暗淡太空合金充能
    e.custom({
      type:"createaddition:charging",
      input: {
            "item": 'kubejs:bleak_space_ingot',
          "count": 1
      },
      result: {
          "item": 'kubejs:space_ingot',
          "count": 1
      },
      "energy": 10000,
      "maxChargeRate": 200
    })
    //暗淡太空合金块充能
    e.custom({
      type: "create_new_age:energising",
      energy_needed: 90000,
      ingredients: [
        {
          item: "kubejs:bleak_space_block"
        }
      ],
      results: [
        {
          item: "kubejs:space_block"
        }
      ]
    })
    //太空构件合成
    let inter = 'kubejs:incompleted_space_precision_mechanism';
    e.recipes.create.sequenced_assembly([
      Item.of('kubejs:space_precision_mechanism').withChance(80),
      Item.of('kuebjs:space_nugget').withChance(5),
      Item.of('kubejs:overcharged_redstone').withChance(5),
      Item.of('create_new_age:overcharged_diamond').withChance(5),
      Item.of('kubejs:space_sheet').withChance(5)
    ], 'kubejs:space_sheet', [
      e.recipes.create.deploying(inter, [inter, 'kubejs:space_nugget']),
      e.recipes.create.deploying(inter, [inter, 'kubejs:overcharged_redstone']),
      e.recipes.create.deploying(inter, [inter, 'create_new_age:overcharged_diamond'])
    ]).transitionalItem(inter).loops(5)
    //太空合金板合成
    e.recipes.create.pressing('kubejs:space_sheet', 'kubejs:space_ingot')
    //太空合金粒合成
    e.shapeless('9x kubejs:space_nugget', 'kubejs:space_ingot')
    e.shapeless('kubejs:space_ingot', '9x kubejs:space_nugget')
    //暗淡太空合金工具手柄
    e.shaped('kubejs:bleak_space_handle',[
      ' A ',
      ' A ',
      '   '
    ],{
      A:'kubejs:bleak_space_ingot'
    })
    //太空合金稿合成
    e.recipes.create.mechanical_crafting('kubejs:space_alloyed_pickaxe',[
      ' AAA ',
      'BCBCB',
      'CBEBC',
      '  D  ',
      '  D  ',
      '  D  '
    ],{
      A:'kubejs:space_sheet',
      B:'create_new_age:overcharged_diamond',
      C:'kubejs:space_ingot',
      D:'kubejs:bleak_space_handle',
      E:'kubejs:space_precision_mechanism'
    })
    //太空合金剑合成
    e.recipes.create.mechanical_crafting('kubejs:space_alloyed_sword',[
      '    B',
      '   BA',
      '  BA ',
      'BAC  ',
      ' DA  ',
      'D B  ',
    ],{
      A:'kubejs:space_ingot',
      B:'create_new_age:overcharged_diamond',
      C:'kubejs:space_precision_mechanism',
      D:'kubejs:bleak_space_handle'
    })
    //太空合金头盔合成
    e.recipes.create.mechanical_crafting('kubejs:space_alloyed_helmet',[
      ' AAAAA ',
      'ABBBBBA',
      'A CBC A',
      'ABBDBBA',
      'ABBBBBA',
      'DBDBDBD'
    ],{
      A:'kubejs:bleak_space_ingot',
      B:'kubejs:space_ingot',
      C:'kubejs:miracle_dust',
      D:'kubejs:space_precision_mechanism'
    })
    e.recipes.create.mechanical_crafting('kubejs:space_alloyed_chestplate',[
      'AB   BA',
      'AACCCAA',
      ' ADCDA ',
      ' ACBCA ',
      ' ADCDA ',
      '  AAA  '
    ],{
      A:'kubejs:bleak_space_ingot',
      B:'kubejs:space_precision_mechanism',
      C:'kubejs:space_ingot',
      D:'kubejs:miracle_dust'
    })
    //太空合金护腿合成
    e.recipes.create.mechanical_crafting('kubejs:space_alloyed_leggings',[
      'AAAAAAA',
      'ABBCBBA',
      'ADACADA',
      'ABA ABA',
      'ADA ADA',
      'ABA ABA',
      'AAA AAA'
    ],{
      A:'kubejs:bleak_space_ingot',
      B:'kubejs:space_ingot',
      C:'kubejs:miracle_dust',
      D:'kubejs:space_precision_mechanism'
    })
    //太空合金靴子合成
    e.recipes.create.mechanical_crafting('kubejs:space_alloyed_boots',[
      ' BA AB ',
      ' AB BA ',
      ' BA AB ',
      'AAB BAA',
      'ACA ACA',
      'AAA AAA'
    ],{
      A:'kubejs:bleak_space_ingot',
      B:'kubejs:space_ingot',
      C:'kubejs:space_precision_mechanism'
    })
})
//太空合金系列附魔取消
MoreJSEvents.enchantmentTableEnchant(e=>{
  if (e.item == '#kjs:space_alloyed_tiers/tools')
  {
    e.cancel()
  }
})
MoreJSEvents.enchantmentTableIsEnchantable(e=>{
  if(e.item.tag == '#kjs:space_alloyed_tiers/tools')
  {
    e.cancel()
  }
})
ServerEvents.tags('item', e=>{
  //太空合金锭tag添加（维修）
  e.add('kjs:bleak_space_ingot',[
      'kubejs:bleak_space_ingot','kubejs:space_ingot'
  ])
  e.add('kjs:space_ingot','kubejs:space_ingot')
  //太空合金物品tag添加
  e.add('kjs:space_alloyed_tiers/tools',[
      'kubejs:space_alloyed_helmet',
      'kubejs:space_alloyed_boots',
      'kubejs:space_alloyed_leggings',
      'kubejs:space_alloyed_chestplate',
      'kubejs:space_alloyed_axe',
      'kubejs:space_alloyed_pickaxe',
      'kubejs:space_alloyed_sword',
      'kubejs:space_alloyed_shovel',
      'kubejs:space_alloyed_hoe',
  ])
  //非天境物品支持天境挖掘速度
  e.add('aether:treated_as_aether_item',[
      'upgradednetherite_creative:creative_upgraded_netherite_sword',
      'upgradednetherite_creative:creative_upgraded_netherite_shield',
      'kubejs:space_alloyed_axe'
  ])
  //非天境物品支持金琥珀开掘
  e.add('aether:golden_amber_harvesters',[
      'kubejs:space_alloyed_axe'
  ])
})