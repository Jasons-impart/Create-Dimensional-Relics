ServerEvents.recipes(e=>{
    e.recipes.create.mixing(
        ["alloyed:bronze_ingot"],
        ["minecraft:copper_ingot", "3x mekanism:nugget_tin"]
    ).id("alloyed:mixing/bronze_ingot").heated()
    e.recipes.create.mixing(
        ["3x alloyed:bronze_ingot"],
        ["3x minecraft:copper_ingot", "mekanism:ingot_tin"]
    ).id("alloyed:mixing/bronze_ingot_x3").heated()
    e.remove({output: "alloyed:steel_ingot"})
    e.remove({output: "alloyed:steel_casing"})
    e.remove({output: "alloyed:steel_block"})
})