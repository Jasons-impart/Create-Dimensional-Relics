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
    // 钢燃料储罐
    registerBlock("steel_tank", "metal", 5, 15, "mineable/pickaxe", "minecraft:needs_diamond_tool", true)
    // 钢引擎
    registerBlock("steel_engine", "metal", 5, 15, "mineable/pickaxe", "minecraft:needs_diamond_tool", true)
    // 一级火箭核心
    registerBlock("rocket_core_tier_1", "metal", 15, 15, "mineable/pickaxe", "minecraft:needs_diamond_tool", true)
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
    // 注册锂矿
    e.create("createdimensionalrelics:lithium_ore")
        .translationKey("block.createdimensionalrelics.lithium_ore")
        .soundType("stone")
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool")
        .tag("balm:ores")
        .tag("forge:ores")
        .tag("forge:ores/lithium")
        .tag("forge:ores_in_ground/stone")
        .tag("alexsmobs:underminer_ores")
        .requiresTool(true)
        .textureAll("createdimensionalrelics:block/lithium_ore")
    // 注册锰矿
    e.create("createdimensionalrelics:manganese_ore")
        .translationKey("block.createdimensionalrelics.manganese_ore")
        .soundType("stone")
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_diamond_tool")
        .tag("balm:ores")
        .tag("forge:ores")
        .tag("forge:ores/manganese")
        .tag("forge:ores_in_ground/stone")
        .tag("forge:ore_rates/singular")
        .tag("alexsmobs:underminer_ores")
        .requiresTool(true)
        .textureAll("createdimensionalrelics:block/manganese_ore")
    // 注册钴矿
    e.create("createdimensionalrelics:cobalt_ore")
        .translationKey("block.createdimensionalrelics.cobalt_ore")
        .soundType("stone")
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool")
        .tag("balm:ores")
        .tag("forge:ores")
        .tag("forge:ores/cobalt")
        .tag("forge:ores_in_ground/stone")
        .tag("alexsmobs:underminer_ores")
        .requiresTool(true)
        .textureAll("createdimensionalrelics:block/cobalt_ore")
})
