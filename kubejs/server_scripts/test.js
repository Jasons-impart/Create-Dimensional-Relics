BlockEvents.leftClicked(e=>{
    //挖掘泥土产生粒子（测试）
    if (e.block.id == 'minecraft:dirt') {
        e.server.runCommandSilent(`particle minecraft:dragon_breath ${e.block.x} ${e.block.y} ${e.block.z} 0.5 0.5 0.5 0.001 25`)
    }
})