import { useWindowSize } from 'usehooks-ts'
import dog1 from '../images/video.MOV'
import dog2 from '../images/ob-img1.webp'
import ReactPlayer from 'react-player'
import { useInView } from 'react-intersection-observer';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
window.addEventListener('load', function() { AOS.init(); });


const BasicObedience = () => {
    const { width, height } = useWindowSize()

    const styles = 'align-self-center text-center d-flex flex-column justify-content-center align-items-center height'
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });






    return ( 
        <div className='padding-margin-0 pink'>
            
            <div className="ob row">
            <Header></Header>
                <div className= { width <= 1210  ? styles : styles + " col-6" } data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000" >
                    
                    <p className="home-h1 underline">Obedience</p>
                    <p className="home-text-width text-center">At our company, we genuinely love dog obedience! We believe in creating a warm and supportive environment where dogs and their owners can thrive together. Our experienced trainers are passionate about helping dogs develop essential skills and behaviors that make life easier and more enjoyable for everyone involved. With a focus on positive reinforcement and personalized training programs, we're here to make obedience training a positive and rewarding experience. Whether it's mastering basic commands, overcoming specific challenges, or fine-tuning advanced skills, we're committed to being your trusted partner in fostering a well-behaved and happy canine companion.</p>
                </div>
            </div>

            <div className=" mt-5" data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
                <p className='carousel-h1 text-center underline mb-5 mt-5'>Basic Obedience</p>
                <div className='d-flex mt-5 mb-5 justify-content-around flex-column flex-lg-row align-items-center '>
                    <img className='pb-img-height mb-5 mb-lg-0' src={dog2} alt="" />
                    <div className='ob-info-cta d-flex align-items-center justify-content-center'>
                        <p className='info-text pb-text-width pb-font-size'>Our basic dog training program is designed to teach your furry friend essential commands and behaviors, ensuring a stronger bond and a happier life together. I will work closely with you to create a customized program that covers all aspects of basic training, including teaching your dog to sit, down, stay, come, and heel flawlessly. With our positive reinforcement techniques, we focus on rewarding good behavior to create a fun and rewarding experience for both you and your dog. I will also provide guidance and support to help you continue training at home and reinforce good behavior. Whether you have a new puppy or an older dog, our basic dog training program is a great way to build a foundation for a lifetime of good behavior and companionship. Contact us today to learn more about our program and schedule a consultation.</p>
                    </div>
                </div>

                <div className=' remis-text-border shadow mx-auto mb-5 '>
                    <div className='remis-container mx-auto'>
                        <p className='text-center pb-font-size-header2 underline-r'>Basic Obedience Pricing</p>
                        <p className='text-center pb-font-size-header'>
                        Contact for pricing</p>
                            <p className='text-center pb-font-size'>To find our more about our training or to start scheduling sessions contact me below</p>
                            <Link to="/contact" className='td-none'><p className='story-cta remis-text remis-cta mx-auto text-center mt-4'>Contact</p></Link>
                    </div>
                </div>
            </div>



            <div className=" mt-5" data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
                <p className='carousel-h1 text-center underline mb-5 mt-5'>Advanced Obedience</p>
                <div className='container-ob mx-auto'>
                    <div className='d-flex mt-5 mb-5 justify-content-around flex-column flex-lg-row align-items-center ob-container'>
                        <div ref={ref} className='mb-0 mb-lg-5 video'>
                        <ReactPlayer controls={true} pip={false}  playing={inView ? true : false} loop={true} muted={true} url={dog1} />
                        </div>
                        <div className='ob-info-cta d-flex align-items-center justify-content-center '>
                            <p className='info-text pb-text-width pb-font-size mx-auto mt-5 mt-lg-0'>Our basic dog training program is designed to teach your furry friend essential commands and behaviors, ensuring a stronger bond and a happier life together. I will work closely with you to create a customized program that covers all aspects of basic training, including teaching your dog to sit, down, stay, come, and heel flawlessly. With our positive reinforcement techniques, we focus on rewarding good behavior to create a fun and rewarding experience for both you and your dog. I will also provide guidance and support to help you continue training at home and reinforce good behavior. Whether you have a new puppy or an older dog, our basic dog training program is a great way to build a foundation for a lifetime of good behavior and companionship. Contact us today to learn more about our program and schedule a consultation.</p>
                        </div>
                    </div>
                </div>
                    <div className=' remis-text-border mx-auto shadow mb-5 mt-5 '>
                        <div className='remis-container mx-auto text-center'>
                            <p className='text-center pb-font-size-header2 underline-r'>Advanced Obedience Pricing</p>
                            <p className='text-center pb-font-size-header'>
                                Contact for pricing (Based on skill requested)</p>
                                <p className='text-center pb-font-size'>To find our more about our training or to start scheduling sessions contact me below</p>
                                <Link to="/contact" className='td-none'><p className='story-cta remis-text remis-cta mx-auto text-center mt-4'>Contact</p></Link>
                        </div>
                    </div>
                
            </div>



        </div>
     );
}
 
export default BasicObedience;