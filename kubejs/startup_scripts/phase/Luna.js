/**
 * Luna.js - Define phase
 */
StartupEvents.postInit(e => {
    GamePhase.addDimensionRestriction("Luna", "ad_astra:moon")
    GamePhase.addDimensionRestriction("Luna", "ad_astra:moon_orbit")

    GamePhase.addDimensionRestriction("LunaFood", "ad_astra:moon")
    GamePhase.addDimensionRestriction("LunaFood", "ad_astra:moon_orbit")
})
