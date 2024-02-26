// azii的眼罩
StartupEvents.registry("item", e => {
    e.create("createdimensionalrelics:aziis_eye_patch", "helmet")
        .translationKey("item.createdimensionalrelics.aziis_eye_patch")
        .tier("aziis_eye_patch")
        .rarity("uncommon")
})

ItemEvents.armorTierRegistry(e => {
    e.add("createdimensionalrelics:aziis_eye_patch", tier => {
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
    e.add("space_alloy", tier => {
        tier.uses = 6000
        tier.attackDamageBonus = 16
        tier.level = 4
        tier.enchantmentValue = 0
        tier.repairIngredient = "#forge:ingots/bleak_space_alloy"
        tier.speed = 25
    })
})
ItemEvents.armorTierRegistry(e => {
    e.add("space_alloy", tier => {
        tier.durabilityMultiplier = 300
        tier.slotProtections = [10, 15, 13, 10]
        tier.toughness = 10
        tier.knockbackResistance = 0.22
        tier.enchantmentValue = 0
        tier.repairIngredient = "#forge:ingots/bleak_space_alloy"
        tier.equipSound = "minecraft:item.armor.equip_diamond"
    })
})

// 太空合金系列物品
StartupEvents.registry("item", e => {
    e.create("createdimensionalrelics:space_alloy_helmet", "helmet")
        .translationKey("item.createdimensionalrelics.space_alloy_helmet")
        .tier("space_alloy")
        .rarity("epic")
    e.create("createdimensionalrelics:space_alloy_chestplate", "chestplate")
        .translationKey("item.createdimensionalrelics.space_alloy_chestplate")
        .tier("space_alloy")
        .rarity("epic")
    e.create("createdimensionalrelics:space_alloy_leggings", "leggings")
        .translationKey("item.createdimensionalrelics.space_alloy_leggings")
        .tier("space_alloy")
        .rarity("epic")
    e.create("createdimensionalrelics:space_alloy_boots", "boots")
        .translationKey("item.createdimensionalrelics.space_alloy_boots")
        .tier("space_alloy")
        .rarity("epic")
    e.create("createdimensionalrelics:space_alloy_pickaxe", "pickaxe")
        .translationKey("item.createdimensionalrelics.space_alloy_pickaxe")
        .rarity("epic")
        .tier("space_alloy")
    e.create("createdimensionalrelics:space_alloy_sword", "sword")
        .translationKey("item.createdimensionalrelics.space_alloy_sword")
        .rarity("epic")
        .tier("space_alloy")
        .speedBaseline(-2.0)
})

// 奇迹物品工具等级
ItemEvents.toolTierRegistry(e => {
    e.add("miracle", tier => {
        tier.uses = 1561;
        tier.repairIngredient = "#createdimensionalrelics:miracle_item";
        tier.level = 3
        tier.enchantmentValue = 20
        tier.speed = 8
    })
})

// 奇迹系列物品
StartupEvents.registry("item", e => {
    e.create("createdimensionalrelics:miracle_pickaxe", "pickaxe")
        .translationKey("item.createdimensionalrelics.miracle_pickaxe")
        .rarity("epic")
        .tier("miracle")
    e.create("createdimensionalrelics:miracle_shear", "shears")
        .translationKey("item.createdimensionalrelics.miracle_shear")
        .maxDamage(520)
        .rarity("epic")
})
