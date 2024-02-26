/**
 * glacio.js - Define phase
 */
StartupEvents.postInit(e => {
    GamePhase.addDimensionRestriction("glacio", "ad_astra:glacio")
    GamePhase.addDimensionRestriction("glacio", "ad_astra:glacio_orbit")
})
