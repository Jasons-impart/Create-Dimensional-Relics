StartupEvents.registry("item", e => {
    // 粗钢锭
    e.create("createdimensionalrelics:raw_steel_ingot")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.raw_steel_ingot")
        .tag("forge:ingots/raw_steel")
        .rarity("common")
    // 锤炼中的粗钢锭
    e.create("createdimensionalrelics:hammering_raw_steel_ingot")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.hammering_raw_steel_ingot")
        .tag("forge:ingots/hammering_raw_steel")
        .rarity("common")
    // 土豆加牛肉
    e.create("createdimensionalrelics:potato_stew_beef")
        .food(food => {
            food.hunger(7)
                .saturation(0.6)
                .meat()
                .eaten(ctx => {
                    if (!ctx.level.isClientSide())
                        ctx.player.tell(Text.translatable("text.createdimensionalrelics.eat_potato_stew_beef").red())
                })
        })
        .translationKey("item.createdimensionalrelics.potato_stew_beef")
    // 未激活的凋零之眼
    e.create("createdimensionalrelics:unactivated_wither_eye")
        .maxStackSize(16)
        .translationKey("item.createdimensionalrelics.unactivated_wither_eye")
        .rarity("epic")
    e.create("createdimensionalrelics:dusty_magical_eye")
        .maxDamage(16)
        .translationKey("item.createdimensionalrelics.dusty_magical_eye")
        .rarity("rare")
    // 超级饺子
    e.create("createdimensionalrelics:super_dumpling")
        .maxStackSize(16)
        .food(food => {
            food.alwaysEdible()
                .effect("regeneration", 36000, 3, 1.0)
                .effect("absorption", 36000, 3, 1.0)
                .effect("strength", 36000, 3, 1.0)
                .fastToEat()
                .hunger(200)
                .saturation(10)
                .meat()
                .eaten(ctx => (
                    ctx.player.tell(Text.translatable("text.createdimensionalrelics.eat_super_dumpling").gold())
                ))
        })
        .translationKey("item.createdimensionalrelics.super_dumpling")
    // 充能红石
    e.create("createdimensionalrelics:overcharged_redstone")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.overcharged_redstone")
    // 太空合金
    e.create("createdimensionalrelics:space_alloy_ingot")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.space_alloy_ingot")
        .tag("forge:ingots")
        .tag("forge:ingots/space_alloy")
        .rarity("epic")
    e.create("createdimensionalrelics:space_alloy_nugget")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.space_alloy_nugget")
        .tag("forge:nuggets")
        .tag("forge:nuggets/space_alloy")
        .rarity("rare")
    e.create("createdimensionalrelics:space_alloy_sheet")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.space_alloy_sheet")
        .tag("forge:plates")
        .tag("forge:plates/space_alloy")
        .rarity("rare")
    // 暗淡太空合金
    e.create("createdimensionalrelics:bleak_space_alloy_ingot")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.bleak_space_alloy_ingot")
        .tag("forge:ingots")
        .tag("forge:ingots/bleak_space_alloy")
        .rarity("rare")
    e.create("createdimensionalrelics:bleak_space_alloy_handle")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.bleak_space_alloy_handle")
        .tag("forge:rods")
        .tag("forge:rods/bleak_space_alloy")
        .rarity("rare")
    // 太空合金构件
    e.create("createdimensionalrelics:incompleted_space_alloy_precision_mechanism")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.incompleted_space_alloy_precision_mechanism")
        .rarity("rare")
    e.create("createdimensionalrelics:space_alloy_precision_mechanism")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.space_alloy_precision_mechanism")
        .rarity("epic")
    // 奇迹粉尘
    e.create("createdimensionalrelics:miracle_dust")
        .maxStackSize(16)
        .translationKey("item.createdimensionalrelics.miracle_dust")
        .tag("foege:dusts")
        .tag("forge:dusts/miracle")
        .rarity("rare")
    // 奇迹锭
    e.create("createdimensionalrelics:miracle_ingot")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.miracle_ingot")
        .tag("forge:ingots")
        .tag("forge:ingots/miracle")
        .rarity("epic")
    // 深渊锭
    e.create("createdimensionalrelics:abyss_alloy_ingot")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.abyss_alloy_ingot")
        .tag("forge:ingots")
        .tag("forge:ingots/abyss_alloy")
        .rarity("epic")
    // 辉影合金
    e.create("createdimensionalrelics:glow_shadow_alloy")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.glow_shadow_alloy")
        .tag("forge:ingots")
        .tag("forge:ingots/glow_shadow")
        .rarity("epic")
    // 最终之眼
    e.create("createdimensionalrelics:final_eye")
        .maxStackSize(16)
        .translationKey("item.createdimensionalrelics.final_eye")
        .rarity("epic")
    // 矿藏搬运器
    e.create("createdimensionalrelics:mine_carryon")
        .maxStackSize(1)
        .translationKey("item.createdimensionalrelics.mine_carryon")
        .rarity("epic")
    // **rs中间产物
    e.create("createdimensionalrelics:incompleted_1k_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.incompleted_1k_storage_part")
        .rarity("common")
    e.create("createdimensionalrelics:incompleted_4k_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.incompleted_4k_storage_part")
        .rarity("common")
    e.create("createdimensionalrelics:incompleted_16k_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.incompleted_16k_storage_part")
        .rarity("common")
    e.create("createdimensionalrelics:incompleted_64k_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.incompleted_64k_storage_part")
        .rarity("common")
    e.create("createdimensionalrelics:incompleted_64k_fluid_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.incompleted_64k_fluid_storage_part")
        .rarity("common")
    e.create("createdimensionalrelics:incompleted_256k_fluid_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.incompleted_256k_fluid_storage_part")
        .rarity("common")
    e.create("createdimensionalrelics:incompleted_1024k_fluid_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.incompleted_1024k_fluid_storage_part")
        .rarity("common")
    e.create("createdimensionalrelics:incompleted_4096k_fluid_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.incompleted_4096k_fluid_storage_part")
        .rarity("common")
    e.create("createdimensionalrelics:raw_silicon")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.raw_silicon")
        .rarity("common")
    // 注册化工线相关物品
    e.create("createdimensionalrelics:sodium")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.sodium")
        .tag("forge:ingots")
        .rarity("common")
    e.create("createdimensionalrelics:urea")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.urea")
        .rarity("common")
    e.create("createdimensionalrelics:sodium_hydroxide")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.sodium_hydroxide")
        .rarity("common")
    e.create("createdimensionalrelics:polyvinyl_chloride")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.polyvinyl_chloride")
        .rarity("common")
    e.create("createdimensionalrelics:polystyrene")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.polystyrene")
        .rarity("common")
    e.create("createdimensionalrelics:polypropylene")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.polypropylene")
        .rarity("common")
    e.create("createdimensionalrelics:super_polymer")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.super_polymer")
        .rarity("common")
    e.create("createdimensionalrelics:aviation_fibers")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.aviation_fibers")
        .tag("forge:string")
        .rarity("common")
    e.create("createdimensionalrelics:aviation_fibers_sheet")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.aviation_fibers_sheet")
        .tag("forge:plates")
        .rarity("common")
    e.create("createdimensionalrelics:sodium_hypochlorite")
        .maxStackSize(64)
        .translationKey("item.createdimensionalrelics.sodium_hypochlorite")
        .tag("forge:dusts")
        .rarity("common")
    e.create("createdimensionalrelics:double_steel")
        .maxStackSize(32)
        .translationKey("item.createdimensionalrelics.double_steel")
        .tag("forge:ingots")
        .rarity("rare")
    // 注册电解器
    e.create("createdimensionalrelics:electrolyzer")
        .maxStackSize(16)
        .translationKey("item.createdimensionalrelics.electrolyzer")
        .rarity("rare")
    e.create("createdimensionalrelics:electrolyzer_charged")
        .maxStackSize(16)
        .translationKey("item.createdimensionalrelics.electrolyzer_charged")
        .rarity("rare")
    // 注册充电铁线和充电金线
    e.create("create_new_age:overcharged_iron_wire_2")
        .maxStackSize(64)
        .translationKey("item.create_new_age.overcharged_iron_wire_2")
        .rarity("common")
        .group("create_new_age_tab")
    e.create("create_new_age:overcharged_gold_wire")
        .maxStackSize(64)
        .translationKey("item.create_new_age.overcharged_gold_wire")
        .rarity("common")
        .group("create_new_age_tab")
    // 注册铝板
    e.create("createindustry:aluminum_sheet")
        .maxStackSize(64)
        .translationKey("item.createindustry.aluminum_sheet")
        .tag("forge:plates")
        .tag("forge:plates/aluminum")
        .rarity("common")
        .group("createindustry.base")
    // 注册碳板
    e.create("createindustry:coal_sheet")
        .maxStackSize(64)
        .translationKey("item.createindustry.coal_sheet")
        .tag("forge:plates")
        .tag("forge:plates/coal")
        .rarity("common")
        .group("createindustry.base")
    // 开发组人员物品

    // 李武的纠缠之缘
    e.create("createdimensionalrelics:liwus_intertwined_fate")
        .maxStackSize(16)
        .translationKey("item.createdimensionalrelics.liwus_intertwined_fate")
        .rarity("uncommon")
})
