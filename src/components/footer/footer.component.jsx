import React from 'react'
import footerStyle from './footer.module.scss'

const Footer = ({author})=> {
    return (
        <footer className={footerStyle.footer}>
            <p>Created by  {author} © 2020</p>
        </footer>
    )
}

export default Footer