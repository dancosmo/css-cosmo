import './Home.css';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Circle from '../Main/animation-units/Circle';
import dune1 from '../../svg/layered-waves-haikei-1.svg';
import dune2 from '../../svg/layered-waves-haikei-2.svg';
import dune3 from '../../svg/layered-waves-haikei-3.svg';

const backgroundImages = {
    main1: dune1,
    main2: dune2,
    main3: dune3,
}

const Home = () => {
    return (
        <div className='container'>
            <Navbar/>
            <Main dune={backgroundImages.main1} animation={Circle()}/>
            <Main dune={backgroundImages.main2} animation={Circle()}/>
            <Main dune={backgroundImages.main3} animation={Circle()}/>
            <Footer/>
        </div>
    );
}

export default Home;