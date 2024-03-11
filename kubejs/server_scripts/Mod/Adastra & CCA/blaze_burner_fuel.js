ServerEvents.recipes(e => {
    // 添加燃油和凌冰燃油成为烈焰人燃烧室的燃料
    e.custom({
        "type": "createaddition:liquid_burning",
        "input": {
            "fluid": "ad_astra:fuel",
            "amount": 1000
        },
        "burnTime": 20000,
    })
    e.custom({
        "type": "createaddition:liquid_burning",
        "input": {
            "fluid": "ad_astra:cryo_fuel",
            "amount": 1000
        },
        "burnTime": 36000,
        "superheated": true
    })
})
