ServerEvents.recipes(e => {
     // 替换配方：流体管道
     e.shaped("8x pipez:fluid_pipe", [
        "AAA",
        "CBC",
        "AAA"
    ], {
        A: "alloyed:steel_sheet",
        B: "'minecraft:redstone'",
        C: "create:fluid_pipe"
    })
        .id("pipez:fluid_pipe")
    // 替换配方：物品管道
    e.shaped("8x pipez:item_pipe", [
        "AAA",
        "CBC",
        "AAA"
    ], {
        A: "alloyed:steel_sheet",
        B: "'minecraft:redstone'",
        C: "minecraft:dropper"
    })
        .id("pipez:item_pipe")
    // 替换配方：能量管道
    e.shaped("8x pipez:energy_pipe", [
        "AAA",
        "CBC",
        "AAA"
    ], {
        A: "alloyed:steel_sheet",
        B: "'minecraft:redstone'",
        C: "create_new_age:copper_wire"
    })
        .id("pipez:energy_pipe")
    // 替换配方：气体管道
    e.shaped("8x pipez:gas_pipe", [
        "AAA",
        "CBC",
        "AAA"
    ], {
        A: "alloyed:steel_sheet",
        B: "'minecraft:redstone'",
        C: "mekanism:alloy_infused"
    })
        .id("pipez:gas_pipe")
})       
