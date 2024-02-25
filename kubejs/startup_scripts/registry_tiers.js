// azii的眼罩
StartupEvents.registry("item", e => {
    e.create("createdelight:aziis_eye_patch", "helmet")
        .translationKey("item.createdelight.aziis_eye_patch")
        .tier("aziis_eye_patch")
        .rarity("uncommon")
})

ItemEvents.armorTierRegistry(e => {
    e.add("createdelight:aziis_eye_patch", tier => {
        tier.durabilityMultiplier = 10000
        tier.slotProtections = [0, 0, 0, 0]
        tier.toughness = 0
        tier.knockbackResistance = 0
        tier.enchantmentValue = 0
        tier.repairIngredient = "*"
        tier.equipSound = "minecraft:item.armor.equip_leather"
    })
})

// 太空合金套装及工具等级
ItemEvents.toolTierRegistry(e => {
    e.add("createdelight:space_alloy", tier => {
        tier.uses = 6000
        tier.attackDamageBonus = 16
        tier.level = 4
        tier.enchantmentValue = 0
        tier.repairIngredient = "#createdelight:bleak_space_alloy_ingot"
        tier.speed = 25
    })
})
ItemEvents.armorTierRegistry(e => {
    e.add("createdelight:space_alloy", tier => {
        tier.durabilityMultiplier = 300
        tier.slotProtections = [10, 15, 13, 10]
        tier.toughness = 10
        tier.knockbackResistance = 0.22
        tier.enchantmentValue = 0
        tier.repairIngredient = "#kjs:bleak_space_alloy_ingot"
        tier.equipSound = "minecraft:item.armor.equip_diamond"
    })
})

// 太空合金系列物品
StartupEvents.registry("item", e => {
    e.create("createdelight:space_alloy_helmet", "helmet")
        .translationKey("item.createdelight.space_alloy_helmet")
        .tier("space_alloy")
        .rarity("epic")
    e.create("createdelight:space_alloy_chestplate", "chestplate")
        .translationKey("item.createdelight.space_alloy_chestplate")
        .tier("space_alloy")
        .rarity("epic")
    e.create("createdelight:space_alloy_leggings", "leggings")
        .translationKey("item.createdelight.space_alloy_leggings")
        .tier("space_alloy")
        .rarity("epic")
    e.create("createdelight:space_alloy_boots", "boots")
        .translationKey("item.createdelight.space_alloy_boots")
        .tier("space_alloy")
        .rarity("epic")
    e.create("createdelight:space_alloy_pickaxe", "pickaxe")
        .translationKey("item.createdelight.space_alloy_pickaxe")
        .rarity("epic")
        .tier("space_alloy")
    e.create("createdelight:space_alloy_sword", "sword")
        .translationKey("item.createdelight.space_alloy_sword")
        .rarity("epic")
        .tier("space_alloy")
        .speedBaseline(-2.0)
})

// 奇迹物品工具等级
ItemEvents.toolTierRegistry(e => {
    e.add("createdelight:miracle_ingot", tier => {
        tier.uses = 1561;
        tier.repairIngredient = "#createdelight:miracle_item";
        tier.level = 3
        tier.enchantmentValue = 20
        tier.speed = 8
    })
})

// 奇迹系列物品
StartupEvents.registry("item", e => {
    e.create("createdelight:miracle_pickaxe", "pickaxe")
        .translationKey("item.createdelight.miracle_pickaxe")
        .rarity("epic")
        .tier("miracle_ingot")
    e.create("createdelight:miracle_shear", "shears")
        .translationKey("item.createdelight.miracle_shear")
        .maxDamage(520)
        .rarity("epic")
})
