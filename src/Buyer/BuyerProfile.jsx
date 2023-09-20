import {CgProfile} from 'react-icons/cg'
import {PiGearSixFill, PiShoppingCartFill} from 'react-icons/pi'
import {IoIosExit} from 'react-icons/io'
import '../styles/Profile.css'
import { Link } from 'react-router-dom'
export default function BuyerProfile(){
    return<>
   <div className='body'>
   <div className="sidenav">
        <ul>
           <Link to='/buyerprofile' className='links'><li><PiGearSixFill className='proficon'/>Settings</li></Link>
            <Link to='/cart' className='links'><li><PiShoppingCartFill className='proficon' />Cart</li></Link>
            <Link to='/' className='links'><li id='logout'><IoIosExit className='proficon' />Log out</li></Link>
        </ul>
    </div>
    <div className="main">
        <CgProfile className='pfp' />
        <h2 className='h2'>Buyer Name</h2>
        <div className='grid'>
           <div className='details'>
            <h1 className='h1'>Buyer Name</h1>
            <p>buyername@gmail.com</p>
           </div>
           <div className='address'>
           <h1 className='h1'>Delivery Address</h1>
            <p>99, a particular street, some bustop, some town, some city, some country</p>
            </div>
            <div className='balance'>
            <h1 className='h1'>Account balance</h1>
            <p>#100</p>
            </div>
            <div className='newsletter'>
            <h1 className='h1'>Subcribed newsletters</h1>
            <p>All of them</p>
            </div>
        </div>
    </div>
   </div>
    </>
}



