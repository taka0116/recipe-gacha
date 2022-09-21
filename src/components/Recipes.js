import React from 'react'
import HourglassBottom from '@mui/icons-material/HourglassBottom';
import CurrencyYen from '@mui/icons-material/CurrencyYen';

const Recipes = (props) => {
  return (
    <div className='recipes'>
      <div className="recipes_container">
        {props.categoryData.map((data, index) => (
            <div className="recipe" key={index}>
              <div className='recipe_img'>
              <a href={data.recipeUrl} target="_blank" rel="noreferrer">
                <img src={data.foodImageUrl} alt="" />
              </a>
              </div> 
              <div className='recipe_detail'>
                <a href={data.recipeUrl} target="_blank" rel="noreferrer">
                  <span className='recipe_detail_title'>{data.recipeTitle}</span>
                  <span className='recipe_detail_description'>{data.recipeDescription}</span>
                  <span className='recipe_detail_material'>材料：{data.recipeMaterial}</span>
                  <div className='recipe_detail_icon'>
                    <span className='recipe_detail_icon_indication'>
                      <HourglassBottom />
                      <small>{data.recipeIndication}</small>
                    </span>
                    <span className='recipe_detail_icon_cost'>
                      <CurrencyYen />
                      <small>{data.recipeCost}</small>
                    </span> 
                  </div>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Recipes
