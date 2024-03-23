Ponder.tags(e => {
    e.createTag("createdimensionalrelics:rocket",
        "ad_astra:tier_1_rocket",
        "Rockets",
        "How to build rockets?",
        [
            "ad_astra:tier_1_rocket",
            "ad_astra:tier_2_rocket",
            "ad_astra:tier_3_rocket",
            "ad_astra:tier_4_rocket",
        ])
})

Ponder.registry(e => {
    e.create("ad_astra:tier_1_rocket")
        .scene("tier_1_rocket", "Rocket_tier_1", "kubejs:tier_1_rocket", (scene, utils) => {
            scene.showStructure(0);
            scene.idle(20);
            scene.scaleSceneView(0.8)
            scene.addKeyframe()
            scene.text(24, "§bPlace steel engine")
            const block_1 = [
                [6, 1, 6],
                [2, 1, 6],
                [5, 1, 5],
                [4, 1, 5],
                [3, 1, 5],
                [5, 1, 4],
                [4, 1, 4],
                [3, 1, 4],
                [5, 1, 3],
                [4, 1, 3],
                [3, 1, 3],
                [6, 1, 2],
                [2, 1, 2]
            ]
            for (let block of block_1) {
                scene.world.showSection(block, Direction.down);
                scene.idle(3)
            }
            scene.idle(20)
            scene.addKeyframe()
            scene.text(50, "§bPlace steel tank")
            const block_2 = [
                [6, 2, 6],
                [2, 2, 6],
                [5, 2, 5],
                [4, 2, 5],
                [3, 2, 5],
                [5, 2, 4],
                [4, 2, 4],
                [3, 2, 4],
                [5, 2, 3],
                [3, 2, 3],
                [6, 2, 2],
                [2, 2, 2],
                [6, 3, 6],
                [2, 3, 6],
                [5, 3, 5],
                [4, 3, 5],
                [3, 3, 5],
                [5, 3, 4],
                [4, 3, 4],
                [3, 3, 4],
                [5, 3, 3],
                [4, 3, 3],
                [3, 3, 3],
                [6, 3, 2],
                [2, 3, 2]
            ]
            for (let block of block_2) {
                scene.world.showSection(block, Direction.down);
                scene.idle(3)
            }
            scene.idle(20)
            scene.text(40, "§bRocket_core_tier_1", [4.5, 2.5, 3])
            scene.text(13, "§bPlace_Rocket_core_tier_1")
            scene.world.showSection([4, 2, 3], Direction.south)
            scene.idle(9)
            scene.addKeyframe()
            scene.text(30, "§bPlace steel pillar")
            let block_3 = [
                [5, 4, 5],
                [3, 4, 5],
                [5, 4, 3],
                [3, 4, 3],
                [5, 5, 5],
                [3, 5, 5],
                [5, 5, 3],
                [3, 5, 3],
                [5, 6, 5],
                [3, 6, 5],
                [5, 6, 3],
                [3, 6, 3],
                [5, 7, 5],
                [3, 7, 5],
                [5, 7, 3],
                [3, 7, 3],
            ]
            for (let block of block_3) {
                scene.world.showSection(block, Direction.down);
                scene.idle(3)
            }
            scene.idle(20)
            scene.addKeyframe()
            scene.text(38, "§bPlace steel plating")
            scene.text(40, "§bThis is a structural glass", [4.5, 5.5, 3])
            let block_4 = [
                [4, 4, 5],
                [5, 4, 4],
                [3, 4, 4],
                [4, 4, 3],
                [4, 5, 5],
                [5, 5, 4],
                [3, 5, 4],
                [4, 5, 3],
                [4, 6, 5],
                [5, 6, 4],
                [3, 6, 4],
                [4, 6, 3],
                [4, 7, 5],
                [5, 7, 4],
                [3, 7, 4],
                [4, 7, 3],
                [4, 8, 5],
                [5, 8, 4],
                [3, 8, 4],
                [4, 8, 3],
                [4, 9, 4]
            ]
            for (let block of block_4) {
                scene.world.showSection(block, Direction.down);
                scene.idle(3)
            }
            scene.idle(20)
            scene.addKeyframe()
            scene.text(30, "§bUsing wrench to R-Click Rocket_core_tier_1")
            scene.rotateCameraY(45)
            scene
                .showControls(30, utils.grid.at(4, 2, 3),"left")
                .rightClick()
                .withItem("create:wrench");
            scene.idle(30)
            scene.world.setBlocks([2, 1, 2, 6, 9, 6], "minecraft:air")
            scene.world.createEntity("ad_astra:tier_1_rocket", [4.5, 1, 4.5])
            scene.idle(20)
        })
    e.create("ad_astra:tier_2_rocket")
        .scene("tier_2_rocket", "Rocket_tier_2", (scene, utils) => {

        })
    e.create("ad_astra:tier_3_rocket")
        .scene("tier_3_rocket", "Rocket_tier_3", (scene, utils) => {

        })
    e.create("ad_astra:tier_4_rocket")
        .scene("tier_4_rocket", "Rocket_tier_4", (scene, utils) => {

        })
})
