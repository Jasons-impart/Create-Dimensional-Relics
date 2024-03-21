/**
 * Nether.js - Define phase
 */
StartupEvents.postInit(e => {
    GamePhase.addDimensionRestriction("Nether", "minecraft:the_nether")
})
