import Carousel from 'react-bootstrap/Carousel';
import dog1 from '../images/dog-img-1.webp'
import dog2 from '../images/dog-img-2.webp'
import dog3 from '../images/dog-img-3.webp'

const HomeCarousel = () => {
    return ( 
        <div className="homeCarousel row align-items-center justify-content-around ">

            <p className='carousel-h1 text-center underline mb-5 mt-5'>What We Offer</p>
            <div className='col-4'>
                <Carousel fade interval={5000} variant="dark" className=''>
                    <Carousel.Item>
                        <img className="d-block mx-auto homeCarousel img-spc" src={dog1} alt="first image" />
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
                        <p className='info-header mb-5 mt-2 underline'>Wedding Care</p>
                        <p className='info-text'>Need a helping paw on your wedding day? Check out the Wedding Pet Care Service!</p>
                        <p className='mt-5 mx-auto carousel-cta info-header'>Read More</p>
                    </div>
                    <div className=' shadow info-cta col-5'>
                        <p className='info-header mb-5 mt-2 underline'>Puppy Basics</p>

                        <p className='info-text'>Basic obedience, Potty Training, Leash manners, Crate training, Socialization, and much more!</p>
                        <p className='mt-5 mx-auto carousel-cta info-header'>Read More</p>
  
                    </div>
                </div>

                <div className='row justify-content-center mt-3 mb-5'>
                    <div className=' shadow info-cta-obedience mt-3 col-5 text-center'>
                        <p className='info-header-obedience mt-2 underline '>Obedience</p>

                        <p className='info-text'>Including a variety of different levels of training including basic commands such as  sit, down, stay, come, and heel flawlessly. Or a more advanced package such as opening up a refrigerator door, picking up small items, and even closing doors, ETC. </p>
                        <p className='mx-auto carousel-cta info-header'>Read More</p>

                        {/* 
                        Link for the google form
                        this will be used for signing up for dog training
                        https://forms.gle/LDZDk7zYJab6ieCa7  
                         */}
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default HomeCarousel;