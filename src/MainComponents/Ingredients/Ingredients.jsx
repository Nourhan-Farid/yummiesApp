import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import ScrollingUpIcon from '../ScrollingUpIcon/ScrollingUpIcon';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Sparkles } from 'lucide-react';

export default function Ingredients() {

    let idOrigin = window.location.pathname.split('/')[2];
    // console.log(idMeal);

    const { data: meals = [], isLoading, error } = useQuery({
        queryKey: ['mealsOrigin'],
        queryFn: async () => {
            const response = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
            );
            console.log(response?.data?.meals);

            return response?.data?.meals ?? [];
        },
    });

    if (isLoading) {
        return <LoadingScreen />;
    }



    return (
        <>

            <Helmet>
                <title>Ingredients</title>
            </Helmet>

            <div className='flex flex-col items-center justify-center mx-auto w-full min-h-screen rounded-3xl'>
                <h1 className="flex justify-center items-center mb-10 text-center text-red-400 dark:text-white text-3xl font-bold cursor-pointer btn btn-ghost font-['Lobster']">“<Sparkles className="" />Cook by Ingredients <Sparkles className="" />”</h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-2 px-0 md:px-0 lg:px-6 xl:px-9">
                    {meals?.map((meal) => {
                        return (
                            <div key={meal?.idIngredient} className="card shadow-xl rounded-3xl border-2 border-orange-100 dark:border-[#004852] relative overflow-hidden">
                                <figure>
                                    <img src={meal?.strThumb} className="rounded-3xl object-cover w-full" alt={meal?.strIngredient} />
                                </figure>
                                <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl">
                                    <div className="text-center text-white">
                                        <h2 className="text-2xl font-bold mb-3">{meal?.strIngredient}</h2>
                                        <div className="flex justify-around items-center mx-auto mt-1 mb-4">
                                            <p className="mb-4 text-sm line-clamp-5 max-w-72 text-start mx-auto">{meal?.strDescription}</p>
                                        </div>
                                        <button className="rounded-full bg-red-500 hover:bg-red-400 w-32 h-10"><Link to={`/ingredientsDetails/${meal?.strIngredient}`}>Learn More</Link></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <ScrollingUpIcon />
                </div>
            </div>
        </>
    )
}
