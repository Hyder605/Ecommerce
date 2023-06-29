export const category = {
    name: "category",
    type: "document",
    title: "Product Category",
    fields: [
        {
            name:'name',
            type:'string',
            title:"Product category"
        },
        {
            name:'slug',
            type:'string',
            title:"Product slug"
        },
        {
            name: "image",
            title: "Image for Category",
            type: "image",
           
        },
    ]
}