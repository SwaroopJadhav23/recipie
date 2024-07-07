const recipes = [
    {
        name: "Spaghetti Bolognese",
        image: "https://example.com/spaghetti.jpg",
        ingredients: ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic"],
        instructions: "Cook spaghetti. In another pan, cook beef with onion and garlic. Add tomato sauce. Mix with spaghetti."
    },
    {
        name: "Caesar Salad",
        image: "https://example.com/caesar_salad.jpg",
        ingredients: ["romaine lettuce", "croutons", "parmesan cheese", "Caesar dressing", "lemon juice"],
        instructions: "Tear lettuce into bite-size pieces. Add croutons, parmesan cheese, and Caesar dressing. Squeeze lemon juice over the top and toss."
    },
    {
        name: "Grilled Salmon",
        image: "https://example.com/grilled_salmon.jpg",
        ingredients: ["salmon", "olive oil", "lemon", "garlic", "herbs"],
        instructions: "Marinate salmon. Grill with olive oil, lemon, garlic, and herbs until cooked."
    },
    {
        name: "Beef Stroganoff",
        image: "https://example.com/beef_stroganoff.jpg",
        ingredients: ["beef", "mushrooms", "onion", "sour cream", "paprika"],
        instructions: "Cook beef with mushrooms and onion. Add sour cream and paprika. Serve over noodles."
    },
    {
        name: "Lamb Curry",
        image: "https://example.com/lamb_curry.jpg",
        ingredients: ["lamb", "onion", "tomato", "ginger", "spices"],
        instructions: "Cook lamb with onion, tomato, ginger, and spices until tender. Serve hot with rice."
    },
    {
        name: "Shrimp Scampi",
        image: "https://example.com/shrimp_scampi.jpg",
        ingredients: ["shrimp", "garlic", "butter", "lemon", "parsley"],
        instructions: "Sauté shrimp with garlic and butter. Add lemon and parsley. Serve over pasta."
    },
    {
        name: "Chicken Alfredo",
        image: "https://example.com/chicken_alfredo.jpg",
        ingredients: ["chicken", "fettuccine", "cream", "parmesan cheese", "garlic"],
        instructions: "Cook chicken. Boil fettuccine. Mix cream, parmesan cheese, and garlic. Combine with chicken and pasta."
    },
    {
        name: "Veggie Stir Fry",
        image: "https://example.com/veggie_stir_fry.jpg",
        ingredients: ["mixed vegetables", "tofu", "soy sauce", "ginger", "sesame oil"],
        instructions: "Stir fry mixed vegetables and tofu with soy sauce, ginger, and sesame oil until vegetables are tender."
    },
    {
        name: "Pasta Primavera",
        image: "https://example.com/pasta_primavera.jpg",
        ingredients: ["pasta", "assorted vegetables", "olive oil", "garlic", "parmesan cheese"],
        instructions: "Boil pasta. Sauté assorted vegetables with olive oil and garlic. Mix with pasta and parmesan cheese."
    },
    {
        name: "Beef Tacos",
        image: "https://example.com/beef_tacos.jpg",
        ingredients: ["ground beef", "taco shells", "lettuce", "tomato", "cheddar cheese"],
        instructions: "Cook ground beef. Fill taco shells with beef, lettuce, tomato, and cheddar cheese."
    },
    {
        name: "Chicken Curry",
        image: "https://example.com/chicken_curry.jpg",
        ingredients: ["chicken", "curry paste", "coconut milk", "potato", "bell pepper"],
        instructions: "Cook chicken with curry paste. Add coconut milk, potato, and bell pepper. Simmer until chicken is tender."
    },
    {
        name: "Seafood Paella",
        image: "https://example.com/seafood_paella.jpg",
        ingredients: ["rice", "shrimp", "mussels", "chorizo", "bell pepper"],
        instructions: "Sauté chorizo with bell pepper. Add rice and broth. Arrange shrimp, mussels, and cook until rice is tender."
    },
    {
        name: "Eggplant Parmesan",
        image: "https://example.com/eggplant_parmesan.jpg",
        ingredients: ["eggplant", "mozzarella cheese", "tomato sauce", "breadcrumbs", "parmesan cheese"],
        instructions: "Bread eggplant slices with breadcrumbs. Layer with mozzarella cheese and tomato sauce. Bake until cheese melts."
    },
    {
        name: "Beef Burritos",
        image: "https://example.com/beef_burritos.jpg",
        ingredients: ["ground beef", "tortillas", "rice", "black beans", "salsa"],
        instructions: "Cook ground beef. Fill tortillas with beef, rice, black beans, and salsa. Roll up and serve."
    },
    {
        name: "Spinach Lasagna",
        image: "https://example.com/spinach_lasagna.jpg",
        ingredients: ["lasagna noodles", "spinach", "ricotta cheese", "marinara sauce", "mozzarella cheese"],
        instructions: "Boil lasagna noodles. Layer with spinach, ricotta cheese, marinara sauce, and mozzarella cheese. Bake until bubbly."
    },
    {
        name: "Honey Soy Chicken",
        image: "https://example.com/honey_soy_chicken.jpg",
        ingredients: ["chicken thighs", "soy sauce", "honey", "garlic", "ginger"],
        instructions: "Marinate chicken thighs with soy sauce, honey, garlic, and ginger. Grill or bake until chicken is cooked through."
    },
    {
        name: "Pesto Pasta",
        image: "https://example.com/pesto_pasta.jpg",
        ingredients: ["pasta", "basil pesto", "cherry tomatoes", "parmesan cheese", "pine nuts"],
        instructions: "Boil pasta. Toss with basil pesto, halved cherry tomatoes, parmesan cheese, and toasted pine nuts."
    },
    {
        name: "Beef Wellington",
        image: "https://example.com/beef_wellington.jpg",
        ingredients: ["beef tenderloin", "puff pastry", "mushrooms", "prosciutto", "dijon mustard"],
        instructions: "Sear beef tenderloin. Wrap with prosciutto and mushrooms. Coat with dijon mustard. Wrap in puff pastry and bake until golden."
    },
    {
        name: "Chicken Piccata",
        image: "https://example.com/chicken_piccata.jpg",
        ingredients: ["chicken breasts", "lemon", "capers", "white wine", "butter"],
        instructions: "Dredge chicken breasts in flour. Sauté with lemon, capers, and white wine. Finish with butter sauce."
    },
    {
        name: "Teriyaki Salmon",
        image: "https://example.com/teriyaki_salmon.jpg",
        ingredients: ["salmon fillets", "teriyaki sauce", "sesame seeds", "green onions", "rice"],
        instructions: "Marinate salmon fillets in teriyaki sauce. Grill or bake until salmon is cooked through. Sprinkle with sesame seeds and green onions. Serve with rice."
    },
    {
        name: "Vegetable Curry",
        image: "https://example.com/vegetable_curry.jpg",
        ingredients: ["mixed vegetables", "curry paste", "coconut milk", "rice", "cilantro"],
        instructions: "Cook mixed vegetables with curry paste and coconut milk. Serve over rice, garnished with cilantro."
    },
    {
        name: "Aloo Gobi",
        image: "https://example.com/aloo_gobi.jpg",
        ingredients: ["potato", "cauliflower", "onion", "tomato", "spices"],
        instructions: "Sauté potatoes and cauliflower with onion, tomato, and spices until tender. Serve hot."
    },
    {
        name: "Paneer Tikka Masala",
        image: "https://example.com/paneer_tikka_masala.jpg",
        ingredients: ["paneer", "bell pepper", "onion", "tomato", "cream"],
        instructions: "Grill paneer, bell pepper, and onion. Cook with tomato and cream. Serve hot with naan or rice."
    },
    {
        name: "Palak Paneer",
        image: "https://example.com/palak_paneer.jpg",
        ingredients: ["paneer", "spinach", "cream", "spices"],
        instructions: "Cook spinach. Add paneer, cream, and spices. Simmer until flavors blend."
    },
    {
        name: "Masala Dosa",
        image: "https://example.com/masala_dosa.jpg",
        ingredients: ["rice", "urad dal", "potato", "spices"],
        instructions: "Make batter from rice and urad dal. Spread on pan. Add potato filling with spices. Serve hot."
    },
    {
        name: "Chana Masala",
        image: "https://example.com/chana_masala.jpg",
        ingredients: ["chickpeas", "onion", "tomato", "ginger", "spices"],
        instructions: "Cook chickpeas with onion, tomato, ginger, and spices until tender. Serve hot."
    },
    {
        name: "Mango Lassi",
        image: "https://example.com/mango_lassi.jpg",
        ingredients: ["mango", "yogurt", "milk", "sugar", "cardamom"],
        instructions: "Blend mango, yogurt, milk, sugar, and cardamom until smooth. Serve chilled."
    },
    {
        name: "Tiramisu",
        image: "https://example.com/tiramisu.jpg",
        ingredients: ["ladyfingers", "mascarpone cheese", "coffee", "cocoa powder", "rum"],
        instructions: "Layer ladyfingers with mascarpone mixture soaked in coffee and rum. Dust with cocoa powder. Chill before serving."
    },
    {
        name: "Chocolate Fondue",
        image: "https://example.com/chocolate_fondue.jpg",
        ingredients: ["chocolate", "cream", "fruit", "marshmallows", "cookies"],
        instructions: "Melt chocolate with cream. Serve with fruit, marshmallows, and cookies for dipping."
    },
    {
        name: "Apple Pie",
        image: "https://example.com/apple_pie.jpg",
        ingredients: ["apples", "pie crust", "sugar", "cinnamon", "lemon juice"],
        instructions: "Peel and slice apples. Mix with sugar, cinnamon, and lemon juice. Fill pie crust. Bake until golden."
    },
    {
        name: "Banana Bread",
        image: "https://example.com/banana_bread.jpg",
        ingredients: ["bananas", "flour", "sugar", "butter", "baking soda"],
        instructions: "Mash bananas. Mix with flour, sugar, butter, and baking soda. Bake until golden brown."
    },
    {
        name: "Blueberry Pancakes",
        image: "https://example.com/blueberry_pancakes.jpg",
        ingredients: ["pancake mix", "blueberries", "maple syrup", "butter", "eggs"],
        instructions: "Mix pancake mix with blueberries and eggs. Cook on griddle. Serve with maple syrup and butter."
    },
    {
        name: "Eggs Benedict",
        image: "https://example.com/eggs_benedict.jpg",
        ingredients: ["eggs", "English muffins", "ham", "hollandaise sauce", "butter"],
        instructions: "Poach eggs. Toast English muffins. Top with ham, eggs, and hollandaise sauce. Serve hot."
    }
];

// Example usage:
console.log(recipes[0]); // Print details of the first recipe
