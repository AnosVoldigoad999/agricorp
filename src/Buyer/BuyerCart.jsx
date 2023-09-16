import {CgProfile} from 'react-icons/cg'
import {PiGearSixFill, PiShoppingCartFill} from 'react-icons/pi'
import { Link } from 'react-router-dom'
import {IoIosExit} from 'react-icons/io'
import '../styles/Profile.css'

export default function Cart (){
    return<>
     <div className='body'>
   <div className="sidenav">
        <ul>
        <Link to='/buyerprofile' className='links'><li><PiGearSixFill className='proficon'/>Settings</li></Link>
            <Link to='/cart' className='links'><li><PiShoppingCartFill className='proficon' />Cart</li></Link>
            <Link to='/' className='links'><li id='logout'><IoIosExit className='proficon' />Log out</li></Link>
        </ul>
    </div>
    <div className='main'>
    <PiShoppingCartFill className='bigcart' />
        <h2>No items yet!</h2>
    </div>
    </div>
    </>
}