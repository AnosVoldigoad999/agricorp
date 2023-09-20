import {CgProfile} from 'react-icons/cg'
import {AiOutlineShop, AiOutlineMenu} from 'react-icons/ai'
import {PiGearSixFill, PiShoppingCartFill} from 'react-icons/pi'
import {IoIosExit} from 'react-icons/io'
import '../styles/Profile.css'
import { Link } from 'react-router-dom'
export default function SellerProfile(){
    return<>
   <div className='body'>
   <div className="sidenav">
        <ul>
           <Link to='/sellerprofile' className='links'><li><PiGearSixFill className='proficon'/>Settings</li></Link>
           <Link to='/listings' className='links'><li><AiOutlineShop className='proficon' />Listings</li></Link>
           <Link to='/sellerpage' className='links'><li><AiOutlineShop className='proficon' />My Home</li></Link>
            <Link to='/' className='links'><li id='logout'><IoIosExit className='proficon' />Log out</li></Link>
        </ul>
    </div>
    <div className='godmenu'>
       <input type="checkbox" id="menucheck" />
          <label htmlFor="menucheck" id="menubutton" ><AiOutlineMenu className="menuicon" /></label>
       <div className="menuitems">
       <ul>
           <Link to='/sellerprofile' className='link'><li><PiGearSixFill className='proficon'/>Settings</li></Link>
           <Link to='/listings' className='link'><li><AiOutlineShop className='proficon' />Listings</li></Link>
           <Link to='/sellerpage' className='link'><li><AiOutlineShop className='proficon' />My Home</li></Link>
            <Link to='/' className='link'><li id='logout'><IoIosExit className='proficon' />Log out</li></Link>
        </ul>
        </div>
       </div>
    <div className="main">
        <CgProfile className='pfp' />
        <h2 className='h2'>Seller Name</h2>
        <div className='grid'>
           <div className='details'>
            <h1 className='h1'>Seller Name</h1>
            <p>sellerername@gmail.com</p>
           </div>
           <div className='address'>
           <h1 className='h1'>Farm Address</h1>
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



