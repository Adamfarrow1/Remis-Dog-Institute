import { useWindowSize } from 'usehooks-ts'
import { useInView } from 'react-intersection-observer';
import Header from '../Header/Header';

import List from '../List/List'
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
window.addEventListener('load', function() { AOS.init(); });


const WeddingCare = () => {

    const { width, height } = useWindowSize()
    const styles = 'align-self-center text-center d-flex flex-column justify-content-center align-items-center height'
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });





    return (  
    <div className='padding-margin-0'>
    <div className="wedding row">
        <Header></Header>
        <div className= { width <= 1210  ? styles : styles + " col-6" } data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000" >
            <p className="home-h1 underline">Wedding Pet Care</p>
            <p className="home-text-width text-center">We understand that pets are an integral part of many couples' lives and their special day. That's why we offer comprehensive wedding day pet care services to ensure that your furry family members are taken care of while you celebrate. Our team of experienced and trained professionals will provide personalized attention, ensuring that your pets are comfortable, happy, and safe throughout the event. Additionally, we offer professional pet photo shoots, capturing precious moments with your beloved companions, so they can be a part of your wedding memories forever. Moreover, we provide wedding day training services to help your pets look their best and behave appropriately on your special day. With our expert trainers, your pets will shine and seamlessly integrate into the wedding festivities. At our company, we are dedicated to making your wedding day truly unforgettable, not just for you but for your furry friends as well.</p>
        </div>
    </div>

    <div className=" mt-5 ">
        <p className='carousel-h1 text-center underline mb-5 mt-5' data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">Wedding Day Pet Care</p>
        <p className='text-center remis-container mx-auto' data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">We will provide pet care during your wedding day! This can be at the reception or in the comfort of your home or hotel! Different Packages:</p>

        <div className='col-12'>
                <div className='row justify-content-around align-items-center'>
                    <div className='shadow info-cta-wc col-lg-3 col-12 mt-5' data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
                        <div>
                            <p className='info-header mb-3 mt-2 underline' >Honeymoon Package</p>
                            
                                <ul className='align-left'>
                                    <li>Take your dog for Walks</li>
                                    <li>Enrich his experience with playtime</li>
                                    <li>Provide general care (feeding, toileting)</li>
                                    <li>Become your furry friends new best friend.</li>
                                    <li>Includes Pick up/Drop off dog transportation if location and venue are within 30 miles of Orlando*</li>
                                </ul>
                                <p className='mt-auto'>Rates: Contact for pricing</p>
                       
                        </div>

                    </div>
                    <div className='shadow info-cta-wc col-lg-3 col-12 mt-5' data-aos="fade-in" data-aos-once="false" data-aos-delay="350" data-aos-duration="1000">

                        <div>
                            <p className='info-header mb-3 mt-2 underline'>Day of Bliss Package</p>

                                <ul className='align-left'>
                                    <li>Honey moon package plus</li>
                                    <li>Engage your dog so they may be part of the photo taking experience.</li>
                                    <li>Includes Pick up/Drop off dog transportation if location and venue are within 30 miles of Orlando*</li>
                                </ul>
                                <p className='mt-auto'>Rates: Contact for pricing</p>
                        
                        </div>
  
                    </div>

                    <div className='shadow info-cta-wc col-lg-3 col-12 text-center mt-5' data-aos="fade-in" data-aos-once="false" data-aos-delay="550" data-aos-duration="1000">

                    <div>
                            <p className='info-header mb-3 mt-2 underline'>Magical Package</p>

                                <ul className='align-left'>
                                    <li>Take your dog for Walks</li>
                                    <li>1 training session to get your dog ready with a learned behavior such as carrying a basket, walking down the aisle or a behavior that is special to you all**</li>
                                </ul>
                                <p className=''>Rates: Contact for pricing</p>
  
                        </div>
                 
                    </div>
                </div>
                <p className='mt-5 text-center remis-container mx-auto' data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">**Please let me know the behavior you are wanting. Depending on what you are looking for, multiple training prep sessions might be necessary </p>
                <p className='text-center remis-container mx-auto' data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">*Additional fees may apply if outside the 30 miles</p>
            </div>
        
    </div>



    <div className=" mt-5 text-center" data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
        <p className='carousel-h1 text-center underline mb-5 mt-5'>Photo Shoot / Engagement Photos</p> 
        <p className='wc-text-width text-center mx-auto'>We understand how important it is to capture the perfect photo of your furry friend. That's why I will go above and beyond to ensure that your dog looks their best for the photo shoot. We understand that every dog is unique, and we will take the time to understand your preferences and expectations to deliver exceptional results. With our dedication and expertise, you can trust us to make your dog look stunning for the photo shoot!</p>
        <p>Rates: Contact for pricing</p>
    </div>

    <div className=" mt-5 text-center" data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
        <p className='carousel-h1 text-center underline mb-5 mt-5'>Wedding Day Training Prep</p> 
        <p className='wc-text-width text-center mx-auto'>This is where we will help you and your furry friend get to the behavior you are wanting for your wedding. </p>
            <div className='mx-auto text-center wc-div-size '>

                <List></List>
                {/* <ul className='align-left'>
                    <li>Walking down the aisle</li>
                    <li>Carrying a special something (basket, flowers, etc)</li>
                    <li>Being a part of the wedding photos</li>
                    <li>And More!</li>
                </ul> */}
            </div>
     
    </div>
    <div className=' remis-text-border shadow mx-auto mb-5 '>
        <div className='remis-container mx-auto'>
            <p className='text-center pb-font-size-header2 underline-r'>Email for info</p>
            <p className='text-center pb-font-size-header'>To schedule a consultation or to find out more click the link below</p>
            <Link to="/contact" className='td-none'><p className='story-cta remis-text remis-cta mx-auto text-center mt-4'>Contact</p></Link>
        </div>
    </div>


</div> );
}
 
export default WeddingCare;