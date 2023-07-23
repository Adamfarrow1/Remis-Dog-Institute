import ReactPlayer from "react-player";
import dog1 from '../images/gallery/FullSizeRender.mp4'
import dog2 from '../images/gallery/FullSizeRender (1).mp4'
import dog3 from '../images/gallery/gall-video.MOV'
import dog4 from '../images/gallery/6DD69496-E0C3-4182-8379-4D84DE80D7E3.MOV'
import dog5 from '../images/gallery/DB1C34CD-A37E-459D-8843-73460AC83889.MOV'
import dog6 from '../images/video.MOV'
import dog7 from '../images/gallery/sideways-vid.MOV'


import t1 from '../gallery/testimonials/ava.jpg'
import t2 from '../gallery/testimonials/bailey.jpg'
import t3 from '../gallery/testimonials/milo.jpg'
import t4 from '../gallery/testimonials/remi.jpg'
import t5 from '../gallery/testimonials/theo.jpg'
import t6 from '../gallery/testimonials/mymilo.jpg'


import Carousel from 'react-bootstrap/Carousel';

const Gallery = () => {

    return ( 
        <div className="gallery">

                <div>
                    <p className="text-center underline etsy-margin-top gallery-title">Student/Graduates</p>

                    <div className="d-flex justify-content-around mt-5">
                        <div>
                        <img src={t1} className="mx-auto gallery-img" />
                        <p className="text-center mb-0 mt-3">German Shepherd: Ava</p>
                        <p className="text-center mb-0">Student</p>
                        <p className="text-center">Basic Obedience</p>
                        </div>
                        <div>
                        <img src={t2} className="mx-auto gallery-img-sp" />
                        <p className="text-center mb-0 mt-3">Lab pit bull mix: Bailey</p>
                        <p className="text-center mb-0">Graduate</p>
                        <p className="text-center mb-0">Basic/advance obedience</p>
                        <p className="text-center">Production behaviors</p>
                  
                        </div>
                        <div>
                        <img src={t3} className="mx-auto gallery-img" />
                        <p className="text-center mb-0 mt-3">Lab mix: Milo</p>
                        <p className="text-center mb-0">Student</p>
                        <p className="text-center mb-0">Basic Obedience</p>
                        <p className="text-center gal-p">Leash management / Production behaviors</p>
             
                        </div>
                    </div>


                    <div className="d-flex justify-content-around mt-5">
                        <div>
                        <img src={t4} className="mx-auto gallery-img" />
                        <p className="text-center mb-0 mt-3">Black lab mix: Remi</p>
                        <p className="text-center mb-0">Graduate</p>
                        <p className="text-center mb-0">Basic/advanced obedience</p>
                        <p className="text-center">Production behaviors</p>
                        </div>
                        <div>
                        <img src={t5} className="mx-auto gallery-img" />
                        <p className="text-center mb-0 mt-3">Golden retriever: Theo</p>
                        <p className="text-center mb-0">Student</p>
                        <p className="text-center gal-p mb-0">Basic Obedience</p>
                        <p className="text-center"> Leash management</p>
                        </div>
                        <div>
                        <img src={t6} className="mx-auto gallery-img" />
                        <p className="text-center mb-0 mt-3">Lab mix: Milo</p>
                        <p className="text-center mb-0">Student</p>
                        <p className="text-center mb-0">Basic Obedience</p>
                        <p className="text-center gal-p">Behavior modification (fear of strangers)</p>
                        </div>
                    </div>
                    
                </div>





                <p className="text-center underline gallery-title mt-5 mb-5">Gallery</p>
                    <Carousel fade interval={5000} variant="dark" className='gallery-width pb-5'>
                        <Carousel.Item  className="d-flex justify-content-center">
                            <ReactPlayer controls={false} playing={true} loop={true} muted={true} url={dog1} pip={false} />
                        </Carousel.Item>
                        <Carousel.Item className="d-flex justify-content-center">
                            <ReactPlayer controls={false} playing={true} loop={true} muted={true} url={dog2} />
                        </Carousel.Item>
                        <Carousel.Item className="d-flex justify-content-center">
                             <ReactPlayer controls={false} playing={true} loop={true} muted={true} url={dog3} />
                        </Carousel.Item>
                        <Carousel.Item className="d-flex justify-content-center">
                            <ReactPlayer controls={false} playing={true} loop={true} muted={true} url={dog4} />
                        </Carousel.Item>
                        <Carousel.Item className="d-flex justify-content-center">
                            <ReactPlayer controls={false} playing={true} loop={true} muted={true} url={dog5} />
                        </Carousel.Item>
                        <Carousel.Item className="d-flex justify-content-center">
                             <ReactPlayer controls={false} playing={true} loop={true} muted={true} url={dog6} />
                        </Carousel.Item>
                        <Carousel.Item className="d-flex justify-content-center">
                             <ReactPlayer controls={false} playing={true} loop={true} muted={true} url={dog7} />
                        </Carousel.Item>
                    </Carousel>
            
        </div>
     );
}
 
export default Gallery;