import React, { Dispatch, SetStateAction } from 'react';
import { Keyframes } from 'styled-components';
import { circular, vertical } from '../../Main/keyframes/Keyframes';

import './Select.css'

interface motion {
    [key:string]:Keyframes,
}

const motions: motion = {'circular':circular, 'vertical':vertical};

type SelectProps = {
    setTiming?: Dispatch<SetStateAction<string>>,
    setMotion?: Dispatch<SetStateAction<Keyframes>>
    options:string[],
}

const Select = ({setTiming, setMotion, options}: SelectProps) => {

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        if(setTiming) {
            setTiming(e.target.value);
        }
        else if(setMotion){
            setMotion(motions[e.target.value]);
        }
    }

    return (
        <div className='timing'>
            <select onChange={(e) => handleChange(e)}>
                {options ? (options.map((element,index) => {
                    return <option key={element} value={element}>{element}</option>
                })) : (null)}
            </select>
        </div>
    );
}

export default Select;