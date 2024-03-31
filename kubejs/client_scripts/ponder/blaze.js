Ponder.tags(e => {
    e.createTag("createdimensionalrelics:blaze",
        "create:blaze_burner",
        "Blaze",
        "How to summon a blaze?",
        [
            "minecraft:jack_o_lantern",
            "minecraft:magma_block",
            "minecraft:soul_sand",
        ])
})

Ponder.registry(e => {
    e.create("minecraft:jack_o_lantern")
        .scene("blaze", "How To Summon A Blaze", "kubejs:blaze", (scene, utils) => {
            scene.showStructure(0)
            scene.idle(20)
            scene.addKeyframe()
            scene.text(18, "§bPlace Like This")
            const block_1 = [
                [2, 1, 2],
                [3, 2, 2],
                [2, 2, 2],
                [1, 2, 2],
                [2, 3, 2],
            ]
            for (let block of block_1) {
                scene.world.showSection(block, Direction.down)
                scene.idle(4)
            }
            scene.idle(19)
            scene.rotateCameraY(45)
            scene.addLazyKeyframe()
            scene.text(30, "§bUsing lava bottle to R-Click the Jack_o_lantern")
            scene
                .showControls(30, utils.grid.at(2, 3, 2), "left")
                .rightClick()
                .withItem("alexsmobs:lava_bottle")
            scene.idle(30)
            scene.world.setBlocks([1, 1, 2, 3, 3, 2], "minecraft:air")
            scene.world.createEntity("minecraft:blaze", [2.5, 1, 2.5])
            scene.idle(20)
        })
})