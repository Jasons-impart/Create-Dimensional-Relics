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
        .scene("build", "", (scene, util) => {

        })
    e.create("ad_astra:tier_2_rocket")
        .scene("build", "", (scene, util) => {

        })
    e.create("ad_astra:tier_3_rocket")
        .scene("build", "", (scene, util) => {

        })
    e.create("ad_astra:tier_4_rocket")
        .scene("build", "", (scene, util) => {

        })
})
