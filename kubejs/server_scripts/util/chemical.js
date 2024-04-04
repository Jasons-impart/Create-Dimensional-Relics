// priority: 100

/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } inputitem 
 * @param { string } inputfluid
 * @param { string } outputitem 
 */
function washing_recipe(event, inputitem, inputfluid, outputitem) {
    event.recipes.create.mixing(
        [
            outputitem,
            Fluid.of(inputfluid)
        ],
        [
            inputitem,
            Fluid.of(inputfluid)
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
        block_in: inputfluid,
        time: 5
    })
}

/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } inputitem 
 * @param { string } inputfluid
 * @param { string } outputfluid 
 */
function dissolve_recipe(event, inputitem, inputfluid, outputfluid) {
    event.recipes.create.mixing(
        [
            Fluid.of(outputfluid, 1000)
        ],
        [
            inputitem,
            Fluid.of(inputfluid, 1000)
        ]
    )
    event.custom({
        type: "lychee:item_inside",
        item_in: {
            item: inputitem
        },
        block_in: inputfluid,
        post: [
            {
                type: "place",
                block: outputfluid
            }
        ]
    })
}

/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } inputfluid 
 * @param { string } outputitem
 * @param { string } outputfluid 
 */
function extract_item_from_fluid_recipe(event, inputfluid, outputitem, outputfluid) {
    event.custom({
        type: "vintageimprovements:pressurizing",
        secondaryFluidResults: 0,
        heatRequirement: "heated",
        ingredients: [
            {
                fluid: inputfluid,
                amount: 1000
            }
        ],
        results: [
            {
                item: outputitem,
            },
            {
                fluid: outputfluid,
                amount: 1000
            }
        ],
        processingTime: 300
    })
}

/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } item 
 * @param { string } fluid
 * @param { string } dissolvent 
 */
function dissolve_extract_recipe(event, item, fluid, dissolvent) {
    dissolve_recipe(event, item, dissolvent, fluid)
    extract_item_from_fluid_recipe(event, fluid, item, dissolvent)
}
