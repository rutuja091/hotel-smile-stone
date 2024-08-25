import React from 'react'
import "./Home.css"
import FoodCard from '../../components/FoodCard/FoodCard'

import { PRODUCTS,MAIN_TITLE,THEME} from '../../config/data'


function Home() {
  return (<>
  <div className='title'>
 
   <p  className = "hotel-Heading" style={{Color: THEME.tartiary}}>{MAIN_TITLE}</p>
 
   
   </div>
  
 <div className='Food-card-Container'>

   {PRODUCTS.map((foodItem)=>{

         
   return <FoodCard
   title = {foodItem.title}
   description ={foodItem.description}
   price = {foodItem.price}
   imgUrl={foodItem.imgUrl}
   isveg = {foodItem.isveg}
   />
   })}


   </div>
   </>)
}

export default Home