import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ImageOverlay from '../components/ImageOverlay'
import { getCategoryList } from '../redux/slices/categorySlice';
import { getRandomRecipe } from '../redux/slices/randomRecipeSlice';
import { getRecipeFromCategory } from '../redux/slices/recipeCategorySlice';

export default function Home() {

    const dispatch = useDispatch();

    const { recipe, recipes, categories } = useSelector(state => ({
        ...state.randomRecipe,
        ...state.categoryRecipe,
        ...state.categories,
    }));

    const {
        idMeal: idMain,
        strMeal: recipeNameMain,
        strMealThumb: thumbnailMain,
        strCategory: categoryMain,
        strArea: areaMain,
    } = recipe;

    // fetch random recipe and category list when component mounts
    useEffect(() => {
        dispatch(getRandomRecipe())
        dispatch(getCategoryList())
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
                        style={{ backgroundColor: '' }}
                        className="text-center md:col-start-1 md:col-end-4">
                        <Link to={'/' + idMain}>
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
                    style={{ backgroundColor: '' }}
                    className="text-center">
                    <Link to={'/' + idMain}>
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
        <div style={{ backgroundColor: '' }}>

            {/* featured area */}
            <div className="_featured-area">


                {/* featured main */}
                <div className="md:w-3/5 h-1/2 md:h-full" style={{ backgroundColor: '' }}>
                    <Link to={'/' + idMain}>
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
            <div className="mt-5 flex flex-col items-start p-5" style={{ backgroundColor: '' }}>
                <h2 className="" style={{ backgroundColor: '' }} className="mb-2 font-bold">Browse all categories</h2>

                {/* card container */}
                <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-3 gap-y-4 sm:gap-y-3 md:gap-y-3">

                    {/* render category list */}
                    {categories.map(({ idCategory, strCategory, strCategoryThumb }) => (
                        <Link
                            key={idCategory}
                            to={'/category/' + strCategory}>
                            <div className="w-full h-32 rounded overflow-hidden shadow-md cursor-pointer bg-white hover:shadow-xl transition duration-200 ease-in-out">
                                <ImageOverlay
                                    imgSrc={strCategoryThumb}
                                    imgAlt={strCategory} >

                                    <h1 className="font-semibold">{strCategory}</h1>

                                </ImageOverlay>
                            </div>
                        </Link>
                    ))}

                </div>
                {/* end: card container */}

            </div>
            {/* end: category grid area */}


        </div>
    )
}

