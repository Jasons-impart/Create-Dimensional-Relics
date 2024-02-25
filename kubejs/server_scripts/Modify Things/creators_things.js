ItemEvents.rightClicked(e => {
    const Prizelist = [
        "芭芭拉",
        "迪卢克",
        "龙王"
    ]
    if (e.player.mainHandItem == "createdelight:liwus_intertwined_fate") {
        e.server.runCommandSilent(`title @p actionbar "§6抽中了${Prizelist[Utils.getRandom().nextInt(3)]}"`)
        e.player.swing()
        e.player.mainHandItem.count--
        e.player.block.popItem("*")
    }
})
