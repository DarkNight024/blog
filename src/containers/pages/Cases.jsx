import CasesList from "components/cases/CasesList"
import Header from "components/cases/Header"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"

import { Helmet } from 'react-helmet-async';

function Cases() {
    useEffect(() => { 
        window.scrollTo(0, 0)
    },[])
    return (
        <Layout>
            
            <Helmet>
                <title>Murkiva | Case Studies</title>
                <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de apps" />
                <meta name="keywords" content='agencia de marketing, agencia de software, creacion de pagina web' />
                <meta name="robots" content="all" />
                <meta name="author" content="Murkiva" />
                <meta name="publisher" content="Murkiva" />
                <link rel="canonical" href="https://murkiva.com/" />

                {/* social media Tags */}
                <meta property="og:title" content="Murkiva | Software Agency" />
                <meta property="og:description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de apps" />
                <meta property="og:url" content="https://murkiva.com/" />
                <meta property="og:image" content="https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg" />

                {/* Twitter Tags */}
                <meta name="twitter:title" content="Murkiva | Software Agency" />
                <meta 
                name="twitter:description" 
                content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de apps" />
                <meta name="twitter:image" content="https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <Navbar/>
            <div className="pt-28">
                <Header/>
                <CasesList/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Cases