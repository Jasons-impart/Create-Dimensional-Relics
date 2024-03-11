BlockCrafting.addMultiblockStructure(MultiblockStructureBuilder.create("tier_1_rocket")
    .pattern("a   a","a   a","     ","     ","     ","     ","     ","     ","     ")
    .pattern(" aaa "," aaa "," aaa "," aaa "," aaa "," aca ","  a  ","     ","     ")
    .pattern(" aaa "," aaa "," aba "," aba "," a a "," a a "," a a ","  a  ","  d  ")
    .pattern(" aaa "," aaa "," aea "," aaa "," aaa "," aaa ","  a  ","     ","     ")
    .pattern("a   a","a   a","     ","     ","     ","     ","     ","     ","     ")
    .center("e", Blocks.STONE)
    .where(" ", Blocks.AIR)
    .where("a", 'alloyed:steel_casing')
    .where("b", 'alloyed:steel_scaffolding')
    .where("c", 'create_crystal_clear:andesite_clear_glass_casing')
    .where("d", 'minecraft:lightning_rod')
    .craftingItem('#mekanism:configurators')
    .resultItem('ad_astra:tier_1_rocket')
    .build())
BlockCrafting.addMultiblockStructure(MultiblockStructureBuilder.create("Test")
    .pattern("ddd", "ggg")
    .pattern("ddd", "ggg")
    .pattern("pds", "gdg")
    .center("s", Blocks.STONE)
    .whereCond("d", b => b == Blocks.DIRT) // 表示 d 代表满足 b==... 的方块 b（可以用字符串）
    .where("g", Blocks.GRASS_BLOCK) // 表示 g 代表草方块（可以用字符串）
    .whereTag("p", "minecraft:planks") // 表示 p 代表带有 planks 标签的任意方块（可以用字符串）
    .craftingItem('create:wrench') // 需要手持触发合成的 Item
    .resultItem("2x minecraft:diamond") // 输出
    .build());