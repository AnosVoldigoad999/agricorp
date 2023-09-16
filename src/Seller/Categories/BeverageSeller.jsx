import {AiOutlineShop} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {PiGearSixFill, PiShoppingCartFill} from 'react-icons/pi'
export default function BeverageSeller(
    {
        goods,
        setGoods
    }
){
  const [beverages, setBeverages] = useState([])
  useEffect(()=>{
    for(let i=0; i<goods.length; i++){
      if(goods[i].category==='Beverages'){
        setBeverages(currentBeverages=>{
          return [...currentBeverages, goods[i]]
        })
      }
    }
  }, [])
    return<>
       <nav>
        <Link to="/" className='logo'><h1>Agricorp</h1></Link>
          <div className='logindiv'>
          <Link to="/buyerpage" className='login'><h4>Home</h4></Link>
          <Link to="#" className='login'><h4>About Us</h4></Link>
          <Link to="#" className='login'><h4>Services</h4></Link>
          <Link to="#" className='login'><h4>Contact Us</h4></Link> 
          <Link to='/buyerprofile' className="profilelink"><CgProfile className="profile" /></Link>
</div>
        </nav>
            <div className="sellermain">
            <h1>Seller Inventory</h1>
          <br />
          {beverages.length===0 &&   <div className='main'>
    <AiOutlineShop className='bigcart' />
        <h2>No items yet!</h2>
    </div>}
     {
      beverages.length>=1 && <div className="mainlistings">
        {
          goods.map(good=>{
           if(good.category==='Beverages'){
            return<Link className="link" >
            <div  className="listing" key={good.id} >
            <img  src={good.link} alt={good.name} />
            <h2>{good.name}</h2>
            <p className="prop">price: {`#${good.price}`}</p>
            <p className="prop">Quantity: {good.quantity}</p>
            <p className="prop">category:{good.category}</p>
            </div>
        </Link>
           }
          })
        }
      </div>
     }
        </div>
    </>
}