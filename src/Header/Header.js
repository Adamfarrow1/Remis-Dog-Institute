import '../css/index.css'
import logo from '../images/logo.PNG'
import 'bootstrap/dist/css/bootstrap.css'; 
import { useWindowSize } from 'usehooks-ts'
import menu from '../images/menu.png'
import { useState } from 'react';
import { push as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import menubtn from '../images/menu.svg'

import { CNavbar,CNavbarToggler,CNavLink, CContainer, Cnavbarbrand, CCollapse, CNavbarBrand, CNavbarNav,CDropdown,CDropdownToggle,CDropdownMenu,CDropdownItem,CDropdownDivider  } from '@coreui/react';



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



    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
      setOpen(!isOpen)
    }
  
    const closeSideBar = () => {
        console.log("close")
      setOpen(false)
    }

    return ( 
        <div className="header-background d-flex justify-content-between align-items-center">
            <div className='d-flex align-items-center'>
                <img className='img-height' src={logo} alt="" /> 
                {width >= 600 ?
                <p className='logo-name'>Remis Dog Training Institute</p> :
                ''
                }
            </div>

            { width >= 1150 ? 
            <div className='d-flex align-items-center'>
                <Link className='nav-link' to={'/'}>Home</Link>


                
                <CDropdown className='nav-link '>
                    <CDropdownToggle color="secondary bg-none font-size">Training Services</CDropdownToggle>
                    <CDropdownMenu className='dropdown-bg'>
                        <Link to='puppy-basics' className='mx-auto td-none'><CDropdownItem component="button" className='dropdown-color'>Puppy Basics</CDropdownItem></Link>
                        <CDropdownItem component="button" className='dropdown-color'>Basic Obedience</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>

                





                {/* <p className='nav-link'>Training Services</p> */}
                <p className='nav-link'>Wedding Pet Care</p>
                <p className='nav-link'>Etsy Shop</p>
                <p className='nav-link'>Gallery</p>
                <p className='nav-link'>About</p>
                <p className='contact-me far-right' >Contact</p>
            </div>
             :
            <>
                <Menu right isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen} customBurgerIcon={ <img src= {menubtn} /> }>
                    
                   <Link className='nav-link-mobile td-none' onClick={closeSideBar} to={'/'}>Home</Link>

                    <CDropdown className='nav-link-mobile p-none'>
                    <CDropdownToggle color="secondary bg-none font-size-mobile p-none">Training Services</CDropdownToggle>
                    <CDropdownMenu>
                       <Link onClick={() => {closeSideBar()}} to='puppy-basics' className='mx-auto td-none'><CDropdownItem component="button">Puppy Basics</CDropdownItem></Link>
                        <CDropdownItem component="button">Basic Obedience</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>

                    {/* <p className='nav-link-mobile'>Training Services</p> */}
                    <p onClick={closeSideBar} className='nav-link-mobile'>Wedding Pet Care</p>
                    <p onClick={closeSideBar} className='nav-link-mobile'>Etsy Shop</p>
                    <p onClick={closeSideBar} className='nav-link-mobile'>Gallery</p>
                    <p onClick={closeSideBar} className='nav-link-mobile'>About</p>
                    <p onClick={closeSideBar} className='nav-link-mobile' >Contact</p>
                </Menu>
           </>
             }
        </div>
     );
}
 
export default Header;