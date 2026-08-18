const orders = [
    {
        id: "20360685",
        date: "14 Aug, 2026",

        products: [
            {
                id: 1,
                name: "Cotton Linen: Sky Blue",
                category: "Cotton Linen Shirts",
                size: "M",
                quantity: 1,
                price: 1399,
                image: "/images/products/shirt-1.jpg",
            },
        ],

        status: "In-Transit",

        courier: {
            partner: "Delhivery NDD",
            trackingId: "541741031057394",
        },

        timeline: [
            {
                title: "Order Placed",
                description: "",
                completed: true,
            },
            {
                title: "Shipped",
                description:
                    "Courier Partner: Delhivery NDD | Tracking ID: 541741031057394",
                completed: true,
            },
            {
                title: "In-Transit",
                description:
                    "Our courier partner attempted the delivery but it was failed. Please check your email/WhatsApp for the next step",
                completed: true,
                track: true,
            },
            {
                title: "Out For Delivery",
                description: "",
                completed: false,
            },
            {
                title: "Delivered",
                description: "",
                completed: false,
            },
        ],
    },

    {
        id: "20360686",
        date: "15 Aug, 2026",

        products: [
            {
                id: 2,
                name: "Classic White Shirt",
                category: "Cotton Shirts",
                size: "L",
                quantity: 1,
                price: 1599,
                image: "/images/products/shirt-2.jpg",
            },
        ],

        status: "Shipped",

        courier: {
            partner: "Delhivery",
            trackingId: "541741031057395",
        },

        timeline: [
            {
                title: "Order Placed",
                description: "",
                completed: true,
            },
            {
                title: "Shipped",
                description:
                    "Courier Partner: Delhivery | Tracking ID: 541741031057395",
                completed: true,
            },
            {
                title: "In-Transit",
                description: "",
                completed: false,
            },
            {
                title: "Out For Delivery",
                description: "",
                completed: false,
            },
            {
                title: "Delivered",
                description: "",
                completed: false,
            },
        ],
    },
];

export default orders;