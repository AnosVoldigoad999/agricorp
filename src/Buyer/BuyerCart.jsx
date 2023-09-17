import {CgProfile} from 'react-icons/cg'
import {PiGearSixFill, PiShoppingCartFill} from 'react-icons/pi'
import {AiOutlineShop} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {IoIosExit} from 'react-icons/io'
import '../styles/Profile.css'

export default function Cart ({cartgoods, setCartGoods}){
    function handleDelete(id){
        setCartGoods(currentCartGoods=>{
            return currentCartGoods.filter(good=>good.id!=id)
        })
    }
    {/*return<>
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
</>*/}

return<>
  <div className='body'>
   <div className="sidenav">
        <ul>
        <Link to='/buyerprofile' className='links'><li><PiGearSixFill className='proficon'/>Settings</li></Link>
            <Link to='/cart' className='links'><li><PiShoppingCartFill className='proficon' />Cart</li></Link>
            <Link to='/' className='links'><li id='logout'><IoIosExit className='proficon' />Log out</li></Link>
        </ul>
    </div>
{cartgoods.length===0  &&   <div className='main'>
<AiOutlineShop className='bigcart' />
  <h2>No items yet!</h2>
</div>}
{
cartgoods.length>=1  && 
<div className='choicebody'>
<div className="listings">
{
  cartgoods.map(cartgood=>{
      return <Link className="link" >
      <div  className="listing" key={cartgood.id} >
      <img  src={cartgood.link} alt={cartgood.name} className='img' />
      <h3>{cartgood.name}</h3>
      <h3>price: {`#${cartgood.price}`}</h3>
      <h3>Quantity: {cartgood.quantity}</h3>
      <p className='prop'>Category: {cartgood.category}</p>
      <Link onClick={()=>handleDelete(cartgood.id)} className='link'>Delete</Link> 
      </div>
  </Link>
  })
}

</div>
</div>
}
</div>
</>
}