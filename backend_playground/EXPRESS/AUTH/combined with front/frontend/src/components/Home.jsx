import classes from './Home.module.css';
import lion from '../assets/Images/lion.jpg';

const Home = () => {
    return ( 
        <div className={classes.cont}>
        <h1>Hero</h1>
        <img src={lion} alt="Image of a Lion" />
        </div>
     );
}
 
export default Home;

