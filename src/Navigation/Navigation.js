import React,{Component} from 'react'
import { NavLink } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import './Navigation.css';
import { connect } from 'react-redux'
import { addToCart} from '../Store/action'
import { useSelector } from 'react-redux'

const Navigation = (props) => {

    const items = useSelector(state => state.addedItems.quantity)

    return (
        <header className="main-header">
          <nav>
            <ul>
            <li>
            <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
        </div>
            </li>
             <li>
                <NavLink to="/" exact>Home</NavLink>
              </li>
              <li>
                <NavLink to="/Cart">Cart</NavLink>
              </li>
              <li>
              <div className="header_basket">
              <ShoppingBasket />
              <span className="header_optionLineTwo header_basketcount">{items}</span>
              </div>
              </li>
            </ul>
          </nav>
        </header>
      );
}



export default (Navigation);