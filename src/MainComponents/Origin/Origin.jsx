import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import ScrollingUpIcon from '../ScrollingUpIcon/ScrollingUpIcon';
import { Link } from 'react-router-dom';
import { ChevronsRight, Plane, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet';



export default function Origin() {
    let idOrigin = window.location.pathname.split('/')[2];

    async function countriesFlagsApiFn() {
        const apiCountries = await axios.get(`https://countriesnow.space/api/v0.1/countries/flag/images`);
        console.log(apiCountries?.data?.data);
        const uniqueCountries = apiCountries?.data?.data;
        uniqueCountries[35].flag = uniqueCountries[35].flag.replace("https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg", "https://flagcdn.com/cv.svg");
        uniqueCountries[42].flag = uniqueCountries[42].flag.replace("https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Cocos_%28Keeling%29_Islands.svg", "https://flagcdn.com/cc.svg");
        uniqueCountries[87].flag = uniqueCountries[87].flag.replace("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Flag_of_Vatican_City_%282023%E2%80%93present%29.svg/800px-Flag_of_Vatican_City_%282023%E2%80%93present%29.svg.png", "https://flagcdn.com/va.svg");
        uniqueCountries[173].flag = uniqueCountries[173].flag.replace("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg/1080px-Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg.png", "https://flagcdn.com/st.svg");

        return uniqueCountries ?? [];
    }

    const { data: countriesFlagsData = [], isLoading, error } = useQuery({
        queryKey: ['countriesFlags'],
        queryFn: countriesFlagsApiFn,
    });


    if (isLoading) {
        return <LoadingScreen />;
    }
    if (error) {
        return <p className="text-center mt-4 text-2xl font-semibold text-red-500">Unable to load meals right now.</p>;
    }
    // console.log(countriesFlagsData);

    return (
        <>


            <Helmet>
                <title>Origin</title>
            </Helmet>


            <div className='flex flex-col items-center justify-center mx-auto w-full min-h-screen rounded-3xl'>
                <h1 className="mb-5 md:mb-10 px-2 py-2 text-center text-red-400 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold cursor-pointer btn btn-ghost w-max h-max font-['Lobster']">“<Sparkles className="" />Flavors of Every Nation <Sparkles className="" />”</h1>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto gap-5 px-0">
                    {countriesFlagsData?.map((country) => {
                        return (
                            <div key={country?.name} className="card shadow-xl w-48 h-40 rounded-3xl border-2 text-red-400 dark:text-white/65 border-orange-100 dark:border-[#004852] cursor-pointer relative overflow-hidden">
                                <figure>
                                    <img
                                        src={country?.flag}
                                        alt={country?.name}
                                        className="w-full h-40 rounded-3xl object-cover"
                                    />
                                </figure>

                                <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl">
                                    <div className="flex flex-col justify-evenly items-center mx-auto mb-1">
                                        <div className="flex justify-center items-center mx-auto mb-2 text-white">
                                            <Plane />
                                            <h2 className="ms-1 text-center mx-auto text-lg font-bold">{country?.name}</h2>
                                        </div>
                                        <div className="flex justify-center items-center mx-auto mt-2">
                                            <Link to={`/originDetails/${country?.name}`} className="rounded-full flex justify-center items-center mx-auto text-white bg-red-500 hover:bg-red-400 w-28 h-10 mb-0.5">More <ChevronsRight className='ms-1' /></Link>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        )
                    })}
                    <ScrollingUpIcon />
                </div >
            </div >

        </>
    )
}
