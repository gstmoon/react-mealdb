import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ImageOverlay from '../components/ImageOverlay'
import { getRandomRecipe } from '../redux/slices/randomRecipeSlice';
import { getRecipeFromCategory } from '../redux/slices/recipeCategorySlice';

export default function Home() {

    const dispatch = useDispatch();

    const { recipe, recipes } = useSelector(state => ({
        ...state.randomRecipe,
        ...state.categoryRecipe,
    }));

    const {
        idMeal: idMain,
        strMeal: recipeNameMain,
        strMealThumb: thumbnailMain,
        strCategory: categoryMain,
        strArea: areaMain,
    } = recipe;

    // fetch random recipe when component mounts
    useEffect(() => {
        dispatch(getRandomRecipe())
    }, [])

    // fetch more recipe from featured recipe category
    useEffect(() => {
        dispatch(getRecipeFromCategory(categoryMain))
    }, [categoryMain])

    // randomly select 4 recipes for secondary featured area
    let featuredCategoryRecipes;
    if (recipes) {
        let randomStart = Math.floor(Math.random() * recipes.length);
        if (recipes.length - randomStart < 4) randomStart = randomStart - (4 - recipes.length + randomStart);

        featuredCategoryRecipes = recipes.slice(randomStart, randomStart + 4).map((recipe, i) => {
            // featured main
            if (i === 0) {
                return (
                    <div
                        style={{ backgroundColor: 'lavender' }}
                        className="text-center md:col-start-1 md:col-end-4">
                        <Link href={"deal/" + 2}>
                            <ImageOverlay
                                imgSrc={recipe.strMealThumb}
                                imgAlt={recipe.strMeal}>
                                <h1 className="font-semibold">{recipe.strMeal}</h1>
                            </ImageOverlay>
                        </Link>
                    </div>
                )
            }
            // end: featured main

            // other featured
            return (
                <div
                    style={{ backgroundColor: 'blue' }}
                    className="text-center">
                    <Link href={"deal/" + 2}>
                        <ImageOverlay
                            imgSrc={recipe.strMealThumb}
                            imgAlt={recipe.strMeal}>
                            <h1 className="font-semibold">{recipe.strMeal}</h1>
                        </ImageOverlay>
                    </Link>
                </div>
            )
            // end: other featured
        })
    }
    // end: randomly select 4 recipes for secondary featured area



    // debug *****************************************************

    // useEffect(() => {
    //     console.log("recipes: ");
    //     console.log(recipes);
    // }, [recipes])

    // end: debug ************************************************


    return (
        <div style={{ backgroundColor: 'skyblue' }}>

            {/* featured area */}
            <div className="_featured-area">


                {/* featured main */}
                <div className="md:w-3/5 h-1/2 md:h-full" style={{ backgroundColor: 'orange' }}>
                    <Link href={"/" + 1}>
                        <ImageOverlay
                            imgSrc={thumbnailMain}
                            imgAlt={recipeNameMain} >

                            <h1 className="font-semibold">{recipeNameMain}</h1>
                            <p className="text-xs">{areaMain + " cuisine"}</p>

                        </ImageOverlay>
                    </Link>
                </div >
                {/* end: featured main */}

                {/* featured side */}
                <div className="_featured-side">
                    {featuredCategoryRecipes}
                </div>
                {/* end: featured side */}

            </div>
            {/* end: featured area */}

            {/* category grid area */}
            {/* end: category grid area */}


        </div>
    )
}

