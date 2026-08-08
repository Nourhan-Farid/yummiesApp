import React from 'react'
import { Link } from 'react-router-dom'


export default function CardDesign({ category }) {

  return (
    <>
      <div className="card shadow-xl rounded-3xl border-2 border-orange-100 dark:border-[#004852] relative overflow-hidden">
        <figure>
          <img src={category?.strCategoryThumb} className="rounded-3xl object-cover w-full" alt={category?.strCategory} />
        </figure>
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-2">{category?.strCategory}</h2>
            <p className="mb-4 text-sm line-clamp-3 max-w-72 text-start mx-auto">{category?.strCategoryDescription}</p>
            <button className="rounded-full bg-red-500 hover:bg-red-400 w-32 h-10"><Link to={`/CategoriesDetails/${category?.strCategory}`}>Learn More</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}
