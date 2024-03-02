// **extradelight的bug修复
ServerEvents.recipes(e => {
    // 马铃薯
    e.recipes.create.deploying("extradelight:grated_potato", [
        "#forge:crops/potato",
        "extradelight:grater"
    ])
        .keepHeldItem()
    // 面包
    e.recipes.create.deploying("4x extradelight:breadcrumbs", [
        "#forge:bread",
        "extradelight:grater"
    ])
        .keepHeldItem()
    // 玉米面包
    e.recipes.create.deploying(["#forge:bowls", "4x extradelight:breadcrumbs"], [
        "extradelight:cornbread_feast",
        "extradelight:grater"
    ])
        .keepHeldItem()
    // 面包片
    e.recipes.create.deploying("extradelight:breadcrumbs", [
        "#forge:bread/sliced",
        "extradelight:grater"
    ])
        .keepHeldItem()
    // 胡萝卜
    e.recipes.create.deploying("extradelight:grated_carrot", [
        "#forge:crops/carrot",
        "extradelight:grater"
    ])
        .keepHeldItem()
})

ServerEvents.tags("item", e => {
    // 香蕉面包增加extradelight兼容
    e.add("forge:bread", [
        "neapolitan:banana_bread"
    ])
    // 玉米面包增加extradeligt兼容
    e.add("forge:bread/sliced", [
        "extradelight:cornbread"
    ])
})
