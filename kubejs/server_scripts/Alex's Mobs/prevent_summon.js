EntityEvents.spawned(e =>{
    //苍蝇生成
    if(e.entity.type == 'alexsmobs:fly'){
        if(e.entity.level.dimension != 'minecraft:overworld'){
            e.cancel()
        }
    }
    //蜈蚣生成
    if (e.entity.type == 'alexsmobs:centipede_head') {
        if (e.entity.level.dimension != 'minecraft:the_end') {
            e.cancel()
        }
    }
    //轻语灵生成
    if (e.entity.type == 'alexsmobs:murmur') {
        if (e.entity.level.dimension != 'minecraft:the_end') {
            e.cancel()
        }
    }
})