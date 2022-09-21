import './App.css';
import categoryJson from "./category_list.json"
import { useState, useEffect } from 'react'
import Header from './components/Header';
import Selector from './components/Selector';
import Recipes from './components/Recipes';

const RECIPE_API_URL = "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1075480986207789165&categoryId=30";

function App() {
  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    fetch(RECIPE_API_URL)
      .then(res => res.json())
      .then(data => {
        setCategoryData(data.result);
      });
  },[]);

  const getCategoryData = () => {
    setIsLoading(true);
    fetch(`https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1075480986207789165&categoryId=${category}`)
      .then(res => res.json())
      .then(data => {
        setCategoryData(data.result);
        setTimeout(() => {
          setIsLoading(false);
        },1500);
      })
  }
  return (
    <div className='App'>
      <Header />
      <Selector categoryJson={categoryJson} setCategory={setCategory} getCategoryData={getCategoryData}
      isLoading={isLoading}
      />
      <Recipes categoryData={categoryData} />    
    </div>
  );
}

export default App;
