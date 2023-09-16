import { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'
export default function AddItems ({productName, 
    linkaddress, 
    quantity, 
    price, 
    setProductName,
    setLink,
    setPrice,
    setQuantity,
    category,
    setCategory,
    firstClass,
    lastClass,
    emailClass,
    passClass,
    setFirstClass,
    setLastClass,
    setEmailClass,
    setPassClass,
    setConfirmClass,
    valid,
    setValid,
    goods,
    setGoods}){
        /*cat <classes></classes>*/

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
        /*cat classes*/
        useEffect(()=>{
            setFirstClass('')
            setLastClass('')
            setEmailClass('')
            setPassClass('')
            setConfirmClass('')
            setProductName('')
            setLink('')
            setQuantity('')
            setPrice('')
            setValid(false)
            setVegClass('cat')
            setCerClass('cat')
            setLegClass('cat')
            setSedClass('cat')
            setFruClass('cat')
            setNutClass('cat')
            setFibClass('cat')
            setBevClass('cat')
            setOtherClass('cat')
            setCategory('')
        }, [])

       

      const handleSubmit = (e) =>{
        e.preventDefault()
        if(productName.length===0){
          setFirstClass('red')
        } else{
            setFirstClass('')
        }

        if(price.length===0){
            setPassClass('red')
          } else{
              setPassClass('')
          }

          
        if(linkaddress.length===0){
            setLastClass('red')
          } else{
              setLastClass('')
          }

          
        if(quantity.length===0){
            setEmailClass('red')
          } else{
              setEmailClass('')
          }

          if(category===''){
            setCatClass('redcats')
          } else{
            setCatClass('cats')
          }

          if(productName.length!==0 && 
            price.length!==0 &&
            quantity.length!==0 &&
            linkaddress.length!==0 &&
            category!=='' ){
                console.log('done')
                setGoods(
                    currentgoods=>{
                        return [
                            ...currentgoods, {
                                name: productName,
                                id: Math.random(),
                                link: linkaddress,
                                price: price,
                                quantity: quantity,
                                category:category
                            }
                        ]
                    }
                )
                setValid(true)
                console.log(valid)
          }   
      }
/*catfuncs*/
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
      /*catfuncs*/
    return<>
        <nav>
        <Link to="/" className='logo'><h1>Agricorp</h1></Link>
          <div className='logindiv'>
          <Link to="/sellerpage" className='login'><h4>Home</h4></Link>
          <Link to="#" className='login'><h4>About Us</h4></Link>
          <Link to="#" className='login'><h4>Services</h4></Link>
          <Link to="#" className='login'><h4>Contact Us</h4></Link> 
          <Link to='/sellerprofile' className="profilelink"><CgProfile className="profile" /></Link>
          </div>
        </nav> 
    <main className='buyermain'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname" >Product Name</label>
        <input id='firstname' value={productName} onChange={e=>setProductName(e.target.value)} className={firstClass} />
        <label htmlFor="lastname">Image Link</label>
        <input id='lastname' value={linkaddress} onChange={e=>setLink(e.target.value)} className={lastClass} />
        <label htmlFor="email">Quantity(in kg or rice sack bags)</label>
        <input id='email' value={quantity} onChange={e=>setQuantity(e.target.value)} className={emailClass} />
        <label htmlFor="password" >Price(in Naira)</label>
        <input id='password'  value={price} onChange={e=>setPrice(e.target.value)} className={passClass} />
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
        {valid===false ?<button>Done</button>:productName.length===0?<button>Done</button>:linkaddress.length===0?<button>Done</button>:quantity.length===0?<button>Done</button>:price.length===0?<button>Done</button>:<Link to='/listings'><button>Done</button></Link>}
      </form>
    </main>
    </>
  }
  