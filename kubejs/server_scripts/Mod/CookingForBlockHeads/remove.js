ServerEvents.recipes(e => {
    remove_recipes_mod(e, ["cookingforblockheads"])
    e.shaped("cookingforblockheads:sink", [
        "AAA",
        "BCB",
        "BBB"
    ], {
        A: "#forge:ingots/iron",
        B: "#minecraft:terracotta",
        C: "#forge:buckets/water"
    })
})
