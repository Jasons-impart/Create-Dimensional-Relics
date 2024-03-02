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
})