/**
 * end.js - Define phase
 */
StartupEvents.postInit(e => {
    GamePhase.addDimensionRestriction("end", "minecraft:the_end")
})
