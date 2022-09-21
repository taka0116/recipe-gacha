import gacha from './gacha.jpeg'
import React from 'react'


const Selector = (props) => {
  return (
    <div>
      <div className='selector_container'>
        <select onChange={(e) => props.setCategory(e.target.value)}>
          <option>カテゴリを選んでください</option>
          {props.categoryJson.map((category, index) =>
            <option key={index} value={category.categoryId}>{category.categoryName}</option>
            )}
        </select>
        <button onClick={props.getCategoryData}>Gacha!</button>
      </div>
      <div className='selector_loading'>
        {props.isLoading && (
        <div className='selector_loading_img'>
          <img  src={gacha} alt=""/>
        </div>
        )}
      </div>
    </div>
  )
}

export default Selector
