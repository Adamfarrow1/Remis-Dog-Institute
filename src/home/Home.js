import { useWindowSize } from 'usehooks-ts'

import Header from '../Header/Header'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
window.addEventListener('load', function() { AOS.init(); });

const Home = () => {


    const { width, height } = useWindowSize()

    const styles = 'align-self-center text-center d-flex flex-column justify-content-center align-items-center'
    const subheadingStyle = 'home-h1 text-center font-fm'


    return ( 
        <div className='home' >
            <Header></Header>
            <div className=" text-center row align-items-center height">
                    <div className= { width <= 1210  ? styles : styles + " col-6" } data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000" >
                        {width <= 600  ? <><h1 className='home-h1 text-center font-fm'>Remi's Dog Training Insitute</h1></> : ''}
                        <h1 className={width <= 600 ? subheadingStyle + ' subheading-mobile' : subheadingStyle}>"A Trained Dog is a Happy Dog!"</h1>
                        <p className='text-center home-text-width font-fm'>Welcome to the Remi's Dog Training Institute! We are excited to offer our new dog training program to the community. Our program is designed to help dogs and their owners live happier, healthier, and more harmonious lives. We believe that all dogs are capable of learning and that every dog-owner relationship can be improved with the right training. Our program is based on positive reinforcement and teaches dogs basic obedience commands, as well as more advanced skills. We are committed to providing our clients with the highest quality of service and education. We invite you to learn more about our program and to schedule a free consultation. We look forward to meeting you and your furry friend!</p>
                    </div>
            </div>
        </div>
     );
}
 
export default Home;