import {AiOutlineShop, AiOutlineMenu} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {PiGearSixFill, PiShoppingCartFill} from 'react-icons/pi'
export default function LegumeSeller(
    {
        goods,
        setGoods,
        cartGoods,
        setCartGoods
    }
){
  const [sellerfootercart, setsellerfootercart] = useState('sellerfooter')
  const [legumes, setLegumes] = useState([])
  useEffect(()=>{
    for(let i=0; i<goods.length; i++){
      if(goods[i].category==='Legumes'){
        setLegumes(currentLegumes=>{
          return [...currentLegumes, goods[i]]
        })
      }
    }
  }, [])
  function handleCart(good){
    setCartGoods(currentCartGoods=>{
      return [...currentCartGoods, {
        name:good.name,
        price:good.price,
        quantity:good.quantity,
        category:good.category,
        link:good.link,
        id:Math.random()
      }]
    })
  
    setsellerfootercart('sellerfootervisible')
setTimeout(()=>{
  setsellerfootercart('sellerfooter')
}, 3000)
  }
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
        <div className='godmenu'>
       <input type="checkbox" id="menucheck" />
          <label htmlFor="menucheck" id="menubutton" ><AiOutlineMenu className="menuicon" /></label>
       <div className="menuitems">
          <ul>
          <Link to='/buyerprofile' className="link"><CgProfile className="profile" /></Link>
            <Link className="link" to='/buyerpage'><li>Home</li></Link>
            <Link className="link"><li>About us</li></Link>
            <Link className="link"><li>Services</li></Link>
            <Link className="link"><li>Contact us</li></Link>
          </ul>
        </div>
       </div>
       <br/>
            <div className="sellermain">
            <h1>Seller Inventory</h1>
            <br />
          <br />
          {legumes.length===0 &&   <div className='main'>
    <AiOutlineShop className='bigcart' />
        <h2>No items yet!</h2>
    </div>}
     {
      legumes.length>=1 && <div className="mainlistings">
        {
          goods.map(good=>{
           if(good.category==='Legumes'){
            return<Link className="link" >
            <div  className="listing" key={good.id} >
            <img  src={good.link} alt={good.name} />
            <h2>{good.name}</h2>
            <p className="prop">price: {`#${good.price}`}</p>
            <p className="prop">Quantity: {good.quantity}</p>
            <p className="prop">category:{good.category}</p>
            <button onClick={()=>handleCart(good)}>Add to cart</button>
            </div>
        </Link>
           }
          })
        }
      </div>
     }
        </div>
        <div className={sellerfootercart}>
          <h5>Item added successfully!</h5>
        </div>
    </>
}