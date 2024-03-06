/**
 * FieryPit.js - Define phase
 */
StartupEvents.postInit(e => {
    GamePhase.addDimensionRestriction("FieryPit", "ad_astra:mercury")
    GamePhase.addDimensionRestriction("FieryPit", "ad_astra:mercury_orbit")
})
