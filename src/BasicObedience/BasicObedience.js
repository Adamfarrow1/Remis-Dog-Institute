import { useWindowSize } from 'usehooks-ts'
import dog1 from '../images/video.MOV'
import dog2 from '../images/ob-img1.webp'
import ReactPlayer from 'react-player'
import { useInView } from 'react-intersection-observer';


const BasicObedience = () => {
    const { width, height } = useWindowSize()

    const styles = 'align-self-center text-center d-flex flex-column justify-content-center align-items-center height'
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });






    return ( 
        <div className='padding-margin-0'>
            <div className="ob row">

                <div className= { width <= 1210  ? styles : styles + " col-6" } >
                    <p className="home-h1 underline">Obedience</p>
                    <p className="home-text-width text-center">At our company, we genuinely love dog obedience! We believe in creating a warm and supportive environment where dogs and their owners can thrive together. Our experienced trainers are passionate about helping dogs develop essential skills and behaviors that make life easier and more enjoyable for everyone involved. With a focus on positive reinforcement and personalized training programs, we're here to make obedience training a positive and rewarding experience. Whether it's mastering basic commands, overcoming specific challenges, or fine-tuning advanced skills, we're committed to being your trusted partner in fostering a well-behaved and happy canine companion.</p>
                </div>
            </div>

            <div className=" mt-5">
                <p className='carousel-h1 text-center underline mb-5 mt-5'>Basic Obedience</p>
                <div className='d-flex mt-5 mb-5 justify-content-around '>
                    <img className='pb-img-height' src={dog2} alt="" />
                    <div className='ob-info-cta '>
                        <p className='info-text pb-text-width mx-auto pb-font-size'>Our basic dog training program is designed to teach your furry friend essential commands and behaviors, ensuring a stronger bond and a happier life together. I will work closely with you to create a customized program that covers all aspects of basic training, including teaching your dog to sit, down, stay, come, and heel flawlessly. With our positive reinforcement techniques, we focus on rewarding good behavior to create a fun and rewarding experience for both you and your dog. I will also provide guidance and support to help you continue training at home and reinforce good behavior. Whether you have a new puppy or an older dog, our basic dog training program is a great way to build a foundation for a lifetime of good behavior and companionship. Contact us today to learn more about our program and schedule a consultation.</p>
                    </div>
                </div>

                <div className=' remis-text-border shadow mx-auto mb-5 '>
                    <div className='remis-container mx-auto'>
                        <p className='text-center pb-font-size-header2 underline-r'>Basic Obedience Pricing</p>
                        <p className='text-center pb-font-size-header'>
                            $60 for each 1 Hour PRIVATE training session
                            <br />
                            $35 for 1 hour virtual session</p>
                            <p className='text-center pb-font-size'>To find our more about our training or to start scheduling sessions contact me below</p>
                            <p className='story-cta remis-text remis-cta mx-auto text-center mt-4'>Contact</p>
                    </div>
                </div>
            </div>



            <div className=" mt-5">
                <p className='carousel-h1 text-center underline mb-5 mt-5'>Advanced Obedience</p>
                <div className='d-flex mt-5 mb-5 justify-content-around '>
                    <div ref={ref}>
                     <ReactPlayer controls={false} pip={false}  playing={inView ? true : false} loop={true} muted={true} url={dog1} />
                     </div>
                    <div className='ob-info-cta '>
                        <p className='info-text pb-text-width mx-auto pb-font-size'>Our basic dog training program is designed to teach your furry friend essential commands and behaviors, ensuring a stronger bond and a happier life together. I will work closely with you to create a customized program that covers all aspects of basic training, including teaching your dog to sit, down, stay, come, and heel flawlessly. With our positive reinforcement techniques, we focus on rewarding good behavior to create a fun and rewarding experience for both you and your dog. I will also provide guidance and support to help you continue training at home and reinforce good behavior. Whether you have a new puppy or an older dog, our basic dog training program is a great way to build a foundation for a lifetime of good behavior and companionship. Contact us today to learn more about our program and schedule a consultation.</p>
                    </div>
                </div>

                <div className=' remis-text-border shadow mx-auto mb-5 '>
                    <div className='remis-container mx-auto'>
                        <p className='text-center pb-font-size-header2 underline-r'>Advanced Obedience Pricing</p>
                        <p className='text-center pb-font-size-header'>
                            $60 for each 1 Hour PRIVATE training session
                            <br />
                            $35 for 1 hour virtual session</p>
                            <p className='text-center pb-font-size'>To find our more about our training or to start scheduling sessions contact me below</p>
                            <p className='story-cta remis-text remis-cta mx-auto text-center mt-4'>Contact</p>
                    </div>
                </div>
            </div>



        </div>
     );
}
 
export default BasicObedience;