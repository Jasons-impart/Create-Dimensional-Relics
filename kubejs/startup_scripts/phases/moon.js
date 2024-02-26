/**
 * moon.js - Define phase
 */
StartupEvents.postInit(e => {
    GamePhase.addDimensionRestriction("moon", "ad_astra:moon")
    GamePhase.addDimensionRestriction("moon", "ad_astra:moon_orbit")
})
