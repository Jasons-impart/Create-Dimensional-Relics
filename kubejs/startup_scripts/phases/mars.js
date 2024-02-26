/**
 * mars.js - Define phase
 */
StartupEvents.postInit(e => {
    GamePhase.addDimensionRestriction("mars", "ad_astra:mars")
    GamePhase.addDimensionRestriction("mars", "ad_astra:mars_orbit")
})
