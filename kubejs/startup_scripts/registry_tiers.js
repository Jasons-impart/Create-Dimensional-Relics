//注册azii的眼罩
ItemEvents.armorTierRegistry(e=>{
    e.add("aziis_eye_patch", tier=>{
        tier.durabilityMultiplier = 10000
        tier.slotProtections = [0, 0, 0, 0]
        tier.toughness = 0
        tier.knockbackResistance = 0
        tier.enchantmentValue = 0
        tier.repairIngredient = '*'
        tier.equipSound = 'minecraft:item.armor.equip_leather'
    })
})
StartupEvents.registry('item', e=>{
    e.create("aziis_eye_patch", 'helmet').displayName('老馋二服主的眼罩').tier("aziis_eye_patch").rarity('uncommon')
})
//注册太空合金套装及工具等级
ItemEvents.toolTierRegistry(e=>{
    e.add('space_alloyed',tier=>{
        tier.uses = 6000
        tier.attackDamageBonus = 16
        tier.level = 4
        tier.enchantmentValue = 0
        tier.repairIngredient = '#kjs:bleak_space_ingot'
        tier.speed = 25
    })
})
ItemEvents.armorTierRegistry(e=>{
    e.add('space_alloyed',tier=>{
        tier.durabilityMultiplier = 300
        tier.slotProtections = [10,15,13,10]
        tier.toughness = 10
        tier.knockbackResistance = 0.22
        tier.enchantmentValue = 0
        tier.repairIngredient = '#kjs:bleak_space_ingot'
        tier.equipSound = 'minecraft:item.armor.equip_diamond'
    })
})
//注册太空合金系列物品
StartupEvents.registry('item', e=>{
    e.create('space_alloyed_helmet','helmet').displayName('太空合金头盔').tier('space_alloyed').rarity('epic')
    e.create('space_alloyed_boots','boots').displayName('太空合金靴子').tier('space_alloyed').rarity('epic')
    e.create('space_alloyed_leggings','leggings').displayName('太空合金护腿').tier('space_alloyed').rarity('epic')
    e.create('space_alloyed_chestplate','chestplate').displayName('太空合金胸甲').tier('space_alloyed').rarity('epic')
    e.create('space_alloyed_pickaxe','pickaxe').displayName('太空合金稿').rarity('epic').tier('space_alloyed')
    e.create('space_alloyed_sword','sword').displayName('太空合金剑').rarity('epic').tier('space_alloyed').speedBaseline(-2.0)
})
//注册奇迹物品工具等级
ItemEvents.toolTierRegistry(e=>{
    e.add('miracle_ingot',tier=>{
        tier.uses = 1561;
        tier.repairIngredient = '#kubejs:miracle_item';
        tier.level = 3
        tier.enchantmentValue = 20
        tier.speed = 8
    })
})
//注册奇迹系列物品
StartupEvents.registry('item', e=>{
    e.create('miracle_pickaxe','pickaxe').displayName('奇迹稿').rarity('epic').tier('miracle_ingot')
    e.create('miracle_shear',"shears").maxDamage(520).rarity('epic').displayName('奇迹剪')
})