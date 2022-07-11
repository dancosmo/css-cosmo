
import { ReactElement } from 'react';
import './Main.css'

type MainProps ={
    dune: string;
    animation: ReactElement;
}

const Main = ({ dune, animation }:MainProps) => {

    return (
        <main style={{backgroundImage: `url(${dune})`}}>
            <div className='animation-container'>    
                    {animation}
            </div>
            <div className='code-showcase'>
                Code
            </div>
        </main>
    );
}

export default Main;