import React from 'react'
import '../../styles/index.scss'
import Header from '../header/header.component'
import Footer from '../footer/footer.component'
import layoutStyles from './layout.module.scss'
import {useStaticQuery, graphql} from 'gatsby'



const Layout = (props)=>{
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
                author
            }
        }
    }
`)

const {title, author} = data.site.siteMetadata

    return(
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header title={title}/>
                {props.children}
            </div>
            <Footer author = {author}/>
        </div>
    )

}

export default Layout