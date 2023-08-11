import '../css/index.css'
import tiktok from '../images/tiktok.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import etsy from '../images/etsy.png'

const Footer = () => {
    return ( 
        <div className='footer'>
            <p className='text-center info-header pt-3'>Check out our socials!</p>
            <div className="d-flex align-items-center justify-content-center">
                <a href="https://www.tiktok.com/@remisdogtraining?lang=en"><img className='footer-img' src={tiktok} alt="" /> </a>
                <a href="https://www.facebook.com/profile.php?id=100092670841638"><img className='footer-img-fb' src={facebook} alt="" /> </a>
                <a href="https://www.instagram.com/remis_dogtraining/"><img className='footer-img' src={instagram} alt="" /> </a>
                <a href="https://www.etsy.com/shop/RemDogBoutique?ref=seller-platform-mcnav"><img className='footer-img' src={etsy} alt="" /> </a>

            </div>
        </div>
     );
}
 
export default Footer;