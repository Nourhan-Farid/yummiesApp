import React from 'react';
import styles from "./SkeletonCard.module.css";

export default function SkeletonCard() {
    return (
        <>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-5 px-0 md:px-0 lg:px-6 xl:px-9 mt-10">

                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="card shadow-xl bg-[#f1f1e6] dark:bg-[#004852] rounded-3xl border-2 border-orange-100 dark:border-[#006d6b] relative overflow-hidden">


                        <div className="flex justify-center items-center mx-auto w-full h-80 bg-[#f1f1e6] dark:bg-[#004852] relative rotate-12 skew-y-12">
                            <div className={`absolute w-16 h-[800px]  ${styles.animateShimmer} bg-gradient-to-br from-transparent via-white/50 to-transparent dark:bg-gradient-to-br dark:from-transparent dark:via-[#0b555f] dark:to-transparent`}></div>
                        </div>

                    </div>
                ))}

            </div >

        </>
    )
}
