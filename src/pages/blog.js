import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Layout from '../components/layout/layout.component'
import blogStyles from './blog.module.scss' 
import Head from '../components/head'


const Blog = ()=>{
    const data = useStaticQuery(graphql`
        query{
            allContentfulBlogPost(sort :{
                fields: publishedDate,
                order : DESC
            }){
                edges{
                    node{
                         title
                         publishedDate(formatString : "MMMM Do YYYY")
                         slug
     
        }
    }
}
}
    `)
    
    return(
       <Layout>
           <Head title="Posts"></Head>
           <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {
                    data.allContentfulBlogPost.edges.map(edge => {
                        const { title, publishedDate, slug} = edge.node
                        return(
                            <li className={blogStyles.post} key={slug}> 
                                <Link to={`/blog/${slug}`}>
                                    <h2>{title}</h2>
                                    <p>{publishedDate}</p>
                                </Link>
                               
                            </li>
                        )
                    })
                }
            </ol>
       </Layout>
    )
} 

export default Blog