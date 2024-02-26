/**
 * nether.js - Define phase
 */
StartupEvents.postInit(e => {
    GamePhase.addDimensionRestriction("nether", "minecraft:the_nether")
})
