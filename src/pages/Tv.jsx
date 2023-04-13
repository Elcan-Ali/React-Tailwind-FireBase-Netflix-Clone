import React from 'react'
import Bilboard from '../components/UI/Bilboard'
import { nanoid } from 'nanoid'
import { tvCtegories } from '../assets/data/category'
import Carousel from '../components/UI/Carousel'

function Tv() {


  return (
    <>
      <Bilboard url={process.env.REACT_APP_TV_PAGE4_URL} />
      <div >
        {tvCtegories.map(item => <Carousel key={nanoid()} {...item} />)}
      </div>
    </>
  )
}

export default Tv