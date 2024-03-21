/**
 * Devour.js - Define phase
 */
StartupEvents.postInit(e => {
    GamePhase.addDimensionRestriction("Devour", "ad_astra:venus")
    GamePhase.addDimensionRestriction("Devour", "ad_astra:venus_orbit")
})
