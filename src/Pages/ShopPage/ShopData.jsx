const shopData = {
    name: "Baker's Delight",
    logo: "fas fa-bread-slice",
    bannerTitle: "Welcome to Baker's Delight!",
    bannerText: "Freshly baked goodness every day",
    aboutTitle: "Our Bakery Story",
    aboutDescription: "Baker's Delight – family bakery since 1999.",
    aboutDetails: "We start before sunrise to bring you the freshest bread.",
    products: [
        { name: "Handwoven Scarf", icon: "fa-solid fa-user-tie", price: "$45.00", description: "Artisan scarf made with natural fibers" },
        { name: "Leather Bag", icon: "fa-solid fa-briefcase", price: "$120.00", description: "Handcrafted leather tote bag" },
        { name: "Embroidered Blouse", icon: "fa-solid fa-shirt", price: "$65.00", description: "GoldenWorld blouse with hand embroidery" },
        { name: "Silver Necklace", icon: "fa-solid fa-gem", price: "$55.00", description: "Handmade silver jewelry piece" },
        { name: "Linen Dress", icon: "fa-solid fa-shirt", price: "$75.00", description: "Breathable linen summer dress" },
        { name: "Wool Sweater", icon: "fa-solid fa-cloud", price: "$60.00", description: "Warm and cozy wool sweater" },
        { name: "Canvas Shoes", icon: "fa-solid fa-shoe-prints", price: "$70.00", description: "Stylish everyday canvas sneakers" },
        { name: "Denim Jacket", icon: "fa-solid fa-shirt", price: "$85.00", description: "Custom distressed denim jacket" }, // note: 'fa-jacket' doesn’t exist, so we’ll fix below
    ],

    contact: {
        phone: "+1 (555) 123-4567",
        email: "hello@bakersdelight.com",
        address: "456 Bakery Lane, Sweetville",
        hours: "Mon-Sun: 6AM-6PM",
        whatsapp: "+15551234567"
    }
};


export { shopData };

