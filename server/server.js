const express = require("express");
const app = express();
const port = 8000;




const menu = [
    {
        id:234,
        categoryName: "appetizers",
        categoryItems: [
            {
                id:33,
                name: "Fried Mozzarella",
                description: "Fried mozzarella cheese with marinara sauce.",
                price: 9.49
            }
        ] 
    },
    {
        id:857,
        categoryName: "entrees",
        categoryItems: [
        {
            id:56,
            name: "Chicken Alfredo",
            description: "Creamy alfredo sauce made from scratch with ingredients like parmesan, cream, garlic and butter, served with fettuccine pasta and topped with sliced grilled chicken.",
            price: 20.99
        },
        {
            id:86,
            name: "Chicken Alfredo",
            description: "Creamy alfredo sauce made from scratch with ingredients like parmesan, cream, garlic and butter, served with fettuccine pasta and topped with sliced grilled chicken.",
            price: 20.99
        }
        ]
    },
    {
        id: 563,
        categoryName: "pastas",
        categoryItems: [
        {
            id:68,
            name: "Chicken and Shrimp Carbonara",
            description: "Sautéed seasoned chicken, shrimp and spaghetti tossed in a creamy sauce with bacon and roasted red peppers.",
            price: 22.99
        }
        ]
    },
    {
        id: 735,
        categoryName: "desserts",
        categoryItems: [
        {
            id:20,
            name: "Tiramisu",
            description: "The classic Italian dessert. A layer of creamy custard set atop espresso-soaked ladyfingers.",
            price: 9.79
        }
        ]
    },
    {
        id: 308,
        categoryName: "drinks",
        categoryItems: [
        {
            id:83,
            name: "Raspberry Lemonade",
            price: 4.39
        }
        ]
    }
];

app.get("/api/menu", (req, res) => {
    res.json({ menu});
});










app.listen(port, () => console.log(`Listening on port: ${port}`));