import React from 'react';
import { ToggleSwitch } from './comonents/ToggleSwitch';

export const Header = () => {
    return (
        <section className='__deader'>
            <div className='title'>
                <h1>Calculator</h1>
            </div>

            <div className='content__togle'>
                <div className='title__theme'>
                    <p>Theme</p>
                </div>
                <ToggleSwitch />
            </div>
        </section>
    );
};