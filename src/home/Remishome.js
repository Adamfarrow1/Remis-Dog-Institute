import Carousel from 'react-bootstrap/Carousel';
import dog1 from '../images/dog-img-1.webp'
import dog2 from '../images/dog-img-2.webp'
import dog3 from '../images/dog-img-3.webp'
import { Link } from 'react-router-dom';


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
window.addEventListener('load', function() { AOS.init(); });

const Remishome = () => {
    return ( 
        <div className="remis-height mx-auto text-center pink" data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
            <p className='carousel-h1 text-center underline mb-5 pt-2'>Remi's Story</p>

            <div className='row align-items-center justify-content-around pink'>
                <div className='col-12 col-lg-5'>
                    <Carousel fade interval={5000} variant="dark" className=''>
                        <Carousel.Item>
                            <img className="d-block mx-auto homeCarousel img-spc pink" src={dog1} alt="first image" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block mx-auto homeCarousel img" src={dog2} alt="first image" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block mx-auto homeCarousel img" src={dog3} alt="first image" />
                        </Carousel.Item>
                    </Carousel>
                </div> 


                <div className='col-12 col-lg-6 remis-text-border shadow'>
                    <div className='remis-container mx-auto'>
                        <p className='text-center font-fm remis-text'>Hey there!<br/> It's me, Remi! I'm the face you may see all over this site.  My mom says I am her world, not sure what that means but I love her and I always give her the best kisses. She says I was her MUSE! Check out my legacy story down below!</p>
                        <Link to="/remis-story" className='td-none'><p className='story-cta remis-text remis-cta mx-auto text-center mt-5'>Remi's Legacy Story</p></Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Remishome;