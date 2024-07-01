// Define recipes array directly within script.js
const recipes = [
    {
        name: "Spaghetti Bolognese",
        image: "data:image/jpeg;base64,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",
        ingredients: ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic"],
        instructions: "Cook spaghetti. In another pan, cook beef with onion and garlic. Add tomato sauce. Mix with spaghetti."
    },
    {
        name: "Chicken Salad",
        image: "https://example.com/chicken_salad.jpg",
        ingredients: ["chicken", "lettuce", "tomato", "cucumber", "salad dressing"],
        instructions: "Grill chicken. Chop vegetables. Mix with salad dressing and serve."
    },
    {
        name: "Pasta Carbonara",
        image: "https://example.com/pasta_carbonara.jpg",
        ingredients: ["spaghetti", "bacon", "egg yolks", "parmesan cheese", "black pepper"],
        instructions: "Cook spaghetti. Fry bacon until crispy. Mix egg yolks, parmesan cheese, and black pepper. Toss spaghetti with bacon and egg mixture."
    },
    {
        name: "Caesar Salad",
        image: "https://example.com/caesar_salad.jpg",
        ingredients: ["romaine lettuce", "croutons", "parmesan cheese", "Caesar dressing", "lemon juice"],
        instructions: "Tear lettuce into bite-size pieces. Add croutons, parmesan cheese, and Caesar dressing. Squeeze lemon juice over the top and toss."
    },
    {
        name: "Spaghetti Bolognese",
        image: "https://example.com/spaghetti.jpg",
        ingredients: ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic"],
        instructions: "Cook spaghetti. In another pan, cook beef with onion and garlic. Add tomato sauce. Mix with spaghetti."
    },
    {
        name: "Chicken Salad",
        image: "https://example.com/chicken_salad.jpg",
        ingredients: ["chicken", "lettuce", "tomato", "cucumber", "salad dressing"],
        instructions: "Grill chicken. Chop vegetables. Mix with salad dressing and serve."
    },
    {
        name: "Pasta Carbonara",
        image: "https://example.com/pasta_carbonara.jpg",
        ingredients: ["spaghetti", "bacon", "egg yolks", "parmesan cheese", "black pepper"],
        instructions: "Cook spaghetti. Fry bacon until crispy. Mix egg yolks, parmesan cheese, and black pepper. Toss spaghetti with bacon and egg mixture."
    },
    {
    name: "Chicken Biryani",
    image: "https://example.com/chicken_biryani.jpg",
    ingredients: ["basmati rice", "chicken", "spices", "yogurt"],
    instructions: "Marinate chicken in yogurt and spices. Cook rice separately. Layer chicken and rice. Cook on low heat."
  },
  {
    name: "Paneer Butter Masala",
    image: "https://example.com/paneer_butter_masala.jpg",
    ingredients: ["paneer", "tomatoes", "cream", "butter", "spices"],
    instructions: "Sauté tomatoes in butter. Add spices and cream. Mix in paneer cubes. Cook until sauce thickens."
  },
  {
    name: "Masoor Dal",
    image: "https://example.com/masoor_dal.jpg",
    ingredients: ["red lentils", "onions", "tomatoes", "garlic", "spices"],
    instructions: "Cook lentils until tender. Sauté onions, tomatoes, and garlic. Mix with lentils and spices."
  },
  {
    name: "Palak Paneer",
    image: "https://example.com/palak_paneer.jpg",
    ingredients: ["paneer", "spinach", "cream", "spices"],
    instructions: "Blanch spinach and blend into puree. Sauté with spices. Add cream and paneer cubes. Cook until heated through."
  },
  {
    name: "Chole (Chickpea Curry)",
    image: "https://example.com/chole.jpg",
    ingredients: ["chickpeas", "onions", "tomatoes", "ginger", "garlic", "spices"],
    instructions: "Sauté onions, ginger, and garlic. Add tomatoes and spices. Mix in cooked chickpeas. Simmer until flavors meld."
  },
  {
    name: "Chicken Tikka Masala",
    image: "https://example.com/chicken_tikka_masala.jpg",
    ingredients: ["chicken thighs", "yogurt", "tomato sauce", "cream", "spices"],
    instructions: "Marinate chicken in yogurt and spices. Grill until charred. Simmer in tomato sauce and cream until cooked through."
  },
  {
    name: "Aloo Gobi",
    image: "https://example.com/aloo_gobi.jpg",
    ingredients: ["potatoes", "cauliflower", "onions", "tomatoes", "turmeric", "cumin"],
    instructions: "Sauté onions, tomatoes, and spices. Add potatoes and cauliflower. Cook until vegetables are tender."
  },
  {
    name: "Pav Bhaji",
    image: "https://example.com/pav_bhaji.jpg",
    ingredients: ["mixed vegetables", "pav buns", "butter", "spices"],
    instructions: "Cook vegetables until soft. Mash and mix with spices. Serve with buttered pav buns."
  },
  {
    name: "Rajma (Kidney Bean Curry)",
    image: "https://example.com/rajma.jpg",
    ingredients: ["kidney beans", "onions", "tomatoes", "garlic", "spices"],
    instructions: "Cook kidney beans until tender. Sauté onions, tomatoes, and garlic. Mix with beans and spices. Simmer until flavors blend."
  },
  {
    name: "Dal Makhani",
    image: "https://example.com/dal_makhani.jpg",
    ingredients: ["black lentils", "red kidney beans", "cream", "butter", "spices"],
    instructions: "Cook lentils and kidney beans until tender. Sauté with cream, butter, and spices until flavors meld."
  },
  {
    name: "Baingan Bharta",
    image: "https://example.com/baingan_bharta.jpg",
    ingredients: ["eggplant", "onions", "tomatoes", "green chilies", "spices"],
    instructions: "Roast eggplant until charred. Peel and mash. Sauté onions, tomatoes, and spices. Mix with mashed eggplant."
  },
  {
    name: "Matar Paneer",
    image: "https://example.com/matar_paneer.jpg",
    ingredients: ["paneer", "green peas", "onions", "tomatoes", "cream", "spices"],
    instructions: "Sauté onions, tomatoes, and spices. Add green peas and paneer cubes. Mix with cream. Simmer until heated through."
  },
  {
    name: "Chicken Curry",
    image: "https://example.com/chicken_curry.jpg",
    ingredients: ["chicken", "onions", "tomatoes", "ginger", "garlic", "spices"],
    instructions: "Sauté onions, ginger, and garlic. Add tomatoes and spices. Cook chicken until tender."
  },
  {
    name: "Dosa",
    image: "https://example.com/dosa.jpg",
    ingredients: ["rice flour", "black lentils", "fenugreek seeds", "oil", "potatoes (for masala dosa)"],
    instructions: "Soak rice flour and lentils overnight. Blend into batter. Cook like pancakes. Serve with potato filling."
  },
  {
    name: "Samosa",
    image: "https://example.com/samosa.jpg",
    ingredients: ["potatoes", "peas", "spices", "pastry dough"],
    instructions: "Boil and mash potatoes. Sauté with peas and spices. Fill pastry dough and fry until golden brown."
  },
  {
    name: "Vegetable Pulao",
    image: "https://example.com/vegetable_pulao.jpg",
    ingredients: ["basmati rice", "mixed vegetables", "spices", "ghee (clarified butter)"],
    instructions: "Sauté spices in ghee. Add vegetables and rice. Cook until rice is tender."
  },
  {
    name: "Rasgulla",
    image: "https://example.com/rasgulla.jpg",
    ingredients: ["milk", "sugar", "lemon juice", "rose water"],
    instructions: "Boil milk. Add lemon juice to curdle. Strain and knead into balls. Boil in sugar syrup."
  },
  {
    name: "Gulab Jamun",
    image: "https://example.com/gulab_jamun.jpg",
    ingredients: ["milk powder", "flour", "ghee (clarified butter)", "sugar syrup"],
    instructions: "Mix milk powder and flour. Add ghee and water to form dough. Fry and soak in sugar syrup."
  },
  {
    name: "Mutton Curry",
    image: "https://example.com/mutton_curry.jpg",
    ingredients: ["mutton", "onions", "tomatoes", "ginger", "garlic", "spices"],
    instructions: "Sauté onions, ginger, and garlic. Add tomatoes and spices. Cook mutton until tender."
  },
  {
    name: "Pani Puri",
    image: "https://example.com/pani_puri.jpg",
    ingredients: ["semolina balls", "spiced water", "tamarind chutney", "boiled potatoes"],
    instructions: "Make holes in semolina balls. Fill with spiced water, tamarind chutney, and potatoes. Serve immediately."
  },
  {
    name: "Kadai Paneer",
    image: "https://example.com/kadai_paneer.jpg",
    ingredients: ["paneer", "bell peppers", "onions", "tomatoes", "spices"],
    instructions: "Sauté bell peppers, onions, and tomatoes with spices. Add paneer cubes. Cook until flavors blend."
  },
  {
    name: "Hyderabadi Biryani",
    image: "https://example.com/hyderabadi_biryani.jpg",
    ingredients: ["basmati rice", "chicken/mutton", "yogurt", "spices", "saffron"],
    instructions: "Marinate meat in yogurt and spices. Cook rice separately with saffron. Layer and cook on low heat."
  },
  {
    name: "Butter Chicken",
    image: "https://example.com/butter_chicken.jpg",
    ingredients: ["chicken thighs", "tomato puree", "cream", "butter", "spices"],
    instructions: "Marinate chicken in spices. Grill until charred. Simmer in tomato puree, cream, and butter."
  },
  {
    name: "Methi Chicken",
    image: "https://example.com/methi_chicken.jpg",
    ingredients: ["chicken", "fenugreek leaves", "onions", "tomatoes", "spices"],
    instructions: "Sauté onions and tomatoes. Add chicken and fenugreek leaves. Cook until chicken is tender."
  },
  {
    name: "Malai Kofta",
    image: "https://example.com/malai_kofta.jpg",
    ingredients: ["paneer", "potatoes", "cream", "spices", "cashews"],
    instructions: "Mash paneer and potatoes. Add spices and cashews. Shape into balls and fry. Simmer in cream sauce."
  },
  {
    name: "Rava Dosa",
    image: "https://example.com/rava_dosa.jpg",
    ingredients: ["semolina", "rice flour", "curry leaves", "mustard seeds"],
    instructions: "Mix semolina, rice flour, and water. Add curry leaves and mustard seeds. Cook like pancakes."
  },
  {
    name: "Chicken 65",
    image: "https://example.com/chicken_65.jpg",
    ingredients: ["chicken thighs", "curry leaves", "yogurt", "spices", "chili powder"],
    instructions: "Marinate chicken in yogurt and spices. Fry with curry leaves until crispy."
  },
  {
    name: "Bhindi Masala",
    image: "https://example.com/bhindi_masala.jpg",
    ingredients: ["okra", "onions", "tomatoes", "spices", "amchur (dried mango powder)"],
    instructions: "Sauté onions and tomatoes. Add okra and spices. Cook until okra is tender."
  },
  {
    name: "Kheer",
    image: "https://example.com/kheer.jpg",
    ingredients: ["rice", "milk", "sugar", "cardamom", "saffron"],
    instructions: "Cook rice in milk until tender. Add sugar, cardamom, and saffron. Serve chilled."
  },
  {
    name: "Puliyogare",
    image: "https://example.com/puliyogare.jpg",
    ingredients: ["rice", "tamarind paste", "spices", "peanuts", "curry leaves"],
    instructions: "Mix tamarind paste, spices, and cooked rice. Add peanuts and curry leaves."
  },
  {
    name: "Puri Bhaji",
    image: "https://example.com/puri_bhaji.jpg",
    ingredients: ["whole wheat flour", "potatoes", "spices", "ghee"],
    instructions: "Knead flour with water. Fry into puris. Serve with spiced potatoes."
  },
  {
    name: "Fish Curry",
    image: "https://example.com/fish_curry.jpg",
    ingredients: ["fish", "coconut milk", "onions", "tomatoes", "spices"],
    instructions: "Sauté onions and tomatoes. Add coconut milk and fish. Simmer until fish is cooked."
  },
  {
    name: "Gajar Halwa",
    image: "https://example.com/gajar_halwa.jpg",
    ingredients: ["carrots", "milk", "sugar", "ghee", "cardamom"],
    instructions: "Grate carrots and cook in milk until tender. Add sugar, ghee, and cardamom. Cook until thickened."
  },
  {
    name: "Raita",
    image: "https://example.com/raita.jpg",
    ingredients: ["yogurt", "cucumber", "tomatoes", "mint", "cumin"],
    instructions: "Whisk yogurt until smooth. Add chopped cucumber, tomatoes, mint, and cumin."
  },
  {
    name: "Bisi Bele Bath",
    image: "https://example.com/bisi_bele_bath.jpg",
    ingredients: ["rice", "toor dal", "vegetables", "tamarind paste", "spices"],
    instructions: "Cook rice and dal until tender. Sauté vegetables. Mix with tamarind paste and spices."
  },
  {
    name: "Chana Masala",
    image: "https://example.com/chana_masala.jpg",
    ingredients: ["chickpeas", "onions", "tomatoes", "ginger", "garlic", "spices"],
    instructions: "Sauté onions, ginger, and garlic. Add tomatoes and spices. Mix in cooked chickpeas. Simmer until flavors meld."
  },
  {
    name: "Medu Vada",
    image: "https://example.com/medu_vada.jpg",
    ingredients: ["urad dal", "ginger", "green chilies", "curry leaves"],
    instructions: "Soak urad dal. Grind into batter with ginger, chilies, and curry leaves. Fry into vadas."
  },
  {
    name: "Khichdi",
    image: "https://example.com/khichdi.jpg",
    ingredients: ["rice", "lentils", "ghee", "spices", "vegetables"],
    instructions: "Cook rice and lentils until tender. Sauté spices and vegetables. Mix together."
  },
  {
    name: "Pesarattu",
    image: "https://example.com/pesarattu.jpg",
    ingredients: ["green gram", "rice", "ginger", "green chilies"],
    instructions: "Soak green gram and rice. Grind into batter with ginger and chilies. Cook like dosa."
  },
  {
    name: "Mango Lassi",
    image: "https://example.com/mango_lassi.jpg",
    ingredients: ["yogurt", "mango pulp", "sugar", "cardamom", "saffron"],
    instructions: "Blend yogurt, mango pulp, sugar, cardamom, and saffron until smooth. Serve chilled."
  },
  {
    name: "Aloo Paratha",
    image: "https://example.com/aloo_paratha.jpg",
    ingredients: ["whole wheat flour", "potatoes", "spices", "ghee"],
    instructions: "Knead flour with water. Fill with spiced mashed potatoes. Cook on griddle with ghee."
  },
  {
    name: "Papdi Chaat",
    image: "https://example.com/papdi_chaat.jpg",
    ingredients: ["papdis", "potatoes", "yogurt", "tamarind chutney", "spices"],
    instructions: "Arrange papdis. Top with spiced potatoes, yogurt, and tamarind chutney."
  },
  {
    name: "Keema",
    image: "https://example.com/keema.jpg",
    ingredients: ["minced meat", "onions", "tomatoes", "ginger", "garlic", "spices"],
    instructions: "Sauté onions, ginger, and garlic. Add tomatoes and spices. Mix in minced meat. Cook until meat is tender."
  },
  {
    name: "Kofta Curry",
    image: "https://example.com/kofta_curry.jpg",
    ingredients: ["paneer", "potatoes", "cream", "spices", "cashews"],
    instructions: "Mash paneer and potatoes. Add spices and cashews. Shape into balls and fry. Simmer in curry sauce."
  },
  {
    name: "Besan Ladoo",
    image: "https://example.com/besan_ladoo.jpg",
    ingredients: ["gram flour", "ghee", "sugar", "cardamom", "nuts"],
    instructions: "Roast gram flour in ghee. Add sugar, cardamom, and nuts. Shape into balls."
  },
  {
    name: "Chicken Korma",
    image: "https://example.com/chicken_korma.jpg",
    ingredients: ["chicken", "yogurt", "cream", "cashews", "spices"],
    instructions: "Marinate chicken in yogurt and spices. Cook with cream and cashews until chicken is tender."
  },
  {
    name: "Dhokla",
    image: "https://example.com/dhokla.jpg",
    ingredients: ["gram flour", "yogurt", "green chilies", "mustard seeds"],
    instructions: "Mix gram flour and yogurt into batter. Add green chilies and mustard seeds. Steam until cooked."
  },
  {
    name: "Gobi Manchurian",
    image: "https://example.com/gobi_manchurian.jpg",
    ingredients: ["cauliflower", "corn flour", "soy sauce", "ginger", "garlic", "green chilies"],
    instructions: "Coat cauliflower in corn flour. Fry until golden. Sauté with soy sauce, ginger, garlic, and chilies."
  },
  {
    name: "Lamb Rogan Josh",
    image: "https://example.com/lamb_rogan_josh.jpg",
    ingredients: ["lamb", "onions", "tomatoes", "yogurt", "spices"],
    instructions: "Sauté onions. Add tomatoes, yogurt, and spices. Cook lamb until tender."
  },
  {
    name: "Kaju Katli",
    image: "https://example.com/kaju_katli.jpg",
    ingredients: ["cashew nuts", "sugar", "ghee", "cardamom"],
    instructions: "Grind cashews into powder. Cook with sugar, ghee, and cardamom. Shape into diamonds."
  },
  {
    name: "Chaat Papdi",
    image: "https://example.com/chaat_papdi.jpg",
    ingredients: ["papdis", "potatoes", "yogurt", "tamarind chutney", "spices"],
    instructions: "Arrange papdis. Top with spiced potatoes, yogurt, and tamarind chutney."
  },
  {
    name: "Malabar Fish Curry",
    image: "https://example.com/malabar_fish_curry.jpg",
    ingredients: ["fish", "coconut milk", "tomatoes", "curry leaves", "spices"],
    instructions: "Sauté tomatoes and curry leaves. Add coconut milk and fish. Simmer until fish is cooked."
  },
  {
    name: "Prawn Masala",
    image: "https://example.com/prawn_masala.jpg",
    ingredients: ["prawns", "onions", "tomatoes", "ginger", "garlic", "spices"],
    instructions: "Sauté onions, ginger, and garlic. Add tomatoes and spices. Cook prawns until tender."
  },
  {
    name: "Rava Idli",
    image: "https://example.com/rava_idli.jpg",
    ingredients: ["semolina", "yogurt", "mustard seeds", "curry leaves"],
    instructions: "Mix semolina and yogurt into batter. Add mustard seeds and curry leaves. Steam until cooked."
  },
  {
    name: "Fish Fry",
    image: "https://example.com/fish_fry.jpg",
    ingredients: ["fish fillets", "turmeric", "chili powder", "lemon juice", "spices"],
    instructions: "Marinate fish in turmeric, chili powder, and lemon juice. Fry until crispy."
  },
  {
    name: "Bread Pakora",
    image: "https://example.com/bread_pakora.jpg",
    ingredients: ["bread slices", "gram flour", "potatoes", "spices"],
    instructions: "Fill bread slices with spiced mashed potatoes. Dip in gram flour batter. Fry until golden."
  },
  {
    name: "Mysore Pak",
    image: "https://example.com/mysore_pak.jpg",
    ingredients: ["gram flour", "ghee", "sugar"],
    instructions: "Roast gram flour in ghee. Add sugar. Spread into greased pan. Cool and cut into pieces."
  },
  {
    name: "Vegetable Upma",
    image: "https://example.com/vegetable_upma.jpg",
    ingredients: ["semolina", "mixed vegetables", "mustard seeds", "curry leaves"],
    instructions: "Roast semolina. Sauté vegetables with mustard seeds and curry leaves. Mix with semolina."
  },
  {
    name: "Coconut Chutney",
    image: "https://example.com/coconut_chutney.jpg",
    ingredients: ["coconut", "green chilies", "ginger", "curry leaves", "mustard seeds"],
    instructions: "Grind coconut, green chilies, ginger, and curry leaves into paste. Sauté mustard seeds."
  },
  {
    name: "Prawn Biryani",
    image: "https://example.com/prawn_biryani.jpg",
    ingredients: ["basmati rice", "prawns", "yogurt", "spices", "saffron"],
    instructions: "Marinate prawns in yogurt and spices. Cook rice separately with saffron. Layer and cook on low heat."
  },
  {
    name: "Mango Pickle",
    image: "https://example.com/mango_pickle.jpg",
    ingredients: ["raw mangoes", "mustard seeds", "fenugreek seeds", "chili powder"],
    instructions: "Cut mangoes into pieces. Mix with spices. Sun-dry and store in airtight container."
  },
  {
    name: "Pav Bhaji",
    image: "https://example.com/pav_bhaji.jpg",
    ingredients: ["mixed vegetables", "pav buns", "butter", "spices"],
    instructions: "Cook vegetables until soft. Mash and mix with spices. Serve with buttered pav buns."
  },
  {
    name: "Tandoori Chicken",
    image: "https://example.com/tandoori_chicken.jpg",
    ingredients: ["chicken thighs", "yogurt", "spices", "lemon juice"],
    instructions: "Marinate chicken in yogurt, spices, and lemon juice. Grill until charred."
  },
  {
    name: "Aloo Tikki",
    image: "https://example.com/aloo_tikki.jpg",
    ingredients: ["potatoes", "peas", "spices", "breadcrumbs"],
    instructions: "Boil and mash potatoes. Add peas and spices. Shape into patties. Coat with breadcrumbs. Fry until golden."
  },
  {
    name: "Chole Bhature",
    image: "https://example.com/chole_bhature.jpg",
    ingredients: ["chickpeas", "flour", "yogurt", "spices", "baking soda"],
    instructions: "Soak chickpeas overnight. Cook with spices. Serve with fried bread (bhature)."
  },
  {
    name: "Aloo Gobi",
    image: "https://example.com/aloo_gobi.jpg",
    ingredients: ["potatoes", "cauliflower", "onions", "tomatoes", "turmeric", "cumin"],
    instructions: "Sauté onions, tomatoes, and spices. Add potatoes and cauliflower. Cook until vegetables are tender."
  },
  {
    name: "Palak Paneer",
    image: "https://example.com/palak_paneer.jpg",
    ingredients: ["paneer", "spinach", "cream", "spices"],
    instructions: "Blanch spinach and blend into puree. Sauté with spices. Add cream and paneer cubes. Cook until heated through."
  },
  {
    name: "Dahi Puri",
    image: "https://example.com/dahi_puri.jpg",
    ingredients: ["semolina balls", "spiced yogurt", "tamarind chutney", "boiled potatoes"],
    instructions: "Make holes in semolina balls. Fill with spiced yogurt, tamarind chutney, and potatoes. Serve immediately."
  },
  {
    name: "Biryani",
    image: "https://example.com/biryani.jpg",
    ingredients: ["basmati rice", "chicken", "spices", "yogurt"],
    instructions: "Marinate chicken in yogurt and spices. Cook rice separately. Layer chicken and rice. Cook on low heat."
  },
  {
    name: "Gulab Jamun",
    image: "https://example.com/gulab_jamun.jpg",
    ingredients: ["khoya", "sugar", "ghee", "flour", "milk", "cardamom"],
    instructions: "Mix khoya, flour, and a pinch of baking soda. Make balls, fry until golden. Make sugar syrup, soak balls, serve."
  },
  {
    name: "Rasgulla",
    image: "https://example.com/rasgulla.jpg",
    ingredients: ["paneer", "sugar", "water", "cardamom"],
    instructions: "Knead paneer, make balls. Boil in sugar syrup with cardamom. Cook until fluffy. Chill and serve."
  },
  {
    name: "Jalebi",
    image: "https://example.com/jalebi.jpg",
    ingredients: ["flour", "yogurt", "sugar", "saffron", "ghee", "cardamom"],
    instructions: "Make batter with flour, yogurt, and saffron. Ferment, pipe into hot ghee circles. Soak in sugar syrup."
  },
  {
    name: "Barfi",
    image: "https://example.com/barfi.jpg",
    ingredients: ["khoya", "sugar", "ghee", "nuts", "cardamom"],
    instructions: "Cook khoya, sugar, and ghee until thick. Add nuts, cardamom. Pour in a tray, cool, cut into squares."
  },
  {
    name: "Rasmalai",
    image: "https://example.com/rasmalai.jpg",
    ingredients: ["milk", "sugar", "cardamom", "saffron", "pistachios", "paneer"],
    instructions: "Boil milk, add lemon juice. Strain paneer, knead into balls. Cook in sugar milk with cardamom, saffron. Garnish with pistachios."
  },
  {
    name: "Ladoo",
    image: "https://example.com/ladoo.jpg",
    ingredients: ["gram flour", "ghee", "sugar", "nuts", "cardamom"],
    instructions: "Roast gram flour in ghee. Add sugar, nuts, cardamom. Shape into balls. Serve once cooled."
  },
  {
    name: "Kaju Katli",
    image: "https://example.com/kaju_katli.jpg",
    ingredients: ["cashews", "sugar", "ghee", "cardamom"],
    instructions: "Grind cashews, cook with sugar, ghee, and cardamom until thick. Roll out, cut into diamonds."
  },
  {
    name: "Halwa",
    image: "https://example.com/halwa.jpg",
    ingredients: ["semolina", "ghee", "sugar", "nuts", "cardamom"],
    instructions: "Roast semolina in ghee until golden. Add sugar, nuts, cardamom, cook until thickened. Serve warm."
  },
  {
    name: "Peda",
    image: "https://example.com/peda.jpg",
    ingredients: ["khoya", "sugar", "ghee", "cardamom"],
    instructions: "Cook khoya, sugar, ghee, and cardamom until thick. Cool slightly, shape into rounds, flatten."
  },
  {
    name: "Gajar Halwa",
    image: "https://example.com/gajar_halwa.jpg",
    ingredients: ["carrots", "milk", "sugar", "ghee", "nuts", "cardamom"],
    instructions: "Grate carrots, cook in milk until tender. Add sugar, ghee, nuts, cardamom, cook until thick. Serve warm."
  },
  {
    name: "Sohan Halwa",
    image: "https://example.com/sohan_halwa.jpg",
    ingredients: ["flour", "ghee", "sugar", "milk", "nuts", "saffron"],
    instructions: "Roast flour in ghee. Add sugar, milk, nuts, saffron. Cook until thickened. Spread, cool, cut into squares."
  },
  {
    name: "Modak",
    image: "https://example.com/modak.jpg",
    ingredients: ["rice flour", "coconut", "jaggery", "ghee", "cardamom"],
    instructions: "Make dough with rice flour, stuff with coconut jaggery mix. Steam until cooked. Serve warm."
  },
  {
    name: "Puran Poli",
    image: "https://example.com/puran_poli.jpg",
    ingredients: ["chana dal", "jaggery", "flour", "ghee", "cardamom"],
    instructions: "Cook chana dal, jaggery, cardamom. Make dough with flour, roll, stuff with dal mix. Cook on griddle."
  },
  {
    name: "Patishapta",
    image: "https://example.com/patishapta.jpg",
    ingredients: ["rice flour", "coconut", "jaggery", "milk", "cardamom"],
    instructions: "Make batter with rice flour, coconut, jaggery, cardamom. Spread, cook pancakes, stuff with coconut mix."
  },
  {
    name: "Basundi",
    image: "https://example.com/basundi.jpg",
    ingredients: ["milk", "sugar", "saffron", "nuts", "cardamom"],
    instructions: "Boil milk, reduce. Add sugar, saffron, nuts, cardamom. Cook until thickened. Serve chilled."
  },
  {
    name: "Malpua",
    image: "https://example.com/malpua.jpg",
    ingredients: ["flour", "milk", "sugar", "fennel seeds", "cardamom"],
    instructions: "Make batter with flour, milk, fennel seeds, cardamom. Fry in ghee until golden. Soak in sugar syrup."
  },
  {
    name: "Mysore Pak",
    image: "https://example.com/mysore_pak.jpg",
    ingredients: ["besan", "ghee", "sugar"],
    instructions: "Roast besan in ghee. Add sugar, more ghee. Cook until thickened. Spread, cool, cut into pieces."
  },
  {
    name: "Cham Cham",
    image: "https://example.com/cham_cham.jpg",
    ingredients: ["paneer", "sugar", "milk", "saffron", "cardamom"],
    instructions: "Cook paneer balls in sugar milk with saffron, cardamom. Garnish with nuts. Serve chilled."
  },
  {
    name: "Laddu",
    image: "https://example.com/laddu.jpg",
    ingredients: ["besan", "ghee", "sugar", "nuts", "cardamom"],
    instructions: "Roast besan in ghee until golden. Add sugar, nuts, cardamom. Shape into balls. Serve once cooled."
  },
  {
    name: "Kheer",
    image: "https://example.com/kheer.jpg",
    ingredients: ["rice", "milk", "sugar", "saffron", "nuts", "cardamom"],
    instructions: "Boil rice in milk until tender. Add sugar, saffron, nuts, cardamom. Cook until thickened. Serve chilled."
  },
  {
    name: "Sandesh",
    image: "https://example.com/sandesh.jpg",
    ingredients: ["paneer", "sugar", "cardamom", "nuts"],
    instructions: "Knead paneer, sugar, cardamom until smooth. Shape into discs. Garnish with nuts."
  },
  {
    name: "Margherita Pizza",
    image: "https://example.com/margherita_pizza.jpg",
    ingredients: ["pizza dough", "tomato sauce", "mozzarella cheese", "fresh basil", "olive oil"],
    instructions: "Roll out dough, spread tomato sauce. Add mozzarella, basil. Drizzle olive oil. Bake until crust is golden."
  },
  {
    name: "Pasta Carbonara",
    image: "https://example.com/pasta_carbonara.jpg",
    ingredients: ["spaghetti", "bacon", "egg yolks", "parmesan cheese", "black pepper"],
    instructions: "Cook spaghetti. Fry bacon until crispy. Mix egg yolks, parmesan, pepper. Toss with spaghetti."
  },
  {
    name: "Risotto",
    image: "https://example.com/risotto.jpg",
    ingredients: ["Arborio rice", "onion", "white wine", "chicken broth", "parmesan cheese", "butter"],
    instructions: "Sauté onion, rice. Add wine, broth. Cook until creamy. Stir in parmesan, butter."
  },
  {
    name: "Lasagna",
    image: "https://example.com/lasagna.jpg",
    ingredients: ["lasagna noodles", "ground beef", "tomato sauce", "ricotta cheese", "mozzarella cheese", "parmesan cheese"],
    instructions: "Layer noodles, beef, sauce, cheeses. Repeat. Bake until bubbly and cheese is melted."
  },
  {
    name: "Tiramisu",
    image: "https://example.com/tiramisu.jpg",
    ingredients: ["ladyfinger cookies", "espresso", "mascarpone cheese", "eggs", "sugar", "cocoa powder"],
    instructions: "Dip cookies in espresso. Layer with mascarpone mix. Chill. Dust with cocoa before serving."
  },
  {
    name: "Bruschetta",
    image: "https://example.com/bruschetta.jpg",
    ingredients: ["baguette", "tomatoes", "garlic", "basil", "olive oil", "balsamic vinegar"],
    instructions: "Slice, toast baguette. Mix tomatoes, garlic, basil, oil, vinegar. Top baguette slices."
  },
  {
    name: "Gnocchi",
    image: "https://example.com/gnocchi.jpg",
    ingredients: ["potatoes", "flour", "egg", "parmesan cheese", "nutmeg", "butter", "sage"],
    instructions: "Boil potatoes, mash. Mix with flour, egg, parmesan, nutmeg. Shape, boil until they float. Sauté with sage butter."
  },
  {
    name: "Caprese Salad",
    image: "https://example.com/caprese_salad.jpg",
    ingredients: ["tomatoes", "mozzarella cheese", "basil", "olive oil", "balsamic vinegar", "salt", "pepper"],
    instructions: "Slice tomatoes, mozzarella. Arrange with basil leaves. Drizzle oil, vinegar. Season with salt, pepper."
  },
  {
    name: "Pesto Pasta",
    image: "https://example.com/pesto_pasta.jpg",
    ingredients: ["pasta", "basil pesto", "pine nuts", "parmesan cheese", "olive oil", "garlic"],
    instructions: "Cook pasta. Toss with basil pesto, pine nuts, parmesan, oil, garlic."
  },
  {
    name: "Minestrone Soup",
    image: "https://example.com/minestrone_soup.jpg",
    ingredients: ["vegetable broth", "tomatoes", "carrots", "celery", "zucchini", "pasta", "beans", "spinach"],
    instructions: "Sauté vegetables. Add broth, pasta, beans. Simmer until vegetables are tender."
  },
  {
    name: "Calzone",
    image: "https://example.com/calzone.jpg",
    ingredients: ["pizza dough", "ricotta cheese", "mozzarella cheese", "ham", "tomato sauce"],
    instructions: "Roll out dough. Spread ricotta, mozzarella, ham. Fold over, seal. Bake until golden."
  },
  {
    name: "Osso Buco",
    image: "https://example.com/osso_buco.jpg",
    ingredients: ["veal shanks", "onion", "carrot", "celery", "tomato", "garlic", "white wine", "beef broth", "parsley"],
    instructions: "Brown shanks. Sauté vegetables. Add wine, broth, tomatoes. Braise until tender."
  },
  {
    name: "Tortellini",
    image: "https://example.com/tortellini.jpg",
    ingredients: ["tortellini pasta", "cheese", "cream", "butter", "parmesan cheese", "nutmeg", "peas", "prosciutto"],
    instructions: "Cook tortellini. Toss with cream, butter, parmesan, nutmeg. Add peas, prosciutto."
  },
  {
    name: "Cannoli",
    image: "https://example.com/cannoli.jpg",
    ingredients: ["ricotta cheese", "flour", "sugar", "chocolate", "orange zest", "marsala wine"],
    instructions: "Mix ricotta, sugar, zest, wine. Pipe into shells. Dip ends in chocolate."
  },
  {
    name: "Focaccia",
    image: "https://example.com/focaccia.jpg",
    ingredients: ["flour", "yeast", "olive oil", "rosemary", "sea salt", "tomatoes", "olives"],
    instructions: "Mix dough. Press into pan. Drizzle oil, herbs, salt. Top with tomatoes, olives. Bake until golden."
  },
  {
    name: "Ossobuco",
    image: "https://example.com/ossobuco.jpg",
    ingredients: ["veal shanks", "onion", "carrot", "celery", "tomato", "garlic", "white wine", "beef broth", "parsley"],
    instructions: "Brown shanks. Sauté vegetables. Add wine, broth, tomatoes. Braise until tender."
  },
  {
    name: "Linguine alle Vongole",
    image: "https://example.com/linguine_alle_vongole.jpg",
    ingredients: ["linguine pasta", "clams", "garlic", "white wine", "parsley", "chili flakes", "olive oil"],
    instructions: "Cook linguine. Sauté garlic, chili flakes in oil. Add clams, wine. Toss with pasta, parsley."
  },
  {
    name: "Prosciutto e Melone",
    image: "https://example.com/prosciutto_e_melone.jpg",
    ingredients: ["prosciutto", "melon"],
    instructions: "Wrap melon slices with prosciutto."
  },
  {
    name: "Cacio e Pepe",
    image: "https://example.com/cacio_e_pepe.jpg",
    ingredients: ["spaghetti", "pecorino romano cheese", "black pepper", "butter"],
    instructions: "Cook spaghetti. Toss with cheese, pepper, butter."
  },
  {
    name: "Panna Cotta",
    image: "https://example.com/panna_cotta.jpg",
    ingredients: ["cream", "sugar", "gelatin", "vanilla bean"],
    instructions: "Heat cream, sugar, vanilla. Add gelatin. Pour into molds. Chill until set."
  },
  {
    name: "Caprese Salad",
    image: "https://example.com/caprese_salad.jpg",
    ingredients: ["tomatoes", "mozzarella cheese", "basil", "olive oil", "balsamic vinegar", "salt", "pepper"],
    instructions: "Slice tomatoes, mozzarella. Arrange with basil leaves. Drizzle oil, vinegar. Season with salt, pepper."
  },
  {
    name: "Arancini",
    image: "https://example.com/arancini.jpg",
    ingredients: ["risotto", "mozzarella cheese", "breadcrumbs", "egg", "tomato sauce"],
    instructions: "Shape risotto around mozzarella. Coat in egg, breadcrumbs. Fry until golden. Serve with tomato sauce."
  },
  {
    name: "Antipasto Platter",
    image: "https://example.com/antipasto_platter.jpg",
    ingredients: ["prosciutto", "salami", "cheese", "olives", "grilled vegetables", "bread"],
    instructions: "Arrange meats, cheese, olives, vegetables, bread on platter."
  },
  {
    name: "Pesto",
    image: "https://example.com/pesto.jpg",
    ingredients: ["basil", "pine nuts", "garlic", "parmesan cheese", "olive oil"],
    instructions: "Blend basil, pine nuts, garlic, parmesan. Drizzle in oil until smooth."
  },
  {
    name: "Bolognese Sauce",
    image: "https://example.com/bolognese_sauce.jpg",
    ingredients: ["ground beef", "tomato", "onion", "carrot", "celery", "garlic", "red wine"],
    instructions: "Sauté beef, vegetables. Add tomatoes, wine. Simmer until thickened."
  },
  {
    name: "Cannelloni",
    image: "https://example.com/cannelloni.jpg",
    ingredients: ["pasta tubes", "ricotta cheese", "spinach", "tomato sauce", "parmesan cheese"],
    instructions: "Fill tubes with ricotta, spinach. Top with tomato sauce, parmesan. Bake until bubbly."
  },
  {
    name: "Zeppole",
    image: "https://example.com/zeppole.jpg",
    ingredients: ["flour", "sugar", "butter", "eggs", "lemon zest", "powdered sugar"],
    instructions: "Boil water, butter, sugar. Add flour. Stir until dough forms. Fry until golden. Dust with powdered sugar."
  },
  {
    name: "Spaghetti Aglio e Olio",
    image: "https://example.com/spaghetti_aglio_e_olio.jpg",
    ingredients: ["spaghetti", "garlic", "olive oil", "red pepper flakes", "parsley"],
    instructions: "Cook spaghetti. Sauté garlic, pepper flakes in oil. Toss with spaghetti, parsley."
  },
  {
    name: "Panzanella",
    image: "https://example.com/panzanella.jpg",
    ingredients: ["bread", "tomatoes", "cucumber", "red onion", "basil", "olive oil", "balsamic vinegar"],
    instructions: "Cube bread, toast. Mix with tomatoes, cucumber, onion, basil. Drizzle with oil, vinegar."
  },
  {
    name: "Amatriciana Pasta",
    image: "https://example.com/amatriciana_pasta.jpg",
    ingredients: ["spaghetti", "guanciale", "tomato", "pecorino cheese", "onion", "red pepper flakes"],
    instructions: "Cook spaghetti. Sauté guanciale, onion, pepper flakes. Add tomatoes. Toss with pasta, cheese."
  },
  {
    name: "Frittata",
    image: "https://example.com/frittata.jpg",
    ingredients: ["eggs", "cheese", "vegetables", "herbs", "olive oil"],
    instructions: "Whisk eggs, cheese, cooked vegetables, herbs. Cook in pan until set."
  },
  {
    name: "Torta Caprese",
    image: "https://example.com/torta_caprese.jpg",
    ingredients: ["almond flour", "dark chocolate", "butter", "sugar", "eggs"],
    instructions: "Melt chocolate, butter. Beat eggs, sugar. Combine with almond flour. Bake until set."
  },
  {
    name: "Pasta e Fagioli",
    image: "https://example.com/pasta_e_fagioli.jpg",
    ingredients: ["pasta", "beans", "tomato", "carrot", "celery", "onion", "garlic", "rosemary", "parmesan cheese"],
    instructions: "Sauté vegetables. Add beans, tomato, pasta. Simmer until pasta is tender. Serve with parmesan."
  },
  {
    name: "Ricotta Gnocchi",
    image: "https://example.com/ricotta_gnocchi.jpg",
    ingredients: ["ricotta cheese", "flour", "egg", "parmesan cheese", "nutmeg", "butter", "sage"],
    instructions: "Mix ricotta, flour, egg, parmesan, nutmeg. Shape, boil until they float. Sauté with sage butter."
  },
  {
    name: "Carpaccio",
    image: "https://example.com/carpaccio.jpg",
    ingredients: ["beef fillet", "arugula", "parmesan cheese", "lemon", "olive oil"],
    instructions: "Slice beef thinly. Arrange with arugula. Drizzle with olive oil, lemon. Top with parmesan."
  },
  {
    name: "Saltimbocca",
    image: "https://example.com/saltimbocca.jpg",
    ingredients: ["veal", "prosciutto", "sage leaves", "butter", "white wine", "chicken broth"],
    instructions: "Top veal with prosciutto, sage. Sauté until golden. Add wine, broth. Simmer until cooked."
  },
  {
    name: "Ravioli",
    image: "https://example.com/ravioli.jpg",
    ingredients: ["ravioli pasta", "ricotta cheese", "spinach", "tomato sauce", "parmesan cheese"],
    instructions: "Fill pasta with ricotta, spinach. Top with tomato sauce, parmesan. Serve hot."
  },
  {
    name: "Biscotti",
    image: "https://example.com/biscotti.jpg",
    ingredients: ["flour", "sugar", "eggs", "almonds", "orange zest"],
    instructions: "Mix flour, sugar, eggs, almonds, zest. Shape into logs. Bake until golden. Slice, bake again."
  },
  {
    name: "Saffron Risotto",
    image: "https://example.com/saffron_risotto.jpg",
    ingredients: ["Arborio rice", "onion", "white wine", "chicken broth", "saffron", "parmesan cheese", "butter"],
    instructions: "Sauté onion, rice. Add wine, broth, saffron. Cook until creamy. Stir in parmesan, butter."
  },
  {
    name: "Tortelloni",
    image: "https://example.com/tortelloni.jpg",
    ingredients: ["tortelloni pasta", "ricotta cheese", "spinach", "cream", "butter", "parmesan cheese"],
    instructions: "Cook tortelloni. Toss with cream, butter, parmesan. Add spinach. Serve hot."
  },
  {
    name: "Limoncello Tiramisu",
    image: "https://example.com/limoncello_tiramisu.jpg",
    ingredients: ["ladyfinger cookies", "limoncello liqueur", "mascarpone cheese", "eggs", "sugar", "lemon zest"],
    instructions: "Dip cookies in limoncello. Layer with mascarpone mix. Chill. Dust with lemon zest before serving."
  },
  {
    name: "Zuppa Toscana",
    image: "https://example.com/zuppa_toscana.jpg",
    ingredients: ["Italian sausage", "potatoes", "kale", "onion", "garlic", "chicken broth", "cream"],
    instructions: "Brown sausage. Sauté onion, garlic. Add broth, potatoes. Simmer until potatoes are tender. Stir in kale, cream."
  },
  {
    name: "Panzotti",
    image: "https://example.com/panzotti.jpg",
    ingredients: ["pasta dough", "ricotta cheese", "spinach", "nutmeg", "butter", "parmesan cheese"],
    instructions: "Fill dough with ricotta, spinach, nutmeg. Shape, boil until they float. Sauté with butter, parmesan."
  },
  {
    name: "Zabaione",
    image: "https://example.com/zabaione.jpg",
    ingredients: ["egg yolks", "sugar", "marsala wine"],
    instructions: "Whisk yolks, sugar, wine over double boiler until fluffy. Serve warm."
  },
  {
    name: "Tagliatelle al Ragu",
    image: "https://example.com/tagliatelle_al_ragu.jpg",
    ingredients: ["tagliatelle pasta", "beef ragu sauce", "parmesan cheese"],
    instructions: "Cook pasta. Toss with beef ragu sauce. Serve with parmesan."
  },
  {
    name: "Coda alla Vaccinara",
    image: "https://example.com/coda_alla_vaccinara.jpg",
    ingredients: ["oxtail", "tomato", "onion", "carrot", "celery", "garlic", "red wine", "cocoa powder", "raisins"],
    instructions: "Sauté oxtail, vegetables. Add tomatoes, wine, cocoa, raisins. Simmer until meat is tender."
  },
  {
    name: "Pizza Bianca",
    image: "https://example.com/pizza_bianca.jpg",
    ingredients: ["pizza dough", "olive oil", "rosemary", "sea salt"],
    instructions: "Roll out dough. Drizzle with olive oil. Sprinkle with rosemary, sea salt. Bake until golden."
  },
  {
    name: "Insalata di Mare",
    image: "https://example.com/insalata_di_mare.jpg",
    ingredients: ["mixed seafood", "lemon", "olive oil", "garlic", "parsley"],
    instructions: "Cook seafood. Toss with lemon, olive oil, garlic, parsley."
  },
  {
    name: "Mozzarella in Carrozza",
    image: "https://example.com/mozzarella_in_carrozza.jpg",
    ingredients: ["mozzarella cheese", "bread", "egg", "anchovies", "parsley"],
    instructions: "Sandwich mozzarella between bread slices. Coat in egg. Fry until golden. Serve with anchovies, parsley."
  },
  {
    name: "Pasta Primavera",
    image: "https://example.com/pasta_primavera.jpg",
    ingredients: ["pasta", "spring vegetables", "cream", "parmesan cheese", "garlic"],
    instructions: "Cook pasta. Sauté vegetables, garlic. Add cream, cheese. Toss with pasta."
  },
  {
    name: "Fettuccine Alfredo",
    image: "https://example.com/fettuccine_alfredo.jpg",
    ingredients: ["fettuccine pasta", "butter", "cream", "parmesan cheese", "nutmeg"],
    instructions: "Cook pasta. Melt butter. Add cream, cheese, nutmeg. Toss with pasta."
  },
  {
    name: "Polenta",
    image: "https://example.com/polenta.jpg",
    ingredients: ["cornmeal", "water", "butter", "parmesan cheese"],
    instructions: "Boil water. Whisk in cornmeal. Stir until thickened. Add butter, cheese."
  },
  {
    name: "Sgroppino",
    image: "https://example.com/sgroppino.jpg",
    ingredients: ["lemon sorbet", "vodka", "prosecco"],
    instructions: "Blend sorbet, vodka, prosecco until smooth. Serve chilled."
  },
  {
    name: "Torrone",
    image: "https://example.com/torrone.jpg",
    ingredients: ["honey", "almonds", "egg whites", "sugar"],
    instructions: "Heat honey, sugar. Fold in whipped egg whites, almonds. Press into molds. Cool, cut into pieces."
  },
  {
    name: "Scampi alla Busara",
    image: "https://example.com/scampi_alla_busara.jpg",
    ingredients: ["langoustines", "tomato", "garlic", "white wine", "parsley"],
    instructions: "Sauté langoustines, garlic. Add tomatoes, wine. Simmer until langoustines are cooked. Garnish with parsley."
  },
  {
    name: "Sicilian Arancini",
    image: "https://example.com/sicilian_arancini.jpg",
    ingredients: ["risotto", "mozzarella cheese", "saffron", "breadcrumbs", "egg", "tomato sauce"],
    instructions: "Shape risotto around mozzarella. Coat in egg, breadcrumbs. Fry until golden. Serve with tomato sauce."
  },{
    name: "Kung Pao Chicken",
    ingredients: ["chicken", "peanuts", "chili peppers", "scallions", "soy sauce", "rice vinegar", "cornstarch"],
    instructions: "Stir-fry chicken, peanuts, chili peppers, and scallions. Mix soy sauce, rice vinegar, and cornstarch. Toss with chicken mixture and serve over rice."
  },
  {
    name: "Beef and Broccoli",
    ingredients: ["beef", "broccoli", "garlic", "ginger", "soy sauce", "oyster sauce", "cornstarch"],
    instructions: "Sauté beef and broccoli with garlic and ginger. Mix soy sauce, oyster sauce, and cornstarch. Toss with beef and broccoli and serve over rice."
  },
  {
    name: "Vegetable Lo Mein",
    ingredients: ["noodles", "cabbage", "carrots", "bean sprouts", "scallions", "soy sauce", "sesame oil"],
    instructions: "Boil noodles and stir-fry vegetables. Toss noodles and vegetables with soy sauce and sesame oil."
  },
  {
    name: "Egg Fried Rice",
    ingredients: ["rice", "eggs", "peas", "carrots", "scallions", "soy sauce", "sesame oil"],
    instructions: "Scramble eggs and set aside. Stir-fry rice, peas, carrots, and scallions. Toss with eggs, soy sauce, and sesame oil."
  },
  {
    name: "Szechuan Mapo Tofu",
    ingredients: ["tofu", "ground pork", "chili bean sauce", "garlic", "ginger", "scallions", "soy sauce", "cornstarch"],
    instructions: "Sauté pork and tofu with chili bean sauce, garlic, and ginger. Mix soy sauce and cornstarch. Toss with tofu mixture and serve over rice."
  },
  {
    name: "Char Siu Pork",
    ingredients: ["pork", "soy sauce", "hoisin sauce", "honey", "five-spice powder", "garlic", "ginger"],
    instructions: "Marinate pork in soy sauce, hoisin sauce, honey, five-spice powder, garlic, and ginger. Roast until caramelized and tender."
  },
  {
    name: "Steamed Dumplings",
    ingredients: ["ground pork", "cabbage", "scallions", "ginger", "soy sauce", "sesame oil", "wonton wrappers"],
    instructions: "Mix pork, cabbage, scallions, ginger, soy sauce, and sesame oil. Wrap in wonton wrappers and steam until cooked through."
  },
  {
    name: "Kung Pao Shrimp",
    ingredients: ["shrimp", "peanuts", "chili peppers", "scallions", "soy sauce", "rice vinegar", "cornstarch"],
    instructions: "Stir-fry shrimp, peanuts, chili peppers, and scallions. Mix soy sauce, rice vinegar, and cornstarch. Toss with shrimp mixture and serve over rice."
  },
  {
    name: "Mu Shu Pork",
    ingredients: ["pork", "cabbage", "mushrooms", "scallions", "hoisin sauce", "soy sauce", "eggs"],
    instructions: "Sauté pork, cabbage, mushrooms, and scallions. Scramble eggs and add to the mixture. Serve with hoisin sauce and soy sauce."
  },
  {
    name: "Vegetable Fried Rice",
    ingredients: ["rice", "carrots", "peas", "corn", "scallions", "soy sauce", "sesame oil"],
    instructions: "Stir-fry rice, carrots, peas, and corn. Toss with scallions, soy sauce, and sesame oil."
  },
  {
    name: "Mongolian Beef",
    ingredients: ["beef", "scallions", "garlic", "ginger", "soy sauce", "brown sugar", "cornstarch"],
    instructions: "Sauté beef with scallions, garlic, and ginger. Mix soy sauce, brown sugar, and cornstarch. Toss with beef and serve over rice."
  },
  {
    name: "Chicken Chow Mein",
    ingredients: ["chicken", "noodles", "cabbage", "carrots", "bean sprouts", "soy sauce", "sesame oil"],
    instructions: "Stir-fry chicken, noodles, cabbage, carrots, and bean sprouts. Toss with soy sauce and sesame oil."
  },
  {
    name: "Beef and Broccoli Lo Mein",
    ingredients: ["beef", "broccoli", "noodles", "garlic", "ginger", "soy sauce", "oyster sauce"],
    instructions: "Sauté beef and broccoli with garlic and ginger. Boil noodles and toss with beef and broccoli mixture, soy sauce, and oyster sauce."
  },
  {
    name: "Kung Pao Tofu",
    ingredients: ["tofu", "peanuts", "chili peppers", "scallions", "soy sauce", "rice vinegar", "cornstarch"],
    instructions: "Stir-fry tofu, peanuts, chili peppers, and scallions. Mix soy sauce, rice vinegar, and cornstarch. Toss with tofu mixture and serve over rice."
  },
  {
    name: "Vegetable Spring Rolls",
    ingredients: ["cabbage", "carrots", "bean sprouts", "scallions", "soy sauce", "rice vinegar", "spring roll wrappers"],
    instructions: "Sauté cabbage, carrots, bean sprouts, and scallions. Mix soy sauce and rice vinegar. Wrap in spring roll wrappers and fry until golden brown."
  },
  {
    name: "Beef Chop Suey",
    ingredients: ["beef", "cabbage", "bean sprouts", "mushrooms", "soy sauce", "oyster sauce", "cornstarch"],
    instructions: "Sauté beef, cabbage, bean sprouts, and mushrooms. Mix soy sauce, oyster sauce, and cornstarch. Toss with the vegetable mixture and serve over rice."
  },
  {
    name: "Chicken and Broccoli in Garlic Sauce",
    ingredients: ["chicken", "broccoli", "garlic", "ginger", "soy sauce", "rice vinegar", "cornstarch"],
    instructions: "Sauté chicken and broccoli with garlic and ginger. Mix soy sauce, rice vinegar, and cornstarch. Toss with the chicken and broccoli mixture and serve over rice."
  },
  {
    name: "Vegetable Dumplings",
    ingredients: ["cabbage", "carrots", "mushrooms", "scallions", "soy sauce", "sesame oil", "wonton wrappers"],
    instructions: "Sauté cabbage, carrots, mushrooms, and scallions. Mix with soy sauce and sesame oil. Wrap in wonton wrappers and steam until cooked through."
  },
  {
    name: "Beef and Broccoli Stir-Fry",
    ingredients: ["beef", "broccoli", "garlic", "ginger", "soy sauce", "oyster sauce", "cornstarch"],
    instructions: "Sauté beef and broccoli with garlic and ginger. Mix soy sauce, oyster sauce, and cornstarch. Toss with the beef and broccoli mixture and serve over rice."
  },
  {
    name: "Kung Pao Chicken with Peanuts",
    ingredients: ["chicken", "peanuts", "chili peppers", "scallions", "soy sauce", "rice vinegar", "cornstarch"],
    instructions: "Stir-fry chicken, peanuts, chili peppers, and scallions. Mix soy sauce, rice vinegar, and cornstarch. Toss with the chicken mixture and serve over rice."
  },
  {
    name: "Vegetable Lo Mein with Tofu",
    ingredients: ["noodles", "tofu", "cabbage", "carrots", "bean sprouts", "scallions", "soy sauce", "sesame oil"],
    instructions: "Boil noodles and stir-fry tofu, cabbage, carrots, and bean sprouts. Toss noodles and vegetables with soy sauce and sesame oil."
  },
  {
    name: "Beef and Broccoli Fried Rice",
    ingredients: ["rice", "beef", "broccoli", "garlic", "ginger", "soy sauce", "oyster sauce"],
    instructions: "Stir-fry rice, beef, and broccoli with garlic and ginger. Toss with soy sauce and oyster sauce."
  },
  {
    name: "Szechuan Chicken",
    ingredients: ["chicken", "chili peppers", "garlic", "ginger", "soy sauce", "rice vinegar", "cornstarch"],
    instructions: "Sauté chicken with chili peppers, garlic, and ginger. Mix soy sauce, rice vinegar, and cornstarch. Toss with the chicken mixture and serve over rice."
  },
  {
    name: "Vegetable Dumplings with Soy Dipping Sauce",
    ingredients: ["cabbage", "carrots", "mushrooms", "scallions", "soy sauce", "rice vinegar", "wonton wrappers"],
    instructions: "Sauté cabbage, carrots, mushrooms, and scallions. Wrap in wonton wrappers and steam until cooked through. Serve with a dipping sauce made from soy sauce and rice vinegar."
  },
  {
    name: "Beef and Broccoli Noodle Stir-Fry",
    ingredients: ["beef", "broccoli", "noodles", "garlic", "ginger", "soy sauce", "oyster sauce"],
    instructions: "Sauté beef and broccoli with garlic and ginger. Boil noodles and toss with the beef and broccoli mixture, soy sauce, and oyster sauce."
  },
  {
    name: "Kung Pao Shrimp with Peanuts",
    ingredients: ["shrimp", "peanuts", "chili peppers", "scallions", "soy sauce", "rice vinegar", "cornstarch"],
    instructions: "Stir-fry shrimp, peanuts, chili peppers, and scallions. Mix soy sauce, rice vinegar, and cornstarch. Toss with the shrimp mixture and serve over rice."
  },
  {
    name: "Vegetable Fried Rice with Tofu",
    ingredients: ["rice", "tofu", "carrots", "peas", "corn", "scallions", "soy sauce", "sesame oil"],
    instructions: "Stir-fry rice, tofu, carrots, peas, and corn. Toss with scallions, soy sauce, and sesame oil."
  },
  {
    name: "Mongolian Beef with Noodles",
    ingredients: ["beef", "noodles", "scallions", "garlic", "ginger", "soy sauce", "brown sugar", "cornstarch"],
    instructions: "Sauté beef with scallions, garlic, and ginger. Mix soy sauce, brown sugar, and cornstarch. Toss with the beef mixture and serve over noodles."
  },
  {
    name: "Chicken Chow Mein with Vegetables",
    ingredients: ["chicken", "noodles", "cabbage", "carrots", "bean sprouts", "soy sauce", "sesame oil"],
    instructions: "Stir-fry chicken, noodles, cabbage, carrots, and bean sprouts. Toss with soy sauce and sesame oil."
  },
  {
    name: "Beef and Broccoli Lo Mein with Mushrooms",
    ingredients: ["beef", "broccoli", "mushrooms", "noodles", "garlic", "ginger", "soy sauce", "oyster sauce"],
    instructions: "Sauté beef, broccoli, and mushrooms with garlic and ginger. Boil noodles and toss with the beef and vegetable mixture, soy sauce, and oyster sauce."
  },
  {
    name: "Kung Pao Tofu with Peanuts",
    ingredients: ["tofu", "peanuts", "chili peppers", "scallions", "soy sauce", "rice vinegar", "cornstarch"],
    instructions: "Stir-fry tofu, peanuts, chili peppers, and scallions. Mix soy sauce, rice vinegar, and cornstarch. Toss with the tofu mixture and serve over rice."
  },
  {
    name: "Vegetable Spring Rolls with Dipping Sauce",
    ingredients: ["cabbage", "carrots", "bean sprouts", "scallions", "soy sauce", "rice vinegar", "spring roll wrappers"],
    instructions: "Sauté cabbage, carrots, bean sprouts, and scallions. Wrap in spring roll wrappers and fry until golden brown. Serve with a dipping sauce made from soy sauce and rice vinegar."
  },
  {
    name: "Beef Chop Suey with Mushrooms and Bean Sprouts",
    ingredients: ["beef", "cabbage", "bean sprouts", "mushrooms", "soy sauce", "oyster sauce", "cornstarch"],
    instructions: "Sauté beef, cabbage, bean sprouts, and mushrooms. Mix soy sauce, oyster sauce, and cornstarch. Toss with the vegetable mixture and serve over rice."
  },
  {
    name: "Chicken and Broccoli in Garlic Sauce with Noodles",
    ingredients: ["chicken", "broccoli", "noodles", "garlic", "ginger", "soy sauce", "rice vinegar", "cornstarch"],
    instructions: "Sauté chicken and broccoli with garlic and ginger. Boil noodles and toss with the chicken and broccoli mixture, soy sauce, rice vinegar, and cornstarch."
  },
  {
    name: "Vegetable Dumplings with Soy Ginger Dipping Sauce",
    ingredients: ["cabbage", "carrots", "mushrooms", "scallions", "soy sauce", "ginger", "rice vinegar", "wonton wrappers"],
    instructions: "Sauté cabbage, carrots, mushrooms, and scallions. Wrap in wonton wrappers and steam until cooked through. Serve with a dipping sauce made from soy sauce, ginger, and rice vinegar."
  },
  {
    name: "Beef and Broccoli Stir-Fry with Oyster Sauce",
    ingredients: ["beef", "broccoli", "garlic", "ginger", "soy sauce", "oyster sauce", "cornstarch"],
    instructions: "Sauté beef and broccoli with garlic and ginger. Mix soy sauce, oyster sauce, and cornstarch. Toss with the beef and broccoli mixture and serve over rice."
  },
    {
        name: "Caesar Salad",
        image: "https://example.com/caesar_salad.jpg",
        ingredients: ["romaine lettuce", "croutons", "parmesan cheese", "Caesar dressing", "lemon juice"],
        instructions: "Tear lettuce into bite-size pieces. Add croutons, parmesan cheese, and Caesar dressing. Squeeze lemon juice over the top and toss."
    }
    // Add more recipes as needed
];

// Event listener for form submission
document.getElementById('ingredient-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    const ingredientInput = document.getElementById('ingredient-input');
    const ingredient = ingredientInput.value.trim().toLowerCase(); // Trim whitespace and convert to lowercase
    displayRecipes(ingredient);

    ingredientInput.value = ''; // Clear input field after submission (optional)
});

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
            <img src="${recipe.image}" alt="${recipe.name}">
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
