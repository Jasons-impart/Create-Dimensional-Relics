const backpacks = [
    "",
    "iron_",
    "gold_",
    "diamond_",
    "netherite_",
]
backpacks.forEach(prefix => {
    BlockEvents.placed("sophisticatedbackpacks:" + prefix + "backpack", e => {
        e.player.inventoryMenu.broadcastFullState()
        e.cancel()
    })
})
