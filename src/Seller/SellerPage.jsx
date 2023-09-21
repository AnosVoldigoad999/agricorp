import { useEffect } from "react"
import {AiOutlineShop, AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-router-dom"
import {CgProfile} from 'react-icons/cg'
import '../styles/Seller.css'
export default function SellerHome ({
  goods,
  setGoods
}){
return<>
        <nav>
        <Link to="/sellerpage" className='logo'><h1>Agricorp</h1></Link>
          <div className='logindiv'>
          <Link to="/sellerpage" className='login'><h4>Home</h4></Link>
          <Link to="#" className='login'><h4>About Us</h4></Link>
          <Link to="#" className='login'><h4>Services</h4></Link>
          <Link to="#" className='login'><h4>Contact Us</h4></Link> 
          <Link to='/sellerprofile' className="profilelink"><CgProfile className="profile" /></Link>
          </div>
        </nav> 
        <div className='godmenu'>
       <input type="checkbox" id="menucheck" />
          <label htmlFor="menucheck" id="menubutton" ><AiOutlineMenu className="menuicon" /></label>
       <div className="menuitems">
          <ul>
          <Link to='/sellerprofile' className="link"><CgProfile className="profile" /></Link>
            <Link className="link" to='/sellerpage'><li>Home</li></Link>
            <Link className="link"><li>About us</li></Link>
            <Link className="link"><li>Services</li></Link>
            <Link className="link"><li>Contact us</li></Link>
          </ul>
        </div>
       </div>
        <div className="sellermain">
          <h1>My shop</h1>
          <br />
        {goods.length===0 &&   <div className='main'>
    <AiOutlineShop className='bigcart' />
        <h2>No items yet!</h2>
    </div>}
     {
      goods.length>=1 && <div className="mainlistings">
        {
          goods.map(good=>{
            return<Link className="link" >
            <div  className="listing" key={good.id} >
            <img  src={good.link} alt={good.name} />
            <h2>{good.name}</h2>
            <p className="prop">price: {`#${good.price}`}</p>
            <p className="prop">Quantity: {good.quantity}</p>
            <p className="prop">category:{good.category}</p>
            </div>
        </Link>
          })
        }
      </div>
     }
        </div>
    </>
  }