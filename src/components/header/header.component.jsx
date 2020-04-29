import React from 'react'
import {Link} from 'gatsby'
import  headerStyle from './header.module.scss'

const Header = ({title})=> {

    return (
        <header className={headerStyle.header}>
            <h1>
               <Link className={headerStyle.title} to="/">
                    {title}
               </Link> 
            </h1>
            <nav>
            <ul className={headerStyle.nav_list}>
                <li><Link className={headerStyle.nav_item} activeClassName={headerStyle.active_nav_item} to="/">Home</Link></li>
                <li><Link className={headerStyle.nav_item} activeClassName={headerStyle.active_nav_item} to="/blog">Blog</Link></li>
                <li><Link className={headerStyle.nav_item} activeClassName={headerStyle.active_nav_item} to="/about">About</Link></li>
                <li><Link className={headerStyle.nav_item} activeClassName={headerStyle.active_nav_item} to="/contact">Contact</Link></li>    
            </ul>
            </nav>
            
        </header>
    )
}

export default Header