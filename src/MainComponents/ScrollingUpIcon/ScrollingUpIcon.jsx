import { useState } from "react";


export default function ScrollingUpIcon() {
    const [scrollTopBtn, setScrollTopBtn] = useState(false)

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    const topBtn = () => {
        if (window.scrollY >= 200) {
            setScrollTopBtn(true)
        } else {
            setScrollTopBtn(false)
        }
    }

    window.addEventListener('scroll', topBtn)

    return (
        <div>
            <button onClick={() => scrollTop()} className={scrollTopBtn ? "Btn group w-11 h-11 rounded-xl flex justify-center items-center fixed border-2 border-[#9d001b] dark:border-[#3ea575] bg-[#9d001b] dark:bg-[#3ea575] hover:bg-[#a92a35] dark:hover:bg-emerald-500 cursor-pointer bottom-4 right-2 z-[150]" : "hidden"}>
                <svg height="1em" className="arrow fill-white group-hover:animate-none" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>

            </button>


        </div>
    )
}
