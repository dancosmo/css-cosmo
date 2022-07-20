import { Dispatch, SetStateAction } from 'react';
import './Control.css';

type ControlProps = {
    setSpeed:Dispatch<SetStateAction<number>>,
    name:string,
}

const Control = ({setSpeed, name}: ControlProps) => {

    return (
        <div className='control'>
            <span className='name'>{name}</span>
            <button className='minus' type="button" name={name} onClick={() => setSpeed(speed => speed >= 2 ? speed + 0 : speed + 0.2)}>-</button>
            <button className='plus' type="button" name={name} onClick={() => setSpeed(speed => speed <= 0.3 ? speed - 0 : speed - 0.2)}>+</button>
        </div>
    );
}

export default Control;