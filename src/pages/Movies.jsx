import React from 'react'
import Bilboard from '../components/UI/Bilboard'
// import Carousel from '../components/UI/Carousel'
import { movieCategories } from '../assets/data/category'
import { nanoid } from 'nanoid'
import Carousel from '../components/UI/Carousel'


function Movies() {


  return (
    <>
      <Bilboard url={process.env.REACT_APP_NETFLIX_ORIGINAL} />
      <div>
        {movieCategories.map(item => <Carousel key={nanoid()} {...item} />)}
      </div>
      
    </>
  )
}

export default Movies