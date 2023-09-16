import {AiOutlineShop} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {PiGearSixFill, PiShoppingCartFill} from 'react-icons/pi'
import {BiArrowBack} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {IoIosExit} from 'react-icons/io'
import '../styles/Profile.css'
import { useState, useEffect } from 'react'


export default function SellerMarket ({
    goods,
    setGoods
}){
    useEffect(()=>{
        setIsEditing(false)
    }, [])
 
    /*edittins*/
   const [name, setName] = useState('')
   const [link, setLink] = useState('')
   const [quantity, setQuantity] = useState('')
   const [price, setPrice] = useState('')
   const [category, setCategory] = useState('')
   const [id, setId] = useState()
   const [updatedName, setUpdatedName] = useState('')
   useEffect(()=>{
    setUpdatedName(updatedName)
}, [updatedName])
   /*edittins*/
    const [isEditing, setIsEditing] = useState(false)
    function handleDelete (id){
        setGoods(currentgoods=>{
            return currentgoods.filter(good=> good.id !== id)
        }
        )
    }
    
    function handleEdit (good){
        console.log(good.name)
        setIsEditing(true)
        setName(good.name)
        setLink(good.link)
        setQuantity(good.quantity)
        setPrice(good.price)
        setId(good.id)
        console.log(id)
    }

    function handleUpdate(e){
        e.preventDefault()
       for(let i=0; i<goods.length; i++){
        if(goods[i].id===id){
            goods[i].name=name
            goods[i].price=price
            goods[i].quantity=quantity
            goods[i].category=category
            goods[i].link=link
        }
       }
       setIsEditing(false)
    }
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
    {isEditing?<EditItems name={name} 
    setIsEditing={setIsEditing}
    setName={setName}
    link={link}
    setLink={setLink}
    quantity={quantity}
    setQuantity={setQuantity}
    price={price}
    setPrice={setPrice}
    category={category}
    setCategory={setCategory}
    handleUpdate={handleUpdate} />:<Listings goods={goods} handleDelete={handleDelete} handleEdit={handleEdit} />}
    </div>
    </>
}


function EditItems ({name,
    setName,
    setIsEditing,
    link,
    setLink,
    quantity,
    setQuantity,
    price,
    setPrice,
    handleUpdate,
    setCategory}){
        /*catFuncs*/

function setCatveg(){
    console.log("veggie")
    setVegClass('chosen')
    setCerClass('cat')
    setLegClass('cat')
    setSedClass('cat')
    setFruClass('cat')
    setNutClass('cat')
    setFibClass('cat')
    setBevClass('cat')
    setOtherClass('cat')
    setCategory('Vegetables')
  }

  function setCatCer(){
    console.log("cereal")
    setCerClass('chosen')
    setLegClass('cat')
    setSedClass('cat')
    setFruClass('cat')
    setNutClass('cat')
    setFibClass('cat')
    setBevClass('cat')
    setOtherClass('cat')
    setVegClass('cat')
    setCategory('Cereal')
  }

  function setCatLeg(){
    console.log("leg")
    setLegClass('chosen')
    setCerClass('cat')
    setSedClass('cat')
    setFruClass('cat')
    setNutClass('cat')
    setFibClass('cat')
    setBevClass('cat')
    setOtherClass('cat')
    setVegClass('cat')
    setCategory('Legumes')
  }

  function setCatSeeds(){
    console.log("seed")
    setSedClass('chosen')
    setCerClass('cat')
    setLegClass('cat')
    setFruClass('cat')
    setNutClass('cat')
    setFibClass('cat')
    setBevClass('cat')
    setOtherClass('cat')
    setVegClass('cat')
    setCategory('Seeds')
  }

  function setCatFruits(){
    console.log("fruit")
    setFruClass('chosen')
    setCerClass('cat')
    setLegClass('cat')
    setSedClass('cat')
    setNutClass('cat')
    setFibClass('cat')
    setBevClass('cat')
    setOtherClass('cat')
    setVegClass('cat')
    setCategory('Fruits')
  }

  function setCatNuts(){
    console.log("nut")
    setNutClass('chosen')
    setCerClass('cat')
    setLegClass('cat')
    setSedClass('cat')
    setFruClass('cat')
    setFibClass('cat')
    setBevClass('cat')
    setOtherClass('cat')
    setVegClass('cat')
    setCategory('Nuts')
  }

  function setCatFibres(){
    console.log("fibre")
    setFibClass('chosen')
    setCerClass('cat')
    setLegClass('cat')
    setSedClass('cat')
    setFruClass('cat')
    setNutClass('cat')
    setBevClass('cat')
    setOtherClass('cat')
    setVegClass('cat')
    setCategory('Fibres')
  }

  function setCatBever(){
    console.log("beverage")
    setBevClass('chosen')
    setCerClass('cat')
    setLegClass('cat')
    setSedClass('cat')
    setFruClass('cat')
    setNutClass('cat')
    setFibClass('cat')
    setOtherClass('cat')
    setVegClass('cat')
    setCategory('Beverages')
  }

  function setCatOther(){
    console.log("other")
    setOtherClass('chosen')
    setCerClass('cat')
    setLegClass('cat')
    setSedClass('cat')
    setFruClass('cat')
    setNutClass('cat')
    setFibClass('cat')
    setBevClass('cat')
    setVegClass('cat')
    setCategory('Other')
  }
/*catFuncs*/

           /*cats*/
   const [vegClass, setVegClass] = useState('cat')
   const [cerClass, setCerClass] = useState('cat')
   const [legClass, setLegClass] = useState('cat')
   const [sedClass, setSedClass] = useState('cat')
   const [fruClass, setFruClass] = useState('cat')
   const [nutClass, setNutClass] = useState('cat')
   const [fibClass, setFibClass] = useState('cat')
   const [bevClass, setBevClass] = useState('cat')
   const [otherClass, setOtherClass] = useState('cat')
   const [catClass, setCatClass] = useState('cats')
/*cats*/
    return<>
   
    <main className='buyermain'>
    <BiArrowBack className='back' onClick={()=>{setIsEditing(false)}} />
      <form>
        <label htmlFor="firstname" >Product Name</label>
        <input id='firstname' value={name} onChange={e=>setName(e.target.value)} />
        <label htmlFor="lastname" >Image Link</label>
        <input id='lastname' value={link} onChange={e=>setLink(e.target.value)} />
        <label htmlFor="email">Quantity(in kg or rice sack bags)</label>
        <input id='email' value={quantity} onChange={e=>setQuantity(e.target.value)}  />
        <label htmlFor="password" >Price(in Naira)</label>
        <input id='password' value={price} onChange={e=>setPrice(e.target.value)}  />
        <label htmlFor="confirm">Category(pick one)</label>
        <div className={catClass}>
       <div className='cats1'>
        <span className={vegClass} onClick={setCatveg} >Vegetables</span>
        <span className={cerClass} onClick={setCatCer}>Cereal</span>
        <span className={legClass} onClick={setCatLeg}>Legumes</span>
        <span className={sedClass} onClick={setCatSeeds}>Seeds</span>
        <span className={fruClass} onClick={setCatFruits}>Fruits</span>
        </div>
        <div className="cats2">
        <span className={nutClass} onClick={setCatNuts}>Nuts</span>
        <span className={fibClass} onClick={setCatFibres}>Fibres</span>
        <span className={bevClass} onClick={setCatBever}>Beverages</span>
        <span className={otherClass} onClick={setCatOther}>Other</span>
        </div>
       </div>
        <button onClick={handleUpdate}>Done</button>      </form>
    </main>
    </>
}

function Listings ({goods, handleDelete, handleEdit}){
    return<>
      {goods.length===0  &&   <div className='main'>
    <AiOutlineShop className='bigcart' />
        <h2>No items yet!</h2>
        <Link to='/additems'>Add items</Link>
    </div>}
   {
    goods.length>=1  && 
    <div className='choicebody'>
    <div className="listings">
    {
        goods.map(good=>{
            return <Link className="link" >
            <div  className="listing" key={good.id} >
            <img  src={good.link} alt={good.name} className='img' />
            <h3>{good.name}</h3>
            <h3>price: {`#${good.price}`}</h3>
            <h3>Quantity: {good.quantity}</h3>
            <p className='prop'>Category: {good.category}</p>
            <Link onClick={()=>handleDelete(good.id)} className='link'>Delete</Link> 
            <Link  className='link2' onClick={()=>handleEdit(good)}>Edit</Link>
            </div>
        </Link>
        })
    }
    
</div>
<Link to='/additems'>Add items</Link>
</div>
   }
    </>
}