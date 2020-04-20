import React from 'react';
import NavBar from './NavBar';

const header = () => {
    return (
        <div className='bg-gray-200'>
            <h1>

            <img className='h-24 mx-auto py-4'
            src='/logo.png'
            alt='' 
            height='60'
            />
            </h1>
            <NavBar />
        </div>
    )
}

export default header;