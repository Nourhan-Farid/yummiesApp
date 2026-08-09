import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import NotFound from '../NotFound/NotFound';
import ScrollingUpIcon from '../ScrollingUpIcon/ScrollingUpIcon';
import NoDataFound from '../NoDataFound/NoDataFound';
import { Link } from 'react-router-dom';
import { ChevronsRight, MapPin, Sparkles } from 'lucide-react';

export default function OriginDetails() {
    let originName = window.location.pathname.split('/')[2];
    let idOrigin = originName.toLowerCase();
    idOrigin = idOrigin.replace(/%20/g, ' ');
    console.log(idOrigin);
    // ${idOrigin}

    const { data: meals = [], isLoading, error } = useQuery({
        queryKey: ['mealsDetails'],
        queryFn: async () => {
            const response = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/filter.php?a=${idOrigin}`
            );
            console.log(response?.data?.meals);


            return response?.data?.meals;

        },
    });

    if (isLoading) {
        return <LoadingScreen />;
    }
    if (idOrigin == "israel") {
        return <h1 className="text-3xl text-red-400 dark:text-white font-bold text-center mt-10">This country does not exist.</h1>;
    }
    if (meals == null) {
        return <NoDataFound />;
    } else {
        return (
            <>
                <div className='flex flex-col items-center justify-start mx-auto w-full min-h-screen rounded-3xl'>
                    <h1 className="mb-6 w-full lg:w-max p-0 h-fit text-center text-red-400 dark:text-white text-2xl md:text-3xl font-bold cursor-pointer btn btn-ghost font-['Lobster']">“ <Sparkles /> Recipes from <span className='capitalize'>{idOrigin}</span> <Sparkles />”</h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-2 px-0">
                        {meals?.map((meal) => {
                            return (
                                <div key={meal?.idMeal} className="flex justify-between items-start flex-col mx-auto rounded-3xl border-2 border-orange-200 dark:border-[#004852]">
                                    <Link to={`/mealsDetails/${meal?.idMeal}`} className="rounded-t-3xl">

                                        <img src={meal?.strMealThumb} className=" w-80 rounded-t-3xl rounded-b-xl object-cover" alt={meal?.strMeal} />

                                    </Link>
                                    <div className="w-full px-2 text-start">
                                        <div className='flex justify-start items-center text-left mt-2 ms-1'>

                                            <h2 className="max-w-56 text-xl text-left font-semibold text-[#3ea575] dark:text-white">{meal?.strMeal}</h2>
                                        </div>

                                        <div className="my-2  flex justify-end items-center w-full mx-auto">
                                            <div className='flex justify-end items-end right-0 relative'>
                                                <button className="rounded-full flex justify-center items-center mx-auto text-white bg-red-500 hover:bg-red-400 w-24 h-9"><Link to={`/mealsDetails/${meal?.idMeal}`} className="mb-0.5">Recipe </Link><ChevronsRight className='ms-1' /></button>
                                            </div>
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
}
