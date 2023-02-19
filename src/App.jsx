import React from 'react'
import { Screen } from './screen/Screen'
import { Header } from './themer/Header'

export const app = () => {
    return (
        <main className='__container'>
            <Header />
            <Screen />
        </main>
    );
};
