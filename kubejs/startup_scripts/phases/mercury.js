/**
 * mercury.js - Define phase
 */
StartupEvents.postInit(e => {
    GamePhase.addDimensionRestriction("mercury", "ad_astra:mercury")
    GamePhase.addDimensionRestriction("mercury", "ad_astra:mercury_orbit")
})
