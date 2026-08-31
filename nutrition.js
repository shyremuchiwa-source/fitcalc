document.addEventListener("DOMContentLoaded", function () {

    const goalCards = document.querySelectorAll(".goal-card");

    const foodGrid = document.getElementById("foodGrid");
    const recipeGrid = document.getElementById("recipeGrid");

    const foodTitle = document.getElementById("foodTitle");
    const foodDescription = document.getElementById("foodDescription");


    const nutritionData = {

        cut: {
            title: "Les meilleurs aliments pour ta sèche.",
            description:
                "Des aliments rassasiants, riches en protéines et intéressants pour contrôler tes calories.",

            foods: [
                {
                    emoji: "🍗",
                    name: "Poulet",
                    description: "Riche en protéines et relativement pauvre en calories."
                },
                {
                    emoji: "🥚",
                    name: "Œufs",
                    description: "Une excellente source de protéines et de nutriments."
                },
                {
                    emoji: "🥦",
                    name: "Brocoli",
                    description: "Peu calorique, riche en fibres et très rassasiant."
                },
                {
                    emoji: "🥔",
                    name: "Pommes de terre",
                    description: "Un aliment rassasiant avec une bonne densité nutritionnelle."
                },
                {
                    emoji: "🐟",
                    name: "Poisson blanc",
                    description: "Une source de protéines maigres idéale pour une sèche."
                },
                {
                    emoji: "🍓",
                    name: "Fruits rouges",
                    description: "Peu caloriques et intéressants pour ajouter du goût aux repas."
                }
            ],

            recipes: [
                {
                    emoji: "🥗",
                    name: "Bowl poulet & riz",
                    time: "20 min",
                    description: "Poulet grillé, riz, légumes et sauce légère."
                },
                {
                    emoji: "🍳",
                    name: "Omelette protéinée",
                    time: "10 min",
                    description: "Œufs, blancs d'œufs et légumes."
                },
                {
                    emoji: "🐟",
                    name: "Poisson & pommes de terre",
                    time: "25 min",
                    description: "Poisson blanc accompagné de pommes de terre et légumes."
                }
            ]
        },


        maintain: {
            title: "Les meilleurs aliments pour ton maintien.",
            description:
                "Une alimentation équilibrée pour conserver ton poids et couvrir tes besoins nutritionnels.",

            foods: [
                {
                    emoji: "🍚",
                    name: "Riz",
                    description: "Une excellente source de glucides pour ton énergie."
                },
                {
                    emoji: "🍗",
                    name: "Poulet",
                    description: "Une source simple et efficace de protéines."
                },
                {
                    emoji: "🥑",
                    name: "Avocat",
                    description: "Riche en bonnes graisses et intéressant pour une alimentation équilibrée."
                },
                {
                    emoji: "🥦",
                    name: "Légumes",
                    description: "Riches en fibres, vitamines et minéraux."
                },
                {
                    emoji: "🍌",
                    name: "Banane",
                    description: "Pratique pour apporter des glucides et de l'énergie."
                },
                {
                    emoji: "🥛",
                    name: "Fromage blanc",
                    description: "Une bonne source de protéines facile à intégrer dans les repas."
                }
            ],

            recipes: [
                {
                    emoji: "🍚",
                    name: "Poulet, riz & légumes",
                    time: "20 min",
                    description: "Un repas complet avec protéines, glucides et légumes."
                },
                {
                    emoji: "🥣",
                    name: "Bowl fromage blanc",
                    time: "5 min",
                    description: "Fromage blanc, banane, fruits rouges et flocons d'avoine."
                },
                {
                    emoji: "🥑",
                    name: "Toast avocat & œufs",
                    time: "10 min",
                    description: "Pain complet, avocat et œufs."
                }
            ]
        },


        bulk: {
            title: "Les meilleurs aliments pour ta prise de masse.",
            description:
                "Des aliments riches en énergie et en protéines pour t'aider à augmenter facilement tes apports.",

            foods: [
                {
                    emoji: "🍚",
                    name: "Riz",
                    description: "Une excellente source de glucides facile à consommer en quantité."
                },
                {
                    emoji: "🥜",
                    name: "Beurre de cacahuète",
                    description: "Très énergétique et pratique pour augmenter les calories."
                },
                {
                    emoji: "🥛",
                    name: "Lait",
                    description: "Apporte protéines, glucides et calories."
                },
                {
                    emoji: "🍌",
                    name: "Banane",
                    description: "Un fruit pratique pour augmenter facilement les glucides."
                },
                {
                    emoji: "🥑",
                    name: "Avocat",
                    description: "Riche en bonnes graisses et en calories."
                },
                {
                    emoji: "🥩",
                    name: "Bœuf",
                    description: "Une excellente source de protéines, fer et calories."
                }
            ],

            recipes: [
                {
                    emoji: "🥣",
                    name: "Bowl prise de masse",
                    time: "5 min",
                    description: "Flocons d'avoine, lait, banane, beurre de cacahuète et fruits rouges."
                },
                {
                    emoji: "🍝",
                    name: "Pâtes au bœuf",
                    time: "20 min",
                    description: "Pâtes, bœuf haché et sauce tomate."
                },
                {
                    emoji: "🥤",
                    name: "Shake hypercalorique",
                    time: "5 min",
                    description: "Lait, banane, avoine, beurre de cacahuète et fromage blanc."
                }
            ]
        },


        performance: {
            title: "Les meilleurs aliments pour la performance.",
            description:
                "Des aliments adaptés pour soutenir ton énergie, ta récupération et tes performances.",

            foods: [
                {
                    emoji: "🍚",
                    name: "Riz",
                    description: "Une source efficace de glucides pour alimenter tes entraînements."
                },
                {
                    emoji: "🍌",
                    name: "Banane",
                    description: "Pratique avant l'entraînement pour apporter rapidement de l'énergie."
                },
                {
                    emoji: "🍗",
                    name: "Poulet",
                    description: "Une excellente source de protéines pour la récupération."
                },
                {
                    emoji: "🥚",
                    name: "Œufs",
                    description: "Riches en protéines et en micronutriments."
                },
                {
                    emoji: "🥔",
                    name: "Pommes de terre",
                    description: "Une bonne source de glucides et de potassium."
                },
                {
                    emoji: "🥛",
                    name: "Yaourt",
                    description: "Une source pratique de protéines et de calcium."
                }
            ],

            recipes: [
                {
                    emoji: "🍌",
                    name: "Snack pré-entraînement",
                    time: "5 min",
                    description: "Banane, yaourt et flocons d'avoine."
                },
                {
                    emoji: "🍗",
                    name: "Poulet & riz",
                    time: "20 min",
                    description: "Poulet grillé, riz et légumes."
                },
                {
                    emoji: "🥣",
                    name: "Bowl récupération",
                    time: "5 min",
                    description: "Yaourt, avoine, banane et fruits rouges."
                }
            ]
        }

    };


    function displayGoal(goal) {

        const data = nutritionData[goal];

        if (!data) {
            return;
        }


        goalCards.forEach(function (card) {

            card.classList.remove("active");

        });


        const selectedCard =
            document.querySelector(
                '.goal-card[data-goal="' + goal + '"]'
            );


        if (selectedCard) {
            selectedCard.classList.add("active");
        }


        foodTitle.textContent = data.title;

        foodDescription.textContent =
            data.description;


        foodGrid.innerHTML = "";


        data.foods.forEach(function (food) {

            const card =
                document.createElement("div");

            card.className = "food-card";


            card.innerHTML =
                '<div class="food-icon">' +
                    food.emoji +
                '</div>' +

                '<div class="food-content">' +

                    '<h3>' +
                        food.name +
                    '</h3>' +

                    '<p>' +
                        food.description +
                    '</p>' +

                '</div>';


            foodGrid.appendChild(card);

        });


        recipeGrid.innerHTML = "";


        data.recipes.forEach(function (recipe) {

            const card =
                document.createElement("div");

            card.className =
                "nutrition-recipe-card";


            card.innerHTML =
                '<div class="nutrition-recipe-icon">' +
                    recipe.emoji +
                '</div>' +

                '<div class="nutrition-recipe-content">' +

                    '<div class="nutrition-recipe-top">' +

                        '<h3>' +
                            recipe.name +
                        '</h3>' +

                        '<span>' +
                            '⏱ ' +
                            recipe.time +
                        '</span>' +

                    '</div>' +

                    '<p>' +
                        recipe.description +
                    '</p>' +

                '</div>';


            recipeGrid.appendChild(card);

        });

    }


    goalCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const goal =
                card.getAttribute("data-goal");

            displayGoal(goal);

        });

    });


    /*
        Objectif affiché au chargement
        = prise de masse
    */

    displayGoal("bulk");

});