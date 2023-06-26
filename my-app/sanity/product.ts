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
          name: 'image',
          type: 'image',
          title: 'Image',
          }
    ]

}