import '../css/index.css'
import logo from '../images/logo.PNG'
import 'bootstrap/dist/css/bootstrap.css'; 
import { useWindowSize } from 'usehooks-ts'
import menu from '../images/menu.png'
import { useState } from 'react';
import { push as Menu } from 'react-burger-menu'

const Header = () => {

    const { width, height } = useWindowSize()


    const [display, setDisplay] = useState(false);


    

    const handleMobileMenu = () => {
        if(display === true){
            setDisplay(false)
        }
        else{
            setDisplay(true)
        }
        console.log(display)
    }


    return ( 
        <div className="header-background d-flex justify-content-between align-items-center">
            <div className='d-flex align-items-center'>
                <img className='img-height' src={logo} alt="" /> 
                <p className='logo-name'>Remis Dog Training Institute</p>
            </div>

            { width >= 1150 ? 
            <div className='d-flex align-items-center'>
                <p className='nav-link'>Home</p>
                <p className='nav-link'>Training Services</p>
                <p className='nav-link'>Wedding Pet Care</p>
                <p className='nav-link'>Etsy Shop</p>
                <p className='nav-link'>Gallery</p>
                <p className='nav-link'>About</p>
                <p className='contact-me far-right' >Contact</p>
            </div>
             :
            <>
                <Menu right>
                    
                    <p className='nav-link-mobile'>Home</p>
                    <p className='nav-link-mobile'>Training Services</p>
                    <p className='nav-link-mobile'>Wedding Pet Care</p>
                    <p className='nav-link-mobile'>Etsy Shop</p>
                    <p className='nav-link-mobile'>Gallery</p>
                    <p className='nav-link-mobile'>About</p>
                    <p className='nav-link-mobile' >Contact</p>
                </Menu>
           </>
             }
        </div>
     );
}
 
export default Header;