ServerEvents.recipes(event => {
    //移除物品：炸弹，靛蓝炸弹
    event.remove({output: 'supplementaries:bomb'})
    //移除物品：ftb过滤
    event.remove({mod: 'itemfilters'})
    //移除物品：ftb任务
    event.remove({mod: 'ftbquests'})
    //移除配方：搅拌合成玫瑰石英
    event.remove({id: 'create:crafting/materials/rose_quartz'})
    //移除物品：粘液头盔及靴子
    event.remove({output: Item.of('create_sa:slime_helmet')})
    event.remove({output: Item.of('create_sa:slime_boots')})
    //移除物品：黄铜无人机相关，黄铜cube
    event.remove({output: 'create_sa:copper_magnet'})
    event.remove({output: 'create_sa:brass_cube'})
    event.remove({output: Item.of('create_sa:drone_controller')})
    event.remove({output: 'create_sa:fan_component'})
    event.remove({output: 'create_sa:vault_component'})
    event.remove({output: 'create_sa:brass_drone_item'})
    //移除配方：打火石
    event.remove({id:"minecraft:flint_and_steel"})
    event.remove({id:'alexsmobs:flint_n_steel_dropbear_claw'})

    event.remove({input:'create_enchantment_industry:experience_rotor'})
    event.remove({output:'create_enchantment_industry:experience_rotor'})


    event.remove({output:'vinery:cherry_boat'})
    event.remove({input:'vinery:cherry_boat'})
    event.remove({input:'beachparty:palm_boat'})
    event.remove({output:'beachparty:palm_boat'})
    //移除createaddition部分物品
    event.remove({output:[
        'createaddition:tesla_coil',
        'createaddition:electrum_amulet',
        'createaddition:copper_wire',
        'createaddition:iron_wire',
        'createaddition:spool',
        'createaddition:electrum_rod',
        'createaddition:gold_rod',
        'createaddition:brass_rod',
        'createaddition:festive_spool',
        'createaddition:gold_spool',
        'createaddition:electrum_spool',
        'createaddition:electric_motor',
        'createaddition:alternator',
        'createaddition:connector',
        'createaddition:small_light_connector',
        'createaddition:large_connector',
        'createaddition:redstone_relay'
    ]})
    //移除rs部分物品
    event.remove({input:[
        'refinedstorage:raw_basic_processor',
        'refinedstorage:raw_improved_processor',
        'refinedstorage:raw_advanced_processor',
        'refinedstorage:wrench'
    ]})
    event.remove({output:[
        'refinedstorage:raw_basic_processor',
        'refinedstorage:raw_improved_processor',
        'refinedstorage:raw_advanced_processor',
        'refinedstorage:wrench'
    ]})
    //移除部分不合理食物配方
    event.remove({id:'neapolitan:banana/banana_bread'})
}

)
