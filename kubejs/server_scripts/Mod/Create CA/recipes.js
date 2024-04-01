ServerEvents.recipes(e =>{
    // 电容合成
    e.remove({id:"createaddition:crafting/capacitor_1"})
    e.remove({id:"createaddition:crafting/capacitor_2"})
    let iner = "createaddition:incompleted_capacitor"
    e.recipes.create.sequenced_assembly("createaddition:capacitor", "createindustry:aluminum_sheet", [
        e.recipes.create.pressing(iner, iner),
        e.recipes.create.deploying(iner, [iner, "minecraft:paper"]),
        e.recipes.create.deploying(iner, [iner, "createindustry:aluminum_sheet"]),
        e.recipes.create.pressing(iner, iner)
    ])
        .transitionalItem(iner)
        .loops(1)
        .id("createaddition:crafting/capacitor")
    e.shaped("createaddition:portable_energy_interface",[
        "AB ",
        "C  ",
        "   "
    ], {
        A:"create:brass_casing",
        B:"create_new_age:energiser_t1",
        C:"create_new_age:copper_wire"
    })
        .id("createaddition:crafting/portable_energy_interface")
})