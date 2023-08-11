import bowties from '../images/etsy/bowties.webp'
import christmasCollar from '../images/etsy/christmas-collars.webp'
import christmas_dog_bandanas from '../images/etsy/christmas-dog-bandanas.jpg'
import custom_bandana from '../images/etsy/customize-bandana.webp'
import custom_collar from '../images/etsy/customize-collars.webp'
import dinsey_collar from '../images/etsy/disney-collar.webp'
import disney_leashes from '../images/etsy/disney-leashes.jpg'
import flower_bandana from '../images/etsy/flower-bandana.jpg'
import green_collar from '../images/etsy/green-collar.jpg'
import halloween_collar from '../images/etsy/halloween-collars.webp'
import heart_collar from '../images/etsy/heart-collar.jpg'
import patriotic from '../images/etsy/patriotic-collars.webp'
import plaid from '../images/etsy/plaid-pastel-collars.webp'
import sports from '../images/etsy/sports-bow-tie.jpg'
import starwars from '../images/etsy/starwars-collar.jpg'
import Header from '../Header/Header'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
window.addEventListener('load', function() { AOS.init(); });


const EtsyShop = () => {
    return ( 
        <div className="etsy">
            <Header></Header>
            <p className='etsy-header etsy-title etsy-margin-top underline'>RemDogBoutique</p>
            <p className='etsy-header'>Dog Bandanas, Collars, Leashes, Bowties & More</p>
            <div className="d-flex etsy-main-width flex-column flex-md-row align-items-center mx-auto justify-content-around mt-5">
                <div className='etsy-width d-flex flex-column justify-content-center' data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
                    <img className='etsy-img' src={dinsey_collar} alt="bowties" />
                    <p className='etsy-p mt-2 etsy-p-h'>Personalize Mickey and Minnie Disney Over the Collar Dog Bandana- Star Wars Baby Yoda</p>
                    <p className='etsy-p'>9$</p>
                    <a href="https://www.etsy.com/listing/849921356/personalize-mickey-and-minnie-disney" className='etsy-btn td-none'>Buy on Etsy</a>
                </div>
                <div className='etsy-width d-flex flex-column justify-content-center mt04' data-aos="fade-in" data-aos-once="false" data-aos-delay="350" data-aos-duration="1000">
                    <img className='etsy-img' src={disney_leashes} alt="bowties" />
                    <p className='etsy-p mt-2 etsy-p-h'>6ft Dog Leashes - Disney / Starwars / Pink / Blue / Baseball / Dog Collar / Mickey and Minnie</p>
                    <p className='etsy-p'>16.5$</p>
                    <a href='https://www.etsy.com/listing/849903766/6ft-dog-leashes-disney-starwars-pink' className='td-none etsy-btn'>Buy on Etsy</a>
                </div>
                <div className='etsy-width d-flex flex-column justify-content-center mt03' data-aos="fade-in" data-aos-once="false" data-aos-delay="550" data-aos-duration="1000">
                    <img className='etsy-img' src={christmas_dog_bandanas} alt="bowties" />
                    <p className='etsy-p mt-2 etsy-p-h'>Holiday | Christmas Dog Bandanas | Bow Ties - Holiday Cute Patterns</p>
                    <p className='etsy-p'>7$</p>
                    <a href='https://www.etsy.com/listing/989866909/holiday-christmas-dog-bandanas-bow-ties' className='td-none etsy-btn'>Buy on Etsy</a>
                </div>
            </div>
            <div className="d-flex etsy-main-width mx-auto flex-column flex-md-row align-items-center justify-content-around mt-5"data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
                <div className='etsy-width d-flex flex-column justify-content-center'>
                    <img className='etsy-img' src={flower_bandana} alt="bowties" />
                    <p className='etsy-p mt-2 etsy-p-h'>Personalize Flower Dog Bandana- Multiple Colors- Multiple Designs</p>
                    <p className='etsy-p'>9$</p>
                    <a href='https://www.etsy.com/listing/863790599/personalize-flower-dog-bandana-multiple' className='td-none etsy-btn'>Buy on Etsy</a>
                </div>
                <div className='etsy-width d-flex flex-column justify-content-center mt04'data-aos="fade-in" data-aos-once="false" data-aos-delay="350" data-aos-duration="1000">
                    <img className='etsy-img' src={sports} alt="bowties" />
                    <p className='etsy-p mt-2 etsy-p-h'>Sports Team Dog Bow Ties | Collars | Bandanas - New England Patriots Football - Buccaneers- Tampa Bay Lightning | Jets | Giants Dog Bandana</p>
                    <p className='etsy-p'>7$</p>
                    <a href='https://www.etsy.com/listing/863824881/sports-team-dog-bow-ties-collars' className='td-none etsy-btn'>Buy on Etsy</a>
                </div>
                <div className='etsy-width d-flex flex-column justify-content-center mt03' data-aos="fade-in" data-aos-once="false" data-aos-delay="550" data-aos-duration="1000">
                    <img className='etsy-img' src={plaid} alt="bowties" />
                    <p className='etsy-p mt-2 etsy-p-h'>Pastel/ Plaid Dog Collars- Bow Ties- Bandanas | Spring designs</p>
                    <p className='etsy-p'>7$</p>
                    <a href='https://www.etsy.com/listing/874738077/pastel-plaid-dog-collars-bow-ties' className='td-none etsy-btn'>Buy on Etsy</a>
                </div>
            </div>
            <div className="d-flex etsy-main-width mx-auto flex-column flex-md-row align-items-center justify-content-around mt-5"data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
                <div className='etsy-width d-flex flex-column justify-content-center'>
                    <img className='etsy-img' src={christmasCollar} alt="bowties" />
                    <p className='etsy-p mt-2 etsy-p-h'>Holiday Christmas Collars | Dog Collars | Green and Red | Festive Collars</p>
                    <p className='etsy-p'>5$</p>
                    <a href='https://www.etsy.com/listing/871017095/holiday-christmas-collars-dog-collars' className='td-none etsy-btn'>Buy on Etsy</a>
                </div>
                <div className='etsy-width d-flex flex-column justify-content-center mt04'data-aos="fade-in" data-aos-once="false" data-aos-delay="350" data-aos-duration="1000">
                    <img className='etsy-img' src={halloween_collar} alt="bowties" />
                    <p className='etsy-p mt-2 etsy-p-h'>Fall Halloween Dog Collar, Bows, Bandanas | Cutest Pumpkin in the Patch | Candy Corn | Fall Dog Bandana | Plaid Fabric- Halloween</p>
                    <p className='etsy-p'>5$</p>
                    <a href='https://www.etsy.com/listing/849892724/fall-halloween-dog-collar-bows-bandanas'className='td-none etsy-btn'>Buy on Etsy</a>
                </div>
                <div className='etsy-width d-flex flex-column justify-content-center mt03'data-aos="fade-in" data-aos-once="false" data-aos-delay="550" data-aos-duration="1000">
                    <img className='etsy-img' src={custom_collar} alt="bowties" />
                    <p className='etsy-p mt-2 etsy-p-h'>Customized Dog Collars- Flower- Disney- Spring - StarWars - Plaid Designs</p>
                    <p className='etsy-p'>13$</p>
                    <a href='https://www.etsy.com/listing/863183437/customized-dog-collars-flower-disney' className='td-none etsy-btn'>Buy on Etsy</a>
                </div>
            </div>
            <div className="d-flex etsy-main-width flex-column flex-md-row align-items-center mx-auto justify-content-around mt-5"data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
                <div className='etsy-width d-flex flex-column justify-content-center'>
                    <img className='etsy-img' src={patriotic} alt="bowties" />
                    <p className='etsy-p mt-2 etsy-p-h'>Patriotic and Anchor Dog Collars | Bow Ties | Bandanas | Red White and Blue | America</p>
                    <p className='etsy-p'>3$</p>
                    <a href='https://www.etsy.com/listing/849878530/patriotic-and-anchor-dog-collars-bow' className='td-none etsy-btn'>Buy on Etsy</a>
                </div>
                <div className='etsy-width d-flex flex-column justify-content-center mt04'data-aos="fade-in" data-aos-once="false" data-aos-delay="350" data-aos-duration="1000">
                    <img className='etsy-img' src={custom_bandana} alt="bowties" />
                    <p className='etsy-p mt-2 etsy-p-h'>Customize Dog Bandana- Name or Design- Multiple Color Options</p>
                    <p className='etsy-p'>9$</p>
                    <a href='https://www.etsy.com/listing/863777173/customize-dog-bandana-name-or-design' className='td-none etsy-btn'>Buy on Etsy</a>
                </div>
                <div className='etsy-width d-flex flex-column justify-content-center mt03'data-aos="fade-in" data-aos-once="false" data-aos-delay="550" data-aos-duration="1000">
                    <img className='etsy-img' src={starwars} alt="bowties" />
                    <p className='etsy-p mt-2 etsy-p-h'>Star Wars Personalize Dog Collars | Leashes | Bow Ties | Bandanas | Yoda, Chewy and much more!</p>
                    <p className='etsy-p'>7$</p>
                    <a href='https://www.etsy.com/listing/849879300/star-wars-personalize-dog-collars' className='td-none etsy-btn'>Buy on Etsy</a>
                </div>
            </div>
            <div className="d-flex etsy-main-width flex-column flex-md-row align-items-center mx-auto justify-content-around mt-5 pb-5"data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
                <div className='etsy-width d-flex flex-column justify-content-center'>
                    <img className='etsy-img' src={bowties} alt="bowties" />
                    <p className='etsy-p mt-2 etsy-p-h'>Bow Ties for Dogs- Star Wars, Holiday, Disney, Plaid | Slip on the Collar with Elastics- Cute Designs-Bows</p>
                    <p className='etsy-p'>5.5$</p>
                    <a href='https://www.etsy.com/listing/871014439/bow-ties-for-dogs-star-wars-holiday' className='td-none etsy-btn'>Buy on Etsy</a>
                </div>
                <div className='etsy-width d-flex flex-column justify-content-center mt04'data-aos="fade-in" data-aos-once="false" data-aos-delay="350" data-aos-duration="1000">
                    <img className='etsy-img' src={green_collar} alt="bowties" />
                    <p className='etsy-p mt-2 etsy-p-h'>Green or Grey Plaid- Personalize Dog Collar | Bow Tie | Bandana | Black/Green Clover- St. Patty’s Day</p>
                    <p className='etsy-p'>7$</p>
                    <a href='https://www.etsy.com/listing/863146433/green-or-grey-plaid-personalize-dog' className='td-none etsy-btn'>Buy on Etsy</a>
                </div>
                <div className='etsy-width d-flex flex-column justify-content-center mt03'data-aos="fade-in" data-aos-once="false" data-aos-delay="550" data-aos-duration="1000">
                    <img className='etsy-img' src={heart_collar} alt="bowties" />
                    <p className='etsy-p mt-2 etsy-p-h'>Pink | Heart Dog Collar-Bow Tie- Bandana - Plaid Design- Cute Custom Design - Love Your Dog</p>
                    <p className='etsy-p'>7$</p>
                    <a href='https://www.etsy.com/listing/863798467/pink-heart-dog-collar-bow-tie-bandana' className='td-none etsy-btn'>Buy on Etsy</a>
                </div>
            </div>
        </div>
     );
}
 
export default EtsyShop;