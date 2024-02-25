StartupEvents.registry('block', e => {
    function registerBlock(
        Name,
        DisplayName,
        SoundType,
        Hardness,
        Resistance,
        Tool,
        Grade,
        RequiresTool
    ) {
        e.create(Name)
            .displayName(DisplayName)
            .soundType(SoundType)
            .hardness(Hardness)
            .resistance(Resistance)
            .tagBlock(Tool)
            .tagBlock(Grade)
            .requiresTool(RequiresTool)
    }
    
    // 暗淡太空合金块
    registerBlock('bleak_space_block', '暗淡太空合金块', 'metal', 15, 120, 'mineable/pickaxe', 'forge:needs_netherite_tool', true)
    // 太空合金块
    registerBlock('space_block', '太空合金块', 'metal', 15, 1200, 'mineable/pickaxe', 'forge:needs_netherite_tool', true)
    // 奇迹块
    registerBlock('miracle_block', '奇迹块', 'amethyst', 10, 10, 'mineable/pickaxe', 'forge:needs_netherite_tool', true)
    // 深渊合金块
    registerBlock('abyss_block', '深渊合金块', 'metal', 15, 1200, 'mineable/pickaxe', 'forge:needs_netherite_tool', true)
    // 模型测试物品
    registerBlock('model_test', '模型测试', 'metal', 15, 15, 'mineable/pickaxe', 'minecraft:need_stone_tool', false)
})