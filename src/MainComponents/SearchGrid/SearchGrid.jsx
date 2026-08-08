import React from 'react'
import { MapPin, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SearchGrid({ meal }) {
    return (
        <>
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
        </>
    )
}
