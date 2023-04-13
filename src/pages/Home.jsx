import React from 'react'
import { nanoid } from 'nanoid'
import Bilboard from '../components/UI/Bilboard'
import { movieCategories } from '../assets/data/category'
import Carousel from '../components/UI/Carousel'

function Home() {

  return (
    <>
      <Bilboard url={process.env.REACT_APP_NETFLIX_ORIGINAL} />
      <div >
        {movieCategories.map(item => <Carousel key={nanoid()} {...item} />)}
      </div>
    </>
  )
}

export default Home