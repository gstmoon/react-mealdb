import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import ImageOverlay from '../components/ImageOverlay';

export default function List() {

    const { section, id } = useParams();

    const [recipeList, setRecipeList] = useState([]);
    const [error, setError] = useState(null)


    const getRecipes = async (section, slug) => {
        let resp;
        switch (section) {
            case 'category':
                resp = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${slug}`);
                break

            case 'cuisine':
                resp = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${slug}`);
                break;

            default:
                // todo: show error
                break
        };

        const recipes = resp.data?.meals;

        if (!recipes) return
        setRecipeList(recipes)

    };

    // fetch recipe list when component mounts
    useEffect(() => {
        if (!section || !id) return;
        getRecipes(section, id)
    }, [])

    if (error) return (
        <div className="mt-5">
            <h1 className="text-2xl font-semibold">{error ? error : "Something went wrong"}</h1>
            <div className="mt-3 text-blue-900 hover:text-indigo-500" >
                <Link to="/">Go Home</Link>
            </div>
        </div>
    )

    if (!recipeList || recipeList.length === 0) return (
        <div className="mt-5">
            <h1 className="text-2xl font-semibold">Loading...</h1>
        </div>
    )

    
    return (
        <div className="mt-5 flex flex-col items-start p-5" style={{ backgroundColor: '' }}>
            <h2 className="" style={{ backgroundColor: '' }} className="mb-2 font-bold">All recipes from {id} {section}</h2>

            {/* card container */}
            <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-3 gap-y-4 sm:gap-y-3 md:gap-y-3">

                {/* render category list */}
                {recipeList.map(({ idMeal, strMeal, strMealThumb }) => (
                    <Link
                        key={idMeal}
                        to={'/' + idMeal}>
                        <div className="w-full h-32 rounded overflow-hidden shadow-md cursor-pointer bg-white hover:shadow-xl transition duration-200 ease-in-out">
                            <ImageOverlay
                                imgSrc={strMealThumb}
                                imgAlt={strMeal} >

                                <h1 className="font-semibold">{strMeal}</h1>

                            </ImageOverlay>
                        </div>
                    </Link>
                ))}

            </div>
            {/* end: card container */}

        </div>
    )
}
