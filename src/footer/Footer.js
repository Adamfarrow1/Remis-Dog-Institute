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
                <img className='footer-img' src={tiktok} alt="" /> 
                <img className='footer-img-fb' src={facebook} alt="" /> 
                <img className='footer-img' src={instagram} alt="" /> 
                <img className='footer-img' src={etsy} alt="" /> 

            </div>
        </div>
     );
}
 
export default Footer;