ServerEvents.recipes(event => {
    // 远古残骸开采
    event.recipes.createoreexcavation.drilling("minecraft:ancient_debris", "{\"text\":\"远古残骸\"}", 3, 3000)
        .veinSize(3, 8.5)
        .biomeWhitelist("minecraft:is_nether")
        .id("createoreexcavation_kjs:ancient_debris")
        .drill("createoreexcavation:netherite_drill")
        .fluid("minecraft:lava 1000")
        .stress(1024)
})

// biometags添加
ServerEvents.tags("minecraft:worldgen/biome", e => {
    e.add("kjs:has_oil", ["deeperdarker:overcast_columns", "deeperdarker:deeplands", "deeperdarker:echoing_forest"])
})

// ServerEvents.recipes(event => {
//     // 青金石开采
//     event.recipes.createoreexcavation.drilling("minecraft:'minecraft:lapis_ore'", "{\"text\":\"青金石\"}", 3, 3000)
//         .veinSize(3, 8.5)
//         .biomeWhitelist("minecraft:is_overworld")
//         .id("createoreexcavation_kjs:'minecraft:lapis_ore'")
//         .drill("createoreexcavation:overworld_drill")
//         .fluid("minecraft:lava 1000")
//         .stress(1024)
// })