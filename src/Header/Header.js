import '../css/index.css'
import logo from '../images/logo.PNG'
import 'bootstrap/dist/css/bootstrap.css'; 

const Header = () => {
    return ( 
        <div className="header-background d-flex justify-content-between align-items-center">
            <div className='d-flex align-items-center'>
                <img className='img-height' src={logo} alt="" /> 
                <p className='logo-name'>Remis Dog Training Institute</p>
            </div>
            <div className='d-flex align-items-center'>
                <p className='nav-link'>Home</p>
                <p className='nav-link'>Training Services</p>
                <p className='nav-link'>Wedding Pet Care</p>
                <p className='nav-link'>Etsy Shop</p>
                <p className='nav-link'>Gallery</p>
                <p className='nav-link'>About</p>
                <p className='contact-me far-right' >Contact</p>
            </div>
        </div>
     );
}
 
export default Header;