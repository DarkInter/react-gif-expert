import { useState } from 'react';
import { AddCategory, GifGrid } from './components'


export const GifsExpertApp = () => {

   const [ categories, setCategories ] = useState([ 'One Punch' ]);

   const onAddCategory = ( newCategory ) => {

      if ( categories.includes(newCategory) ) return;

      setCategories([ newCategory, ...categories ])

   }


   return (
      <>
         <h1>GifsExpertApp</h1>

         <AddCategory onNewCategory={ (event) => onAddCategory(event) } />

         {
            categories.map ( ( category ) => (
               <GifGrid key={ category } category={ category }/>
            ))
         }


      </>
   )
}

