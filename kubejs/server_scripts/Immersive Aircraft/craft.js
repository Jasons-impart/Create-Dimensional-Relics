ServerEvents.recipes(e=>{
    //移除配方：沉浸式飞机原本配方
    e.remove({id: 'immersive_aircraft:airship' })
    e.remove({id: 'immersive_aircraft:quadrocopter' })
    e.remove({id: 'immersive_aircraft:gyrodyne' })
    e.remove({id: 'immersive_aircraft:biplane'})
    e.remove({id: 'immersive_aircraft:boiler'})
    e.remove({id: 'immersive_aircraft:steel_boiler'})
    e.remove({id: 'immersive_aircraft:engine'})
    e.remove({id: 'immersive_aircraft:propeller'})
    e.remove({id: 'immersive_aircraft:industrial_gears'})
    e.remove({id: 'immersive_aircraft:improved_landing_gear'})
    //动力合成器添加：四轴飞行器
    e.recipes.create.mechanical_crafting('immersive_aircraft:quadrocopter', [
        'ABA',
        'BCB',
        'ADA'
      ], {
        A: 'immersive_aircraft:propeller',
        B: 'quark:bamboo_planks',
        C: 'minecraft:scaffolding',
        D: 'immersive_aircraft:engine'
    })
    //动力合成器添加：固定旋翼机
    e.recipes.create.mechanical_crafting('immersive_aircraft:gyrodyne', [
        ' A ',
        'BCB',
        ' D '
      ], {
        A: 'immersive_aircraft:propeller',
        B: 'immersive_aircraft:sail',
        C: 'immersive_aircraft:hull',
        D: 'minecraft:grindstone'
    })
    //动力合成器添加：双翼机
    e.recipes.create.mechanical_crafting('immersive_aircraft:biplane', [
        '  A  ',
        '  B  ',
        'CCDCC',
        '  E  ',
        ' CEC '
      ], {
        A: 'immersive_aircraft:propeller',
        B: 'immersive_aircraft:engine',
        C: 'immersive_aircraft:hull',
        D: '#minecraft:wooden_trapdoors',
        E: '#minecraft:logs'
    })
    //动力合成器添加：锅炉
    e.recipes.create.mechanical_crafting('immersive_aircraft:boiler',[
        'AAA',
        'ABA',
        'ACA',
        'ADA',
        'AAA'
    ],{
        A: 'minecraft:copper_ingot',
        B: 'create_sa:large_filling_tank',
        C: 'create_sa:heat_engine',
        D: 'create_sa:large_fueling_tank'
    })
    //添加配方：飞艇
    e.shaped('immersive_aircraft:airship', [
        'AAA',
        'BBA',
        'BCD'
      ], {
        A: 'immersive_aircraft:sail',
        B: 'immersive_aircraft:hull',
        C: 'immersive_aircraft:engine',
        D: 'immersive_aircraft:propeller'
      })
    //增加配方：引擎
    e.shaped('immersive_aircraft:engine', [
        'AAA',
        'BCB', 
        'ADA' 
    ], {
        A: 'minecraft:iron_ingot',
        B: 'create:mechanical_piston',
        C: 'create_sa:steam_engine',
        D: 'immersive_aircraft:boiler'
    })
    //增加配方：螺旋桨
    e.shaped('immersive_aircraft:propeller', [
        'AA ',
        ' B ', 
        ' AA' 
    ], {
        A: 'minecraft:iron_ingot',
        B: 'create:andesite_alloy'
    })
    //增加配方：钢制锅炉
    e.shaped('immersive_aircraft:steel_boiler', [
        'AAA',
        'ABA', 
        'ACA' 
    ], {
        A: 'alloyed:steel_ingot',
        B: 'immersive_aircraft:boiler',
        C: 'create_sa:steam_engine'
    })
    //增加配方：工业齿轮
    e.shaped('immersive_aircraft:industrial_gears', [
        ' AA',
        'BCA', 
        'BB ' 
    ], {
        A: 'create:large_cogwheel',
        B: 'create:cogwheel',
        C: '63x create:shaft'
    })
    //新增配方：改良起落架
    e.shaped('immersive_aircraft:improved_landing_gear', [
        ' AB',
        'CCA', 
        'CC ' 
    ], {
        A: 'minecraft:iron_ingot',
        B: 'create:andesite_alloy',
        C: 'minecraft:dried_kelp'
    })
})