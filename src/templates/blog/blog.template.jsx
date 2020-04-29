import React from 'react'
import Layout from '../../components/layout/layout.component'
import { graphql} from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Head from '../../components/head'


export const query = graphql`
    query($slug : String!){
        contentfulBlogPost(
                slug:{
                    eq : $slug
                }
            
    ){
      title
      publishedDate(formatString : "MMMM Do YYYY")
      body{
          json
      }
    
  }
}
`

const Blog= (props)=>{
    const {title, publishedDate, body: {json}} = props.data.contentfulBlogPost
    const options = {
        renderNode : {
            "embedded-asset-block" : (node)=>{
                const alt = node.data.target.fields.title['en-Us']
                const url = node.data.target.fields.file['en-US'].url
                return <img src={url} alt={alt}/>
            }
        }
    }
    return(

        <Layout>
            <Head title={title}></Head>
           <h3>{title}</h3>
           <p>{publishedDate}</p>
           {/* <div dangerouslySetInnerHTML={{__html : html}}></div> */}
           {documentToReactComponents(json, options)}
        </Layout>
    )
}

export default Blog