// 增加光辉石和暗影钢合成显示
StartupEvents.postInit(e => {
    const $MysteriousItemConversionCategory = Java.loadClass("com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory")
    const $ConversionRecipe = Java.loadClass("com.simibubi.create.compat.jei.ConversionRecipe")
    $MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create(Item.of("create:chromatic_compound"), Item.of("create:refined_radiance")))
    $MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create(Item.of("create:chromatic_compound"), Item.of("create:shadow_steel")))
})
