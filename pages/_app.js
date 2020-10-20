import React from "react"
import '../styles/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {AuthProvider} from '../lib/AuthContext'

import '../styles/FooterStyle.css'
import '../styles/HeaderStyle.css'
import '../styles/StaticsStyle.css'
import '../styles/IndexStyle.css'

const App= ({Component, pageProps}) =>{
return (

    <AuthProvider>
        <div>
            <Header />
            
            <div className='min-h-screen container mx-auto'>
                <Component {...pageProps} />
            </div>
            
            <div>
                <Footer />
            </div>
        
        </div>
    </AuthProvider>
)}
export default App;