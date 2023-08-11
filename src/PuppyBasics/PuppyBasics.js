import { useWindowSize } from 'usehooks-ts'
import dog1 from '../images/basic-bg.png'
import dog2 from '../images/pb-dog2.webp'
import dog3 from '../images/pb-2.jpg'
import dog4 from '../images/pb-3.jpg'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
window.addEventListener('load', function() { AOS.init(); });


const PuppyBasics = () => {

    const { width, height } = useWindowSize()

    const styles = 'align-self-center text-center d-flex flex-column justify-content-center align-items-center height'




    return ( 
        <div className='padding-margin-0 pink' >
            
            <div className="pb row">
            <Header></Header>
                <div className= { width <= 1210  ? styles : styles + " col-6" } data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
                    <p className="home-h1 underline">Puppy Basics</p>
                    <p className="home-text-width text-center">Our comprehensive puppy training package is designed to give your furry friend a strong foundation for a lifetime of good behavior. You can expect a customized program that will cover all aspects of puppy training, including basic obedience, potty training, leash manners, crate training, socialization, and much more! Our positive reinforcement techniques will ensure a fun and rewarding experience for your pup, and our experienced trainers will work closely with you to ensure that your furry friend is on the right track. With our puppy training package, you will receive personalized attention and guidance every step of the way, as well as access to valuable resources to help you continue training at home. Don't let bad behavior take over - contact us today to learn more about our puppy training package and schedule a consultation.</p>
                </div>
            </div>

            <div className=" mt-5">
                <p className='carousel-h1 text-center underline mb-5 mt-5'>Basics Info</p>
                {/* <div className='d-flex flex-column flex-md-row align-items-center mt-5 justify-content-around  '>
                    <img className='pb-img-height' src={dog1} alt="" />
                    <div className='text-center pb-text'>
                        <div>
                            <p className='info-header-obedience mt-5 mt-md-0 underline pb-font-size-header'>Potty Training</p>
                            <p className='info-text pb-text-width-2 mx-auto pb-font-size'>Our dog training service specializes in effective potty training techniques that can help your furry friend develop proper bathroom habits. We provide expert guidance and tailored strategies to ensure your dog understands where and when to relieve themselves, making your home a cleaner and more pleasant environment for both of you.</p>
                        </div>
                    </div>
                </div> */}







<div className="puppy-basics-package font-fm">
      <div className="service d-flex flex-column justify-content-around" data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
        <img className='mx-auto' src={dog1} alt="Potty Training" />
        <div>
            <h2>Potty Training</h2>
            <p>
            Our Puppy Basics Package includes effective potty training techniques to help your furry friend develop proper
            bathroom habits. Expert guidance and tailored strategies ensure your pup understands where and when to relieve
            themselves, creating a cleaner and more pleasant environment for both of you.
            </p>
        </div>
      </div>

      <div className="service d-flex flex-column justify-content-around" data-aos="fade-in" data-aos-once="false" data-aos-delay="350" data-aos-duration="1000">
        <img className='mx-auto' src={dog2} alt="Leash Manners" />
        <div>
            <h2>Leash Manners</h2>
            <p>
            Prioritize enjoyable walks with your pup through our leash manners training. Patient methods help your dog learn to
            walk calmly on a leash without pulling or lunging. Our expert trainers equip you with techniques and tools for better
            communication and bonding during walks.
            </p>
        </div>
      </div>

      <div className="service d-flex flex-column justify-content-around"data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
        <img className='mx-auto' src={dog3} alt="Socialization" />
        <div>
            <h2>Socialization</h2>
            <p>
            Our Puppy Basics Package includes socialization exercises that create comfortable environments for your dog to build
            confidence around new stimuli. Our experienced trainers guide you through activities that ensure your pup becomes
            well-adjusted, friendly, and adept at handling diverse social situations.
            </p>
        </div>
      </div>

      <div className="service d-flex flex-column justify-content-around"data-aos="fade-in" data-aos-once="false" data-aos-delay="350" data-aos-duration="1000">
      <img className='mx-auto' src={dog4} alt="And More!" />
      <div>
            <h2>And Much More!</h2>
            <p>
            Our Puppy Basics Package covers a wide range of puppy essentials. From basic obedience to building a strong
            foundation of trust, our comprehensive training program sets your pup up for a lifetime of happiness and harmony.
            </p>
        </div>
      </div>
    </div>


                














                {/* <div className='d-flex mt-5 mb-5 justify-content-around flex-column-reverse flex-md-row align-items-center'>
                <div className=' text-center pb-text '>
                        <div>
                            <p className='info-header-obedience mt-5 mt-md-0 underline pb-font-size-header'>Leash manners</p>
                            <p className='info-text pb-text-width-2 mx-auto pb-font-size'>We prioritize teaching leash manners to create enjoyable walks for both you and your canine companion. Through patient and consistent training methods, we can help your dog learn to walk calmly on a leash, without pulling or lunging. Our expert trainers will equip you with the necessary techniques and tools to foster better communication and a stronger bond during your walks.</p>
                        </div>
                    </div>
                    <img className='pb-img-height' src={dog2} alt="" />
                    
                </div>

                <div className='d-flex mt-5 mb-5 justify-content-around flex-column flex-md-row align-items-center'>
                    <img className='pb-img-height' src={dog3} alt="" />
                    <div className='text-center pb-text '>
                        <div>
                            <p className='info-header-obedience mt-5 mt-md-0 underline pb-font-size-header'>Socialization</p>
                            <p className='info-text pb-text-width-2 mx-auto pb-font-size '>Through carefully planned socialization exercises, we create controlled environments where your dog can learn to be comfortable and confident around new stimuli. Our experienced trainers will guide you and your dog through various socialization activities, ensuring they become well-adjusted, friendly, and able to handle diverse social situations with ease.</p>
                        </div>
                    </div>
                </div> */}

                <div className=' remis-text-border shadow mx-auto mb-5 ' data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
                    <div className='remis-container mx-auto'>
                        <p className='text-center pb-font-size-header2 underline-r'>Pricing</p>
                        <p className='text-center pb-font-size-header'>
                            $60 for each 1 Hour PRIVATE training session
                            <br />
                            5 Training Sessions for $300</p>
                            <p className='text-center pb-font-size'>To find our more about our puppy basics training or to start scheduling sessions contact me below</p>
                            <Link to="/contact" className='td-none'><p className='story-cta remis-text remis-cta mx-auto text-center mt-4'>Contact</p></Link>
                    </div>
    </div>
            </div> 
        </div>
     );
}
 
export default PuppyBasics;
