import {AiOutlineShop} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { Link } from 'react-router-dom'
import {PiGearSixFill, PiShoppingCartFill} from 'react-icons/pi'
import { useEffect, useState } from 'react'
export default function VegetableSeller(
    {
        goods,
        setGoods,
        cartGoods,
        setCartGoods
    }
){
  const [sellerfootercart, setsellerfootercart] = useState('sellerfooter')
  const [other, setOther] = useState([])
  useEffect(()=>{
    for(let i=0; i<goods.length; i++){
      if(goods[i].category==='Other'){
        setOther(currentOther=>{
          return [...currentOther, goods[i]]
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
            <div className="sellermain">
            <h1>Seller Inventory</h1>
            <br />
          <br />
        {other.length===0 &&   <div className='main'>
    <AiOutlineShop className='bigcart' />
        <h2>No items yet!</h2>
    </div>}
     {
    other.length>=1 && <div className="mainlistings">
        {
          goods.map(good=>{
          if(good.category==='Other'){
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