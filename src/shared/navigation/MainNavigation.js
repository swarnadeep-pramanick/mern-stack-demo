import React, {useState} from 'react'

import './MainNavigation.css'
import  MainHeader  from './MainHeader'
import NavLinks from './NavLinks'
import { Link } from 'react-router-dom'
import SideDrawer from './SideDrawer'
import Backdrop from '../components/UIElemetns/Backdrop'

const MainNavigation = (props) => {
  const [drawerIsOpen,setDrawerIsOpen] = useState(false)
  const openDrawerHandler = () => {
    if(!drawerIsOpen){
      setDrawerIsOpen(true)
    }
    else{
      setDrawerIsOpen(false)
    }
  }
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false)
  }
  return (
    <React.Fragment>
      {drawerIsOpen ? <Backdrop onClick={closeDrawerHandler} /> : null}
       (<SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
      <nav className='main-navigation__drawer-nav'>
        <NavLinks />
      </nav>
    </SideDrawer>)
    <MainHeader>
        <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <h1 className='main-navigation__title'>
           <Link to='/'>Places</Link> 
        </h1>
        <nav className='main-navigation__header-nav'>
            <NavLinks />
        </nav>
    </MainHeader>
    </React.Fragment>
  )
}

export default MainNavigation