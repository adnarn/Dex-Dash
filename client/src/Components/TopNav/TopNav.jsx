import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./TopNav.module.css"
import SearchBar from '../SearchBar'


const TopNav = () => {
  return (
    <nav className={styles.TopNav}>
        <h5 className={styles.dashName}>Dex Dash</h5>
        {/* <SearchBar /> */}
              <div className={styles.button}>
                {/* <Link to= 'login'>  
                      <button className='btn btn-success'>Login</button>
                </Link> */}
    
              </div>
    </nav>
  )
}

export default TopNav