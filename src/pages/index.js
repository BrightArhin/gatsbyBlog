import React from 'react'
import Layout from '../components/layout/layout.component'
import Head from '../components/head'

const IndexPage = ()=>{
    return(
        <Layout>
            <Head title='Home'/>
            <h2>Hello</h2>
            <p>Gatsby for starters</p>
        </Layout>
    )
}

export default IndexPage