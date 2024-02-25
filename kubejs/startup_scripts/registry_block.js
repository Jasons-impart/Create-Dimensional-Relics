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
        e.create("createdelight:" + Name)
            .translationKey("block.createdelight." + Name)
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
    registerBlock("model_test", "metal", 15, 15, "mineable/pickaxe", "minecraft:need_stone_tool", false)
})