import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'

export default function Details() {

    const history = useHistory();

    const { recipeId } = useParams();

    const [recipe, setRecipe] = useState({})
    const [error, setError] = useState(null)

    const fetchRecipe = async (id) => {
        const resp = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
        const _recipe = resp.data?.meals[0];

        if (!_recipe) {
            setError('Something went wrong');
            return;
        }

        setRecipe(_recipe);
    };

    // fetch recipe when page loads/recipeId changes
    useEffect(() => {
        if (!recipeId) return;
        fetchRecipe(recipeId)
    }, [recipeId])


    const {
        strMeal,
        strMealThumb,
        strCategory,
        strArea,
        strInstructions,
        strYoutube,
    } = recipe;


    // Quick and dirty solution
    const ingredients = [
        {
            name: recipe.strIngredient1,
            measure: recipe.strMeasure1
        },
        {
            name: recipe.strIngredient2,
            measure: recipe.strMeasure2
        },
        {
            name: recipe.strIngredient3,
            measure: recipe.strMeasure3
        },
        {
            name: recipe.strIngredient4,
            measure: recipe.strMeasure4
        },
        {
            name: recipe.strIngredient5,
            measure: recipe.strMeasure5
        },
        {
            name: recipe.strIngredient6,
            measure: recipe.strMeasure6
        },
        {
            name: recipe.strIngredient7,
            measure: recipe.strMeasure7
        },
        {
            name: recipe.strIngredient8,
            measure: recipe.strMeasure8
        },
        {
            name: recipe.strIngredient9,
            measure: recipe.strMeasure9
        },
        {
            name: recipe.strIngredient10,
            measure: recipe.strMeasure10
        },
        {
            name: recipe.strIngredient11,
            measure: recipe.strMeasure11
        },
        {
            name: recipe.strIngredient12,
            measure: recipe.strMeasure12
        },
        {
            name: recipe.strIngredient13,
            measure: recipe.strMeasure13
        },
        {
            name: recipe.strIngredient14,
            measure: recipe.strMeasure14
        },
        {
            name: recipe.strIngredient15,
            measure: recipe.strMeasure15
        },
        {
            name: recipe.strIngredient16,
            measure: recipe.strMeasure16
        },
        {
            name: recipe.strIngredient17,
            measure: recipe.strMeasure17
        },
        {
            name: recipe.strIngredient18,
            measure: recipe.strMeasure18
        },
        {
            name: recipe.strIngredient19,
            measure: recipe.strMeasure19
        },
        {
            name: recipe.strIngredient20,
            measure: recipe.strMeasure20
        },
    ];

    const ingredientList = ingredients.map(({ name, measure }) => {
        if (!name) return null;
        return (<p><span className="font-semibold">{name}</span>: {measure}</p>)
    });


    if (!strMeal) return (
        <div className="mt-5">
            <h1 className="text-2xl font-semibold">Loading...</h1>
        </div>
    )

    if (error) return (
        <div className="mt-5">
            <h1 className="text-2xl font-semibold">{error ? error : "Something went wrong"}</h1>
            <div className="mt-3 text-blue-900 hover:text-indigo-500" >
                <Link to="/">Go Home</Link>
            </div>
        </div>
    )

    return (
        <div className="flex flex-col items-start w-full mb-10 p-5" style={{ backgroundColor: '' }}>
            {/* heading area */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:h-72 mb-5" style={{ backgroundColor: '' }}>
                <img
                    style={{ backgroundColor: '', overflow: 'hidden' }}
                    className="object-cover h-full w-full"
                    // src="https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg"
                    src={strMealThumb}
                    alt="img" />

                {/* heading text */}
                <div className="mt-2 md:mt-0 md:ml-2 flex flex-col items-start pl-4" style={{ backgroundColor: '' }}>
                    <h1 className="font-semibold text-2xl mb-2">{strMeal}</h1>

                    <div className="flex w-full" style={{ backgroundColor: '' }}>
                        <p className="flex-1 flex justify-start" style={{ backgroundColor: '' }}>
                            <strong>Category: </strong>&nbsp;
                            <Link to={'/category/' + strCategory} className="text-blue-900 hover:text-blue-500">{strCategory}</Link>
                        </p>
                        <p className="flex-1 flex justify-start">
                            <strong>Cuisine: </strong>&nbsp;
                            <Link to={'/cuisine/' + strArea} className="text-blue-900 hover:text-blue-500">{strArea}</Link>
                        </p>
                    </div>

                </div>
                {/* end: heading text */}
            </div>
            {/* end: heading area */}


            {/* description area */}
            <div className="w-full mt-2 flex flex-col md:flex-row items-start py-2 md:p-0" style={{ backgroundColor: '' }}>

                {/* ingredients list */}
                <div className="flex-1 flex flex-col items-start" style={{ backgroundColor: '' }}>
                    <h2 className="font-bold border-b border-gray-400 w-9/12 flex items-start pb-2 mb-2">Ingredients</h2>

                    {ingredientList}
                </div>
                {/* end: ingredients list */}

                {/* instruction */}
                <div className=" flex flex-col items-start _recipe-instructions" style={{ backgroundColor: '' }}>
                    <h2 className="font-bold border-b border-gray-400 w-full flex items-start pb-2 mb-2">Method</h2>

                    <div style={{ all: 'initial' }}>
                        <p className="justify-start">{strInstructions}</p>
                    </div>
                </div>
                {/* end: instruction */}

            </div>
            {/* end: description area */}
        </div>
    )
}
