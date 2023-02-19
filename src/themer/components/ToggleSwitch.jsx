import React from 'react';
import { Toggle } from './Toggle';

const themes = ["theme1", "theme2", "theme3"];

export const ToggleSwitch = () => {

    return (
        <div className='coontainer__toggle_switch'>
            <section className='numberToggle'>
                <p>I</p>
                <p>II</p>
                <p>III</p>
            </section>
            <section className='__toggle'> {
                thermes.map((item, index, array) => {
                    return (
                        <Toggle key={item} item={item} array={array}/>
                    )
                })
            }
            </section>
        </div>
    );
};