import React from 'react'
import styles from "./SideNav.module.css"
import {Link} from 'react-router-dom'
import profilePic from './profilePic.jpeg'
import { FaArrowRight, FaClipboardList, FaCog, FaHome, FaPlus, FaUser, FaUserEdit } from 'react-icons/fa'

const SideNav = () => {
  return (
    <aside className={styles.SideNav}>
        <Link to = '/profile'>
                  <div><img src={profilePic} className={styles.img} /></div>
          </Link>
          
          <div className={styles.center}> 

          <Link to = '/'>
                    <div ><FaHome className={styles.icons}/></div>
          </Link>

          <Link to = '/add'>
                    <div ><FaPlus className={styles.icons} /> </div>
            </Link>

            <Link to = '/clipBoard'>
                    <div ><FaClipboardList className={styles.icons} /></div>
            </Link>

            <Link to = '/profile'>
                    <div ><FaUser className={styles.icons} /></div>
              </Link>

              <Link to = '/settiings'>
                    <div ><FaCog className={styles.icons} /></div>
              </Link>
          </div>

                <div><FaArrowRight className={styles.icons} /></div>

    </aside>
  )
}

export default SideNav