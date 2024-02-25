ServerEvents.recipes(e=>{
    //移除配方：锤子
    e.remove({output:Item.of('ad_astra:hammer')})
    e.remove({input:Item.of('ad_astra:hammer')})
    //移除配方：ad_astra重叠物品
    e.remove({output:'ad_astra:compressor'})
    e.remove({input:'ad_astra:compressor'})
    e.remove({output:'ad_astra:coal_generator'})
    e.remove({input:'ad_astra:coal_generator'})
    e.remove({output:'ad_astra:cable_duct'})
    e.remove({input:'ad_astra:cable_duct'})
    e.remove({output:'ad_astra:ostrum_fluid_pipe'})
    e.remove({input:'ad_astra:ostrum_fluid_pipe'})
    e.remove({output:'ad_astra:desh_cable'})
    e.remove({input:'ad_astra:desh_cable'})
    e.remove({output:'ad_astra:steel_cable'})
    e.remove({input:'ad_astra:steel_cable'})
    e.remove({output:'ad_astra:desh_fluid_pipe'})
    e.remove({input:'ad_astra:desh_fluid_pipe'})
    e.remove({output:'ad_astra:fluid_pipe_duct'})
    e.remove({input:'ad_astra:fluid_pipe_duct'})
    e.remove({output:'ad_astra:water_pump'})
    e.remove({input:'ad_astra:water_pump'})
    e.remove({output:'ad_astra:nasa_workbench'})
    e.remove({id:'ad_astra:nasa_workbench/tier_1_rocket'})
    e.remove({id:'ad_astra:nasa_workbench/tier_2_rocket'})
    e.remove({id:'ad_astra:nasa_workbench/tier_3_rocket'})
    e.remove({id:'ad_astra:nasa_workbench/tier_4_rocket'})
    e.remove({output:'ad_astra:wrench'})
    //移除配方：钢锭
    e.remove({id:'alloyed:mixing/steel_ingot'})
    e.remove({id:'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'})
    e.remove({id:'ad_astra:recipes/steel_ingot_from_nuggets'})
    e.remove({id:'ad_astra:recipes/steel_block'})
    e.remove({id:'ad_astra:recipes/steel_ingot'})
    //新增配方：银河系漫游指南
    e.shapeless('ad_astra:astrodux',[
        'alloyed:steel_ingot',
        'minecraft:book'
    ]).id('ad_astra:recipes/astrodux')
    //新增配方：霜原木
    e.shapeless('ad_astra:glacian_log',[
        '#minecraft:logs',
        'ad_astra:ice_shard'
    ])
    //新增配方：霜原树叶
    e.shapeless('ad_astra:glacian_leaves',[
        '#minecraft:leaves',
        'ad_astra:ice_shard'
    ])
    //替换配方：氧气罐
    e.shaped('ad_astra:oxygen_tank',[
        'ABA',
        'ACA',
        'AAA'
    ],{
        A:'alloyed:steel_sheet',
        B:'createaddition:iron_rod',
        C:'create:fluid_tank'
    }).id('ad_astra:recipes/oxygen_tank')
    //替换配方：引擎框架
    e.shaped('ad_astra:engine_frame',[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'#forge:rods/iron',
        B:'create:precision_mechanism'
    }).id('ad_astra:recipes/engine_frame')
    //替换配方：引擎风扇
    e.shaped('ad_astra:engine_fan',[
        ' A ',
        'ABA',
        ' A '
    ],{
        A:'alloyed:steel_sheet',
        B:'create:propeller'
    }).id('ad_astra:recipes/engine_fan')
    //替换配方：钢燃料储罐
    e.shaped('ad_astra:steel_tank',[
        'AA ',
        'ABC',
        'AA '
    ],{
        A:'alloyed:steel_sheet',
        B:'create:fluid_tank',
        C:'#forge:rods/iron'
    }).id('ad_astra:recipes/steel_tank')
    //替换配方：戴斯燃料储罐
    e.shaped('ad_astra:desh_tank',[
        'AA ',
        'ABC',
        'AA '
    ],{
        A:'ad_astra:desh_plate',
        B:'create:fluid_tank',
        C:'#forge:rods/iron'
    }).id('ad_astra:recipes/desh_tank')
    //替换配方：紫金燃料储罐
    e.shaped('ad_astra:ostrum_tank',[
        'AA ',
        'ABC',
        'AA '
    ],{
        A:'ad_astra:ostrum_plate',
        B:'create:fluid_tank',
        C:'#forge:rods/iron'
    }).id('ad_astra:recipes/ostrum_tank')
    //替换配方：耐热燃料储罐
    e.shaped('ad_astra:calorite_tank',[
        'AA ',
        'ABC',
        'AA '
    ],{
        A:'ad_astra:calorite_plate',
        B:'create:fluid_tank',
        C:'#forge:rods/iron'
    }).id('ad_astra:recipes/calorite_tank')
    //替换配方：喷气式航天服
    e.shaped('ad_astra:jet_suit',[
        'ABA',
        'CDC',
        'EFE'
    ],{
        A:'ad_astra:calorite_plate',
        B:'create_sa:brass_jetpack_chestplate',
        C:'ad_astra:calorite_tank',
        D:'ad_astra:netherite_space_suit',
        E:'ad_astra:calorite_block',
        F:'ad_astra:calorite_engine'
    }).id('ad_astra:recipes/jet_suit')
    //替换配方：充能器
    e.shaped('ad_astra:energizer',[
        'ABA',
        'ACA',
        'DAD'
    ],{
        A:'ad_astra:ostrum_plate',
        B:'create:depot',
        C:'create_new_age:energiser_t3',
        D:'createaddition:modular_accumulator'
    }).id('ad_astra:recipes/energizer')
    //替换配方：凛冰冻结装置
    e.shaped('ad_astra:cryo_freezer',[
        'ABA',
        'BCB',
        'DBD'
    ],{
        A:'ad_astra:engine_fan',
        B:'ad_astra:ostrum_ingot',
        C:'ad_astra:ostrum_tank',
        D:'createaddition:modular_accumulator'
    }).id('ad_astra:recipes/cryo_freezer')
    //替换配方：氧气装载机
    e.shaped('ad_astra:oxygen_loader',[
        'ABA',
        'CDC',
        'AEA'
    ],{
        A:'alloyed:steel_sheet',
        B:'ad_astra:engine_fan',
        C:'ad_astra:oxygen_tank',
        D:'minecraft:lightning_rod',
        E:'createaddition:modular_accumulator'
    }).id('ad_astra:recipes/oxygen_loader')
    //替换配方：燃油精炼机
    e.shaped('ad_astra:fuel_refinery',[
        'AAA',
        'BCB',
        'AAA'
    ],{
        A:'alloyed:steel_sheet',
        B:'create:fluid_tank',
        C:'minecraft:furnace'
    }).id('ad_astra:recipes/fuel_refinery')
    //替换配方：太阳能板
    e.shaped('ad_astra:solar_panel',[
        'AAA',
        'BCB',
        'CDC'
    ],{
        A:'minecraft:blue_stained_glass',
        B:'alloyed:steel_sheet',
        C:'ad_astra:desh_plate',
        D: 'createaddition:modular_accumulator'
    }).id('ad_astra:recipes/solar_panel')
    //替换配方：紫金引擎
    e.shaped('ad_astra:ostrum_engine',[
        'ABA',
        ' C ',
        ' D '
    ],{
        A:'ad_astra:ostrum_plate',
        B:'ulterlands:etherite',
        C:'ad_astra:engine_frame',
        D:'ad_astra:engine_fan'
    }).id('ad_astra:recipes/ostrum_engine')
    //替换配方：耐热金属引擎
    e.shaped('ad_astra:calorite_engine',[
        'ABA',
        ' C ',
        ' D '
    ],{
        A:'ad_astra:calorite_plate',
        B:'ulterlands:etherite',
        C:'ad_astra:engine_frame',
        D:'ad_astra:engine_fan'
    }).id('ad_astra:recipes/calorite_engine')
        //动力合成器添加：一级火箭
    e.recipes.create.mechanical_crafting('ad_astra:tier_1_rocket',[
      '  A  ',
      ' BBB ',
      ' B B ',
      ' B B ',
      ' BBB ',
      'CDDDC',
      'CEEEC'
    ],{
      A: 'ad_astra:rocket_nose_cone',
      B: '#forge:storage_blocks/steel',
      C: 'ad_astra:rocket_fin',
      D: 'ad_astra:steel_tank',
      E:'ad_astra:steel_engine'
    })
    //动力合成器添加：二级火箭
    e.recipes.create.mechanical_crafting('ad_astra:tier_2_rocket',[
      '  A  ',
      ' BBB ',
      ' B B ',
      ' B B ',
      ' BBB ',
      'CDDDC',
      'CEEEC'
    ],{
      A: 'ad_astra:rocket_nose_cone',
      B: 'ad_astra:desh_block',
      C: 'ad_astra:rocket_fin',
      D: 'ad_astra:desh_tank',
      E: 'ad_astra:desh_engine'
    })
    //动力合成器添加：三级火箭
    e.recipes.create.mechanical_crafting('ad_astra:tier_3_rocket',[
      '  A  ',
      ' BBB ',
      ' B B ',
      ' B B ',
      ' BBB ',
      'CDDDC',
      'CEEEC'
    ],{
      A: 'ad_astra:rocket_nose_cone',
      B: 'ad_astra:ostrum_block',
      C: 'ad_astra:rocket_fin',
      D: 'ad_astra:ostrum_tank',
      E: 'ad_astra:ostrum_engine'
    })
    //动力合成器添加：四级火箭
    e.recipes.create.mechanical_crafting('ad_astra:tier_4_rocket',[
      '  A  ',
      ' BBB ',
      ' B B ',
      ' B B ',
      ' BBB ',
      'CDDDC',
      'CEEEC'
    ],{
      A: 'ad_astra:rocket_nose_cone',
      B: 'ad_astra:calorite_block',
      C: 'ad_astra:rocket_fin',
      D: 'ad_astra:calorite_tank',
      E: 'ad_astra:calorite_engine'
    })
    //动力合成器添加：喷气式宇航服一套
    e.recipes.create.mechanical_crafting('ad_astra:jet_suit_helmet',[
      'AAA',
      'ABA'
    ],{
    A:'kubejs:bleak_space_ingot',
    B:'create_crystal_clear:train_glass_casing'
    })
    e.recipes.create.mechanical_crafting(Item.of('ad_astra:jet_suit', '{BotariumData:{Energy:1000000L,StoredFluids:[{Amount:4000L,Fluid:"ad_astra:oxygen"}]},Damage:0,SpawnParticles:0b}'),[
    'A A',
    'AAA',
    'ABA'
    ],{
    A:'kubejs:space_ingot',
    B:'create_sa:brass_jetpack_chestplate'
    })
    e.recipes.create.mechanical_crafting('ad_astra:jet_suit',[
    'A A',
    'AAA',
    'ABA'
    ],{
    A:'kubejs:bleak_space_ingot',
    B:'create_sa:brass_jetpack_chestplate'
    })
    e.recipes.create.mechanical_crafting('ad_astra:jet_suit_pants',[
    'AAA',
    'A A',
    'A A'
    ],{
    A:'kubejs:bleak_space_ingot'
    })
    e.recipes.create.mechanical_crafting('ad_astra:jet_suit_boots',[
    '   ',
    'A A',
    'A A'
    ],{
    A:'kubejs:bleak_space_ingot'
    })
})