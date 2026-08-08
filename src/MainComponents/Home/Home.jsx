import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { MapPin, Plane, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import ScrollingUpIcon from '../ScrollingUpIcon/ScrollingUpIcon';

export default function Home() {

    const { data: meals = [], isLoading } = useQuery({
        queryKey: ['randomMeals'],
        queryFn: async () => {
            const response = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=`
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
                <title>Home</title>
            </Helmet>

            <div className='flex flex-col items-center justify-start mx-auto max-w-screen min-h-screen rounded-3xl'>
                <h1 className="mb-8 md:px-2 md:py-2 text-center text-red-400 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold cursor-pointer btn btn-ghost font-['Lobster']">“<Sparkles className="" />Taste the world at home!<Sparkles className="" />” </h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-2 px-0 md:px-0 lg:px-6 xl:px-9">
                    {meals?.map((meal) => {
                        return (
                            <div key={meal?.idMeal} className="card shadow-xl rounded-3xl border-2 border-orange-100 dark:border-[#004852] relative overflow-hidden">
                                <figure>
                                    <img src={meal?.strMealThumb} className="rounded-3xl object-cover w-full" alt={meal?.strMeal} />
                                </figure>
                                <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl">
                                    <div className="text-center text-white">
                                        <h2 className="text-2xl font-bold mb-2">{meal?.strMeal}</h2>
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
                </div>
            </div>
            <ScrollingUpIcon />
        </>
    )
}
