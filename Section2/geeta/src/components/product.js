const ProductData=[
    {
        name: "OnePlus Nord 2 5G",
        price: 34999,
        reviews: 63030,
        rating:4.7,
        image:"https://m.media-amazon.com/images/I/71D8xt91+VL._SX679_.jpg",
    },
    {
        name: "Apple iPhone 12",
        price: 34999,
        reviews: 63030,
        rating:4.7,
        image:"data:image/png;base64,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",
    },
    {
        name: "OnePlus Nord 2 5G",
        price: 34999,
        reviews: 63030,
        rating:4.7,
        image:"https://m.media-amazon.com/images/I/71D8xt91+VL._SX679_.jpg",
    
    },
    {
        name: "Apple iPhone 12",
        price: 34999,
        reviews: 63030,
        rating:4.7,
        image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQKje1oO-bgRAYtYM2WWm2zoesSVTQJQTM89Ku5ZKgi_fFZ4s1zDfe9mdhvUqpgwKNWswjkLWjMjg&usqp=CAc",
    },
];

export default ProductData;