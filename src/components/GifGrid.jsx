import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifts } from "../hooks/useFetchGifts";



export const GifGrid = ({ category }) => {


   const { images, isloading } = useFetchGifts( category );


   
   return (
      <>
         <h3>{ category }</h3>

         {
            isloading && (<h2>Cargando...</h2>)
         }
         
         <div className="card-grid">
            {
               images.map( ( image ) => (
                  <GifItem 
                     key= { image.id } 
                     { ...image }
                  />
               ))
            }
         </div>
      </>
   )
}