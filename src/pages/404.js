import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout/layout.component'
import Head from '../components/head'

const NotFound = ()=>{
    return (
        <Layout>
            <Head title="404"></Head>
            <h2>Page Not found</h2>
            <Link to="/"><p>Head Home</p></Link>
        </Layout>
    )
}

export default NotFound