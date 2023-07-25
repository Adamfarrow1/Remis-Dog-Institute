import owner1 from '../images/about/owner/890d3e_71b049d7c3ba4bce98815c2872a668ef~mv2.webp'
import cert1 from '../images/about/owner/CGC-Evaluator-584x576_edited.webp'
import  cert2 from '../images/about/owner/akc puppy_edited.webp'
import owner2 from '../images/about/owner/Training pack - log removed.webp'
const Owner = () => {
    return (
    <div>
        <div className='etsy-margin-top d-flex justify-content-around align-items-center owner-header-width mx-auto'>
        
        <img src={owner1} className='owner-img-size' alt="" />

        <div>
            
            <div className='d-flex justify-content-around owner-sub-width'>

                <div className='owner-text-size'>
                    <p className='mb-3 owner-text-name'>Bryana Soraka</p>
                    <p>Certified Trainer</p>
                    <p className='mt-4'>Phone: 203-584-3316</p>
                    <p>Email: RemisDTI@gmail.com</p>
                    <p>Address: Orlando Florida</p>
                </div>
                <div>
                    <img src={cert1} alt="" />
                    <img src={cert2} alt="" />
                </div>
            </div>
            
        </div>
        </div>    



        <div className='grad-width  mx-auto'>
            <p className='underline text-center owner-title mt-5'>Meet Your Trainer</p>
            <p>Hi Everyone!</p>
            <p>My name is Bryana Saroka. I have a degree in Integrative Animal Biology from the University of South Florida. I am also a certified Canine Good Citizen Evaluator. I have had a passion for animals since I was a little kid. I have 7 years of professional animal training experience and have trained a variety of animals including service dogs for people with disabilities, guide dogs for people who are blind, exotics, domesticated animals, marine mammals and even farm animals. I have been a part of movies and even a few commercials with working dogs and cats.</p>
            <p>I started my career training at Universal Studios Orlando’s Animal Actors on Location show. From there I have continued on to working for a nonprofit organization called Canine Companions for Independence training service dogs. I continued on to guide dogs for the visually impaired and finally to Sea World where I train sea lions, seals and Asian small clawed otters. If you ever find yourself at the sea lion show at Seaworld or Animal Actors at Universal Studios - look close - I just might be the host on stage! </p>
            <p>All my experience combined have made me the trainer I am today. However, I would not be the complete trainer I am today if it wasn’t for my sweet Remi whom I rescued from a shelter in 2019. He is the reason I started my Rem Dog Boutique business back in 2020 and the reason why I want to continue his legacy by honoring him with a dog training company. </p>
            <p>The goal of Remi’s Dog Training Institute is to provide the guidance and knowledge to meet the needs of both you and your pet. That can be from basic obedience or to wanting your dog to walk down the aisle with you on your wedding day holding flowers and everything in between. Remi’s Dog Training Institute is here to strengthen your bond with your dog in any magnitude. Success is possible.</p>
        </div>



        <div className='text-center mx-auto mt-5'>
           <img src={owner2}  alt="" />
        </div>



        <div className='mb-5'>
            <p className='underline text-center owner-title mt-5'>Work Experience</p>
            <div className='mx-auto owner-col-width'>
            <div className='d-flex mt-5 justify-content-between align-items-center'>
                <p className='we-title'>Service Dogs</p>
                <p className='owner-sub-wid'>I have trained service dogs for people with disabilities. I trained Labradors and Golden Retrievers to do 40 plus behaviors for their new person/handler. Some of the behaviors I have trained are heel, retrieval of items, going through doorways, pushing/tugging doors or drawers, cleaning up toys and even playing games with kids. </p>

            </div>

            <div className='d-flex justify-content-between align-items-center mt-5'>
                <p className='we-title'>Exotics</p>
                <p className='owner-sub-wid'>I work at Universal Studios Animal Show working and training with all types of animals. I work with domesticated animals, farm animals, birds of prey, and much more! I am one of the hosts teaching everyone how we train animals for the movies/tv shows/commercials. </p>

            </div>

            <div className='d-flex justify-content-between align-items-center mt-5'>
                <p className='we-title'>Guide Dogs</p>
                <p className='owner-sub-wid'>I trained guide dogs for people who are visually impaired or blind. I have even trained a dog to be a running guide dog. A running guide dog means that the dog will be running and guiding their handler all at the same time. </p>

            </div>
            
            <div className='d-flex justify-content-between align-items-center mt-5 '>
                <p className='we-title'>Sea Lions, Otters and Seals</p>
                <p className='owner-sub-wid'>I work with the California sea lions, harbor seals and Asian small clawed otters. I play the Neutron character at the sea lion stadium. </p>

            </div>
            </div>
        </div>

        






   </div> );
}
 
export default Owner;