StartupEvents.registry("block", e => {
    function registerBlock(
        Name,
        SoundType,
        Hardness,
        Resistance,
        Tool,
        Grade,
        RequiresTool
    ) {
        e.create("createdimensionalrelics:" + Name)
            .translationKey("block.createdimensionalrelics." + Name)
            .soundType(SoundType)
            .hardness(Hardness)
            .resistance(Resistance)
            .tagBlock(Tool)
            .tagBlock(Grade)
            .requiresTool(RequiresTool)
    }

    // 暗淡太空合金块
    registerBlock("bleak_space_alloy_block", "metal", 15, 120, "mineable/pickaxe", "forge:needs_netherite_tool", true)
    // 太空合金块
    registerBlock("space_alloy_block", "metal", 15, 1200, "mineable/pickaxe", "forge:needs_netherite_tool", true)
    // 奇迹块
    registerBlock("miracle_block", "amethyst", 10, 10, "mineable/pickaxe", "forge:needs_netherite_tool", true)
    // 深渊合金块
    registerBlock("abyss_alloy_block", "metal", 15, 1200, "mineable/pickaxe", "forge:needs_netherite_tool", true)
    // 模型测试物品
    registerBlock("model_test", "metal", 15, 15, "mineable/pickaxe", "minecraft:needs_stone_tool", false)
    // 钢燃料储罐
    registerBlock("steel_tank", "metal", 5, 15, "mineable/pickaxe", "minecraft:needs_diamond_tool", true)
    // 钢引擎
    registerBlock("steel_engine", "metal", 5, 15, "mineable/pickaxe", "minecraft:needs_diamond_tool", true)
    // 一级火箭核心
    registerBlock("rocket_core_tier_1", "metal" ,15, 15, "mineable/pickaxe", "minecraft:needs_diamond_tool", true)
    // 戴斯燃料储罐
    registerBlock("desh_tank", "metal", 7, 15, "mineable/pickaxe", "minecraft:needs_diamond_tool", true)
    // 戴斯引擎
    registerBlock("desh_engine", "metal", 7, 15, "mineable/pickaxe", "minecraft:needs_diamond_tool", true)
    // 二级火箭核心
    registerBlock("rocket_core_tier_2", "metal", 15, 15, "mineable/pickaxe", "minecraft:needs_diamond_tool", true)
    // 紫金燃料储罐
    registerBlock("ostrum_tank", "metal", 9, 15, "mineable/pickaxe", "minecraft:needs_diamond_tool", true)
    // 紫金引擎
    registerBlock("ostrum_engine", "metal", 9, 15, "mineable/pickaxe", "minecraft:needs_diamond_tool", true)
    // 三级火箭核心
    registerBlock("rocket_core_tier_3", "metal", 15, 15, "mineable/pickaxe", "minecraft:needs_diamond_tool", true)
    // 耐热金属燃料储罐
    registerBlock("calorite_tank", "metal", 12, 15, "mineable/pickaxe", "minecraft:needs_diamond_tool", true)
    // 耐热金属引擎
    registerBlock("calorite_engine", "metal", 12, 15, "mineable/pickaxe", "minecraft:needs_diamond_tool", true)
    // 四级火箭核心
    registerBlock("rocket_core_tier_4", "metal", 15, 15, "mineable/pickaxe", "minecraft:needs_diamond_tool", true)
})