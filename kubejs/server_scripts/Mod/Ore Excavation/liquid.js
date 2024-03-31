ServerEvents.recipes(e => {
    // 石油开采
    e.recipes.createoreexcavation.extracting("ad_astra:oil 100", "{\"text\":\"富石油层\"}", 100, 1500)
        .biomeWhitelist("kjs:has_oil")
        .id("createoreexcavation_kjs:oil")
        .drill("createoreexcavation:diamond_drill")
        .stress(512)
        .veinSize(3, 8.5)
    // 凛冰燃油开采
    e.recipes.createoreexcavation.extracting("ad_astra:cryo_fuel 100", "{\"text\":\"富凛冰石油层\"}", 100, 1500)
        .biomeWhitelist("kjs:has_cryo_fuel")
        .id("createoreexcavation_kjs:cryo_fuel_oil")
        .drill("createoreexcavation:netherite_drill")
        .stress(1024)
        .veinSize(3, 8.5)
})

ServerEvents.tags("minecraft:worldgen/biome", e => {
    e.add("kjs:has_cryo_fuel", "ad_astra:glacio_ice_peaks")
})
