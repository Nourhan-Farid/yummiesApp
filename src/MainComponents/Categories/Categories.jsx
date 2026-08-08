import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import CardDesign from '../CardDesign/CardDesign';
import axios from 'axios';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import ScrollingUpIcon from '../ScrollingUpIcon/ScrollingUpIcon';
import { Helmet } from 'react-helmet';
import { Sparkles } from 'lucide-react';

export default function Categories() {

    const { data: categories = [], isError, isFetching, isLoading, error } = useQuery({
        queryKey: ['recentCategories'],
        queryFn: async () => {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            console.log(response?.data?.categories);
            return response?.data?.categories ?? [];
        },

    });

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <>
            <Helmet>
                <title>Categories</title>
            </Helmet>

            <div className='flex flex-col items-center justify-center mx-auto w-full min-h-screen rounded-3xl'>
                <h1 className="mb-10 text-center text-red-400 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold cursor-pointer btn btn-ghost font-['Lobster']">“<Sparkles className="" />Pick Your Plate <Sparkles className="" />”</h1>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-2 px-0">
                    {categories?.map((category, index) => {
                        return <CardDesign category={category} key={index} />
                    })}
                </div>
                <ScrollingUpIcon />
            </div>

        </>
    )
}