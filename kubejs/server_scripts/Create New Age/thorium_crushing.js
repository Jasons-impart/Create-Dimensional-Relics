ServerEvents.recipes(e => {
    // 钍粉碎成放射性钍
    e.recipes.create.crushing([
        Item.of("create_new_age:radioactive_thorium")
            .withChance(0.03),
        Item.of("minecraft:iron_nugget")
            .withChance(0.70),
        Item.of("create:experience_nugget")
            .withChance(0.75)
    ], "create_new_age:thorium")
        .id("create_new_age:thorium/thorium_crushing")
    // 钍矿石粉碎
    e.recipes.create.crushing([
        "3x create_new_age:thorium",
        Item.of("create_new_age:thorium")
            .withChance(0.3)
            .withRolls(3),
        "minecraft:cobblestone"
    ], "create_new_age:thorium_ore")
})
