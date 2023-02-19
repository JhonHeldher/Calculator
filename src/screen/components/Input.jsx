import React, { useStade, useEffect } from 'react'
import { Board } from '../Board'
import { calculateExpretion } from '../helpers/Calculate'

export const Input = () => {
    const [input, setinput] = useState([]);
    const onChangeInput = (event) => {
        setinput(event.target.value);
    };

    const captureBoard = (item) => {
        "DEL" === item ? setinput(input.slice(0,-1))
            : "REAET" === item ? setinput([])
                :"=" === item ? setinput(input.slice(0, input.length))
                    : setinput([...input, item]);

        if (item === "=") {
            console.log(input);
            let result = calculateExpretion(input);
            setinput([result])
        }
    };

    return (
        <> 
            <section className='__screen'>
                <section className='input__screen'> {}
                <p>{
                    input.join("")}
                </p>
                </section>
            </section>
            <Board calculation={captureBoard}/>
        </>
    );
};