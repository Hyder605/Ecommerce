export const productSanity = {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "title",
            title: "Title for Product",
            type: "string"
        },
        {
            name: "price",
            title: "Price for Product",
            type: "number"
        },

        {
            name: 'category',
            title: "Prodcuct category",
            type: 'reference',
            to: [
                {
                    type: "category"
                }
            ]
        },
        {
            name: "front_image",
            title: "Front View Image",
            type: "image",
           
        },
        {
            name: "back_image",
            title: "Back View Image",
            type: "image",
           
        },
        {
            name: "side_image",
            title: "Side View Image",
            type: "image",
           
        },
    ]

}