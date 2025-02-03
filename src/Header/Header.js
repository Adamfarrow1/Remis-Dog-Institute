import '../css/index.css'
import logo from '../images/logo.PNG'
import 'bootstrap/dist/css/bootstrap.css'; 
import { useWindowSize } from 'usehooks-ts'
import { useState } from 'react';
import { push as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import menubtn from '../images/menu.svg'

import { CDropdown,CDropdownToggle,CDropdownMenu,CDropdownItem  } from '@coreui/react';
import WeddingCare from '../WeddingCare/WeddingCare';



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

    const style1 = 'd-flex justify-content-between align-items-center'

    return ( 
        <div className={width < 1440 ? style1 : style1 + " header-background"}>
            <div className='d-flex align-items-center'>
                <Link to={'/'} className='hover'><img className='img-height' src={logo} alt="" /> </Link>
                {width >= 600 ?
                <Link to={'/'} className='hover td-none'><p className='logo-name'>Remis Dog Training Institute</p></Link> :
                ''
                }
            </div>

            { width >= 1440 ? 
            <div className='d-flex align-items-center'>
                <Link className='nav-link' to={'/'}>Home</Link>


                
                <CDropdown className='nav-link '>
                    <CDropdownToggle color="secondary bg-none font-size p-0">Training Services</CDropdownToggle>
                    <CDropdownMenu className='dropdown-bg'>
                        <Link to='/puppy-basics' className='mx-auto td-none'><CDropdownItem component="button" className='dropdown-color'>Puppy Basics</CDropdownItem></Link>
                        <Link to='/basic-obedience' className='mx-auto td-none'><CDropdownItem component="button" className='dropdown-color'>Basic Obedience</CDropdownItem></Link>
                    </CDropdownMenu>
                </CDropdown>

                





                {/* <p className='nav-link'>Training Services</p> */}
                <Link to='/weddingcare' className='td-none'><p className='nav-link td-none'>Wedding Pet Care</p></Link>
                <Link to='/production' className='td-none'><p className='nav-link td-none'>Production</p></Link>
                <Link to='/etsyshop' className='td-none'><p className='nav-link'>Etsy Shop</p></Link>
                <Link to='/gallery' className='td-none'><p className='nav-link'>Gallery</p></Link>
                
                

                <CDropdown className='nav-link '>
                    <CDropdownToggle color="secondary bg-none font-size p-0">About</CDropdownToggle>
                    <CDropdownMenu className='dropdown-bg'>
                        <Link to='/owners-story' className='mx-auto td-none'><CDropdownItem component="button" className='dropdown-color'>My Story</CDropdownItem></Link>
                        <Link to='/remis-story' className='mx-auto td-none'><CDropdownItem component="button" className='dropdown-color'>Remi's Story</CDropdownItem></Link>
                    </CDropdownMenu>
                </CDropdown>


            <Link to='/what-we-offer' className='td-none'> <p className='nav-link' >What We Offer</p></Link>
               <Link to='/contact' className='td-none'> <p className='contact-me far-right' >Contact</p></Link>
            </div>
             :
            <>
                <Menu right isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen} customBurgerIcon={ <img src= {menubtn} /> }>
                    
                   <Link className='nav-link-mobile td-none' onClick={closeSideBar} to={'/'}>Home</Link>

                    <CDropdown className='nav-link-mobile p-none'>
                    <CDropdownToggle color="secondary bg-none font-size-mobile p-none">Training Services</CDropdownToggle>
                    <CDropdownMenu>
                       <Link onClick={() => {closeSideBar()}} to='/puppy-basics' className='mx-auto td-none'><CDropdownItem component="button">Puppy Basics</CDropdownItem></Link>
                       <Link onClick={() => {closeSideBar()}} to='/basic-obedience' className='mx-auto td-none'><CDropdownItem component="button">Basic Obedience</CDropdownItem></Link>
                        {/* <CDropdownItem component="button">Basic Obedience</CDropdownItem> */}
                    </CDropdownMenu>
                </CDropdown>

                    {/* <p className='nav-link-mobile'>Training Services</p> */}
                    <Link to='/weddingcare' className='td-none'><p onClick={closeSideBar} className='nav-link-mobile td-none'>Wedding Pet Care</p></Link>
                    <Link to='/production' className='td-none'><p onClick={closeSideBar} className='nav-link-mobile td-none'>Production</p></Link>
                    <Link to='/etsyshop' className='td-none'><p onClick={closeSideBar} className='nav-link-mobile'>Etsy Shop</p></Link>
                    <Link to='/gallery' className='td-none'><p onClick={closeSideBar} className='nav-link-mobile'>Gallery</p></Link>
                    
                    
                    <CDropdown className='nav-link-mobile p-none'>
                    <CDropdownToggle color="secondary bg-none font-size-mobile p-none">About</CDropdownToggle>
                    <CDropdownMenu>
                       <Link onClick={() => {closeSideBar()}} to='/owners-story' className='mx-auto td-none'><CDropdownItem component="button">Owner</CDropdownItem></Link>
                       <Link onClick={() => {closeSideBar()}} to='/remis-story' className='mx-auto td-none'><CDropdownItem component="button">Remi's Story</CDropdownItem></Link>
                        {/* <CDropdownItem component="button">Basic Obedience</CDropdownItem> */}
                    </CDropdownMenu>
                    </CDropdown>


                    <Link to='/what-we-offer' className='td-none'><p onClick={closeSideBar} className='nav-link-mobile'>What We Offer</p></Link>
                    <Link to='/contact' className='td-none'> <p onClick={closeSideBar} className='nav-link-mobile' >Contact</p></Link>
                </Menu>
           </>
             }
        </div>
     );
}
 
export default Header;