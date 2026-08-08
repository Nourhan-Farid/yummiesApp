import React, { useState } from 'react';
import { useQueries } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { Sparkles } from 'lucide-react';
import axios from 'axios';
import ScrollingUpIcon from '../ScrollingUpIcon/ScrollingUpIcon';
import SearchGrid from '../SearchGrid/SearchGrid';
import SkeletonCard from '../SkeletonCard/SkeletonCard';
import NoDataFound from '../NoDataFound/NoDataFound';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [query, setQuery] = useState('');
    const [searchTermLetter, setSearchTermLetter] = useState('');
    const [queryLetter, setQueryLetter] = useState('');
    const inpValue = document.getElementById('inpValue');
    const inpValue2 = document.getElementById('inpValue2');

    async function searchByLQuery() {
        if (!searchTermLetter) return [];
        if (searchTermLetter) {
            inpValue2.value = '';
            setSearchTerm('');
            setQuery('');
        }
        const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchTermLetter}`,
        );

        console.log(response?.data?.meals);

        return response?.data?.meals ?? [];
    }

    async function searchByMNQuery() {
        if (!searchTerm) return [];

        if (searchTerm) {
            inpValue.value = '';
            setSearchTermLetter('');
            setQueryLetter('');
        }
        const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
        );

        console.log(response?.data?.meals);

        return response?.data?.meals ?? [];
    }
    const results = useQueries({
        queries: [
            {
                queryKey: ['mealsNames', searchTerm],
                queryFn: searchByMNQuery,
                enabled: Boolean(searchTerm),
            },
            {
                queryKey: ['mealsFLetter', searchTermLetter],
                queryFn: searchByLQuery,
                enabled: Boolean(searchTermLetter), // only run when searchTerm is not empty
            },
        ],
    })

    const mealsNameQuery = results[0];
    const mealsLetterQuery = results[1];

    // console.log(mealsNameQuery);
    // console.log(mealsLetterQuery);


    if (mealsNameQuery.isLoading || mealsLetterQuery.isLoading) {
        return <SkeletonCard />;
    }

    if (mealsNameQuery.error || mealsLetterQuery.error) {
        return <p className="text-center mt-4 text-2xl font-semibold text-red-500">Unable to load meals right now.</p>;
    }

    if (searchTermLetter == "x" || searchTermLetter == "X") {
        return <NoDataFound pathName="search" />;
    }
    const mealName = results[0].data || [];
    const mealLetter = results[1].data || [];

    // console.log(mealName);
    // console.log(mealLetter);

    const filtered = mealName.filter((meal) =>
        meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const handleSubmit = (event) => {
        event.preventDefault();
        setQuery(searchTerm.trim());
        setQueryLetter(searchTermLetter.trim());
    };

    return (
        <>
            <Helmet>
                <title>Search</title>
            </Helmet>
            <div className='flex flex-col items-center justify-start mx-auto max-w-screen min-h-screen rounded-3xl'>
                <h1 className="mb-5 text-center text-red-400 dark:text-white text-3xl md:text-4xl font-extrabold cursor-pointer btn btn-ghost font-['Lobster']"> “<Sparkles className="" />Find Your Dish <Sparkles className="" />” </h1>
                <div className="flex justify-center items-center flex-col text-center md:flex-row mx-auto w-full">
                    <div className="flex flex-col justify-start items-center mx-auto w-full">
                        <form onChange={handleSubmit} className="flex justify-around items-center mx-auto max-w-screen max-w-6xl w-full mt-5 mb-8 font-semibold text-black dark:text-white">

                            <div className="group me-3 flex justify-center items-center mx-auto relative w-fit overflow-hidden cursor-pointer bg-gradient-to-b from-[#ff8d8d] to-[#ffcfcf] dark:from-[#0ded84] dark:to-[#3ea575] shadow-md shadow-[#00000013] rounded-2xl">
                                <input
                                    id="inpValue"
                                    type="text"
                                    maxLength={1}
                                    placeholder="Start with a letter"
                                    value={searchTermLetter}
                                    onChange={(event) => setSearchTermLetter(event.target.value)}
                                    className="py-2 m-1 ps-4 rounded-xl w-full transition-all duration-200 bg-[#f1f1e6] dark:bg-[#001E29] text-black dark:text-white/85 text-lg border-none outline-none " />

                            </div>
                            <div className="group flex justify-center items-center mx-auto relative w-full overflow-hidden cursor-pointer bg-gradient-to-b from-[#ff8d8d] to-[#ffcfcf] dark:from-[#0ded84] dark:to-[#3ea575] shadow-md shadow-[#00000013] rounded-2xl">
                                <input
                                    id="inpValue2"
                                    type="text"
                                    placeholder="Search by meal name"
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                    className="py-2 m-1 ps-4 rounded-xl w-full transition-all duration-200 bg-[#f1f1e6] dark:bg-[#001E29] text-black dark:text-white/85 text-lg border-none outline-none " />

                            </div>
                        </form>

                        {filtered && <div className={queryLetter ? "hidden z-[100]" : "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-2 px-0 md:px-0 lg:px-6 xl:px-9 z-0"}>
                            {filtered?.map((meal) => {
                                return (
                                    <SearchGrid meal={meal} />
                                )
                            })} </div>
                        }
                        {mealLetter && <div className={query ? "hidden z-[100]" : "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-2 px-0 md:px-0 lg:px-6 xl:px-9 z-0"}>
                            {mealLetter?.map((meal) => {
                                return (
                                    <SearchGrid meal={meal} />
                                )
                            })}
                        </div>}
                    </div>
                </div>

                <ScrollingUpIcon />
            </div>

        </>
    );
}
