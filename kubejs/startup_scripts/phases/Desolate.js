/**
 * Desolate.js - Define phase
 */
StartupEvents.postInit(e => {
    GamePhase.addDimensionRestriction("Desolate", "ad_astra:mars")
    GamePhase.addDimensionRestriction("Desolate", "ad_astra:mars_orbit")
})
