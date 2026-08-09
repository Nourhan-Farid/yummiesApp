import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import ScrollingUpIcon from '../ScrollingUpIcon/ScrollingUpIcon';
import GoBackBtn from '../GoBackBtn/GoBackBtn';

export default function MealsDetails() {
    let idMeal = window.location.pathname.split('/')[2];
    // console.log(idMeal);

    const { data: meals = [], isLoading, error } = useQuery({
        queryKey: ['mealsDetails'],
        queryFn: async () => {
            const response = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
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
            <GoBackBtn />

            <div className="bg-[#F7F1DE] dark:bg-[#19354177] rounded-2xl lg:px-5 lg:mx-5 border-2 border-orange-100 dark:border-[#004852] mt-3 shadow-xl">
                {meals?.map((meal) => {
                    return (
                        <div key={meal?.idMeal} className="flex justify-between items-center lg:items-start py-5 flex-col lg:flex-row mx-auto ">
                            <div className="flex justify-start items-start flex-col me-4 mb-4">
                                <figure className="card shadow-xl flex justify-center items-center flex-col rounded-3xl xl:min-w-lg border-2 border-orange-100 dark:border-[#004852] relative overflow-hidden">
                                    <img src={meal?.strMealThumb} className="w-full rounded-3xl object-cover" alt={meal?.strMeal} />
                                </figure>


                            </div>
                            <div className="card relative overflow-hidden max-w-4xl w-full p-4">
                                <h1 className="text-4xl font-bold text-start mb-2 text-[#3ea575] dark:text-white">{meal?.strMeal}</h1>
                                <h1 className="py-3 text-xl font-bold dark:text-white text-black/75">Instructions: </h1>
                                <p className="py-2 dark:text-white/85 text-black/60">
                                    {meal?.strInstructions}
                                </p>
                                {meal?.strArea && (
                                    <p className="py-3 text-black/60 mb-1 dark:text-white ">
                                        <span className='text-xl text-black/75 dark:text-white font-bold me-2'> Origin:</span> {meal?.strArea}
                                    </p>
                                )}
                                {meal?.strCategory && <p className="py-3 text-black/60 mb-1 dark:text-white ">
                                    <span className='text-xl text-black/75 dark:text-white font-bold me-2'> Category:</span> {meal?.strCategory}
                                </p>}
                                {meal?.strTags && (
                                    <p className="py-3 text-black/60 mb-1 dark:text-white ">
                                        <span className='text-xl text-black/75 dark:text-white font-bold me-2'> Tags:</span> {meal?.strTags.replaceAll(",", " - ")}
                                    </p>
                                )}
                                <div className="flex justify-normal items-center gap-4 py-1">
                                    <button className="py-1.5 w-28 rounded-full border-2 border-red-500 hover:border-red-600 bg-red-500 hover:bg-red-600 "><a className='text-white' href={meal?.strYoutube} target="_blank" rel="noopener noreferrer">YouTube</a></button>
                                    <button className="py-1.5 w-28 rounded-full border-2 border-transparent  bg-[#3ea575] hover:bg-emerald-600"><a className='text-white' href={meal?.strSource} target="_blank" rel="noopener noreferrer">Source</a></button>
                                </div>
                                <h1 className="py-3 text-xl font-bold text-black/75 dark:text-white">Ingredients: </h1>
                                <div className="flex justify-start items-center flex-wrap gap-2">

                                    {meal?.strIngredient1 && (
                                        <p className="py-3 px-4 rounded-lg cursor-pointer bg-[#f7e5c0] dark:bg-green-200 dark:text-emerald-700 text-black/75 font-medium hover:bg-orange-200 dark:hover:bg-green-300">
                                            {meal?.strIngredient1}
                                        </p>
                                    )}
                                    {meal?.strIngredient2 && (
                                        <p className="py-3 px-4 rounded-lg cursor-pointer bg-[#f7e5c0] dark:bg-green-200 dark:text-emerald-700 text-black/75 font-medium hover:bg-orange-200 dark:hover:bg-green-300">
                                            {meal?.strIngredient2}
                                        </p>
                                    )}
                                    {meal?.strIngredient3 && (
                                        <p className="py-3 px-4 rounded-lg cursor-pointer bg-[#f7e5c0] dark:bg-green-200 dark:text-emerald-700 text-black/75 font-medium hover:bg-orange-200 dark:hover:bg-green-300">
                                            {meal?.strIngredient3}
                                        </p>
                                    )}
                                    {meal?.strIngredient4 && (
                                        <p className="py-3 px-4 rounded-lg cursor-pointer bg-[#f7e5c0] dark:bg-green-200 dark:text-emerald-700 text-black/75 font-medium hover:bg-orange-200 dark:hover:bg-green-300">
                                            {meal?.strIngredient4}
                                        </p>
                                    )}
                                    {meal?.strIngredient5 && (
                                        <p className="py-3 px-4 rounded-lg cursor-pointer bg-[#f7e5c0] dark:bg-green-200 dark:text-emerald-700 text-black/75 font-medium hover:bg-orange-200 dark:hover:bg-green-300">
                                            {meal?.strIngredient5}
                                        </p>
                                    )}
                                    {meal?.strIngredient6 && (
                                        <p className="py-3 px-4 rounded-lg cursor-pointer bg-[#f7e5c0] dark:bg-green-200 dark:text-emerald-700 text-black/75 font-medium hover:bg-orange-200 dark:hover:bg-green-300">
                                            {meal?.strIngredient6}
                                        </p>)}
                                    {meal?.strIngredient7 && (
                                        <p className="py-3 px-4 rounded-lg cursor-pointer bg-[#f7e5c0] dark:bg-green-200 dark:text-emerald-700 text-black/75 font-medium hover:bg-orange-200 dark:hover:bg-green-300">
                                            {meal?.strIngredient7}
                                        </p>)}
                                    {meal?.strIngredient8 && (
                                        <p className="py-3 px-4 rounded-lg cursor-pointer bg-[#f7e5c0] dark:bg-green-200 dark:text-emerald-700 text-black/75 font-medium hover:bg-orange-200 dark:hover:bg-green-300">
                                            {meal?.strIngredient8}
                                        </p>
                                    )}
                                    {meal?.strIngredient9 && (
                                        <p className="py-3 px-4 rounded-lg cursor-pointer bg-[#f7e5c0] dark:bg-green-200 dark:text-emerald-700 text-black/75 font-medium hover:bg-orange-200 dark:hover:bg-green-300">
                                            {meal?.strIngredient9}
                                        </p>
                                    )}
                                </div>


                            </div>
                        </div>

                    )
                })}
                <ScrollingUpIcon />
            </div>
        </>
    )
}
