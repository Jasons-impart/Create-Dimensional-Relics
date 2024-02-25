ServerEvents.recipes(e => {
    // 奇迹粉尘合成
    e.recipes.create.mixing(
        ["createdelight:miracle_dust"],
        [
            "aether_redux:veridium_ingot",
            "minecraft:diamond",
            "minecraft:emerald",
            "aether:golden_amber",
            "minecraft:lapis_lazuli",
            "minecraft:amethyst_shard",
            "aether:ambrosium_shard",
            "aether:zanite_gemstone",
            "aether:enchanted_gravitite",
        ]
    )
    // 奇迹剪刀合成
    e.shaped("createdelight:miracle_shear", [
        " A ",
        "A A",
        "BA "
    ], {
        A: "createdelight:miracle_ingot",
        B: "create:precision_mechanism"
    })
    // 奇迹稿合成
    e.recipes.create.mechanical_crafting("createdelight:miracle_pickaxe", [
        " A ",
        "BCB",
        "BDB",
        " D "
    ], {
        A: "create:iron_sheet",
        B: "createdelight:miracle_ingot",
        C: "create:precision_mechanism",
        D: "blaze_rod"
    })
    // 合成奇迹块
    e.custom({
        type: "lychee:block_interacting",
        recipes_id: "createdelight:magical_change",
        item_in: {
            "item": "createdelight:miracle_dust"
        },
        block_in: "create:experience_block",
        post: [{
            type: "place",
            block: "createdelight:miracle_block"
        }]
    })
    e.recipes.create.deploying("createdelight:miracle_block", [
        "create:experience_block",
        "createdelight:miracle_dust"
    ])
    e.recipes.shapeless("createdelight:miracle_block", ["9x createdelight:miracle_ingot"])
    e.recipes.shapeless("9x createdelight:miracle_ingot", ["createdelight:miracle_block"])
})
BlockEvents.rightClicked(e => {
    if (e.player.mainHandItem == "createdelight:miracle_dust" && e.block.id == "create:experience_block") {
        let {
            x,
            y,
            z
        } = e.block
        e.server.runCommandSilent(`particle supplementaries:sugar ${x} ${y + 0.75} ${z} 0.5 0.5 0.5 0.01 65`)
    }
})
// 奇迹系列物品效果
ItemEvents.entityInteracted("createdelight:miracle_shear", (event) => {
    const {
        entity,
        target,
        item,
        hand,
        server
    } = event;
    const colors = Object.keys(Color.DYE);

    function shear() {
        server.runCommandSilent(
            `playsound entity.sheep.shear master @a ${target.x} ${target.y} ${target.z} 1 1`
        );
        target.setSheared(true);
        let i = 1 + Utils.random.nextInt(3),
            j = 0,
            color;

        for (j; j < i; ++j) {
            color = colors[Utils.getRandom()
                .nextInt(16)];
            target.block.popItem(`${color}_wool`);
        }
    }
    if (target.type === "minecraft:sheep" && target.readyForShearing()) {
        shear()
        e.player.tell(`${entity}`)
        item.hurtAndBreak(1, entity, (entityx) => entityx.broadcastBreakEvent(hand))
    }
})
BlockEvents.broken((event) => {
    const {
        entity,
        block
    } = event;

    if (entity.mainHandItem.id === "createdelight:miracle_pickaxe" && block.hasTag("forge:stone")) {
        let color = Object.keys(Color.DYE)[Utils.random.nextInt(16)];
        block.popItem(`${color}_concrete`);
        block.set("air");
        event.cancel()
    }
})
// 奇迹物品tag添加（维修）
ServerEvents.tags("item", e => {
    e.add("createdelight:miracle_item", [
        "createdelight:miracle_dust",
        "createdelight:miracle_ingot"
    ])
})
