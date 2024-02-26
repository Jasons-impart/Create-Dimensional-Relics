/**
 * venus.js - Define phase
 */
StartupEvents.postInit(e => {
    GamePhase.addDimensionRestriction("venus", "ad_astra:venus")
    GamePhase.addDimensionRestriction("venus", "ad_astra:venus_orbit")
})
