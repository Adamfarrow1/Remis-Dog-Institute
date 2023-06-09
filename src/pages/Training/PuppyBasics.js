import { useWindowSize } from 'usehooks-ts'


const PuppyBasics = () => {

    const { width, height } = useWindowSize()

    const styles = 'align-self-center text-center d-flex flex-column justify-content-center align-items-center height'




    return ( 
        <div className='padding-margin-0'>
            <div className="pb row">

                <div className= { width <= 1210  ? styles : styles + " col-6" } >
                    <p className="home-h1 underline">Puppy Basics</p>
                    <p className="home-text-width text-center">Our comprehensive puppy training package is designed to give your furry friend a strong foundation for a lifetime of good behavior. You can expect a customized program that will cover all aspects of puppy training, including basic obedience, potty training, leash manners, crate training, socialization, and much more! Our positive reinforcement techniques will ensure a fun and rewarding experience for your pup, and our experienced trainers will work closely with you to ensure that your furry friend is on the right track. With our puppy training package, you will receive personalized attention and guidance every step of the way, as well as access to valuable resources to help you continue training at home. Don't let bad behavior take over - contact us today to learn more about our puppy training package and schedule a consultation.</p>
                </div>
            </div>

            <div className="height">

            </div>
        </div>
     );
}
 
export default PuppyBasics;