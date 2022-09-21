import { AppBar, Toolbar, Link } from '@material-ui/core'
import logo from './logo_recipegacha.png' 
import React from 'react'


const Header = () => {
  return (
    <div className='header'>
      <AppBar position="static" color="default">
          <Toolbar>
            <Link to='/'>
              <img src={logo} alt="RecipeGacha(レシピガチャ)" height="36" width="auto"/>
            </Link>
          </Toolbar>
      </AppBar>
   </div>
 
  )
}

export default Header;
