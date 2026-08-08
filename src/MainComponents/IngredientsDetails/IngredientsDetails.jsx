import React from 'react'
import ScrollingUpIcon from '../ScrollingUpIcon/ScrollingUpIcon';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import axios from 'axios';
import { MapPin, Plane, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export default function IngredientsDetails() {
    const ingredientName = window.location.pathname.split('/')[3];
    const nameIngredient = ingredientName.replace(/%20/g, ' ');
    // console.log(nameIngredient);
    // console.log(ingredientName);


    const { data: meals = [], isLoading, error } = useQuery({
        queryKey: ['categoryDetails'],
        queryFn: async () => {
            const response = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`
            );
            console.log(response.data);
            return response?.data?.meals ?? [];

        },
    })

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <div className='flex flex-col items-center justify-start mx-auto w-full min-h-screen rounded-3xl'>
            <h1 className="mb-6 text-center text-red-400 dark:text-white text-3xl font-bold cursor-pointer btn btn-ghost font-['Lobster']">“ <Sparkles /> <span className='capitalize'>{nameIngredient}</span> Recipes <Sparkles />”</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-2 px-0 md:px-0 lg:px-6 xl:px-9">
                {meals?.map((meal) => {
                    return (
                        <div key={meal?.idMeal} className="card shadow-xl rounded-3xl border-2 border-orange-100 dark:border-[#004852] relative overflow-hidden">
                            <figure>
                                <img src={meal?.strMealThumb} className="rounded-3xl object-cover w-full" alt={meal?.strMeal} />
                            </figure>
                            <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl">
                                <div className="text-center text-white">
                                    <h2 className="text-2xl font-bold mb-3">{meal?.strMeal}</h2>
                                    <div className="flex justify-around items-center mx-auto mt-1 mb-4">
                                        <div className="flex justify-around items-center">
                                            <MapPin />
                                            <p className="ms-1 text-sm text-center mx-auto">{meal?.strArea || 'Origin not specified'}</p>
                                        </div>
                                        <div className="flex justify-around items-center">
                                            <Plane />
                                            <p className="ms-1 text-sm text-center mx-auto">{meal?.strCountry || 'Country not specified'}</p>
                                        </div>


                                    </div>
                                    <button className="rounded-full bg-red-500 hover:bg-red-400 w-32 h-10"><Link to={`/mealsDetails/${meal?.idMeal}`}>Learn More</Link></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <ScrollingUpIcon />
            </div>
        </div>
    )
}
