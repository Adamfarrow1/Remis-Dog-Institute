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
import t7 from '../images/gallery/luca.jpeg'
import t8 from '../images/gallery/maggie.jpeg'

import { Component, useState } from "react";
import { useRef } from "react";
import { useInView } from 'react-intersection-observer';

import Carousel from 'react-bootstrap/Carousel';
import FilePlayer from "react-player/file";

import Header from "../Header/Header";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
window.addEventListener('load', function() { AOS.init({startEvent: 'DOMContentLoaded'}); });



const Gallery = () => {


  const dogsData = [
    {
      status: 'Student',
      src: t1,
      name: 'Ava',
      breed: 'German Shepherd',
      training: 'Basic Obedience',
      additionalInfo: '',
    },
    {
      status: 'Graduate',
      src: t2,
      name: 'Bailey',
      breed: 'Lab Pit Bull Mix',
      training: 'Basic/Advanced Obedience, Production Behaviors',
      additionalInfo: '',
    },
    {
      status: 'Student',
      src: t3,
      name: 'Milo',
      breed: 'Lab Mix',
      training: 'Basic Obedience, Leash Management',
      additionalInfo: 'Production Behaviors',
    },
    {
      status: 'Graduate',
      src: t4,
      name: 'Remi',
      breed: 'Black Lab Mix',
      training: 'Basic/Advanced Obedience, Production Behaviors',
      additionalInfo: '',
    },
    {
      status: 'Student',
      src: t5,
      name: 'Theo',
      breed: 'Golden Retriever',
      training: 'Basic Obedience, Leash Management',
      additionalInfo: '',
    },
    {
      status: 'Student',
      src: t6,
      name: 'Milo',
      breed: 'Lab Mix',
      training: 'Basic Obedience',
      additionalInfo: 'Behavior Modification (Fear of Strangers)',
    },
    {
      status: 'Student',
      src: t7,
      name: 'Luca',
      breed: 'Miniature Pinsche',
      training: 'Puppy/Behavior Modification',
      additionalInfo: '',
    },
    {
      status: 'Student',
      src: t8,
      name: 'Maggie',
      breed: 'Red Fox Labrador',
      training: 'Puppy Basic Obedience',
      additionalInfo: '',
    }
  ];




    const playerRef = useRef(null); // Create a ref for the ReactPlayer
    const playerRef1 = useRef(null);
    const playerRef2 = useRef(null);
    const playerRef3 = useRef(null);
    const playerRef4 = useRef(null);
    const playerRef5 = useRef(null);
    const playerRef6 = useRef(null);

    const [m1 , setM1] = useState(true);
    const [m2 , setM2] = useState(true);
    const [m3 , setM3] = useState(true);
    const [m4 , setM4] = useState(true);
    const [m5 , setM5] = useState(true);
    const [m6 , setM6] = useState(true);
    const [m7 , setM7] = useState(true);




  const handleSlide = (selectedIndex) => {
    // selectedIndex is the index of the active slide
    // Here, you can set properties for the ReactPlayer based on the active slide index

    switch (selectedIndex) {
      case 0:
        // Set properties for the first slide (index 0)
        playerRef.current?.seekTo(0.0)
        setM1(false)
        setM2(true)
        setM3(true)
        setM4(true)
        setM5(true)
        setM6(true)
        setM7(true)
        // player.setVolume(0.5); // Example: Set volume to 50%
        break;
      case 1:
        playerRef1.current?.seekTo(0.0)
        setM1(true)
        setM2(false)
        setM3(true)
        setM4(true)
        setM5(true)
        setM6(true)
        setM7(true)
        // Set properties for the second slide (index 1)
         // Example: Seek to 30 seconds into the video
        // player.setVolume(1); // Example: Set volume to 100%
        break;
        case 2:
          playerRef2.current?.seekTo(0.0)
            setM1(true)
          setM2(true)
          setM3(false)
          setM4(true)
          setM5(true)
          setM6(true) 
          setM7(true)
        // Set properties for the second slide (index 1)
         // Example: Seek to 30 seconds into the video
        // player.setVolume(1); // Example: Set volume to 100%
        break;
        case 3:
          playerRef3.current?.seekTo(0.0)
            setM1(true)
          setM2(true)
          setM3(true)
          setM4(false)
          setM5(true)
          setM6(true)
          setM7(true)
        // Set properties for the second slide (index 1)
         // Example: Seek to 30 seconds into the video
        // player.setVolume(1); // Example: Set volume to 100%
        break;
        case 4:
          playerRef4.current?.seekTo(0.0)
          setM1(true)
          setM2(true)
          setM3(true)
          setM4(true)
          setM5(false)
          setM6(true)
          setM7(true)
        // Set properties for the second slide (index 1)
         // Example: Seek to 30 seconds into the video
        // player.setVolume(1); // Example: Set volume to 100%
        break;
        case 5:
          playerRef5.current?.seekTo(0.0)
          setM1(true)
          setM2(true)
          setM3(true)
          setM4(true)
          setM5(true)
          setM6(false)
          setM7(true)
        // Set properties for the second slide (index 1)
         // Example: Seek to 30 seconds into the video
        // player.setVolume(1); // Example: Set volume to 100%
        break;
      // Add more cases for other slides as needed
      case 6:
        playerRef6.current?.seekTo(0.0)
        setM1(true)
          setM2(true)
          setM3(true)
          setM4(true)
          setM5(true)
          setM6(true)
          setM7(false)
        // Set properties for the second slide (index 1)
         // Example: Seek to 30 seconds into the video
        // player.setVolume(1); // Example: Set volume to 100%
        break;
      default:
        // Set default properties for other slides
        break;
    }
  };

  

  
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

    

    return ( 
        <div className="gallery">
                  <Header></Header>
                <div className="pb-5" >
                    <p className="text-center underline etsy-margin-top gallery-title" data-aos="fade-in" data-aos-once="false" data-aos-delay={150} data-aos-duration="1000">Student/Graduates</p>
                     <p className="text-center grad-width mx-auto mt-5" data-aos="fade-in" data-aos-once="false" data-aos-delay={150} data-aos-duration="1000">Our graduates are the shining stars, showcasing the remarkable transformations they've undergone as they've grown into well-behaved, confident, and happy dogs. From mastering essential obedience commands to developing exceptional social skills, our program has empowered these four-legged achievers to thrive in any environment. Join us as we share inspiring tales of triumph, heartwarming moments, and the unbreakable bonds between our graduates and their human companions. Discover how our training has unlocked the true potential of these amazing dogs, and let their journeys inspire you to embark on a transformative path of learning and growth with your furry friend by your side.</p>


                     <div className="dog-graduation-page font-fm">
                        <div className="dog-card-container">
                          {dogsData.map((dog, index) => (
                            <div key={index} className="dog-card" data-aos="fade-in" data-aos-once="false" data-aos-delay={150 + ((index % 3) * 150)} data-aos-duration="1000">
                              <img
                                src={dog.src}
                                alt={`${dog.name}`}
                                className="dog-image"
                              />
                              <h2>{dog.status}: {dog.name}</h2>
                              <p>Breed: {dog.breed}</p>
                              <p>Training: {dog.training}</p>
                              {dog.additionalInfo && <p className="additional-info">Additional Info: {dog.additionalInfo}</p>}
                            </div>
                          ))}
                        </div>
                      </div>





                    {/* <div className="d-flex justify-content-around mt-5">
                        <div>
                        <img src={t1} className="mx-auto gallery-img" />
                        <p className="text-center mb-0 mt-3">Student: Ava</p>
                        <p className="text-center mb-0">German Shepherd</p>
                        <p className="text-center">Basic Obedience</p>
                        </div>
                        <div>
                        <img src={t2} className="mx-auto gallery-img-sp" />
                        <p className="text-center mb-0 mt-3">Graduate: Bailey</p>
                        <p className="text-center mb-0">Lab Pit Bull Mix</p>
                        <p className="text-center mb-0">Basic/advance obedience</p>
                        <p className="text-center">Production behaviors</p>
                  
                        </div>
                        <div>
                        <img src={t3} className="mx-auto gallery-img" />
                        <p className="text-center mb-0 mt-3">Student: Milo</p>
                        <p className="text-center mb-0">Lab mix</p>
                        <p className="text-center mb-0">Basic Obedience</p>
                        <p className="text-center gal-p">Leash management & Production behaviors</p>
             
                        </div>
                    </div>


                    <div className="d-flex justify-content-around mt-5">
                        <div>
                        <img src={t4} className="mx-auto gallery-img" />
                        <p className="text-center mb-0 mt-3">Graduate: Remi</p>
                        <p className="text-center mb-0">Black lab mix</p>
                        <p className="text-center mb-0">Basic/advanced obedience</p>
                        <p className="text-center">Production behaviors</p>
                        </div>
                        <div>
                        <img src={t5} className="mx-auto gallery-img" />
                        <p className="text-center mb-0 mt-3">Student: Theo</p>
                        <p className="text-center mb-0">Golden retriever</p>
                        <p className="text-center gal-p mb-0">Basic Obedience</p>
                        <p className="text-center"> Leash management</p>
                        </div>
                        <div>
                        <img src={t6} className="mx-auto gallery-img" />
                        <p className="text-center mb-0 mt-3">Student: Milo</p>
                        <p className="text-center mb-0">Lab mix</p>
                        <p className="text-center mb-0">Basic Obedience</p>
                        <p className="text-center gal-p">Behavior modification (fear of strangers)</p>
                        </div>
                    </div> */}
                    
                </div>
              

              <div className="pt-4 pb-5" data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
                <p className="text-center underline gallery-title">Training Gallery</p>
                <div ref={ref} >
                  <p className="text-center grad-width mx-auto mt-5">Welcome to our Gallery section, where you'll find heartwarming snapshots of canine companions mastering obedience skills and overcoming behavioral challenges. Witness the bond between humans and their furry friends, as they embark on a transformative journey of love and learning. From playful puppies to seasoned pros, our gallery celebrates the magic of positive dog training in action. Get inspired to create your own harmonious relationship with your beloved companion.</p>
                    <Carousel fade interval={10000} variant="dark" className='gallery-width pb-5 mt-5' onSlide={(e) => {handleSlide(e)}}>
                        <Carousel.Item className="d-flex justify-content-center" >
                            <ReactPlayer ref={playerRef} controls={true} playing={true} loop={true} muted={inView ? m1 : true} url={dog7} />
                        </Carousel.Item>
                        <Carousel.Item className="d-flex justify-content-center">
                            <ReactPlayer ref={playerRef1} controls={true} playing={true} loop={true} muted={inView ? m2 : true} url={dog2} />
                        </Carousel.Item>
                        <Carousel.Item className="d-flex justify-content-center">
                             <ReactPlayer ref={playerRef2} controls={true} playing={true} loop={true} muted={inView ? m3 : true} url={dog3} />
                        </Carousel.Item>
                        <Carousel.Item className="d-flex justify-content-center">
                            <ReactPlayer ref={playerRef3} controls={true} playing={true} loop={true} muted={inView ? m4 : true} url={dog4} />
                        </Carousel.Item>
                        <Carousel.Item className="d-flex justify-content-center">
                            <ReactPlayer ref={playerRef4} controls={true} playing={true} loop={true} muted={inView ? m5 : true} url={dog5} />
                        </Carousel.Item>
                        <Carousel.Item className="d-flex justify-content-center">
                             <ReactPlayer ref={playerRef5}  controls={true} playing={true} loop={true} muted={inView ? m6 : true} url={dog6} />
                        </Carousel.Item>
                        <Carousel.Item className="d-flex justify-content-center">
                             <ReactPlayer ref={playerRef6} controls={true} playing={true} loop={true} muted={inView ? m7 : true} url={dog1} />
                        </Carousel.Item>
                    </Carousel>
                    </div>
              </div>


                
        </div>
     );
}
 
export default Gallery;