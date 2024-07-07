
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
        ingredients: ["chickpeas", "tomato", "onion", "ginger", "spices"],
        instructions: "Cook chickpeas with tomato, onion, ginger, and spices until thickened. Serve hot."
    },
    {
        name: "Vegetable Biryani",
        image: "https://example.com/vegetable_biryani.jpg",
        ingredients: ["rice", "mixed vegetables", "spices", "yogurt", "saffron"],
        instructions: "Cook rice. Sauté mixed vegetables with spices. Layer rice and vegetables. Garnish with yogurt and saffron."
    },
    {
        name: "Rasgulla",
        image: "https://example.com/rasgulla.jpg",
        ingredients: ["milk", "sugar", "lemon juice", "rose water"],
        instructions: "Boil milk. Add lemon juice to curdle. Strain and knead to make chenna. Form into balls. Boil in sugar syrup with rose water until fluffy."
    },
    {
        name: "Gulab Jamun",
        image: "https://example.com/gulab_jamun.jpg",
        ingredients: ["milk powder", "flour", "butter", "sugar", "cardamom"],
        instructions: "Mix milk powder, flour, and butter. Knead with water into dough. Form into balls. Fry until golden. Soak in sugar syrup with cardamom."
    },
    {
        name: "Kheer",
        image: "https://example.com/kheer.jpg",
        ingredients: ["rice", "milk", "sugar", "cardamom", "nuts"],
        instructions: "Boil rice with milk until thickened. Add sugar, cardamom, and nuts. Serve chilled or warm."
    },
    {
        name: "Rasmalai",
        image: "https://example.com/rasmalai.jpg",
        ingredients: ["milk", "sugar", "cardamom", "saffron", "nuts"],
        instructions: "Boil milk. Add lemon juice to curdle. Strain and knead to make chenna. Form into discs. Boil in sugar milk with cardamom and saffron until soft. Garnish with nuts."
    },
    {
        name: "Barfi",
        image: "https://example.com/barfi.jpg",
        ingredients: ["milk powder", "sugar", "ghee", "cardamom", "nuts"],
        instructions: "Mix milk powder, sugar, and ghee. Cook until thickened. Spread into a tray. Garnish with cardamom and nuts. Cut into squares."
    },
    {
        name: "Kalakand",
        image: "https://example.com/kalakand.jpg",
        ingredients: ["milk", "sugar", "cardamom", "nuts"],
        instructions: "Boil milk until thickened. Add sugar and cardamom. Cook until thick. Spread in a tray. Garnish with nuts. Cut into squares."
    },
    {
        name: "Mysore Pak",
        image: "https://example.com/mysore_pak.jpg",
        ingredients: ["gram flour", "sugar", "ghee"],
        instructions: "Roast gram flour in ghee until aromatic. Add sugar syrup. Cook until thickened. Spread in a tray. Cut into pieces once cooled."
    },
    {
        name: "Hakka Noodles",
        image: "https://example.com/hakka_noodles.jpg",
        ingredients: ["noodles", "mixed vegetables", "soy sauce", "garlic", "ginger"],
        instructions: "Boil noodles. Sauté mixed vegetables with soy sauce, garlic, and ginger. Toss with noodles until combined."
    },
    {
        name: "Veg Fried Rice",
        image: "https://example.com/veg_fried_rice.jpg",
        ingredients: ["rice", "mixed vegetables", "soy sauce", "garlic", "spring onions"],
        instructions: "Cook rice. Sauté mixed vegetables with soy sauce, garlic, and spring onions. Mix with cooked rice."
    },
    {
        name: "Gobi Manchurian",
        image: "https://example.com/gobi_manchurian.jpg",
        ingredients: ["cauliflower", "corn flour", "soy sauce", "ginger", "garlic"],
        instructions: "Coat cauliflower with corn flour. Deep fry until crispy. Sauté with soy sauce, ginger, and garlic until coated."
    },
    {
        name: "Chicken Manchurian",
        image: "https://example.com/chicken_manchurian.jpg",
        ingredients: ["chicken", "corn flour", "soy sauce", "ginger", "garlic"],
        instructions: "Coat chicken with corn flour. Deep fry until crispy. Sauté with soy sauce, ginger, and garlic until coated."
    },
    {
        name: "Spaghetti Carbonara",
        image: "https://example.com/spaghetti_carbonara.jpg",
        ingredients: ["spaghetti", "bacon", "egg", "parmesan cheese", "black pepper"],
        instructions: "Boil spaghetti. Sauté bacon until crispy. Mix egg, parmesan cheese, and black pepper. Toss with spaghetti."
    },
    {
        name: "Beef Bourguignon",
        image: "https://example.com/beef_bourguignon.jpg",
        ingredients: ["beef stew meat", "red wine", "carrots", "onion", "mushrooms"],
        instructions: "Sear beef. Sauté carrots, onion, and mushrooms. Add red wine and simmer until beef is tender."
    },
    {
        name: "Chicken Parmesan",
        image: "https://example.com/chicken_parmesan.jpg",
        ingredients: ["chicken breasts", "breadcrumbs", "marinara sauce", "mozzarella cheese", "parmesan cheese"],
        instructions: "Dredge chicken breasts in breadcrumbs. Bake with marinara sauce and mozzarella cheese until bubbly. Sprinkle with parmesan cheese."
    },
    {
        name: "Shrimp Linguine",
        image: "https://example.com/shrimp_linguine.jpg",
        ingredients: ["shrimp", "linguine", "cream", "garlic", "parsley"],
        instructions: "Boil linguine. Sauté shrimp with garlic. Add cream and parsley. Toss with linguine."
    },
    {
        name: "Ratatouille",
        image: "https://example.com/ratatouille.jpg",
        ingredients: ["eggplant", "zucchini", "bell pepper", "tomato", "herbs"],
        instructions: "Sauté eggplant, zucchini, bell pepper, and tomato with herbs until tender. Serve hot."
    },
    {
        name: "Quiche Lorraine",
        image: "https://example.com/quiche_lorraine.jpg",
        ingredients: ["pie crust", "bacon", "cheese", "egg", "cream"],
        instructions: "Bake pie crust. Sauté bacon. Mix cheese, egg, and cream. Add bacon. Pour into crust and bake until set."
    },
    {
        name: "Paella",
        image: "https://example.com/paella.jpg",
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
    }
    // Add more recipes as needed
];
    

// Function to display recipes based on ingredient
function displayRecipes(ingredient) {
    const recipesContainer = document.getElementById('recipes-container');
    recipesContainer.innerHTML = '';

    const filteredRecipes = recipes.filter(recipe => 
        recipe.ingredients.some(ing => ing.toLowerCase().includes(ingredient))
    );

    if (filteredRecipes.length === 0) {
        recipesContainer.innerHTML = '<p>No recipes found.</p>';
        return;
    }

    filteredRecipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        recipeElement.innerHTML = `
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <p><strong>Ingredients:</strong></p>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <button onclick="viewRecipe('${recipe.name}')">View Recipe</button>
        `;

        recipesContainer.appendChild(recipeElement);
    });
}

// Function to redirect to recipe detail page
function viewRecipe(recipeName) {
    // Encode recipe name to be used in URL
    const encodedRecipeName = encodeURIComponent(recipeName);
    
    // Redirect to recipe detail page passing recipe name as query parameter
    window.location.href = `recipe.html?recipe=${encodedRecipeName}`;
}

// Function to load recipe details based on query parameter
function loadRecipeDetails(recipeName) {
    const recipe = recipes.find(r => r.name === recipeName);

    if (recipe) {
        const recipeDetailsContainer = document.getElementById('recipe-details');
        recipeDetailsContainer.innerHTML = `
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <p><strong>Ingredients:</strong></p>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <p><strong>Instructions:</strong></p>
            <p>${recipe.instructions}</p>
        `;
    } else {
        const recipeDetailsContainer = document.getElementById('recipe-details');
        recipeDetailsContainer.innerHTML = '<p>Recipe not found.</p>';
    }
}
