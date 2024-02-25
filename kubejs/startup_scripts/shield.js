const shield = Java.loadClass('net.minecraft.world.item.ShieldItem')//原版盾牌
const Prop = Java.loadClass('net.minecraft.world.item.Item$Properties')//我不知道
const $KubeJS = Java.loadClass('dev.latvian.mods.kubejs.KubeJS')//在后面可以把物品添加到kubejs的创造模式物品栏
const Kubejsregistry = Java.loadClass('dev.latvian.mods.kubejs.registry.KubeJSRegistries')//我不知道
const ItemProperties = Java.loadClass('net.minecraft.client.renderer.item.ItemPropertyFunction')//渲染物品，这里没用到，全是黑紫方块

const defProperties = new Prop().tab($KubeJS.tab)//让后面的物品都在kubejs的创造模式物品栏

StartupEvents.registry('item', event => {
    function shieldregistry(name, defaultDurability) {//方便后面注册物品的函数
        defProperties.defaultDurability(defaultDurability)//设置默认耐久
        event.createCustom(name, () => {
            let item = new shield(defProperties)//注册
            return item
        })
    }
    shieldregistry('kubejs:space_alloyed_shield',3000)
})