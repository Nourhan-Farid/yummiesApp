import React, { useEffect, useMemo, useState } from 'react'

export default function ModeToggle() {
    const getInitialTheme = useMemo(() => {
        const saved = window.localStorage.getItem('theme');
        return saved === 'light' || saved === 'dark' ? saved : 'light';
    }, []);

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        window.localStorage.setItem('theme', theme);

        const root = window.document.documentElement;
        // DaisyUI/Tailwind typically uses a single `dark` class on <html>
        root.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const handleModeSwitch = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }



    return (
        <>
            <div className="flex justify-end items-center my-1 z-10">
                <div className=" bg-transparent">
                    <button onClick={handleModeSwitch} className="btn btn-ghost h-12 w-12 rounded-full p-1 pt-1 hover:bg-[#d6f1eb] dark:hover:bg-[#328477] border-2 border-transparent hover:border-[#d6f1eb] dark:hover:border-[#328477]">
                        <svg className="fill-[#3ea575] block dark:hidden ps-1 rotate-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                        {/* [#ffff2c] */}
                        <svg className="fill-red-400 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

            </div>

        </>

    )
}
// #4608a2