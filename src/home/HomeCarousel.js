import Carousel from 'react-bootstrap/Carousel';
import dog1 from '../images/dog-img-1.webp'
import dog2 from '../images/dog-img-2.webp'
import dog3 from '../images/dog-img-3.webp'

const HomeCarousel = () => {
    return ( 
        <div className=" mb-5 mt-5 homeCarousel row align-items-center justify-content-around ">

            <p className='carousel-h1 text-center underline mb-5'>What We Offer</p>
            <div className='col-4'>
                <Carousel interval={4000} variant="dark" className='carousel Width mx-auto'>
                    <Carousel.Item>
                        <img className="d-block mx-auto homeCarousel img" src={dog1} alt="first image" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block mx-auto homeCarousel img" src={dog2} alt="first image" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block mx-auto homeCarousel img" src={dog3} alt="first image" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='col-6'>
                <div className='row justify-content-between align-items-center'>
                    <div className='shadow info-cta col-5'>
                        <p className='info-header mb-5 mt-2'>Wedding Care</p>
                        <p>Need a helping paw on your wedding day? Check out the Wedding Pet Care Service!</p>
                        <p className='mt-5 mx-auto carousel-cta info-header'>Read More</p>
                    </div>
                    <div className=' shadow info-cta col-5'>
                        <p className='info-header mb-5 mt-2'>Puppy Basics</p>

                        <p>Basic obedience, Potty Training, Leash manners, Crate training, Socialization, and much more!</p>
                        <p className='mt-5 mx-auto carousel-cta info-header'>Read More</p>
  
                    </div>
                </div>

                <div className='row justify-content-center mt-3'>
                    <div className=' shadow info-cta-obedience mt-3 col-5 text-center'>
                        <p className='info-header-obedience mt-2 '>Obedience</p>

                        <p>Including a variety of different levels of training including basic commands such as  sit, down, stay, come, and heel flawlessly. Or a more advanced package such as opening up a refrigerator door, picking up small items, and even closing doors, ETC. </p>
                        <p className='mx-auto carousel-cta info-header'>Read More</p>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default HomeCarousel;