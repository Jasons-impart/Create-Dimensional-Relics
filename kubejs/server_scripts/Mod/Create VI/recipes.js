ServerEvents.recipes(e =>{
    e.custom(
        {
            "type":"vintageimprovements:centrifugation",
            "ingredients": [ 
                {
                  "fluid": "createindustry:air",
                  "amount": 1000
                }
            ],
            "results": [
                {
                    "fluid": "createdimensionalrelics:nitrogen",
                    "amount": 800
                },
                {
                    "fluid": "ad_astra:oxygen",
                    "amount": 200
                }
            ],
            "processingTime": 1000
        }
    )
})