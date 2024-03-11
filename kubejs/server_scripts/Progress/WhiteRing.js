ServerEvents.recipes(e => {
    remove_recipes_id(e, [
        "create:crafting/kinetics/empty_blaze_burner"
    ])
    e.shaped("create:empty_blaze_burner",
        ["ABA", "BCB", "ABA"],
        {
            A: "#forge:rods/iron",
            B: "#forge:plates/iron",
            C: "#minecraft:soul_fire_base_blocks",
        })
    // 召唤烈焰人
    BlockCrafting.addMultiblockStructure(MultiblockStructureBuilder.create("blaze")
        .pattern(" b ", "sms", " l ")
        .center("l", Blocks.JACK_O_LANTERN)
        .where("b", Blocks.NETHER_BRICKS)
        .where("m", Blocks.MAGMA_BLOCK)
        .whereTag("s", "minecraft:soul_fire_base_blocks")
        .where(" ", Blocks.AIR)
        .craftingItem("alexsmobs:lava_bottle")
        .resultEntity("minecraft:blaze")
        .resultAction((level, pos, player) => {
            player.setMainHandItem("minecraft:glass_bottle")
        })
        .build()
    )
})