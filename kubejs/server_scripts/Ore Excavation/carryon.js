//矿藏搬运器
ItemEvents.rightClicked(e=>{
    if (e.player.mainHandItem == 'kubejs:mine_carryon') {
        e.player.mainHandItem.count --
        e.player.swing()
        let {x, y, z} = e.player
        e.server.runCommandSilent(`coe setvein ${parseInt(x)} ${parseInt(y)} ${parseInt(z)} createoreexcavation_kjs:ancient_debris`)
        e.server.runCommandSilent('title @p actionbar "§6成功产生远古残骸矿藏"')        
    }
})