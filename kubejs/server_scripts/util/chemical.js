// priority: 100

/**
 * @param { Internal.RecipesEventJS } event 
 * @param { Internal.ItemStack } inputitem 
 * @param { Internal.FluidStack } inputfluid 
 * @param { Internal.ItemStack } outputitem 
 */
function washing_recipe(event, inputitem, inputfluid, outputitem) {
    event.recipes.create.mixing(
        [
            outputitem,
            inputfluid
        ],
        [
            inputitem,
            inputfluid
        ]
    )
    event.custom({
        type: "lychee:item_inside",
        post: [
            {
                type: "drop_item",
                item: outputitem
            }
        ],
        item_in: [
            {
                item: inputitem
            }
        ],
        block_in: inputfluid.arch$registryName(),
        time: 5
    })
}
