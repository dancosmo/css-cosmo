import './Circle.css';
import Control from '../../Buttons/Control/Control';
import Select from '../../Buttons/Timing/Select';
import styled, { Keyframes } from 'styled-components';
import { circular } from '../keyframes/Keyframes';
import { useState } from 'react';


const timingOptions = ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'cubic-bezier']
const motionOptions = ['circular', 'vertical', 'horizontal']

const StyledCircle = styled.div<{speed:number, timing:string, motion:Keyframes}>`
    width: 25%;
    height: 25%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-color: #c62368;
    animation: ${props => props.motion} ${props => props.speed}s ${props => props.timing} forwards infinite;
`

const Circle = () => {

const [ speed, setSpeed ] = useState(1);
const [ timing, setTiming ] = useState('linear');
const [ motion, setMotion ] = useState(circular);

    return (
        <>
            <div className='controls'>
                <Control name='Speed' setSpeed={setSpeed} />
                <Select setTiming={setTiming} options={timingOptions}/>
                <Select setMotion={setMotion} options={motionOptions}/>
            </div>
            <div className='unit'>
                <StyledCircle motion={motion} speed={speed} timing={timing}/> 
            </div>
        </>
    );

}

export default Circle;